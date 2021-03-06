import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'
import routes from '~/routes'

import 'antd/dist/antd.css'
import './styles/main.css'

class App extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          {routes.map((route, key) => (
            <Route
              key={key}
              {...route}
            />
          ))}
          <Redirect from="*" to="/"/>
        </Switch>
      </div>
    )
  }
}

export default App
