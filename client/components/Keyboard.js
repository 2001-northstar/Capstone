import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Piano, KeyboardShortcuts, MidiNumbers} from 'react-piano'
import {
  NoteContainer,
  DimensionsProvider,
  SoundfontProvider
} from '../components'
import {Dropdown} from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import {setActiveNote} from '../store'

// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)()
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net'

const noteRange = {
  first: MidiNumbers.fromNote('c3'),
  last: MidiNumbers.fromNote('f4')
}
const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: noteRange.first,
  lastNote: noteRange.last,
  keyboardConfig: KeyboardShortcuts.HOME_ROW
})

export default function Keyboard(props) {
  const dispatch = useDispatch()
  const activeNote = useSelector(state => state.activeNotes)

  const callback = notes => {
    dispatch(setActiveNote(notes))
  }

  const [toggleOn, toggle] = useState(true)
  const handleKeyboardLabel = () => {
    toggle(!toggleOn)
  }

  return (
    <Fade bottom>
      {/* <NoteContainer /> */}

      {/* <input type="checkbox" {toggleOn ? "checked" : null} data-toggle="toggle"/> */}
      <DimensionsProvider>
        {({containerWidth, containerHeight}) => (
          <SoundfontProvider
            instrumentName="acoustic_grand_piano"
            audioContext={audioContext}
            hostname={soundfontHostname}
            render={({isLoading, playNote, stopNote}) => (
              <Piano
                callback={callback}
                noteRange={noteRange}
                width={containerWidth}
                playNote={playNote}
                stopNote={stopNote}
                disabled={isLoading}
                keyboardShortcuts={toggleOn ? keyboardShortcuts : []}
                {...props}
              />
            )}
          />
        )}
      </DimensionsProvider>
      <button type="button" onClick={handleKeyboardLabel}>
        {toggleOn ? 'Hide Keyboard Labels' : 'Show Keyboard Labels'}
      </button>
    </Fade>
  )
}
