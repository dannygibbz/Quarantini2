const express = require("express")
const router = express.Router()
const { check, validationResult } = require("express-validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const variables = require("../variables.json")

const User = require("../Models/user.model")

router.get("/", (req, res) => {
  res.send("Get logged in user")
})

router.post(
  "/",
  [
    check("email", "Please include vaild email").isEmail(),
    check("password", "Password is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body

    try {
      let user = await User.findOne({ email: email })

      if (!user) {
        return res.status(400).json({ msg: "Invaild Credentials" })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Password" })
      }

      const payload = {
        user: {
          id: user.id,
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
    } catch (err) {
      console.error(err.message)
      res.status(500).send("server error")
    }
  }
)

module.exports = router
