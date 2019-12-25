import { SET_ITEM_ARRAY } from "./type";

export const setItemArray = newArray => dispatch => {
  return dispatch({
    type: SET_ITEM_ARRAY,
    newArray
  });
};
