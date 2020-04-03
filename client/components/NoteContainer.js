import React, {useEffect, useRef, useState} from 'react'
import {gsap, TimelineMax, TweenMax} from 'gsap'
import Keyboard from './Keyboard'
import {useDispatch, useSelector} from 'react-redux'
import {fetchSingleSong} from '../store'
import Fade from 'react-reveal/Fade'

const NoteContainer = props => {
  // dispatch action to the store to grab the current song info
  // issues using more than one use effect
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchSingleSong(props.match.params.id))
  }, [])

  const {song, activeNotes} = useSelector(state => {
    return {song: state.song, activeNotes: state.activeNotes}
  })

  let refArray = []
  const notes = song.notes || []

  // length is dependent on the song loaded in
  // line 58 style is called in the JSX because we need access the variable as it's loaded in
  let length = notes.length

  // useRef accesses the dom nodes (html element) so that we can interact with that dom element
  // this way state doesn't change to a new timeline and it keeps updating the old one
  let tlRef = useRef(new TimelineMax({paused: false}))
  let [counter, setCounter] = useState(100)

  const handleClick = () => {
    // refs have a current property so you can stay on the same ref
    // .play() is a method on gsap. if you pause the animation, it restarts it
    tlRef.current.play()
    tlRef.current
      .to(refArray, 0.5, {
        ease: 'none',
        // moves down by 100px
        top: counter
      })
      // pauses at each movement
      .addPause()
    // adds 100 to previous state
    setCounter(counter + 100)
  }
  return (
    <>
      <Fade top>
        <div className="container">
          <button className="btn btn-primary" onClick={() => handleClick()}>
            Move Notes Down
          </button>
        </div>
        <div className="fixed">
          <div
            style={{bottom: `${length * 100 - 400}px`}}
            className="noteContainer"
          >
            {notes.map((element, idx) => (
              <div
                key={`${element.order}`}
                className={`_${element.note}`}
                ref={el => (refArray[idx] = el)}
              />
            ))}
          </div>
        </div>
        <Keyboard />
      </Fade>
      <Keyboard highlightedNotes={[]} />
    </>
  )
}

export default NoteContainer

// you can't use .reverse b/c it flips the order with each iteration
// active note will

// 48 idx 0
// 50 idx 1
// 52 idx 2
// 53 idx 3

// 53 idx 3
// 52 idx 2
// 59 idx 1
// 48 idx 0

// looking
