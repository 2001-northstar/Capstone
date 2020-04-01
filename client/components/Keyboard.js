// in react piano:
// write handle key down: call callback with event

// on keyboard:
// callback that sets state, pass to piano as props

import React from 'react'
import ReactDOM from 'react-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Piano, KeyboardShortcuts, MidiNumbers} from 'react-piano'
import {
  NoteContainer,
  DimensionsProvider,
  SoundfontProvider
} from '../components'
import {Dropdown} from 'react-bootstrap'
import {setActiveNote} from '../store/activeNotes'

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

  const handlePlayNote = activeNoteNumber => {
    console.log(
      "in Keyboard component's `handlePlayNote`, here's the current active midi number: ",
      activeNoteNumber
    )
    //    setActiveNote(activeNoteNumber)
    dispatch(setActiveNote(activeNoteNumber))
  }

  console.log(
    "in the Keyboard component, here is the active note's midi number: ",
    activeNote
  )

  return (
    <>
      {/* <NoteContainer /> */}
      <DimensionsProvider>
        {({containerWidth, containerHeight}) => (
          <SoundfontProvider
            instrumentName="acoustic_grand_piano"
            audioContext={audioContext}
            hostname={soundfontHostname}
            handlePlayNote={handlePlayNote}
            render={({isLoading, playNote, stopNote}) => (
              <Piano
                noteRange={noteRange}
                width={containerWidth}
                playNote={playNote}
                stopNote={stopNote}
                disabled={isLoading}
                keyboardShortcuts={keyboardShortcuts}
                {...props}
              />
            )}
          />
        )}
      </DimensionsProvider>
    </>
  )
}
