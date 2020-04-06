import React, {useEffect, useRef, useState} from 'react'
import {TimelineMax} from 'gsap'
import Keyboard from './Keyboard'
import {useDispatch, useSelector} from 'react-redux'
import {fetchSingleSong} from '../store'
import Fade from 'react-reveal/Fade'
import useSound from 'use-sound'
import buttonSfx from '../assets/button.mp3'
import applauseSfx from '../assets/applause.mp3'

const NoteContainer = props => {
  const [playButton] = useSound(buttonSfx, {volume: 0.05})
  const [playApplause] = useSound(applauseSfx, {volume: 0.05})

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
    //position: [ Number | String ](default = "+=0") — controls the insertion point in the timeline (by default, it's the end of the timeline)
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
      // reset activeNote array to '0'
      // without it you can't play the same note in a row
      // using .pop() mutates arrray & breaks it at the very last note since the array will equal undefined & enter an infinite loop
      activeNotes[0] = 0
    }
  }
  // once we reach the end of the song, we want to display a congratulations message!
  if (activeNotes[0] === 0 && !answers[incrementAnswers]) {
    return (
      <>
        <Fade top>
          <h4 className="display-4 text-center">{song.title}</h4>
          <div
            className="fixed justify-content-center align-items-center"
            onMouseEnter={playApplause}
          >
            <div
              style={{bottom: `${length * 100 - 300}px`}}
              className="justify-content-center"
            >
              <h4 className="display-4 text-center">Nice job 👏</h4>
              <h5 className="text-center">Want to try another song?</h5>
              <div className="row justify-content-center">
                <a
                  href="/songs"
                  className="m-1 btn btn-outline-primary"
                  onClick={playButton}
                >
                  Heck Yes!
                </a>
                <a
                  href="/"
                  className="m-1 btn btn-outline-secondary"
                  onClick={playButton}
                >
                  Nah, take me back to free play
                </a>
              </div>
            </div>
          </div>
        </Fade>
        <Keyboard highlightedNotes={[]} />
      </>
    )
  } else {
    return (
      <>
        <Fade top>
          <h4 className="display-4 text-center">{song.title}</h4>
          <div className="fixed">
            <div
              style={{bottom: `${length * 100 - 300}px`}}
              className="noteContainer"
              ref={refContainer}
            >
              {notes.map(element => (
                <div key={`${element.order}`} className={`_${element.note}`} />
              ))}
            </div>
          </div>
          <Keyboard highlightedNotes={[]} />
        </Fade>
      </>
    )
  }
}
export default NoteContainer
