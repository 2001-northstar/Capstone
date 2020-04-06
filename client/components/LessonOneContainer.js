import React from 'react'
import {useDispatch, useSelector} from 'react-redux' // import redux hooks
import {Link} from 'react-router-dom'
import {setStep} from '../store'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import useSound from 'use-sound'
import boopSfx from '../assets/boop.mp3'
import forwardSfx from '../assets/forward.mp3'
import backSfx from '../assets/back.mp3'
import buttonSfx from '../assets/button.mp3'

const LessonOneContainer = props => {
  const [play] = useSound(boopSfx, {volume: 0.05})
  const [playButton] = useSound(buttonSfx, {volume: 0.05})
  const [playForward] = useSound(forwardSfx, {volume: 0.05})
  const [playBack] = useSound(backSfx, {volume: 0.05})

  // declare dispatch function - always when you need dispatch
  const dispatch = useDispatch()

  // just like map state to props but assigning to a const variable
  const {step} = useSelector(state => ({
    step: state.step
  }))

  let steps = props.lesson.steps || []

  if (steps.length) {
    steps = steps.map((st, idx) => ({
      text: st.content,
      noteLabels: st.noteLabels,
      highlightedNotes: st.highlightedNotes,
      index: idx
    }))
  }

  const handleNext = () => {
    dispatch(setStep(steps[++step.index]))
  }

  const handlePrevious = () => {
    dispatch(setStep(steps[--step.index]))
  }

  const previous = step.index === 0
  const next = step.index === steps.length - 1

  let newText = step.text.split('\n').map((item, i) => <p key={i}>{item}</p>)

  return (
    <Fade top>
      <div id="lesson-one-container">
        <h1 className="text-center" style={{color: '#5d5b6a'}}>
          {props.lesson.name}
        </h1>

        <LessonText>
          {newText}
          {next ? (
            <Link
              to="/exercise"
              className="m-1 btn btn-outline-primary"
              onClick={playButton}
            >
              Click here to test your skills!
            </Link>
          ) : null}
        </LessonText>
        <div className="d-flex justify-content-around">
          <button
            type="button"
            onClick={() => {
              handlePrevious()
              playBack()
            }}
            className={`btn ${previous ? 'disabled' : null}`}
          >
            <img
              src="https://image.flaticon.com/icons/svg/126/126492.svg"
              width="75px"
              height="75px"
            />
          </button>
          <button
            type="button"
            onClick={() => {
              handleNext()
              playForward()
            }}
            className={`btn ${next ? 'disabled' : null}`}
          >
            <img
              src="https://image.flaticon.com/icons/svg/126/126490.svg"
              width="75px"
              height="75px"
            />
          </button>
        </div>
        <br />
      </div>
    </Fade>
  )
}

export default LessonOneContainer

const LessonText = styled.div`
  padding: 10px;
  height: 100%;
`
