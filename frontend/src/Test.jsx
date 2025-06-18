import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Test() {
  const UserInfo = useSelector((state) => state.User.userInfo);
  console.log(UserInfo)
  const [obj, setobj] = useState({
    name: "",
    age: "",
  });
  return (
    <div>
      Test
      <input
        type="text"
        onChange={(e) => {
          setobj((prevObj) => ({
            ...prevObj,
            name: e.target.value,
          }));
          console.log(obj);
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          setobj((prevObj) => ({
            ...prevObj,
            name: e.target.value,
          }));
          console.log(obj);
        }}
      />
    </div>
  );
}

export default Test;
