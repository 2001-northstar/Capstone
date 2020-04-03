import React, {useEffect, useRef, useState} from 'react'
import {gsap, TimelineMax} from 'gsap'
import Keyboard from './Keyboard'
import Fade from 'react-reveal/Fade'

const NoteContainer = props => {
  let _48 = useRef(null)
  let _50 = useRef(null)
  let _52 = useRef(null)
  let _53 = useRef(null)
  const [clickAnimation, setClickAnimation] = useState()

  let [tl] = useState(new TimelineMax({autoRemoveChildren: true, paused: true}))

  useEffect(
    () => {
      setClickAnimation(
        tl
          .to(_48, 1, {ease: 'none', top: 100}, 'label1')
          .to(_52, 1, {ease: 'none', top: 100}, 'label1')
          .to(_50, 1, {ease: 'none', top: 100}, 'label1')
          .to(_53, 1, {ease: 'none', top: 100}, 'label1')
          .addPause()

          .to(_48, 1, {ease: 'none', top: 200}, 'label2')
          .to(_52, 1, {ease: 'none', top: 200}, 'label2')
          .to(_50, 1, {ease: 'none', top: 200}, 'label2')
          .to(_53, 1, {ease: 'none', top: 200}, 'label2')
          .addPause()

          .to(_48, 1, {ease: 'none', top: 300}, 'label3')
          .to(_52, 1, {ease: 'none', top: 300}, 'label3')
          .to(_50, 1, {ease: 'none', top: 300}, 'label3')
          .to(_53, 1, {ease: 'none', top: 300}, 'label3')
          .addPause()

          .to(_48, 1, {ease: 'none', top: 400}, 'label4')
          .to(_52, 1, {ease: 'none', top: 400}, 'label4')
          .to(_50, 1, {ease: 'none', top: 400}, 'label4')
          .to(_53, 1, {ease: 'none', top: 400}, 'label4')
          .addPause()
      )
    },
    [tl]
  )

  return (
    <>
      <Fade top>
        <button
          className="btn btn-primary"
          onClick={() => clickAnimation.play()}
        >
          Move Notes Down
        </button>
        <div className="fixed">
          <div className="noteContainer">
            <div className="_53" ref={el => (_53 = el)} />
            <div className="_50" ref={el => (_50 = el)} />
            <div className="_52" ref={el => (_52 = el)} />
            <div className="_48" ref={el => (_48 = el)} />
          </div>
        </div>
      </Fade>
      <Keyboard highlightedNotes={[]} />
    </>
  )
}

export default NoteContainer
