import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

const validateGuards = (guards = []) => {
  return guards.find(guard => !guard.executable())
}

const SmartRoute = ({ component: Component, guards = [], layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const rejectedGuard = validateGuards(guards)
      if (rejectedGuard) {
        return <Redirect to={rejectedGuard.rejectTo} />
      } else {
        if (!Layout) {
          return <Component {...props} />
        }
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }
    }}
  />
)

SmartRoute.propTypes = {
  component: PropTypes.any,
  guards: PropTypes.array,
  layout: PropTypes.any
}

export default SmartRoute
