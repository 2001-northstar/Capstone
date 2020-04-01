// in react piano:
// write handle key down: call callback with event

// on keyboard:
// callback that sets state, pass to piano as props

import React from 'react'
import ReactDOM from 'react-dom'
import {Piano, KeyboardShortcuts, MidiNumbers} from 'react-piano'
import {
  NoteContainer,
  DimensionsProvider,
  SoundfontProvider
} from '../components'
import {Dropdown} from 'react-bootstrap'

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
  return (
    <>
      {/* <NoteContainer /> */}
      <DimensionsProvider>
        {({containerWidth, containerHeight}) => (
          <SoundfontProvider
            instrumentName="acoustic_grand_piano"
            audioContext={audioContext}
            hostname={soundfontHostname}
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
