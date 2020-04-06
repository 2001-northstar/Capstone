import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import Fade from 'react-reveal/Fade'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <Fade>
      <div className="container">
        <form className="form-inline" onSubmit={handleSubmit} name={name}>
          <div className="form-row align-items-center">
            <div className="form-group mb-2">
              <label htmlFor="email">
                <small>Email</small>
              </label>
              <input name="email" className="form-control" type="text" />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="password">
                <small>Password</small>
              </label>
              <input name="password" className="form-control" type="password" />
            </div>
            <div>
              <button type="submit" className="btn btn-outline-secondary">
                {displayName}
              </button>
            </div>
            {error && error.response && <div> {error.response.data} </div>}
          </div>
        </form>
        <a href="/auth/google">{displayName} with Google</a>
      </div>
    </Fade>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
