import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ListItem.css";

function ListForm() {
  const postData = (e) => {
    axios
      .post("https://reqres.in/api/users/2", {
        name: "morpheus",
        job: "leader",
      })
      .then((res) => {
        console.log(res);
        const data = res.status;
        alert(data);
      });
  };

  const getData = () => {
    axios
      .get("https://reqres.in/api/users/2")
      .then((res) => {
        console.log(res);
        const data = res.status;
        alert(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onDelete = (id) => {
    axios
      .delete("https://reqres.in/api/users/2" + id)
      .then((res) => {
        console.log(res);
        const data = res.status;
        console.log(data);
        alert(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    postData();
    getData();
  };
  return (
    <div className="form1">
      <button className="btn" onClick={onDelete}>
        Delete from api
      </button>
      <button className="btn" onClick={postData}>
        Post data to api
      </button>
      <button className="btn" onClick={getData}>
        Get data from api
      </button>
    </div>
  );
}

export default ListForm;
