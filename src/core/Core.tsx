import ReactDOM from 'react-dom'
import React from 'react'
import _ from 'lodash'
import { App, AppFactory } from './App'
import { reportWebVitals } from './reportWebVitals'

export class Core {
  static async create(appFactories: AppFactory[]) {
    const [lazyFactories, factories] = _.chain(appFactories).sortBy('id').partition('lazy').value()

    const apps = await Promise.all(factories.map(f => f.load()))
    return new Core(apps, lazyFactories)
  }

  private apps: App[]
  private factories: AppFactory[]

  protected constructor(apps: App[], factories: AppFactory[]) {
    this.apps = apps
    this.factories = factories
  }

  start() {
    // TODO: add routing
    const view = _.first(this.apps)?.getView() ?? null

    ReactDOM.render(<React.StrictMode>{view}</React.StrictMode>, document.getElementById('root'))

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals()
  }
}
