import React from 'react'
import withRedux from 'next-redux-wrapper'
import initStore from '../store'
import Container from './../containers/FirebaseContainer'

import Child from './../components/Child'

class Index extends React.Component {
  render() {
    return (
      <Container>
        <Child />
      </Container>
    )
  }
}

export default withRedux(initStore)(Index)
