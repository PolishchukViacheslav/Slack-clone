export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
}

const GET_USER = "GET_USER";
export const setUser = (data) => {
  return {
    type: GET_USER,
    payload: data
  }
}

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
}

export default reducer;