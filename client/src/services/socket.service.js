import { v4 as uuidv4 } from 'uuid'

import { StorageService } from './storage.service'

export class SocketService {
  constructor() {}

  static onOpen({ setChat }) {
    console.log('connected to server')

    if (!StorageService.getLocalItem('uuid')) {
      StorageService.setLocalItem('uuid', uuidv4())
    }

    if (StorageService.getLocalItem('chat')) {
      setChat(StorageService.getLocalItem('chat'))
    }
  }

  static onMessage(event, { chat, setChat, setOnline }) {
    const data = JSON.parse(event.data)
    console.log(data)

    switch (data.type) {
      case 'message': {
        const newChat = [...chat, data]
        setChat(newChat)

        StorageService.setLocalItem('chat', newChat)
        break
      }
      case 'online': {
        setOnline(data.count)
        break
      }
    }
  }

  static onClose() {
    console.log('connection lost')
  }

  static onError() {
    console.log('server not found')
  }
}
