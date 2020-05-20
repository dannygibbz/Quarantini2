import React, { Component } from "react"
import { message } from "antd"
import { withRouter } from "react-router"
import axios from "axios"

class CreateUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
    }
  }

  onChangeName = e => {
    this.setState({
      name: e.target.value,
    })
  }

  onChangeUsername = e => {
    this.setState({
      username: e.target.value,
    })
  }
  onChangeEmail = e => {
    this.setState({
      email: e.target.value,
    })
  }
  onChangePassword = e => {
    this.setState({
      password: e.target.value,
    })
  }
  onSubmit = e => {
    e.preventDefault()

    const user = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    }

    axios
      .post("/users/add", user)
      .then(res => {
        message.success("User added", 2)
        localStorage.setItem("currentUser", res.data.token)
        this.props.history.push("/")
      })
      .catch(e => {
        message.error("Can't create user")
      })

    this.setState({
      name: "",
      username: "",
      email: "",
      password: "",
    })
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />

            <label>Email: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />

            <label>Password: </label>
            <input
              type="password"
              required
              className="form-control"
              placeholder="minimum of 6 characters"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(CreateUsers)
