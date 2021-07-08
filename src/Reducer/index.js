const State = {
  ml: [],
  rec: [],
};

const listReducer = (state = State, action) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        ml: action.data[0].mylist,
        rec: action.data[0].recommendations,
      };
    case "ADD":
      return {
        ...state,
        ml: [...state.ml, state.rec[action.id]],
        rec: [
          ...state.rec.slice(0, action.id),
          ...state.rec.slice(action.id + 1),
        ],
      };
    case "REMOVE":
      return {
        ...state,
        ml: [...state.ml.slice(0, action.id), ...state.ml.slice(action.id + 1)],
        rec: [...state.rec, state.ml[action.id]],
      };
    default:
      return state;
  }
};

export default listReducer;
