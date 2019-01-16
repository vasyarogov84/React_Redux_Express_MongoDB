import axios from "axios";

export const checkIfUserLogin = () => async dispatch => {
  const response = await axios.get("/api/current_user");

  dispatch({ type: "CHECK_USER", payload: response.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  dispatch({
    type: "CHECK_USER",
    payload: res.data
  });
};
