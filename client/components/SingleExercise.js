import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Keyboard} from '../components'
import {setActiveNote, setExerciseStep} from '../store'
import useSound from 'use-sound'
import buttonSfx from '../assets/button.mp3'
import Fade from 'react-reveal/Fade'

const SingleExercise = props => {
  const [playButton] = useSound(buttonSfx, {volume: 0.05})

  const dispatch = useDispatch()
  const {activeNotes, exercise, exerciseStep} = useSelector(state => {
    return {
      activeNotes: state.activeNotes,
      exercise: state.exercise,
      exerciseStep: state.exerciseStep
    }
  })

  const [complete, setComplete] = useState(false)
  const [firstAttempt, setAttempt] = useState(true)

  const handleCompleted = async () => {
    await axios.put(`/api/lessons/${exercise.id}`)
    setComplete(true)
  }

  let steps = exercise.exerciseSteps || []

  if (steps.length) {
    steps = steps.map((st, i) => ({
      content: st.content,
      answer: st.answer,
      answer2: st.answer2,
      index: i
    }))
  }

  //for scale: must get each step on first attempt or it sends you back to the start!

  useEffect(
    () => {
      if (
        activeNotes[0] === exerciseStep.answer ||
        activeNotes[0] === exerciseStep.answer2
      ) {
        if (exerciseStep.index === steps.length - 1) {
          handleCompleted()
        } else {
          dispatch(setExerciseStep(steps[++exerciseStep.index]))
          dispatch(setActiveNote([]))
          setAttempt(true)
        }
      } else if (!activeNotes[0]) {
        console.log('first run!')
      } else {
        setAttempt(false)
      }
    },
    [activeNotes]
  )

  return (
    <>
      <div
        className="container my-3 py-3 text-center"
        style={{height: '200px'}}
      >
        {complete ? (
          <>
            <Fade top>
              <div className="justify-content-center">
                <div className="justify-content-center align-items-center">
                  <div className="justify-content-center">
                    <p className="lead text-center mt-3">
                      Lesson Progress Saved!
                    </p>
                    <div className="row justify-content-center">
                      <Link
                        to={`/lesson/${exercise.id + 1}`}
                        className="m-1 btn btn-outline-primary"
                        onClick={playButton}
                      >
                        Next Lesson
                      </Link>
                      <Link
                        to="/lesson"
                        className="m-1 btn btn-outline-secondary"
                        onClick={playButton}
                      >
                        Back to Lesson List
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </>
        ) : null}
        <p className="lead">{exerciseStep.content}</p>

        {firstAttempt ? null : (
          <h3 style={{color: '#6B9AC4'}} className="my-3 py-3 text-center">
            Whoops! Try Again!
          </h3>
        )}
      </div>
      <Keyboard highlightedNotes={[]} />
    </>
  )
}

export default SingleExercise
