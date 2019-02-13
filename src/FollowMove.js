import React, { Component } from 'react';
import './App.css';

class FollowMove extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0
    }
  }

  _onMouseMove(e) {
    this.setState({ 
      x: e.nativeEvent.offsetX, 
      y: e.nativeEvent.offsetY 
    });
  }
  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    const width = canvas.width;
    const height = canvas.height;
    ctx.save();
    ctx.beginPath();
    ctx.clearRect(0, 0, width, height);
    ctx.translate(width / 2, height / 2);
    ctx.rotate((this.state.x * Math.PI) / 180);
    ctx.fillStyle = '#000';
    ctx.fillRect(-width / 4, -height / 4, width / 2, height / 2);
    ctx.restore();

  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <div>
            <p>
              {this.state.x} {this.state.y}
            </p>
            <canvas 
              ref="canvas" 
              width={500} 
              height={500} 
              style={{border: '2px dashed white'}}
              onPointerMove={this._onMouseMove.bind(this)}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default FollowMove;
