import FindDrink from "./FindDrink"
import React, { Component } from "react"
import { Input } from "antd"
const { Search } = Input

class BySpirit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      drinks: [],
      visible: false,
    }
  }

  onChange = event => {
    this.setState({ input: event.target.value })
  }

  handleSubmit = event => {
    console.log(this.state.input)
    event.preventDefault()
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.input}`
    fetch(url)
      .then(res => res.json())
      .then(result =>
        this.setState({
          input: "",
          errorMessage: "",
          drinks: result.drinks,
          title: result.drinks.strDrink,
          picture: result.drinks.strDrinkThumb + "/preview",
        })
      )
      .catch(e => {
        console.log("error", e)
        this.setState({
          errorMessage:
            "Sorry, nothing found under that name. Please try again.",
        })
      })
  }

  render() {
    console.log(this.state.drinks)

    let drinkUp = this.state.drinks.map(drink => {
      return <FindDrink id={drink.idDrink} key={drink.idDrink} />
    })

    let notFound = this.state.errorMessage ? (
      <h3 style={{ color: "red" }}>{this.state.errorMessage}</h3>
    ) : null

    return (
      <div>
        <h1>Cocktail By Spirit</h1>

        <form onSubmit={this.handleSubmit}>
          <Search
            value={this.state.input}
            onChange={this.onChange}
            placeholder="Search cocktails by spirit. Ex: Whiskey"
            onSearch={value => console.log(value)}
            style={{ width: "100%" }}
          />
        </form>
        <p>{this.state.title}</p>
        {notFound}
        {drinkUp}
      </div>
    )
  }
}

export default BySpirit
