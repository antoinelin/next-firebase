import ActionTypes from './../constants/FirebaseConstants'

export default function FirebaseReducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.GetDataRequested: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: '',
      })
    }
    case ActionTypes.GetDataRejected: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in getting data',
      })
    }
    case ActionTypes.GetDataFulfilled: {
      const { data } = action.data
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Got users',
      })
      newState.data = []
      if (data) {
        newState.data = Object.keys(data).map(i => data[i])
      }
      return newState
    }
    default:
      return state
  }
}
