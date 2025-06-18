const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    currentdate: { type: String },

    RegistrationNo: {
      type: String, // fixed
      required: true,
      unique: true,
    },

    Name: { type: String, required: true },
    GuardianName: { type: String, required: true },
    Occupation: { type: String, required: true },

    MobileNo: { type: String, required: true },
    GuardianMobileNo: { type: String, required: true },

    BirthDate: { type: String },
    Gender: { type: String, default: "" },

    Address: { type: String, required: true }, // fixed typo

    Courses: [
      {
        type: String,
        required: true,
      },
    ],

    WrittenTestTime: { type: String },

    Venue: { type: String, required: true },

    RemarkByTheCouncellor: { type: String, required: true },

    Qualifications: {
      type: mongoose.Schema.Types.Mixed, // keep as-is
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
