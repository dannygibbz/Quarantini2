import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const Drink = props => (
  <tr>
    <td>{props.drink.username}</td>
    <td>{props.drink.description}</td>
    <td>{props.drink.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.drink._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteDrink(props.drink._id)
        }}>
        delete
      </a>
    </td>
  </tr>
)

export default class DrinksList extends Component {
  constructor(props) {
    super(props)
    this.deleteDrink = this.deleteDrink.bind(this)
    this.drinkList = this.drinkList.bind(this)
    this.state = { drinks: [] }
  }
  componentDidMount() {
    const context = this
    axios
      .get("/drinks")
      .then(response => {
        context.setState({ drinks: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }
  deleteDrink(id) {
    axios.delete("/drinks/" + id).then(res => console.log(res.data))
    this.setState({
      drinks: this.state.drinks.filter(el => el._id !== id),
    })
  }

  drinkList() {
    return this.state.drinks.map(currentdrink => {
      return (
        <Drink
          drink={currentdrink}
          deleteDrink={this.deleteDrink}
          key={currentdrink._id}
        />
      )
    })
  }
  render() {
    return (
      <div>
        <h3>Saved Drinks</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.drinkList()}</tbody>
        </table>
        <hr />
      </div>
    )
  }
}
