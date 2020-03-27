import React, {useEffect, useRef} from 'react'
import {gsap, TweenLite, TweenMax, Power0, TimelineLite} from 'gsap'
import wholeNote from '../../public/wholeNote.svg'

// let song = [{C3}, {E3}, {G3}]

const NoteContainer = props => {
  let containerMove = useRef(null)
  // let C3 = useRef(null)
  // let D3 = useRef(null)
  // let E3 = useRef(null)
  // let F3 = useRef(null)
  // let G3 = useRef(null)
  // let A3 = useRef(null)
  // let B3 = useRef(null)
  // let C4 = useRef(null)
  // let D4 = useRef(null)
  // let E4 = useRef(null)
  // let F4 = useRef(null)

  let tl = new TimelineLite({delay: 0.8})

  useEffect(() => {
    console.log('note props', props)
    tl.to(containerMove, 5, {x: 0, y: 500})

    // tl.to(C3, 3, {x: 0, y: 500})
    // tl.to(D3, 3, {x: 0, y: 500})
    // tl.to(E3, 3, {x: 0, y: 500})
    // tl.to(F3, 3, {x: 0, y: 500})
    // tl.to(G3, 3, {x: 0, y: 500})
    // tl.to(A3, 3, {x: 0, y: 500})
    // tl.to(B3, 3, {x: 0, y: 500})
    // tl.to(C4, 3, {x: 0, y: 500})
    // tl.to(D4, 3, {x: 0, y: 500})
    // tl.to(E4, 3, {x: 0, y: 500})
    // tl.to(F4, 3, {x: 0, y: 500})
  }, [])

  return (
    <div className="fixed">
      <div className="noteContainer" ref={el => (containerMove = el)}>
        <div className="lane1">
          <div className="C3">note 1</div>
          <div className="rest" />
          <div className="C3">note 3</div>
          <div className="C3">note 4</div>
          <div className="C3">note 5</div>
        </div>
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
  )
}

export default NoteContainer

{
  /* <div className="C3" ref={el => (C3 = el)} />
<div className="D3" ref={el => (D3 = el)} />
<div className="E3" ref={el => (E3 = el)} />
<div className="F3" ref={el => (F3 = el)} />
<div className="G3" ref={el => (G3 = el)} />
<div className="A3" ref={el => (A3 = el)} />
<div className="B3" ref={el => (B3 = el)} />
<div className="C4" ref={el => (C4 = el)} />
<div className="D4" ref={el => (D4 = el)} />
<div className="E4" ref={el => (E4 = el)} />
<div className="F4" ref={el => (F4 = el)} /> */
}
