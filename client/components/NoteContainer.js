import React, {useEffect, useRef, useState} from 'react'
import {gsap, TimelineMax, TweenMax} from 'gsap'
import Keyboard from './Keyboard'
import {useDispatch, mapDispatch, useSelector} from 'react-redux'
import {fetchSingleSong} from '../store'
import styled from 'styled-components'

// using song data from backend
// in backwards order, need to reverse
// const notes = [48, 52, 53, 55, 57]
// const reverseSong = notes.reverse()

const NoteContainer = props => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchSingleSong(3))
  }, [])

  const {song} = useSelector(state => {
    return {song: state.song}
  })

  console.log(song)
  const notes = song.notes || []

  //  let refArray = notes.map(element => useRef(null))
  let refArray = []

  let reverseArray = refArray.reverse()

  // const [clickAnimation, setClickAnimation] = useState()
  // const [counter, setCounter] = useState(0)
  // const [currentNotes, setNotes] = useState([])

  // let [tl, playTimeline] = useState(new TimelineMax({paused: false}))
  let tlRef = useRef(new TimelineMax({paused: false}))
  let [counter, setCounter] = useState(100)

  const handleClick = () => {
    console.count()
    console.log('timeline in handleclick', tlRef.current)
    console.log('in handleclick', tlRef.current.paused())
    tlRef.current.play()
    tlRef.current
      .to(reverseArray, 1, {
        ease: 'none',
        top: counter
      })
      .addPause()
    setCounter(counter + 100)
  }

  // const handleClick = () => {
  //   console.count()
  //   console.log('timeline in handleclick', tl)
  //   playTimeline(
  //     tl
  //       .to(reverseArray, 1, {
  //         ease: 'none',
  //         top: 100
  //       })
  //       .addPause()
  //   )
  // }

  // useEffect(() => {
  //   // reverse the order of the refArray so most movement happens at the top of of the array. needs to be OUTSIDE the for loop
  //   refArray.reverse()
  //   for (let i = 0; i < notes.length + 1; i++) {
  //     setClickAnimation(
  //       tl
  //         .to(refArray.slice(i, 4 + i), 1, {
  //           ease: 'none',
  //           top: 100 * (i + 1)
  //         })
  //         .addPause()
  //     )
  //   }
  // }, [tl])

  // useEffect(() => {
  //   setCounter(counter + 1)
  // }, [])

  // useEffect(() => {
  //   setNotes(reverseSong.slice(counter, 4 + counter))
  // }, [])

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
              key={`${idx}`}
              className={`_${element}`}
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
