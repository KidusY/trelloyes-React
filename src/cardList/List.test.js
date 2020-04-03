import React from 'react'
import ReactDOM from 'react-dom'
import List from './List'
import renderer from 'react-test-renderer'

it ('I just wanted to do the smoke test', () => {
    const div = document.createElement('div')
    ReactDOM.render(<List />, div)
    ReactDOM.unmountComponentAtNode(div)
})

it ('I just wanted to do the snapshot test', () => {
    const myRenderedElement1= renderer.create(<List />).toJSON();
    expect(myRenderedElement1).toMatchSnapshot();
})
