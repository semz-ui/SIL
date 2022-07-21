import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ListItem.css";
import ListForm from "./ListForm";
import { MdDelete } from "react-icons/md";

function ListItem() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        setList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="list_item">
      <ListForm />
      <p style={{ textAlign: "center" }}>Collecting User List</p>
      <div>
        {list.map((item) => (
          <div className="list" key={item.id}>
            <div className="list1">
              <p>{item.first_name}</p>
              <p>{item.last_name}</p>
              <p>{item.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListItem;
