import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import "./ListItem.css";

function Register() {
  const [data, setData] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const { email, password, password2 } = data;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      toast.success("Registeration successfull");
      navigate("/content");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch, navigate]);

  function onChange(e) {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.success("Passwords do not match");
    } else {
      const userData = {
        email,
        password,
      };
      dispatch(register(userData));
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Email"
          onChange={onChange}
          value={email}
          name="email"
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={onChange}
          value={password}
          name="password"
          className="input"
        />
        <input
          type="password"
          placeholder="Confirm Your Password"
          onChange={onChange}
          value={password2}
          name="password2"
          className="input"
        />
        <input type="submit" value="Register" className="btn" />
      </form>
    </div>
  );
}

export default Register;
