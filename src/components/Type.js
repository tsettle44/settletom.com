import React from 'react'
import TypeIt from 'typeit'

class Type extends React.Component {
  componentDidMount() {
    new TypeIt(this.el)
      .type('Student')
      .pause(1000)
      .delete(10)
      .type('Coder')
      .pause(1000)
      .delete(23)
      .type('Cyclist')
      .pause(1000)
      .delete(13)
      .type('Techie')
      .pause(1000)
      .delete(13)
      .options({ loop: true })
      .go()
  }

  render() {
    return (
      <span
        ref={el => {
          this.el = el
        }}
      />
    )
  }
}

export default Type
