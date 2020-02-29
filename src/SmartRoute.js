import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

const validateGuards = (guards = []) => {
  return guards.find(guard => !guard.executable())
}

const SmartRoute = ({ component: Component, guards = [], ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const rejectedGuard = validateGuards(guards)
      if (rejectedGuard) {
        return <Redirect to={rejectedGuard.rejectTo} />
      } else {
        return <Component {...props} />
      }
    }}
  />
)

SmartRoute.propTypes = {
  component: PropTypes.any,
  guards: PropTypes.array
}

export default SmartRoute
