const setUserName = (userName) => {
  return {
    type: "SET_USERNAME",
    payload: userName,
  };
};

export default setUserName;
