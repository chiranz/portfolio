import {
  OPEN_SIDE_DRAWER,
  CLOSE_SIDE_DRAWER,
  TOGGLE_SIDE_DRAWER
} from "./types";

export const closeSideDrawer = () => dispatch =>
  dispatch({ type: CLOSE_SIDE_DRAWER });

export const openSideDrawer = () => dispatch =>
  dispatch({
    type: OPEN_SIDE_DRAWER
  });

export const toggleSideDrawer = () => dispatch =>
  dispatch({
    type: TOGGLE_SIDE_DRAWER
  });
