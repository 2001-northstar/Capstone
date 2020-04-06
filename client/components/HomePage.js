import React from 'react'
import Keyboard from './Keyboard'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <div id="body">
        <Fade top>
          <div className="jumbotron jumbotron-fluid mt-3">
            <div className="container">
              <h1 className="display-3 text-center" style={{color: '#4059AD'}}>
                <strong>Learn Music Anywhere</strong>
              </h1>
              <p className="lead text-center">
                Go on, press a key. You know you want to.
              </p>
            </div>
          </div>
        </Fade>
        <div className="keyboard">
          <Keyboard highlightedNotes={[]} />
        </div>
        <Fade top>
          <div className="container my-2">
            <h3
              className="text-center display-4 my-4"
              style={{color: '#6B9AC4'}}
            >
              We get it. Instruments are expensive & private lessons add up.
            </h3>
            <p className="lead text-center">
              Our mission is make music accessible to all through an internet
              connection & a humble keyboard.
            </p>
          </div>
        </Fade>
        <DefaultDiv id="learning">
          <Fade bottom>
            <div className="row row-cols-1 row-cols-md-3">
              <div className="col mb-4">
                <div className="card">
                  <Link to="/lesson">
                    <img src="/assets/sheets1.svg" className="card-img-top" />
                  </Link>
                  <div className="card-body text-center">
                    <h5 className="card-title text-center">Lessons</h5>
                    <p className="card-text text-center">
                      Begin with the basics and learn musical theory.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card">
                  <Link to="/songs">
                    <img src="/assets/piano.svg" className="card-img-top" />
                  </Link>
                  <div className="card-body text-center">
                    <h5 className="card-title text-center">Songs</h5>
                    <p className="card-text text-center">
                      Browse our library of songs and put your skills to the
                      test!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card">
                  <Link to="/signup">
                    <img src="/assets/notes1.svg" className="card-img-top" />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title text-center">Become A Pro</h5>
                    <p className="card-text text-center">
                      Unlock more skills and reap the rewards by signing up for
                      an account!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </DefaultDiv>
        <DefaultDiv>
          <Fade>
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col mb-4">
                <div className="card">
                  <div className="card-body text-center">
                    <h5 className="card-title text-center">About OPUS</h5>
                    <p className="card-text text-center">
                      Bringing entertaining, affordable and accessible music
                      lessons to all.
                    </p>
                    <a href="/about" className="m-1 btn btn-outline-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card">
                  <div className="card-body text-center">
                    <h5 className="card-title text-center">Contact Us</h5>
                    <p className="card-text text-center">
                      Maybe you want to make beautiful tunes together. Maybe you
                      found a bug.
                    </p>
                    <a
                      href="/contact-us"
                      className="m-1 btn btn-outline-primary"
                    >
                      Drop us a note
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </DefaultDiv>
      </div>
    </>
  )
}

export default HomePage

const DefaultDiv = styled.div`
  margin: 20px;
`
