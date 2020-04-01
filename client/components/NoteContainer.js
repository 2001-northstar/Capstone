import React, {useEffect, useRef, useState} from 'react'
import {gsap, TimelineMax, TweenMax} from 'gsap'
import Keyboard from './Keyboard'
import {useDispatch, mapDispatch, useSelector} from 'react-redux'
import {fetchSingleSong} from '../store'
import styled from 'styled-components'

// using song data from backend
// in backwards order, need to reverse
const song = [48, 52, 53, 55, 57]
const reverseSong = song.reverse()

const NoteContainer = props => {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchSingleSong(props.match.params.id))
  // }, [])

  // const {song} = useSelector(state => {
  //   return {song: state.song}
  // })

  let refArray = song.map(element => useRef(null))
  console.log(refArray)
  // let _48 = null
  // let _50 = useRef(null)
  // let _52 = useRef(null)
  // let _53 = useRef(null)
  const [counter, setCounter] = useState(0)
  const [currentNotes, setNotes] = useState([])

  const [clickAnimation, setClickAnimation] = useState()

  let [tl] = useState(new TimelineMax({paused: true}))

  useEffect(() => {
    setCounter(counter + 1)
    setNotes(song.slice(counter, 5 + counter))
  }, [])

  useEffect(
    () => {
      // reverse the order of the refArray so most movement happens at the top of of the array. needs to be OUTSIDE the for loop
      refArray.reverse()
      for (let i = 0; i < song.length + 1; i++) {
        setClickAnimation(
          tl
            .to(refArray.slice(i, 4 + i), 1, {
              ease: 'none',
              top: 100 * (i + 1)
            })
            .addPause()
          // .to(_52, 1, {ease: 'none', top: 100})
          // .to(_50, 1, {ease: 'none', top: 100})
          // .to(_53, 1, {ease: 'none', top: 100})
        )
      }
      // setClickAnimation(
      //   tl
      //     .to(refArray.slice(counter, 4 + counter), 1, {
      //       ease: 'none',
      //       top: 100 * counter
      //     })
      //     // .to(_52, 1, {ease: 'none', top: 100})
      //     // .to(_50, 1, {ease: 'none', top: 100})
      //     // .to(_53, 1, {ease: 'none', top: 100})
      //     .addPause()
      // )

      // setClickAnimation(
      //   tl
      //     .to(refArray, 1, {ease: 'none', top: 200})
      //     // .to(_52, 1, {ease: 'none', top: 100})
      //     // .to(_50, 1, {ease: 'none', top: 100})
      //     // .to(_53, 1, {ease: 'none', top: 100})
      //     .addPause()
      // )
      // .to([_48, _52, _50, _53], 1, {ease: 'none', top: 200})
      // // .to(_52, 1, {ease: 'none', top: 200})
      // // .to(_50, 1, {ease: 'none', top: 200})
      // // .to(_53, 1, {ease: 'none', top: 200})
      // .addPause()

      // .to(_48, 1, {ease: 'none', top: 300})
      // .to(_52, 1, {ease: 'none', top: 300})
      // .to(_50, 1, {ease: 'none', top: 300})
      // .to(_53, 1, {ease: 'none', top: 300})
      // .addPause()

      // .to(_48, 1, {ease: 'none', top: 400})
      // .to(_52, 1, {ease: 'none', top: 400})
      // .to(_50, 1, {ease: 'none', top: 400})
      // .to(_53, 1, {ease: 'none', top: 400})
      // .addPause()
    },
    [tl]
  )

  return (
    <>
      <div className="container">
        <button
          className="btn btn-primary"
          onClick={() => clickAnimation.play()}
        >
          Move Notes Down
        </button>
      </div>
      <div className="fixed">
        <NoteContainerStyle>
          {/* <div className="noteContainer"> */}
          {reverseSong.map((element, idx) => (
            <div
              key={`${idx}`}
              className={`_${element}`}
              ref={el => (refArray[idx] = el)}
            />
          ))}
          {/*
          <div className="_53" ref={el => (_53 = el)} />
          <div className="_52" ref={el => (_52 = el)} />
          <div className="_50" ref={el => (_50 = el)} />
          <div className="_52" ref={el => (_52 = el)} /> <div className="_48" ref={el => (_48 = el)} />*/}
          {/* </div> */}
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
bottom: ${song.length * 100 - 400}px;
max-height: 400px;
border: 1px solid black;
}
`
