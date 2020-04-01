//write hooks to re-render keyboard with higlighted notes or not

//need to decide on how to move to an exercise at the end of a steps array

import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ReactDOM from 'react-dom'
import {
  LessonOneContainer,
  NoteLabels,
  DimensionsProvider,
  SoundfontProvider
} from '../components'
import {Piano, KeyboardShortcuts, MidiNumbers} from 'react-piano'
import {fetchSingleLesson} from '../store'

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

export default function Lesson(props) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSingleLesson(props.match.params.id))
  }, [])

  const {lesson, user, step} = useSelector(state => {
    return {lesson: state.lesson, user: state.user, step: state.step}
  })

  return (
    <>
      {/* <NoteContainer /> */}
      <LessonOneContainer lesson={lesson} />
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
                highlightedNotes={step.highlightedNotes}
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
      {step.noteLabels ? <NoteLabels /> : null}
    </>
  )
}
