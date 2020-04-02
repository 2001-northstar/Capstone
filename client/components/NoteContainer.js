import React, {useEffect, useRef, useState} from 'react'
import {gsap, TimelineMax, TweenMax} from 'gsap'
import Keyboard from './Keyboard'
import {useDispatch, useSelector} from 'react-redux'
import {fetchSingleSong} from '../store'
import styled from 'styled-components'

const NoteContainer = props => {
  // dispatch action to the store to grab the current song info
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchSingleSong(props.match.params.id))
  }, [])

  const {song} = useSelector(state => {
    return {song: state.song}
  })

  // const {song, activeNotes} = useSelector(state => {
  //   return {song: state.song,
  //   activeNotes: state.activeNotes}
  // })

  const notes = song.notes || []

  let refArray = []
  let reverseArray = refArray.reverse()

  let tlRef = useRef(new TimelineMax({paused: false}))
  let [counter, setCounter] = useState(100)

  const handleClick = () => {
    // console.count()
    // console.log('timeline in handleclick', tlRef.current)
    // console.log('in handleclick', tlRef.current.paused())
    tlRef.current.play()
    tlRef.current
      .to(reverseArray, 1, {
        ease: 'none',
        top: counter
      })
      .addPause()
    setCounter(counter + 100)
  }
  return (
    <>
      <div className="container">
        <button className="btn btn-primary" onClick={() => handleClick()}>
          Move Notes Down
        </button>
      </div>
      <div className="fixed">
        <NoteContainerStyle>
          {/* <div className="noteContainer"> */}
          {notes.map((element, idx) => (
            <div
              key={`${element.order}`}
              className={`_${element.note}`}
              ref={el => (refArray[idx] = el)}
            />
          ))}
        </NoteContainerStyle>
      </div>
      <Keyboard />
    </>
  )
}

export default NoteContainer

const NoteContainerStyle = styled.div`
width: 100%;
position: absolute;
vertical-align: baseline;
bottom: ${600 - 400}px;
max-height: 400px;
border: 1px solid black;
}
`
