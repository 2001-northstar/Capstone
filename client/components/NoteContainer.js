import React from 'react'

class NoteContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="notes">
        {
          <svg
            width={`${window.innerWidth}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0" width="9.01%" height="100%" rx="1" />
          </svg>
        }
      </div>
    )
  }
}

export default NoteContainer
