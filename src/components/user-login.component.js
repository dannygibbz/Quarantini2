import React, { Component } from "react"
import { message } from "antd"
import { withRouter } from "react-router"
import axios from "axios"
class LoginUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }
  inputEmail = e => {
    this.setState({
      email: e.target.value,
    })
  }
  inputPassword = e => {
    this.setState({
      password: e.target.value,
    })
  }
  onSubmit = e => {
    e.preventDefault()
    const user = {
      email: this.state.email,
      password: this.state.password,
    }
    console.log(user)
    axios
      .post("/auth", user)
      .then(res => {
        message.success("Logged In Successfully", 2)
        localStorage.setItem("currentUser", res.data.token)
        this.props.setCurrentUser(res.data.token)
        this.props.history.push("/welcome")
      })
      .catch(e => {
        message.error("Email and/or password are incorrect. Please retry.")
      })
    this.setState({
      email: "",
      password: "",
    })
  }
  render() {
    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.inputEmail}
            />
            <label>Password: </label>
            <input
              type="password"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.inputPassword}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Signin" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
export default withRouter(LoginUsers)
