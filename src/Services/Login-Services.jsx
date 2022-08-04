import axios from "axios";

const clickHandler = async (dispatch, { username, password }) => {
  try {
    const { data } = await axios.post("http://13.76.214.165:8001/api/login", {
      username,
      password,
    });
    localStorage.setItem("token", data.token);
    dispatch({type:"LOGIN", payload:data.token})
    console.log(data.token);
  } catch (err) {
    console.log(err);
    dispatch({type:"ERROR"})
  }
};

export { clickHandler };
