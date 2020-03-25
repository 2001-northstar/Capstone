import React, {useEffect, useRef} from 'react'
import {gsap, TweenLite, TweenMax, Power0, TimelineLite} from 'gsap'
import wholeNote from '../../public/wholeNote.svg'

const NoteContainer = () => {
  let note = useRef(null)
  let tl = new TimelineLite({delay: 0.8})

  useEffect(() => {
    tl.from(note, 3, {x: 0, y: 500})
    tl.to(note, 0.5, {x: 500, y: 0})
    console.log(note)
  }, [])
  return (
    <div id="notes">
      <div className="svg1" ref={el => (note = el)}>
        <img src={wholeNote} alt="note" />
      </div>
      <div className="svg2" ref={el => (note = el)}>
        <img src={wholeNote} alt="note" />
      </div>
      <div className="svg3" ref={el => (note = el)}>
        <img src={wholeNote} alt="note" />
      </div>
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
