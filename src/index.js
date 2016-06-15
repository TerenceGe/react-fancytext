import ReactDOM from 'react-dom'
import React from 'react'
import style from './style.css'

class FancyText extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  renderLetters(text) {
    let letters = []
    let timingFunctions = ['linear', 'ease-in', 'ease-out', 'ease-in-out', 'ease']
    for (let i = 0; i < text.length; i++) {
      let time = this.getRandomInt(30,60) / 10
      let timingFunction = timingFunctions[this.getRandomInt(0,5)]
      let animationStyle = {
        WebkitAnimationDuration: time + 's',
        animationDuration: time + 's',
        WebkitAnimationTimingFunction: timingFunction,
        animationTimingFunction: timingFunction,
      }
      letters.push(<span key={i} className={style.charAnimation + ' char' + i} style={animationStyle}>{text[i]}</span>)
    }
    return letters
  }

  render() {
    let { tagName, children } = this.props
    tagName = tagName || 'div'
    return React.createElement(tagName, this.props, this.renderLetters(children))
  }
}

export default FancyText
