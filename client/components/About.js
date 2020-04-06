import React from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import useSound from 'use-sound'
import buttonSfx from '../assets/button.mp3'
import hoverSfx from '../assets/hover.mp3'

const About = () => {
  const [playButton] = useSound(buttonSfx, {volume: 0.05})
  const [playHover] = useSound(hoverSfx, {volume: 0.05})

  return (
    <>
      <Fade top>
        <DefaultDiv>
          <div className="container-fluid mb-4">
            <div className="row align-items-center">
              <div className="col display-3 text-center">
                Introducing <strong>Opus</strong>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-8">
                <div className="card-body">
                  <h3 classnewName="card-text text-justify">
                    We believe that anyone can learn the basics of music theory
                    and now you don't even need to leave the comfort of your
                    home...as long as you have internet, that is. No matter what
                    type of music you enjoy, from nursery rhymes to heavy metal,
                    you can master the skill and play your favorite tunes in no
                    time! You’ll start with the basics and work your way to more
                    complicated chords, and before you know it, you’ll be
                    playing full songs!
                  </h3>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src="https://media2.s-nbcnews.com/j/MSNBC/Components/Slideshows/_production/ss-130820-awkward-school/ss-awkward-school-piano-man.today-ss-slide-desktop.jpg"
                  className="card-img"
                />
              </div>
            </div>
          </div>
        </DefaultDiv>
      </Fade>
      <DefaultDiv id="founders">
        <Fade bottom>
          <div className="container my-2">
            <h4 className="text-center display-4 my-4">
              Meet the minds behind the keyboard
            </h4>
          </div>
          <div className="row row-cols-1 row-cols-md-4">
            <div className="col mb-4">
              <div className="card">
                <a href="https://www.linkedin.com/in/drewlu/">
                  <img
                    src="/assets/drew.png"
                    className="card-img-top"
                    onClick={playButton}
                    onMouseEnter={playHover}
                  />
                </a>
                <div className="card-body text-center">
                  <h5 className="card-title text-center">DREW</h5>
                  <p className="card-text text-center">words words words</p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <a href="https://www.linkedin.com/in/kylie-hess/">
                  <img
                    src="/assets/kylie.png"
                    className="card-img-top"
                    onClick={playButton}
                    onMouseEnter={playHover}
                  />
                </a>
                <div className="card-body text-center">
                  <h5 className="card-title text-center">KYLIE</h5>
                  <p className="card-text text-center">words words words</p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <a href="https://www.linkedin.com/in/joshua-connor-7a4044172/">
                  <img
                    src="/assets/josh.jpg"
                    className="card-img-top"
                    onClick={playButton}
                    onMouseEnter={playHover}
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title text-center">JOSH</h5>
                  <p className="card-text text-center">words words words</p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <a href="https://www.linkedin.com/in/jennmez/">
                  <img
                    src="/assets/jenn.jpg"
                    className="card-img-top"
                    onClick={playButton}
                    onMouseEnter={playHover}
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title text-center">JENN</h5>
                  <p className="card-text text-center">
                    Before O P U S, I didn't know what an octave was. Now I can
                    play Mary Had A Little Lamb with my eyes closed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </DefaultDiv>
    </>
  )
}

export default About

const DefaultDiv = styled.div`
  margin: 20px;
`
