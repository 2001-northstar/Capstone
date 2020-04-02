import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => {
  return (
    <nav className="navbar navbar-primary bg-light sticky-top">
      <h1>OPUS</h1>
      <nav>
        {isLoggedIn ? (
          <div className="nav navbar-nav navbar-right">
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
            <Link to="/">Free Play</Link>
            <Link to="/lesson">Lessons</Link>
            <Link to="/songs">Song Book</Link>
            <Link to="/useranalytics">Analytics</Link>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/">Free Play</Link>
            <Link to="/lesson">Lessons</Link>
            <Link to="/songs">Song Book</Link>
          </div>
        )}
      </nav>
      <hr />
    </nav>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
