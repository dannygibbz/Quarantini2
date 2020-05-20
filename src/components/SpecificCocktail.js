import React, { Component } from "react"
import { Input } from "antd"
const { Search } = Input

class SpecificDrink extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      visible: false,
    }
  }

  onChange = event => {
    this.setState({ input: event.target.value })
  }
  handleSubmit = event => {
    event.preventDefault()
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.input}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          input: "",
          errorMessage: "",
          visible: true,
          drinkName: data.drinks[0].strDrink,
          instructions: data.drinks[0].strInstructions,
          recommendedGlass: data.drinks[0].strGlass,
          ingredients1: data.drinks[0].strIngredient1,
          ingredients2: data.drinks[0].strIngredient2,
          ingredients3: data.drinks[0].strIngredient3,
          ingredients4: data.drinks[0].strIngredient4,
          ingredients5: data.drinks[0].strIngredient5,
          ingredients6: data.drinks[0].strIngredient6,
          measurement1: data.drinks[0].strMeasure1,
          measurement2: data.drinks[0].strMeasure2,
          measurement3: data.drinks[0].strMeasure3,
          measurement4: data.drinks[0].strMeasure4,
          measurement5: data.drinks[0].strMeasure5,
          measurement6: data.drinks[0].strMeasure6,
          picture: data.drinks[0].strDrinkThumb + "/preview",
        })
      })
      .catch(e => {
        this.setState({
          errorMessage:
            "Sorry, nothing found under that name. Please try again.",
        })
      })
  }

  render() {
    const name = this.state.drinkName
    const instructions = this.state.instructions
    const glass = this.state.recommendedGlass

    let measurement1 =
      this.state.measurement1 === null
        ? null
        : this.state.measurement1 + " " + this.state.ingredients1

    let measurement2 =
      this.state.measurement2 === null
        ? this.state.ingredients2
        : this.state.measurement2 + " " + this.state.ingredients2

    let measurement3 =
      this.state.measurement3 === null
        ? this.state.ingredients3
        : this.state.measurement3 + " " + this.state.ingredients3

    let measurement4 =
      this.state.measurement4 === null
        ? null
        : this.state.measurement4 + " " + this.state.ingredients4

    let measurement5 =
      this.state.measurement5 === null
        ? null
        : this.state.measurement5 + " " + this.state.ingredients5

    let measurement6 =
      this.state.measurement6 === null
        ? null
        : this.state.measurement6 + " " + this.state.ingredients6

    let picture = this.state.picture

    let showInfo = !this.state.visible ? (
      <form onSubmit={this.handleSubmit}>
        <Search
          value={this.state.input}
          onChange={this.onChange}
          placeholder="Type cocktail name here. Ex: Alabama Slammer"
          style={{ width: "100%" }}
        />
      </form>
    ) : (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Search
            value={this.state.input}
            onChange={this.onChange}
            placeholder=""
            onSearch={value => console.log(value)}
            style={{ width: "100% " }}
          />
        </form>
        <div style={{ marginTop: "10px" }}>
          <p>
            {" "}
            <b>Cocktail Name:</b> {name}
          </p>
          <img
            src={picture}
            alt="cocktail"
            style={{ height: "100px", width: "100px" }}></img>
          <p>
            <b>Ingredients:</b> {measurement1}
            {measurement2 ? ", " + measurement2 : null}
            {measurement3 ? ", " + measurement3 : null}
            {measurement4 ? ", " + measurement4 : null}
            {measurement5 ? ", " + measurement5 : null}
            {measurement6 ? ", " + measurement6 : null}
          </p>
          <p>
            <b>Instructions:</b> {instructions}
          </p>
          <p>
            <b>Recommended Glass: </b>
            {glass}
          </p>
        </div>
      </div>
    )
    let notFound = this.state.errorMessage ? (
      <h3 style={{ color: "red" }}>{this.state.errorMessage}</h3>
    ) : null

    return (
      <div>
        <h1>Cocktail By Name</h1>
        {notFound}
        {showInfo}
      </div>
    )
  }
}

export default SpecificDrink
