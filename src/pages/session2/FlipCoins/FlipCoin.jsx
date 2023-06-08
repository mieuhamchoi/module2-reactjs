import React, { Component } from 'react'
import './FlipCoin.scss'; // link css
export default class FlipCoin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      isFront: true,
      isRoling: true,
      countFaceUp: 0,
      countFaceDown: 0
    };
  }

  sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  click = async ()  => {
    const coin = document.querySelector('.coin');

    setTimeout(() => {
      if (Math.random() < 0.5) {
        this.setState({isRoling: false})
      } else {
        this.setState({isRoling: false})
      }
    }, Math.floor(Math.random() * 3000) + 1000);

    while(this.state.isRoling) {
      if (this.state.isFront) {
        coin.style.transform = 'rotateY(180deg)';
        this.setState({isFront: false})
      } else {
        coin.style.transform = 'rotateY(0deg)';
        this.setState({isFront: true})
      }
      await this.sleep(250)
    }

    this.state.isFront ? this.setState({countFaceUp: this.state.countFaceUp + 1}) : this.setState({countFaceDown: this.state.countFaceDown + 1})
    this.setState({isRoling: true})
  };

  reset = () => {
    this.setState({countFaceUp: 0, countFaceDown: 0})
  }

  render() {
    return (
      <>
        <h5>Flip Coin - Click to coin for rotating</h5>
        <div className="flipCoin__container">
            <div onClick={() => this.click()} className="coin">
              <div className="side front"></div>
              <div className="side back"></div>
            </div>
        </div>

        <div className="flipCoin__tools"> 
            <span>Số lần mặt trên: {this.state.countFaceUp}</span>
            <br/>
            <span>Số lần mặt dưới: {this.state.countFaceDown}</span>
            <br/>
            <button onClick={() => this.reset()}>Reset Điểm</button>
        </div>
      </>
    )
  }
}

