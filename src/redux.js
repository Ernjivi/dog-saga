const API_CALL_REQUEST = 'API_CALL_REQUEST';
const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
const API_CALL_FAILURE = 'API_CALL_FAILURE';


const initialState = {
  fetching: false,
  dog: null,
  error: null
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case API_CALL_REQUEST:
      return {...state, fetching: true, error: null};
    case API_CALL_SUCCESS:
      return {...state, fetching: false, dog: action.dog};
    case API_CALL_FAILURE:
      return {...state, error: action.error, dog: null}
    default:
      return state;
  }
}

export default reducer;