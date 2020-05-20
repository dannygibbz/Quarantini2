const router = require("express").Router()
let User = require("../Models/user.model")
const { check, validationResult } = require("express-validator")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const variables = require("../variables.json")

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err))
})

router.route("/add").post(
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a vaild email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const name = req.body.name
    const username = req.body.username
    const email = req.body.email

    const salt = await bcrypt.genSalt(10)

    const password = await bcrypt.hash(req.body.password, salt)

    const newUser = new User({
      username: username,
      name: name,
      email: email,
      password: password,
    })

    newUser
      .save()
      .then(data => {
        const payload = {
          user: {
            id: data.id,
          },
        }

        jwt.sign(
          payload,
          variables.JWT_SECRET,
          {
            expiresIn: 36000,
          },
          (err, token) => {
            if (err) throw err
            res.json({ token })
          }
        )
      })
      .catch(err => res.status(400).json("Error: " + err))
  }
)

module.exports = router
