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
    let keyframes = `
      @-webkit-keyframes fading {
        from {
          color: rgba(255,255,255,0);
          text-shadow: 0 0 .5em ${this.state.shadowColor};
        }
        to {
          color: ${this.state.textColor};
          text-shadow: 0 0 .1em ${this.state.shadowColor};
        }
      }
      @keyframes fading {
        from {
          color: rgba(255,255,255,0);
          text-shadow: 0 0 .5em ${this.state.shadowColor};
        }
        to {
          color: ${this.state.textColor};
          text-shadow: 0 0 .1em ${this.state.shadowColor};
        }
      }
    `
    this.state.styleSheet.insertRule(keyframes, this.state.styleSheet.cssRules.length)

    let letters = []
    for (let i = 0; i < text.length; i++) {
      let time = this.getRandomInt(30,60) / 10
      let timingFunction = this.state.timingFunctions[this.getRandomInt(0,5)]
      let animationStyle = {
        animation: `fading ${time}s ${timingFunction} 0s infinite alternate`,
        WebkitAnimation: `fading ${time}s ${timingFunction} 0s infinite alternate`
      }
      letters.push(<span key={i} className={'char' + i} style={animationStyle}>{text[i]}</span>)
    }
    return letters
  }

  render() {
    let { tagName, children, ...props } = this.props
    tagName = tagName || 'div'
    return React.createElement(tagName, {...props}, this.renderLetters(children))
  }
}

FancyText.propTypes = {
  textColor: React.PropTypes.string,
  shadowColor: React.PropTypes.string,
  children: React.PropTypes.string,
  tagName: React.PropTypes.string
}

export default FancyText
