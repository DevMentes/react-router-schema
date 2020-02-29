import React, { Component } from 'react'

import RouterSchema from 'react-router-schema'
import Example from './Example'

export default class App extends Component {
  render () {
    return (
      <div>
        <RouterSchema routes={[{path: '/', component: Example}]} />
      </div>
    )
  }
}
