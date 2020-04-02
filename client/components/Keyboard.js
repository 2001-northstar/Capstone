import React, {useState} from 'react'
import {Piano, KeyboardShortcuts, MidiNumbers} from 'react-piano'
import {DimensionsProvider, SoundfontProvider} from '../components'
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
  const [toggleOn, toggle] = useState(true)
  const handleKeyboardLabel = () => {
    toggle(!toggleOn)
  }
  return (
    <>
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
      {/* <input type="checkbox" {toggleOn ? "checked" : null} data-toggle="toggle"/> */}
    </>
  )
}
