import {
  CLOSE_SIDE_DRAWER,
  OPEN_SIDE_DRAWER,
  TOGGLE_SIDE_DRAWER
} from "../actions/types";

const initialState = {
  isSideDrawerOpen: false,
  isLoading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SIDE_DRAWER:
      return {
        ...state,
        isSideDrawerOpen: !state.isSideDrawerOpen
      };
    case CLOSE_SIDE_DRAWER:
      return {
        ...state,
        isSideDrawerOpen: false
      };
    case OPEN_SIDE_DRAWER:
      return {
        ...state,
        isSideDrawerOpen: true
      };
    default:
      return state;
  }
}
