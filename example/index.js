import ReactDOM from 'react-dom'
import React from 'react'
import style from './style.css'
import FancyText from '../src/index.js'

class Container extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div className={style.container}><FancyText text='Hello, world.'></FancyText></div>
    )
  }
}

ReactDOM.render(
  <Container />,
  document.getElementById('root')
)
