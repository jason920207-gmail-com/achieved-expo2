import { GET_ALL_DATEOBJECTS, FETCHING_DATAOBJECTS } from '../actions/date'
const initialState = {
  dates: [],
  isLoading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATAOBJECTS:
      return { ...state, isLoading: true };
    case GET_ALL_DATEOBJECTS:
      // console.log("reducer", action.payload)
      return { ...state, dates: action.payload, isLoading: false };
    default:
      return state;
  }
}