const User = require("../models/userModel");

async function handleEnrollSubmit(req, res) {
  console.log("handler");
  try {
    console.log("inside try");
    const {
      currentdate,
      RegistrationNo,
      Name,
      GuardianName,
      Occupation,
      MobileNo,
      GuardianMobileNo,
      BirthDate,
      Gender,
      Address,
      Courses,
      WrittenTestTime,
      Venue,
      RemarkByTheCouncellor,
      Qualifications,
    } = req.body;

    console.log("initiating db create");
    const user = await User.create({
      currentdate,
      RegistrationNo,
      Name,
      GuardianName,
      Occupation,
      MobileNo,
      GuardianMobileNo,
      BirthDate,
      Gender,
      Address,
      Courses,
      WrittenTestTime,
      Venue,
      RemarkByTheCouncellor,
      Qualifications,
    });
    console.log("db create done");
    console.log(user);

    return res.status(200).json({ data: user });
  } catch (error) {
    res.status(400).send("sorry for the Server Error");
  }
}

async function GetUserInfo(req, res) {
  console.log("req made");
  try {
    const num = req.params.querynumber;
    const user = await User.findOne({
      $or: [{ MobileNo: num }, { GuardianMobileNo: num }],
    });
    if (user) {
      return res.status(200).json({ data: user });
    } else {
      return res.status(400).send("No user found. Enroll first.");
    }
  } catch (error) {
    res.status(500).send("server error ");
  }
}

module.exports = { handleEnrollSubmit, GetUserInfo };
