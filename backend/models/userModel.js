const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    Date:{
        type:Date,
        required:true
    },
    Registration: {
      type: String || Number,
      required: true,
      unique: true,
    },
    Name: {
      type: String,
      required: true,
    },
    GuardianName: {
      type: String,
      required: true,
    },
    Occupation: {
      type: String,
      required: true,
    },
    MobileNo: {
      type: String,
      required: true,
      unique: true,
    },
    GuardianMobileNo: {
      type: String,
      required: true,
      unique: true,
    },
    BirthDate: {
      type: Date,
      required: true,
    },
    Gender: {
      type: String,
      default: "",
    },
    Address: {
      type: String,
      requird: true,
    },
    Courses: [{ type: String, required: true }],
    
  },
  { timestamps: true }
);
