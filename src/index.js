import ReactDOM from 'react-dom'
import React from 'react'

class FancyText extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  renderLetters(text) {
    let worlds = []
    let letters = []
    for (let i = 0; i < text.length; i++) {
      letters.push(<span key={i} className={'char'+i}>{text[i]}</span>)
    }
    return letters
  }

  render() {
    let { tagName, text } = this.props
    tagName = tagName || 'div'
    return React.createElement(tagName, this.props, this.renderLetters(text))
  }
}

export default FancyText
