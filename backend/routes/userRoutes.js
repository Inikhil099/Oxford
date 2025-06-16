const express = require("express")
const { handleEnrollSubmit } = require("../controllers/EnrollController")
const router = express.Router()

router.post("/enroll",handleEnrollSubmit)
// router.get("/")


module.exports = router