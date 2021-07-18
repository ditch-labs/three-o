import { App } from '../../core/App'
import { ChatView } from './components/ChatView'

const appId: string = 'chat-app'

export class ChatApp implements App {
  id = appId

  getView() {
    return <ChatView />
  }
}

export const chatAppFactory = {
  id: appId,
  lazy: false,
  load: async () => new ChatApp(),
}
