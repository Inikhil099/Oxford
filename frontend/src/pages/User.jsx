import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/userInfos/userInfoSlice";

function User() {
  const dispatch = useDispatch()
  const userInfo = useSelector((state)=> state.User.userInfo)
  const [query, setquery] = useState("")
  const handleSubmitButton = async()=>{
    try {
      let res = await axios.get(`http://localhost:3000/user/${query}`,{withCredentials:true})
    if(res.status == 200 && res.data.data){
      console.log(res.data.data)
      dispatch(setUserInfo(res.data.data))
    }
    } catch (error) {
      console.log("error occured")
    }
  }
  return (
    <div>
      <p className="bg-red-500 text-center">Find Your Details</p>
      <input type="text" onChange={(e)=>{setquery(e.target.value)}} placeholder="Enter Your Mobile or Guardian Mobile No." className="border p-2.5 rounded-2xl m-2.5 w-[50%]" />
      <button onClick={(e)=>{handleSubmitButton()}} className="bg-blue-500 rounded-xl text-white p-2.5">Submit</button>
    </div>
  );
}

export default User;
