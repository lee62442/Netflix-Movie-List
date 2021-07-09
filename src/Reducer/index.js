const State = {
  mylist: [],
  recommendations: [],
};

const listReducer = (state = State, action) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        mylist: action.data[0].mylist,
        recommendations: action.data[0].recommendations,
      };
    case "ADD":
      return {
        ...state,
        mylist: [...state.mylist, state.recommendations[action.id]],
        recommendations: [
          ...state.recommendations.slice(0, action.id),
          ...state.recommendations.slice(action.id + 1),
        ],
      };
    case "REMOVE":
      return {
        ...state,
        mylist: [...state.mylist.slice(0, action.id), ...state.mylist.slice(action.id + 1)],
        recommendations: [...state.recommendations, state.mylist[action.id]],
      };
    default:
      return state;
  }
};

export default listReducer;
