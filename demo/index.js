import ReactDOM from 'react-dom'
import React from 'react'
import style from './style.css'
import FancyText from 'react-fancytext'

class Container extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div className={style.container}><FancyText>不一样的视角看世界！</FancyText></div>
    )
  }
}

ReactDOM.render(
  <Container />,
  document.getElementById('root')
)
