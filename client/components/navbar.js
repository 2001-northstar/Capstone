import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import Fade from 'react-reveal/Fade'

const Navbar = ({handleClick, isLoggedIn}) => {
  return (
    // <!--Navbar-->
    <Fade top>
      <nav className="navbar navbar-primary bg-light">
        {/* <!-- Navbar brand --> */}
        <a className="navbar-brand mx-auto" href="/">
          <h1 style={{color: '#5d5b6a'}}>OPUS</h1>
        </a>

        {/* <!-- Collapse button --> */}
        <button
          className="navbar-toggler first-button"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent20"
          aria-controls="navbarSupportedContent20"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{outline: 'none', color: '#5d5b6a'}}
        >
          <div className="animated-icon1">
            <span />
            <span />
            <span />
          </div>
        </button>

        {/* <!-- Collapsible content --> */}
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent20"
          border-color="none"
        >
          {/* <!-- Links --> */}
          <nav>
            {isLoggedIn ? (
              <div>
                {/* The navbar will show these links after you log in */}
                <Link to="/home">👤</Link>
                <a href="#" onClick={handleClick}>
                  Logout
                </a>
                <Link to="/about">About</Link>
                <Link to="/">Free Play</Link>
                <Link to="/lesson">Lessons</Link>
                <Link to="/exercise">Exercises</Link>
                <Link to="/songs">Song Book</Link>
                <Link to="/contact-us">Contact Us</Link>
              </div>
            ) : (
              <div className="d-flex justify-content-center">
                {/* The navbar will show these links before you log in */}
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/about">About</Link>
                {/* <Link to="/">Free Play</Link> */}
                <Link to="/lesson">Lessons</Link>
                <Link to="/exercise">Exercises</Link>
                <Link to="/songs">Song Book</Link>
                <Link to="/contact-us">Contact Us</Link>
              </div>
            )}
          </nav>
          {/* <!-- Links --> */}
        </div>
        {/* <!-- Collapsible content --> */}
      </nav>
    </Fade>
    // <!--/.Navbar-->
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

$(document).ready(function() {
  $('.first-button').on('click', function() {
    $('.animated-icon1').toggleClass('open')
  })

  // $('.first-button').mouseenter(function() {
  //   $('.animated-icon1').toggleClass('open')
  // })
  // $('.first-button').mouseleave(function() {
  //   $('.animated-icon1').removeClass('open')
  // })

  // $('.second-button').on('click', function() {
  //   $('.animated-icon2').toggleClass('open')
  // })

  // $('.third-button').on('click', function() {
  //   $('.animated-icon3').toggleClass('open')
  // })
})
