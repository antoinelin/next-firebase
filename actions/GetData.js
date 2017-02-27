import ActionTypes from './../constants/FirebaseConstants'
import Firebase from './Firebase'

// Request action
// ---------------------------------o
function getDataRequestedAction() {
  return {
    type: ActionTypes.GetDataRequested,
  }
}
// Action rejected
// ---------------------------------o
function getDataRejectedAction() {
  return {
    type: ActionTypes.GetDataRejected,
  }
}
// Action fullfilled
// ---------------------------------o
function getDataFulfilledAction(data) {
  return {
    type: ActionTypes.GetDataFulfilled,
    data,
  }
}

// Dispatch Firebase data through the store
// -------------------------------------------------o
export function getData() {
  return dispatch => {
    dispatch(getDataRequestedAction())
    // Database call
    return Firebase.ref('/').once('value', snap => {
      const data = snap.val()
      dispatch(getDataFulfilledAction(data))
    })
    .catch((error) => {
      console.log('%The read failed' + error, 'color: #da5555; font-size: 14px')
      dispatch(getDataRejectedAction())
    })
  }
}
