import {
  GET_ACHIEVEMENTS,
  ADD_ACHIEVEMENT,
  EDIT_ACHIEVEMENT,
  FETCHING,
} from '../actions/achieved';

const initialState = {
  achievements: [],
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCHING:
      return { ...state, isLoading: true };
    case GET_ACHIEVEMENTS:
      return { ...state, achievements: action.payload, isLoading: false };
    // case ADD_ACHIEVEMENT:
    //   const newAchievements = [
    //     ...state.achievements,
    //     { title: action.payload.title, type: action.payload.type },
    //   ];
    //   return { ...state, achievements: newAchievements };
    // case EDIT_ACHIEVEMENT:
    //   return { ...state, achievements: action.payload };
    default:
      return state;
  }
}
