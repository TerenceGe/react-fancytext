import React from 'react'
import { shallow } from 'enzyme'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())
import FancyText from '../src/index.js'

describe('<FancyText />', () => {

  it('renders text `Hello world!`', () => {
    const wrapper = shallow(<FancyText>Hello, world!</FancyText>)
    expect(wrapper).to.have.text('Hello, world!')
  })

  it('dosen\'t render <div>Hello world!</div>', () => {
    const wrapper = shallow(<FancyText><div>Hello, world!</div></FancyText>)
    expect(wrapper.contains(<div>Hello, world!</div>)).to.equal(false)
  })

  it('renders tag name `h1`', () => {
    const wrapper = shallow(<FancyText tagName='h1'>Hello, world!</FancyText>)
    expect(wrapper.is('h1')).to.equal(true)
  })

})
