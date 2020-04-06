import React, {useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import Fade from 'react-reveal/Fade'
import useSound from 'use-sound'
import boopSfx from '../assets/boop.mp3'
import collapseSfx from '../assets/collapse.mp3'
import vinylSfx from '../assets/vinyl.mp3'
import hoverSfx from '../assets/hover.mp3'

const Navbar = ({handleClick, isLoggedIn}) => {
  const [play] = useSound(boopSfx, {volume: 0.05})
  const [playHover] = useSound(hoverSfx, {volume: 0.05})
  const [playCollapse] = useSound(collapseSfx, {volume: 0.03})
  const [playVinyl, {stop}] = useSound(vinylSfx, {volume: 0.06})

  const [isHovering, setIsHovering] = React.useState(false)

  return (
    // <!--Navbar-->
    <Fade top>
      <nav className="navbar navbar-primary bg-light mb-30">
        {/* <!-- Navbar brand --> */}
        <a
          className="navbar-brand mx-auto"
          href="/"
          onMouseEnter={() => {
            setIsHovering(true)
            playVinyl()
          }}
          onMouseLeave={() => {
            setIsHovering(false)
            stop()
          }}
        >
          <h1 onClick={play} isHovering={isHovering} style={{color: '#5d5b6a'}}>
            opus
          </h1>
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
          onMouseEnter={playHover}
          onClick={playCollapse}
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
              <div className="d-flex justify-content-center">
                {/* The navbar will show these links after you log in */}
                <Link onClick={play} to="/home">
                  Home
                </Link>
                <Link
                  onClick={() => {
                    handleClick()
                    play()
                  }}
                  to="/home"
                >
                  Logout
                </Link>
                <Link onClick={play} to="/about">
                  About
                </Link>
                <Link onClick={play} to="/">
                  Free Play
                </Link>
                <Link onClick={play} to="/lesson">
                  Lessons
                </Link>
                <Link onClick={play} to="/exercise">
                  Exercises
                </Link>
                <Link onClick={play} to="/songs">
                  Song Book
                </Link>
                <Link onClick={play} to="/contact-us">
                  Contact Us
                </Link>
              </div>
            ) : (
              <div className="d-flex justify-content-center">
                {/* The navbar will show these links before you log in */}
                <Link onClick={play} to="/login">
                  Login
                </Link>
                <Link onClick={play} to="/signup">
                  Signup
                </Link>
                <Link onClick={play} to="/about">
                  About
                </Link>
                {/* <Link to="/">Free Play</Link> */}
                <Link onClick={play} to="/lesson">
                  Lessons
                </Link>
                <Link onClick={play} to="/exercise">
                  Exercises
                </Link>
                <Link onClick={play} to="/songs">
                  Song Book
                </Link>
                <Link onClick={play} to="/contact-us">
                  Contact Us
                </Link>
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
