import React, {useEffect, useRef, useState} from 'react'
import {TimelineMax} from 'gsap'
import Keyboard from './Keyboard'
import {useDispatch, useSelector} from 'react-redux'
import {fetchSingleSong} from '../store'
import Fade from 'react-reveal/Fade'

const NoteContainer = props => {
  // dispatch action to the store to grab the current song info
  // issues using more than one use effect
  const dispatch = useDispatch()
  // useEffect will dispatch th
  useEffect(() => {
    dispatch(fetchSingleSong(props.match.params.id))
  }, [])

  // state with song & active notes pulled in
  const {song, activeNotes} = useSelector(state => {
    return {song: state.song, activeNotes: state.activeNotes}
  })

  // Notes is an array with objects.
  // Key/value pairs: note = midiNum, order = unique identifier
  // Array has to be loaded backwards. notes[0] is actually the last note & note[note.length - 1] is the first
  // Notes.reverse() no longer works! it will flip-flop on every button press
  const notes = song.notes || []

  // answer is an array with midiNums in order of play
  const answers = song.answer

  // length is dependent on the song loaded in
  // line 58 style is called in the JSX because we need access the variable as it's loaded in
  let length = notes.length

  // useRef accesses the dom nodes (html element) so that we can interact with that dom element
  // this way state doesn't change to a new timeline and it keeps updating the old one
  // if you used setState you would have a new timeline each time
  let tlRef = useRef(new TimelineMax({paused: false}))

  //reference
  let refContainer = useRef(null)

  // increments the movement each time state changes
  let [counter, setCounter] = useState(100)
  let [incrementAnswers, setIncrement] = useState(0)

  const moveNotes = () => {
    // refs have a current property so you can stay on the same ref

    // each div is attached as a childNode on the parent container
    // also an array-like object, so we can spread the parent node (refContainer) in its (current property) of childNodes into an actual array object
    const noteBars = [...refContainer.current.childNodes]

    // .play() is a method on gsap. if you pause the animation, it restarts it
    // .to( target:[ Object | Array | String ], vars:Object, position:[ Number | String ] ) : self
    // target: [ Object | Array | String ] Target object (or array of objects) whose properties should be affected. This can also be CSS selector text like "#feature"
    // vars: [ Object ] An object with the end values for each property that should be animated as well as any special properties
    //position: [ Number | String ](default = "+=0") — controls the insertion point in the timeline (by default, it’s the end of the timeline)
    tlRef.current.play()
    tlRef.current
      .to(noteBars, 0.5, {
        // linear motion
        ease: 'none',
        // moves down by 100px
        top: counter
      })
      // pauses at each movement
      .addPause()

    // adds 100 to previous state
    setCounter(counter + 100)

    // traverses the answers array on each rerender
    setIncrement(incrementAnswers + 1)
  }

  // comparing the active note played by the user to our current location in the active array
  // if they are equal, call the animation moveNotes function
  if (notes.length) {
    let correctNote = answers[incrementAnswers]
    if (activeNotes[0] === correctNote) {
      moveNotes()
    }
  }

  return (
    <>
      <Fade top>
        <div className="fixed">
          <div
            style={{bottom: `${length * 100 - 400}px`}}
            className="noteContainer"
            ref={refContainer}
          >
            {notes.map((element, idx) => (
              <div key={`${element.order}`} className={`_${element.note}`} />
            ))}
          </div>
        </div>
        <Keyboard />
      </Fade>
    </>
  )
}

export default NoteContainer
