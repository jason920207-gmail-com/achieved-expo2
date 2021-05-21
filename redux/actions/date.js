import axios from 'axios';

export const GET_ALL_DATEOBJECTS = "GET_ALL_DATEOBJECTS";
export const FETCHING_DATAOBJECTS = "FETCHING_DATAOBJECTS";


export const receiveDateObjects = (payload) => {
  // console.log(payload)
  return ({
    type: GET_ALL_DATEOBJECTS,
    payload: payload
  })
};

const api = 'https://achieved-api.herokuapp.com/api';

export const fetchDateObjects = () => (dispatch) => {
  dispatch({ type: FETCHING_DATAOBJECTS })
  return (
    axios.get(`${api}/dates`)
      .then(res => {
        // console.log(res.data)
        dispatch(receiveDateObjects(res.data))
      })
      .catch(err => console.log(err))
  )
}