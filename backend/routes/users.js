const router = require("express").Router();
const User = require("../models/user.model");
const regUser = require("../models/reg.model");

router.route("/").get((req, res) => {
    regUser.find()
        .then(users => res.json(users))
        .catch(err => { res.status(400).json("Error" + err) })
})

router.route("/add").post((req, res) => {

    const username = req.body.username;

    const newUser = new User({ username });

    newUser.save()
        .then(() => res.json("User added!"))
        .catch(err => res.status(400).json("Error: " + err));
});



router.route("/reg").post((req, res) => {
    const userID = req.body.userID;
    const password = req.body.password;
    const email = req.body.email;

    const new1User = new regUser({ userID, password, email });

    new1User.save()
        .then(() => res.json("UserReg"))
        .catch(err => res.status(400).json("Error: " + err));


})

module.exports = router;
