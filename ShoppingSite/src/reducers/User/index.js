const initialState = {
  userName: "hello User"
};

const userNameReducer = (state = initialState, { type, payload })=> {
  switch (type) {
    case "SET_USERNAME":
      return { ...state, userName: payload };

    default:
      return state;
  }
};

export default userNameReducer;
