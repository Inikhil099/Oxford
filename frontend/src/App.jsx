import { useRef, useState } from "react";
import "./App.css";
import Branches from "./components/Branches";
import Footer from "./components/Footer";
import axios from "axios";
import { branches, selectCourses } from "./components/Arr";
import DefaultImage from "./assets/DefaultImage.jpg";

function App() {
  const workOnCourses = (e) => {
    if (e.target.checked) {
      Courses.push(e.target.value);
    }
    if (!e.target.checked) {
      setCourses(Courses.filter((x) => x != e.target.value));
    }
  };

  const imageRef = useRef(null);
  const [currentdate, setcurrentdate] = useState(
    new Date(Date.now()).toLocaleDateString()
  );
  const [image, setimage] = useState("");
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
  const [WrittenTestTime, setWrittenTestTime] = useState("");
  const [Venue, setVenue] = useState("");
  const [RemarkByTheCouncellor, setRemarkByTheCouncellor] = useState("");
  const [Qualifications, setQualifications] = useState({
    Matric: {
      Board_University: "",
      Percentage: "",
      Period: {
        From: "",
        To: "",
      },
      Stream: "",
    },
    Twelfth: {
      Board_University: "",
      Percentage: "",
      Period: {
        From: "",
        To: "",
      },
      Stream: "",
    },
    Graduation: {
      Board_University: "",
      Percentage: "",
      Period: {
        From: "",
        To: "",
      },
      Stream: "",
    },
  });

  const handleSubmit = async () => {
    const res = await axios.post(
      "http://localhost:3000/enroll",
      {
        currentdate, //check
        Registration, //check
        Name, //check
        GuardianName, //check
        Occupation, //check
        MobileNo, //check
        GuardianMobileNo, //check
        // BirthDate,
        Gender, //check
        Address, //check
        Courses, //check
        WrittenTestTime, //check
        Venue, //check
        RemarkByTheCouncellor, //check
        Qualifications,
      },
      { withCredentials: true }
    );
    console.log(res);
  };

  return (
    <>
      <div className=" px-10 py-5 w-screen flex flex-col justify-center items-center">
        <div className="w-full headerdiv flex justify-between items-center">
          <div className="flex  flex-col gap-y-5 items-start py-4 px-2 justify-center">
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
                value={Registration}
                onChange={(e) => {
                  setRegistration(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="text-center  flex flex-col items-center justify-center gap-0.5">
            <img
              className="rounded-sm border-2 w-[200px]"
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
              ref={imageRef}
              type="file"
              className="hidden"
              accept=".png ,.jpg , .jpeg , .svg , .webp"
              name="affix"
            />
            <img
              src={image ? image : DefaultImage}
              alt=""
              onClick={() => {
                imageRef.current.click();
              }}
              className="h-[100px] w-[100px] cursor-pointer text-[1px] border"
            />
          </div>
        </div>

        <div className="mt-5 p-5 flex flex-col justify-center  w-full infosdiv">
          <div className="my-3 mx-auto  w-full">
            <label htmlFor="name">Name (In Capital Letters)</label>
            <input
              value={Name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              className="w-[50%] uppercase mx-2 px-1 outline-none border-b-2 "
            />
          </div>

          <div className="my-3 flex gap-x-2.5">
            <label htmlFor="guardian name">Father's/Guardian's Name</label>
            <input
              onChange={(e) => {
                setGuardianName(e.target.value);
              }}
              type="text"
              className="w-[35%] mx-2 px-1 capitalize outline-none border-b-2 "
            />
            <label htmlFor="Occupation">Occupation</label>
            <input
              onChange={(e) => {
                setOccupation(e.target.value);
              }}
              type="text"
              className="w-[35%] mx-2 px-1 capitalize outline-none border-b-2 "
            />
          </div>

          <div className="my-3 flex gap-x-2.5">
            <label htmlFor="mobno">Mobile No.</label>
            <input
              onChange={(e) => {
                setMobileNo(e.target.value);
              }}
              type="phone"
              className="w-[35%] mx-2 px-1 capitalize outline-none border-b-2 "
            />
            <label htmlFor="guarno">Guardians Mobile No.</label>
            <input
              onChange={(e) => {
                setGuardianMobileNo(e.target.value);
              }}
              type="phone"
              className="w-[35%] mx-2 px-1 capitalize outline-none border-b-2 "
            />
          </div>

          <div className="my-3 flex gap-x-2.5">
            <label htmlFor="dob">Date Of Birth</label>
            <input
              onChange={(e) => {
                setBirthDate(e.target.value);
              }}
              type="date"
              className="w-[35%] mx-2 px-1 cursor-pointer capitalize outline-none border-b-2 "
            />
            <label htmlFor="Gender">Gender : </label>
            <span className="font-bold text-lg">Male</span>
            <input
              onChange={(e) => {
                setGender(e.target.value);
              }}
              value={"male"}
              name="gender"
              className="w-4 "
              type="radio"
            />
            <span className="font-bold text-lg">FeMale</span>
            <input
              onChange={(e) => {
                setGender(e.target.value);
              }}
              value={"female"}
              name="gender"
              className="w-4"
              type="radio"
            />
          </div>

          <div className="my-3 flex gap-x-2.5">
            <label htmlFor="Address">Postal Address</label>
            <input
              type="text"
              className="w-[80%] mx-2 px-1 cursor-pointer capitalize outline-none border-b-2"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="flex gap-x-5 my-5 justify-between coursesdiv">
          <p className="font-bold text-nowrap">Courses Applied - </p>
          <div className=" flex flex-wrap gap-5">
            {selectCourses.map((e, ind) => {
              return (
                <div
                  key={ind}
                  className="flex gap-1 items-center justify-center"
                >
                  <label htmlFor="">{e}</label>
                  <input
                    value={e}
                    type="checkbox"
                    onChange={(e) => {
                      workOnCourses(e);
                    }}
                    className="w-[20px] h-[20px]"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className=" w-full my-5">
          <table className="w-full text-center text-xl font-bold">
            <thead>
              <tr>
                <th className="border p-1 " rowSpan={2}>
                  Qualifications
                </th>
                <th className="border p-1 " rowSpan={2}>
                  Board / University
                </th>
                <th className="border p-1 " rowSpan={2}>
                  Percentage
                </th>
                <th className="border p-1 " colSpan={2}>
                  Period
                </th>
                <th className="border p-1 " rowSpan={2}>
                  stream
                </th>
              </tr>

              <tr>
                <td className="border w-[10%]">From </td>
                <td className="border w-[10%] ">To</td>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="font-bold border">Matric</td>
                <td className=" border">
                  <input
                    onChange={() => {
                      setQualifications(
                        ...Qualifications,
                        (Qualifications.Matric.Board_University =
                          e.target.value)
                      );
                    }}
                    type="text"
                    placeholder="Enter Your Board"
                    className="w-full p-2.5 outline-none text-center"
                  />
                </td>
                <td className=" border">
                  <input
                    onChange={() => {
                      setQualifications(
                        ...Qualifications,
                        (Qualifications.Matric.Percentage = e.target.value)
                      );
                    }}
                    type="text"
                    placeholder="Enter Your Percentage"
                    className="w-full p-2.5 outline-none text-center"
                  />
                </td>
                <td className=" border">
                  <input
                    onChange={() => {
                      setQualifications(
                        ...Qualifications,
                        (Qualifications.Matric.Period.From = e.target.value)
                      );
                    }}
                    type="text"
                    placeholder="Year"
                    className="w-full p-2.5 outline-none text-center"
                  />
                </td>
                <td className=" border">
                  <input
                    onChange={() => {
                      setQualifications(
                        ...Qualifications,
                        (Qualifications.Matric.Period.To = e.target.value)
                      );
                    }}
                    type="text"
                    placeholder="Year"
                    className="w-full p-2.5 outline-none text-center"
                  />
                </td>
                <td className=" border">
                  <input
                    onChange={() => {
                      setQualifications(
                        ...Qualifications,
                        (Qualifications.Matric.Stream = e.target.value)
                      );
                    }}
                    type="text"
                    placeholder="Enter Your Stream"
                    className="w-full p-2.5 outline-none text-center"
                  />
                </td>
              </tr>

              <tr className="">
                <td className="font-bold border">10 + 2</td>
                <td className=" border">
                  <input
                    onChange={() => {
                      setQualifications(
                        ...Qualifications,
                        (Qualifications.Twelfth.Board_University =
                          e.target.value)
                      );
                    }}
                    type="text"
                    placeholder="Enter Your Board"
                    className="w-full p-2.5 outline-none text-center"
                  />
                </td>
                <td className=" border">
                  <input
                    onChange={() => {
                      setQualifications(
                        ...Qualifications,
                        (Qualifications.Twelfth.Percentage = e.target.value)
                      );
                    }}
                    type="text"
                    placeholder="Enter Your Percentage"
                    className="w-full p-2.5 outline-none text-center"
                  />
                </td>
                <td className=" border">
                  <input
                    onChange={() => {
                      setQualifications(
                        ...Qualifications,
                        (Qualifications.Twelfth.Period.From = e.target.value)
                      );
                    }}
                    type="text"
                    placeholder="Year"
                    className="w-full p-2.5 outline-none text-center"
                  />
                </td>
                <td className=" border">
                  <input
                    onChange={() => {
                      setQualifications(
                        ...Qualifications,
                        (Qualifications.Twelfth.Period.To = e.target.value)
                      );
                    }}
                    type="text"
                    placeholder="Year"
                    className="w-full p-2.5 outline-none text-center"
                  />
                </td>
                <td className=" border">
                  <input
                    onChange={() => {
                      setQualifications(
                        ...Qualifications,
                        (Qualifications.Twelfth.Stream = e.target.value)
                      );
                    }}
                    type="text"
                    placeholder="Enter Your Stream"
                    className="w-full p-2.5 outline-none text-center"
                  />
                </td>
              </tr>

              <tr className="">
                <td className="font-bold border">Graduation</td>
                <td className=" border">
                  <input
                    onChange={() => {
                      setQualifications(
                        ...Qualifications,
                        (Qualifications.Graduation.Board_University =
                          e.target.value)
                      );
                    }}
                    type="text"
                    placeholder="Enter Your Board"
                    className="w-full p-2.5 outline-none text-center"
                  />
                </td>
                <td className=" border">
                  <input
                    onChange={() => {
                      setQualifications(
                        ...Qualifications,
                        (Qualifications.Graduation.Percentage = e.target.value)
                      );
                    }}
                    type="text"
                    placeholder="Enter Your Percentage"
                    className="w-full p-2.5 outline-none text-center"
                  />
                </td>
                <td className=" border">
                  <input
                    onChange={() => {
                      setQualifications(
                        ...Qualifications,
                        (Qualifications.Graduation.Period.From = e.target.value)
                      );
                    }}
                    type="text"
                    placeholder="Year"
                    className="w-full p-2.5 outline-none text-center"
                  />
                </td>
                <td className=" border">
                  <input
                    onChange={() => {
                      setQualifications(
                        ...Qualifications,
                        (Qualifications.Graduation.Period.To = e.target.value)
                      );
                    }}
                    type="text"
                    placeholder="Year"
                    className="w-full p-2.5 outline-none text-center"
                  />
                </td>
                <td className=" border">
                  <input
                    onChange={() => {
                      setQualifications(
                        ...Qualifications,
                        (Qualifications.Graduation.Stream = e.target.value)
                      );
                    }}
                    type="text"
                    placeholder="Enter Your Stream"
                    className="w-full p-2.5 outline-none text-center"
                  />
                </td>
              </tr>
            </tbody>
            {/* ----- */}
          </table>
        </div>

        <div className="w-full font-bold text-center">
          <div className=" mx-auto p-4 border border-black">
            <div className=" mb-2">
              <span className="font-semibold">Note :</span> To register yourself
              for the test fill in the application form & submit along with two
              recent passport size photographs & photocopy of your testimonials.
            </div>

            <div className="text-center italic text-lg mb-2">
              DECLARATION BY THE APPLICANT
            </div>

            <div className="mb-2">
              <span className="font-bold">
                I declare that the information provided in the application form
                is true.
              </span>
            </div>
          </div>
        </div>

        {/* -------------------------- */}
        <div className="border my-5 border-gray-700 w-full mx-auto text-lg font-sans bg-white">
          {/* FOR OFFICE USE ONLY */}
          <div className="bg-black italic text-3xl text-white text-center font-bold py-1">
            FOR OFFICE USE ONLY
          </div>

          {/* Table: Written Test Time | Date of Written Test | Venue */}
          <div className="grid grid-cols-3 text-center border border-gray-700">
            <div className="border-r border-gray-700 py-2 font-semibold">
              Written Test Time
            </div>
            <div className="border-r border-gray-700 py-2 font-semibold">
              Date of Written Test
            </div>
            <div className="py-2 font-semibold">Remarks By The Councellor</div>
          </div>

          <div className="grid grid-cols-3 text-center border-x border-b border-gray-700">
            <div className="border-r border-gray-700 py-6">
              <input
                value={WrittenTestTime}
                type="time"
                className="cursor-pointer border p-2 rounded-4xl"
                onChange={(e) => {
                  setWrittenTestTime(e.target.value);
                }}
              />
            </div>
            <div className="border-r border-gray-700 py-6">
              {new Date(Date.now()).toLocaleDateString()}
            </div>
            <div className="p-6">
              <input
                type="text"
                className="w-full p-2.5  rounded-xl border outline-none"
                onChange={(e) => {
                  setRemarkByTheCouncellor(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        {/* ------------------------------ */}
        <div className="border-2 border-dashed w-full h-[1px] my-5"></div>
        <div className="w-full headerdiv flex justify-between items-center">
          <div className="flex flex-col gap-y-5 items-start py-4 px-2 justify-center">
            <div className="">
              <label className="font-bold" htmlFor="regno">
                Registration No. :{" "}
              </label>
              <input
                type="text"
                className="outline-none border-2 rounded-sm mx-1 p-1"
                value={Registration}
                onChange={(e) => {
                  setRegistration(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="text-center flex flex-col items-center justify-center gap-0.5">
            <img
              className="rounded-sm border-2 w-[200px]"
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
              ref={imageRef}
              type="file"
              className="hidden"
              accept=".png ,.jpg , .jpeg , .svg , .webp"
              name="affix"
            />
            <img
              src={image ? image : DefaultImage}
              alt=""
              onClick={() => {
                imageRef.current.click();
              }}
              className="h-[100px] w-[100px] cursor-pointer text-[1px] border"
            />
          </div>
        </div>

        <Branches />

        <h2 className="text-3xl font-bold">ENTRANCE TESET ADMIT CARD</h2>

        <div className="my-5 mx-auto  w-full">
          <label className="font-bold" htmlFor="name">
            Name (In Capital Letters) :{" "}
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={Name}
            type="text"
            className="w-[80%] uppercase mx-2 px-1 outline-none border-b-2 "
          />
        </div>

        <div className="border my-5 border-gray-700 w-full mx-auto text-lg font-sans bg-white">
          <div className="bg-black italic text-3xl text-white text-center font-bold py-1">
            FOR OFFICE USE ONLY
          </div>

          <div className="grid grid-cols-3 text-center border border-gray-700">
            <div className="border-r border-gray-700 py-2 font-semibold">
              Written Test Time
            </div>
            <div className="border-r border-gray-700 py-2 font-semibold">
              Date of Written Test
            </div>
            <div className="py-2 font-semibold">Venue</div>
          </div>

          <div className="grid grid-cols-3 text-center border-x border-b border-gray-700">
            <div className="border-r border-gray-700 py-6">
              <input
                value={WrittenTestTime}
                type="time"
                className="cursor-pointer border p-2 rounded-4xl"
                onChange={(e) => {
                  setWrittenTestTime(e.target.value);
                }}
              />
            </div>
            <div className="border-r border-gray-700 py-6">
              {new Date(Date.now()).toLocaleDateString()}
            </div>
            <div className="p-6">
              <select
                className="border rounded-lg p-1 outline-none"
                onChange={(e) => {
                  setVenue(e.target.value);
                }}
                name="venue"
                id=""
              >
                <option className="" value="">
                  Select Venue
                </option>
                {branches.map((e, ind) => {
                  return (
                    <option key={ind} value={e.name}>
                      {e.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>

        <Footer />

        <button
          onClick={() => {
            handleSubmit();
          }}
          className="py-2.5 px-5 font-bold text-2xl cursor-pointer border rounded-xl bg-blue-700 text-white hover:bg-blue-400"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default App;
