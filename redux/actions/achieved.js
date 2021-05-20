import axios from "axios";

export const GET_ACHIEVEMENTS = "GET_ACHIEVEMENTS";
export const ADD_ACHIEVEMENT = "ADD_ACHIEVEMENT";
export const EDIT_ACHIEVEMENT = "EDIT_ACHIEVEMENT";
export const PLUS_ONE = "PLUS_ONE";
export const FETCHING = "FETCHING";
const api = "https://achieved-api.herokuapp.com/api";

export const getAchievement = () => async (dispatch) => {
  try {
    dispatch({ type: FETCHING });
    const resp = await axios.get(`${api}/tasks`);
    dispatch({ type: GET_ACHIEVEMENTS, payload: resp.data });
  } catch (error) {
    console.log(error);
  }
};

export const addAchievement =
  (name, color, navigation, route) => async (dispatch) => {
    try {
      const resp = await axios.post(`${api}/tasks`, { name, color: +color });
      navigation.goBack();
      route.params.updateData();
      // dispatch({ type: ADD_ACHIEVEMENT, payload: resp.data });
    } catch (error) {
      console.log(error);
    }
  };

export const editAchievement =
  (name, color, id, navigation, route) => async (dispatch) => {
    try {
      const resp = axios.patch(
        `https://achieved-api.herokuapp.com/api/tasks/${id}`,
        { name, color: +color }
      );
      navigation.goBack();
      route.params.updateData();
      // const nAchievements = [...achievements];
      // nAchievements.splice(id, 1, { title, type });
      // dispatch({ type: EDIT_ACHIEVEMENT, payload: nAchievements });
      // navigation.state.params.updateData();
      // navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

export const plusOne = (id, update) => async (dispatch) => {
  try {
    const resp = await axios.patch(`${api}/tasks/add/${id}`);
    update();
  } catch (error) {
    console.log(error);
  }
};

export const onDelete = (id, update) => async (dispatch) => {
  try {
    const resp = await axios.delete(`${api}/tasks/${id}`);
    update();
  } catch (error) {
    console.log(error);
  }
};
