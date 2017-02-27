import { connect } from 'react-redux'
import { getData } from './../actions/GetData'
import Firebase from './../components/Firebase'

function mapStateToProps(state) {
  return {
    data: state.data,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onGetData: () => dispatch(getData()),
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Firebase)

export default Container
