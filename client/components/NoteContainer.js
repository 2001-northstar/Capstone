import React, {useEffect, useRef, useState} from 'react'
import {gsap, TweenMax, Power0, TimelineMax} from 'gsap'

const NoteContainer = props => {
  let containerMove = useRef(null)
  let _48 = null
  let _50 = useRef(null)
  let _52 = useRef(null)
  let _53 = null
  const [clickAnimation, setClickAnimation] = useState()

  let [tl] = useState(new TimelineMax({paused: true}))

  useEffect(
    () => {
      // setClickAnimation(tl.to(containerMove, 5, {x: 0, y: 500}).addPause(1))
      setClickAnimation(
        tl
          .to(_48, 1, {ease: 'none', top: 100}, 'label1')
          .to(_50, 1, {ease: 'none', top: 100}, 'label1')
          .to(_52, 1, {ease: 'none', top: 100}, 'label1')
          .addPause()

          // .to(_48, 1, {ease: 'none', top: 200}, 'label2')
          .to(_50, 1, {ease: 'none', top: 200}, 'label2')
          .to(_52, 1, {ease: 'none', top: 200}, 'label2')
          .addPause()

          // .to(_48, 1, {ease: 'none', top: 300}, 'label3')
          .to(_50, 1, {ease: 'none', top: 300}, 'label3')
          .to(_52, 1, {ease: 'none', top: 300}, 'label3')
          .addPause()

        // tl
        //   .fromTo([_48, _50, _52], {ease: 'none', top: '0'}, {top: '100'})
      )
    },
    [tl]
  )

  return (
    <>
      <div>
        <button onClick={() => clickAnimation.play()}>Move Notes Down</button>
      </div>
      <div className="fixed">
        <div
          className="noteContainer"
          ref={el => {
            containerMove = el
          }}
        >
          {/* <div className="_53" ref={el => (_53 = el)} /> */}
          <div className="_50" ref={el => (_50 = el)} />
          <div className="_52" ref={el => (_52 = el)} />
          <div className="_48" ref={el => (_48 = el)} />
          {/* <div className="C3">note 1</div>
            <div className="rest" />
            <div className="C3">note 3</div> */}
          {/* <div className="lane2">
          <div className="rest" />
          <div className="D3">note 2</div>
          <div className="rest" />
        </div>
        <div className="lane3">
          <div className="rest" />
          <div className="rest" />
          <div className="E3">note 3</div>
        </div>
        <div className="lane4">Lane 4</div>
        <div className="lane5">Lane 5</div>
        <div className="lane6">Lane 6</div>
        <div className="lane7">Lane 7</div>
        <div className="lane8">Lane 8</div>
        <div className="lane9">Lane 9</div>
        <div className="lane10">Lane 10</div>
        <div className="lane11">Lane 11</div> */}
        </div>
      </div>
    </>
  )
}

export default NoteContainer
