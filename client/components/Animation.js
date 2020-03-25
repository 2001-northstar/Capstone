import React from 'react'

class Animation extends React.Component {
  constructor(props) {
    super(props)
    this.canvasRef = React.createRef()
  }
  render() {
    return (
      <div>
        <canvas ref={this.canvasRef} />
      </div>
    )
  }
}

export default Animation
