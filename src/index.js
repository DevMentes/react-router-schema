import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import SmartRoute from './SmartRoute'

const mapGuards = (guardsToCheck = [], availableGuards) => {
  return guardsToCheck.map(guardToCheck => {
    const executable = availableGuards[guardToCheck.name]
    if (!executable) {
      throw new Error(`Guard named ${guardToCheck.name} was not found.`)
    }
    return { executable: executable, ...guardToCheck }
  })
}

const RouterSchema = ({routes, guards}) => {
  return (
    <Router>
      <Switch>
        {routes.map(route => {
          return (
            <SmartRoute
              exact={route.exact}
              key={route.path}
              path={route.path}
              guards={mapGuards(route.guards, guards)}
              component={route.component}
            />
          )
        })}
      </Switch>
    </Router>
  )
}

RouterSchema.propTypes = {
  routes: PropTypes.array,
  guards: PropTypes.array
}

RouterSchema.defaultProps = {
  routes: [],
  guards: []
}

export default RouterSchema
