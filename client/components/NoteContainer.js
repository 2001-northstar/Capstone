import React, {useEffect, useRef, useState} from 'react'
import {gsap, TimelineMax} from 'gsap'
import Keyboard from './Keyboard'

// using song data from backend
// in backwards order, need to reverse
const song = [48, 52, 50, 53, 48, 52]

const NoteContainer = props => {
  let refArray = song.map(element => useRef(null))
  // let _48 = null
  // let _50 = useRef(null)
  // let _52 = useRef(null)
  // let _53 = useRef(null)
  const [counter, setCounter] = useState(0)
  const [currentNotes, setNotes] = useState([])

  const [clickAnimation, setClickAnimation] = useState()

  let [tl] = useState(new TimelineMax({autoRemoveChildren: true, paused: true}))

  useEffect(
    () => {
      setClickAnimation(
        tl
          .to(refArray.slice(counter, 4 + counter), 1, {
            ease: 'none',
            top: 100 * counter
          })
          // .to(_52, 1, {ease: 'none', top: 100})
          // .to(_50, 1, {ease: 'none', top: 100})
          // .to(_53, 1, {ease: 'none', top: 100})
          .addPause()
      )
      setCounter(counter + 1)
      setNotes(song.slice(counter, 4 + counter))
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
  console.log('counter', counter)
  console.log('notes', currentNotes)
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
        <div className="noteContainer">
          {song.map((element, idx) => (
            <div className={`_${element}`} ref={el => (refArray[idx] = el)} />
          ))}
          {/* <div className="_48" ref={el => (_48 = el)} />
          <div className="_53" ref={el => (_53 = el)} />
          <div className="_52" ref={el => (_52 = el)} />
          <div className="_50" ref={el => (_50 = el)} />
          <div className="_52" ref={el => (_52 = el)} /> */}
        </div>
      </div>
      <Keyboard />
    </>
  )
}

export default NoteContainer
