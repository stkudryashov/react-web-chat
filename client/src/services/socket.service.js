import { StorageService } from './storage.service'

export class SocketService {
  constructor() {}

  static onOpen({ setChat }) {
    console.log('connected to server')

    if (StorageService.getLocalItem('chat')) {
      setChat(StorageService.getLocalItem('chat'))
    }
  }

  static onMessage(event, { chat, setChat, setOnline }) {
    const data = JSON.parse(event.data)

    if (data.type !== 'writing') {
      console.log(data)
    }

    switch (data.type) {
      case 'message': {
        const newChat = [...chat, data]
        setChat(newChat)

        StorageService.setLocalItem('chat', newChat)
        break
      }
      case 'online': {
        setOnline(data.users)
        break
      }
      case 'writing': {
        const showWriting = () => {
          let timeoutId

          return () => {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {}, 1000)
          }
        }

        showWriting()()
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
