import { SET_ITEM_ARRAY } from "./type";

const defaultState = {
  items: []
};
export default function alert(state = defaultState, action) {
  switch (action.type) {
    case SET_ITEM_ARRAY:
      return { ...state, items: action.newArray };
    default:
      return state;
  }
}
