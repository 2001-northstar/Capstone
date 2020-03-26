import React, {useEffect, useRef} from 'react'
import {gsap, TweenLite, TweenMax, Power0, TimelineLite} from 'gsap'
import wholeNote from '../../public/wholeNote.svg'

const NoteContainer = () => {
  let C3 = useRef(null)
  let D3 = useRef(null)
  let E3 = useRef(null)
  let F3 = useRef(null)
  let G3 = useRef(null)
  let A3 = useRef(null)
  let B3 = useRef(null)
  let C4 = useRef(null)
  let D4 = useRef(null)
  let E4 = useRef(null)
  let F4 = useRef(null)

  let tl = new TimelineLite({delay: 0.8})

  useEffect(() => {
    tl.to(C3, 3, {x: 0, y: 500})
    tl.to(D3, 3, {x: 0, y: 500})
    tl.to(E3, 3, {x: 0, y: 500})
    tl.to(F3, 3, {x: 0, y: 500})
    tl.to(G3, 3, {x: 0, y: 500})
    tl.to(A3, 3, {x: 0, y: 500})
    tl.to(B3, 3, {x: 0, y: 500})
    tl.to(C4, 3, {x: 0, y: 500})
    tl.to(D4, 3, {x: 0, y: 500})
    tl.to(E4, 3, {x: 0, y: 500})
    tl.to(F4, 3, {x: 0, y: 500})
  }, [])

  // notes = [ a, b, c, d, e, f, g]

  return (
    <div className="noteContainer">
      <div className="C3" ref={el => (C3 = el)} />
      <div className="D3" ref={el => (D3 = el)} />
      <div className="E3" ref={el => (E3 = el)} />
      <div className="F3" ref={el => (F3 = el)} />
      <div className="G3" ref={el => (G3 = el)} />
      <div className="A3" ref={el => (A3 = el)} />
      <div className="B3" ref={el => (B3 = el)} />
      <div className="C4" ref={el => (C4 = el)} />
      <div className="D4" ref={el => (D4 = el)} />
      <div className="E4" ref={el => (E4 = el)} />
      <div className="F4" ref={el => (F4 = el)} />
    </div>
  )
}

export default NoteContainer

// class NoteContainer extends React.Component {
//   constructor(props) {
//     super(props)

//         //reference to DOM Node
//         this.myElement = null
//         this.myTween = null

//       }
//       componentDidMount(){
//         this.myTween = gsap.TweenLite.to(this.myElement, 1, {x: 100, y:100})
//       }

//   render() {
//     let tl = gsap.timeline()
//     return (
//       <div id="notes">
//         {
//           <svg
//             width={`${window.innerWidth}`}
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <rect x="0" width="9.01%" height="100%" rx="1" />
//           </svg>
//         }
//       </div>
//     )
//   }
// }

// export default NoteContainer
