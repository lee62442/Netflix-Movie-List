import axios from "axios";

/*4 actions defined here, Fetch, Add, Remove and the helper to get data*/
export function fetch(response) {
  return {
    type: "FETCH",
    data: response.data,
  };
}

export function add(id) {
  return {
    type: "ADD",
    id: id,
  };
}

export function remove(id) {
  return {
    type: "REMOVE",
    id: id,
  };
}

export function getlist() {
  return (dispatch) => {
    axios
      .get("https://5cf057ef5660c40014949832.mockapi.io/api/shows")
      .then((response) => {
        dispatch(fetch(response));
      });
  };
}
