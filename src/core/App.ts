import { ReactElement } from 'react'

export interface App {
  /**
   * Unique app identifier
   */
  id: string

  getView(): ReactElement
}

// TODO: add app manifest to the factory??
export interface AppFactory {
  /**
   * Unique app identifier
   */
  id: string
  /**
   * Determines whether app should be loaded during bootstrap phase
   */
  lazy: boolean
  load: () => Promise<App>
}
