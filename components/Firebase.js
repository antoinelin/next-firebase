import React, { Component } from 'react'

export default class Firebase extends Component {
  componentDidMount() {
    this.props.onGetData()
  }
  render = () => {
    const { data } = this.props.data
    // JSX
    return (
      <div>
        {
          !data &&
          <h1>loading</h1>
        }
        {
          data &&
          React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
              firebase: this.props.data,
            })
          })
        }
        <h2>Open the console -></h2>
      </div>
    )
  }
}
