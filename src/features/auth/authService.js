import axios from "axios";

const url = "https://reqres.in/api/";

// register a new user
const register = async (user) => {
  const res = await axios.post(url + "register", user);
  if (res.data) {
    localStorage.setItem("token", res.data.token);
  }
  return res.data;
};

// login a user
const login = async (user) => {
  const res = await axios.post(url + "login", user);
  if (res.data) {
    localStorage.setItem("token", res.data.token);
  }
  return res.data;
};

//logout a user
const logout = async () => {
  localStorage.removeItem("token");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
