import { useState } from "react";
import "./App.css";

function App() {
  const [currentdate, setcurrentdate] = useState(
    new Date(Date.now()).toLocaleDateString()
  );
  const [Registration, setRegistration] = useState("");
  const [Name, setName] = useState("");
  const [GuardianName, setGuardianName] = useState("");
  const [Occupation, setOccupation] = useState("");
  const [MobileNo, setMobileNo] = useState("");
  const [GuardianMobileNo, setGuardianMobileNo] = useState("");
  const [BirthDate, setBirthDate] = useState("");
  const [Gender, setGender] = useState("");
  const [Address, setAddress] = useState("");
  const [Courses, setCourses] = useState([]);

  return (
    <>
      <div className=" p-5 w-screen">
        <div className="w-[90%] headerdiv flex justify-between items-center">
          <div className="flex flex-col gap-5 items-start py-4 px-2 justify-center">
            <div className="">
              <span className="font-bold">Date : </span>
              <span className="border-b-4 border-dotted p-0.5">
                {currentdate}
              </span>
            </div>
            <div className="">
              <label className="font-bold" htmlFor="regno">
                Registration No. :{" "}
              </label>
              <input
                type="text"
                className="outline-none border-2 rounded-sm mx-1 p-1"
                onChange={(e) => {
                  setRegistration(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="text-center flex flex-col items-center justify-center gap-0.5">
            <img
              className="rounded-sm border-2 mix-blend-color-burn w-[200px]"
              src="https://www.oxfordinstitute.in/img/logo-bkp.jpg"
              alt=""
            />
            <p className="font-bold text-center">
              (A unit of Hindustan Soft Education Ltd.)
            </p>
            <span className="text-2xl font-bold">EQUIRY FORM</span>
          </div>
          <div className="flex flex-col items-center justify-center font-bold">
            <span>Choose a Photo</span>
            <input
              type="file"
              className="h-[100px] w-[100px] cursor-pointer text-[1px] border"
              accept=".png ,.jpg , .jpeg , .svg , .webp"
              name="affix"
            />
          </div>
        </div>

        <div className="mt-5 infosdiv">
          <div className="my-3">
            <label htmlFor="name">Name (In Capital Letters)</label>
            <input
              type="text"
              className="w-[50%] uppercase mx-2 px-1 outline-none border-b-2 "
            />
          </div>

          <div className="my-3">
            <label htmlFor="guardian name">Father's/Guardian's Name</label>
            <input
              type="text"
              className="w-[30%] mx-2 px-1 capitalize outline-none border-b-2 "
            />
            <label htmlFor="Occupation">Occupation</label>
            <input
              type="text"
              className="w-[30%] mx-2 px-1 capitalize outline-none border-b-2 "
            />
          </div>
          <div className="my-3">
            <label htmlFor="mobno">Mobile No.</label>
            <input
              type="phone"
              className="w-[30%] mx-2 px-1 capitalize outline-none border-b-2 "
            />
            <label htmlFor="guarno">Guardians Mobile No.</label>
            <input
              type="phone"
              className="w-[30%] mx-2 px-1 capitalize outline-none border-b-2 "
            />
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
