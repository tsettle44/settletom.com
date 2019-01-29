import React from 'react'
import TypeIt from 'typeit'

class Type extends React.Component {
  componentDidMount() {
    new TypeIt(this.el)
      .type('Student')
      .pause(1000)
      .delete(7)
      .type('Full-Stack Developer')
      .pause(1000)
      .delete(20)
      .type('Cyclist')
      .pause(1000)
      .delete(7)
      .type('Tech lover ❤️')
      .pause(1000)
      .delete(12)
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
