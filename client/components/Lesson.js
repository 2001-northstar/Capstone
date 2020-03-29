//need to connect to store - step.higlighted notes & step.noteLables mapped to props
//write hooks to change notelabels component to render or not
//write hooks to re-render keyboard with higlighted notes or not
//need to update lesson & steps models
//need to seed file

//need to decide on how to move to an exercise at the end of a steps array, & then how to move to next lesson

import React from 'react'
import ReactDOM from 'react-dom'
import LessonOneContainer from './LessonOneContainer'
import NoteLabels from './NoteLabels'
import DimensionsProvider from './DimensionsProvider'
import SoundfontProvider from './SoundfontProvider'
import {Piano, KeyboardShortcuts, MidiNumbers} from 'react-piano'
import {fetchSingleLesson} from '../store/lesson'

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

let highlightedNotes = []

export default function Lesson(props) {
  const dispatch = useDispatch()

  const {lessons, user} = useSelector(state => {
    return {lessons: state.lessons, user: state.user}
  })

  useEffect(() => {
    dispatch(fetchSingleLesson())
  }, [])

  //How do we pull the right lesson number? Reference the User or match params?

  return (
    <>
      {/* <NoteContainer /> */}
      <LessonOneContainer />
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
                highlightedNotes={highlightedNotes}
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
      <NoteLabels />
    </>
  )
}
