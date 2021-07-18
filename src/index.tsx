import { chatAppFactory } from './apps/chat'
import { Core } from './core/Core'

async function start() {
  const core = await Core.create([chatAppFactory])

  core.start()
}

start()
