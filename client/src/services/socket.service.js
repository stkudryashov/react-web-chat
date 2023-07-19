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

    const newChat = [...chat, data]

    setOnline(data.online)
    setChat(newChat)

    StorageService.setLocalItem('chat', newChat)
  }

  static onClose() {
    console.log('connection lost')
  }

  static onError() {
    console.log('server not found')
  }
}
