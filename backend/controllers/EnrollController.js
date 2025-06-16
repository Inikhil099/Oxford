async function handleEnrollSubmit(req,res) {
    console.log("req made")
    console.log(req.body)
    return res.send(req.body)
}


module.exports = {handleEnrollSubmit}