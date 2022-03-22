const GET_MESSAGE_REQUEST = 'GET_MESSAGE_REQUEST';
const GET_MESSAGE_SUCCESS = 'GET_MESSAGE_SUCCESS';
const GET_MESSAGE_FAILED = 'GET_MESSAGE_FAILED';

export const getMessage = () => (dispatch) => {
  dispatch({ type: GET_MESSAGE_REQUEST })

  fetch('/v1/messages')
    .then(res => res.json())
    .then(data => {
      dispatch({ type: GET_MESSAGE_SUCCESS, payload: data.message })
    })
    .catch(err => dispatch({ type: GET_MESSAGE_FAILED, payload: err }))
}

const initialState = {
  loading: false, 
  message: '', 
  error: null
}
const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE_REQUEST:
      return { loading: true, message: '', error: null}
    case GET_MESSAGE_SUCCESS:
      return { loading: false, message: action.payload }
    case GET_MESSAGE_FAILED:
      return { loading: false, message: '', error: action.payload }
    default:
      return state;
  }
}

export default messagesReducer;
