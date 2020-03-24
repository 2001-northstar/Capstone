import React from 'react'
import {gsap} from 'gsap'

class NoteContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let tl = gsap.timeline()
    return (
      <div id="notes">
        <h1>This is placeholder text</h1>
        <svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="120" width="100" height="100" rx="15" />
        </svg>
      </div>
    )
  }
}

export default NoteContainer
