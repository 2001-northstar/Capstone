import React from 'react'

class NoteContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="notes">
        <svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="120" width="100" height="100" rx="15" />
        </svg>
      </div>
    )
  }
}

export default NoteContainer
