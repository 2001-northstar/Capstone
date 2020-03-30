import React from 'react'

const NoteLabels = props => {
  const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F']

  let counter = 0
  return (
    <div id="noteLabelContainer">
      {notes.map(note => (
        <div
          key={counter++}
          className="noteLabel"
          id={counter >= 6 ? `${note}3` : `${note}4`}
        >
          {note}
        </div>
      ))}
    </div>
  )
}

export default NoteLabels
