import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ListItem from "./ListItem";
import { logout, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Content() {
  // const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // if (user) {
  //   navigate("/content");
  // } else {
  //   navigate("/login");
  // }

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };
  return (
    <div>
      <ListItem />
      <button onClick={onLogout}>Log Out</button>
    </div>
  );
}

export default Content;
