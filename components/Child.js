import React, { Component } from 'react'

export default class Child extends Component {
  render = () => {
    const { data } = this.props.firebase
    // JSX
    return (
      <div>
        {
          data.map((project, index) => {
            return <h2 key={index}>{project.title}</h2>
          })
        }
      </div>
    )
  }
}
