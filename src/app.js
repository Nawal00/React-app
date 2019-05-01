import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.sass'

import RoverIndex from '../components/RoverIndex'


class App extends React.Component {
  render() {

    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/" component={RoverIndex} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
