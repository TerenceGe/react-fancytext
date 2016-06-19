import ReactDOM from 'react-dom'
import React from 'react'

class FancyText extends React.Component {
  constructor(props, context) {
    super(props, context)
  	let style = document.createElement('style')
  	style.appendChild(document.createTextNode(''))
  	document.head.appendChild(style)
    this.state = {
      timingFunctions: ['linear', 'ease-in', 'ease-out', 'ease-in-out', 'ease'],
      styleSheet: style.sheet,
      textColor: this.props.textColor || '#F9F6F5',
      shadowColor: this.props.textColor || '#fff'
    }
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  renderLetters(text) {
    let keyframes =
    `@keyframes fading {
      from {
        color: rgba(255,255,255,0);
        text-shadow: 0 0 .5em ${this.state.shadowColor};
      }
      to {
        color: ${this.state.textColor};
        text-shadow: 0 0 .1em ${this.state.shadowColor};
      }
    }`
    this.state.styleSheet.insertRule(keyframes, this.state.styleSheet.cssRules.length)

    let letters = []
    for (let i = 0; i < text.length; i++) {
      let time = this.getRandomInt(30,60) / 10
      let timingFunction = this.state.timingFunctions[this.getRandomInt(0,5)]
      let animationStyle = {
        WebkitAnimationName: 'fading',
        animationName: 'fading',
        WebkitAnimationDuration: time + 's',
        animationDuration: time + 's',
        WebkitAnimationDelay: '0s',
        animationDelay: '0s',
        WebkitAnimationIterationCount: 'infinite',
        animationIterationCount: 'infinite',
        WebkitAnimationDirection: 'alternate',
        animationDirection: 'alternate',
        WebkitAnimationTimingFunction: timingFunction,
        animationTimingFunction: timingFunction,
      }
      letters.push(<span key={i} className={'char' + i} style={animationStyle}>{text[i]}</span>)
    }
    return letters
  }

  render() {
    let { tagName, children } = this.props
    tagName = tagName || 'div'
    return React.createElement(tagName, this.props, this.renderLetters(children))
  }
}

FancyText.propTypes = {
  textColor: React.PropTypes.string,
  shadowColor: React.PropTypes.string,
  children: React.PropTypes.string
}

export default FancyText
