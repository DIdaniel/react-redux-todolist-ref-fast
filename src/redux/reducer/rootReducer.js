import { CREATE, DONE } from "../types/types";

const initialState = {
  list: [
    {
      id: 0,
      text: "척추 펴기",
      done: true,
    },
    {
      id: 1,
      text: "물 마시기",
      done: false,
    },
    {
      id: 2,
      text: "코딩하기",
      done: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((item) => {
          return item.id === action.id ? { ...item, done: true } : item;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
