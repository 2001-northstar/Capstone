import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Piano, KeyboardShortcuts, MidiNumbers} from 'react-piano'
import {DimensionsProvider, SoundfontProvider} from '../components'
import {Dropdown} from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import {setActiveNote} from '../store'
import styled from 'styled-components'
import useSound from 'use-sound'
import qwertySfx from '../assets/qwerty.mp3'

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
  const [playQwerty] = useSound(qwertySfx, {volume: 0.075})
  const dispatch = useDispatch()
  const {activeNote, step} = useSelector(state => ({
    activeNote: state.activeNotes,
    step: state.step
  }))

  const callback = notes => {
    dispatch(setActiveNote(notes))
  }

  const [toggleOn, toggle] = useState(true)

  const handleKeyboardLabel = () => {
    toggle(!toggleOn)
  }

  document.addEventListener('keydown', event => {
    if (event.which === 90) {
      playQwerty()
      toggle(!toggleOn)
    }
  })

  return (
    <Fade bottom>
      {/* <NoteContainer /> */}
      <DimensionsProvider>
        {({containerWidth, containerHeight}) => (
          <SoundfontProvider
            instrumentName="acoustic_grand_piano"
            audioContext={audioContext}
            hostname={soundfontHostname}
            render={({isLoading, playNote, stopNote}) => (
              <Piano
                highlightedNotes={props.highlightedNotes}
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
      <br />

      <div className="text-muted">
        <a
          onClick={() => {
            handleKeyboardLabel()
            play()
          }}
        >
          <ShortcutKey>z</ShortcutKey>{' '}
        </a>
        {toggleOn ? 'Show keyboard labels' : 'Hide keyboard labels'}
      </div>
    </Fade>
  )
}

const ShortcutKey = styled.span`
  border: solid rgb(170, 170, 170);
  border-width: 1px 1px 2px;
  padding: 5px 9px;
  border-radius: 4px;
`
