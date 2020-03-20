import React from 'react'

export default class Canvas extends React.Component {
  componentDidMount() {
    const ctx = this.canvas.getContext('2d')
    // ctx stuff can go in here, namely imported functions that do animation things or what-have-you.
  }
  render() {
    return (
      <canvas
        id="canvas"
        height={300}
        ref={ref => {
          this.canvas = ref
        }}
      />
    )
  }
}
