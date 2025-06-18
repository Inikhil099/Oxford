const express = require("express")
const { handleEnrollSubmit, GetUserInfo } = require("../controllers/EnrollController")
const router = express.Router()

router.post("/enroll",handleEnrollSubmit)
router.get("/user/:querynumber",GetUserInfo)


module.exports = router