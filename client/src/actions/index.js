import axios from "axios";

export const checkIfUserLogin = () => async (dispatch) => {
  const response = await axios.get("/api/current_user");

   dispatch({ type: "CHECK_USER", payload: response.data });
};

export const logOut = () => {
    return {
        type: "LOG_OUT"
    }
}
