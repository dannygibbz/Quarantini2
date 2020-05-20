import React from "react"
import Drink from "./Drink"

class FindDrink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      title: "",
      picture: "",
      visible: false,
    }
  }

  componentDidMount() {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.id}`
    )
      .then(res => res.json())
      .then(result => {
        console.log(result.drinks[0])
        this.setState({
          title: result.drinks[0].strDrink,
          picture: result.drinks[0].strDrinkThumb + "/preview",
          visible: true,
          instructions: result.drinks[0].strInstructions,
          recommendedGlass: result.drinks[0].strGlass,
          ingredients1: result.drinks[0].strIngredient1,
          ingredients2: result.drinks[0].strIngredient2,
          ingredients3: result.drinks[0].strIngredient3,
          ingredients4: result.drinks[0].strIngredient4,
          ingredients5: result.drinks[0].strIngredient5,
          ingredients6: result.drinks[0].strIngredient6,
          measurement1: result.drinks[0].strMeasure1,
          measurement2: result.drinks[0].strMeasure2,
          measurement3: result.drinks[0].strMeasure3,
          measurement4: result.drinks[0].strMeasure4,
          measurement5: result.drinks[0].strMeasure5,
          measurement6: result.drinks[0].strMeasure6,
        })
      })
  }
  render() {
    let name = this.state.title
    let picture = this.state.picture
    let instructions = this.state.instructions
    let glass = this.state.recommendedGlass

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

    if (this.state.visible) {
      return (
        <div>
          <Drink title={this.state.title} picture={this.state.picture} />

          <p>
            {" "}
            <b>Cocktail Name: </b>
            {name}
          </p>
          <img
            src={picture}
            alt="cocktail"
            style={{
              height: "100px",
              width: "100px",
              paddingBottom: "10px",
            }}></img>
          <p>
            <b>Ingredients:</b> {measurement1}
            {measurement2 ? ", " + measurement2 : null}
            {measurement3 ? ", " + measurement3 : null}
            {measurement4 ? ", " + measurement4 : null}
            {measurement5 ? ", " + measurement5 : null}
            {measurement6 ? ", " + measurement6 : null}
          </p>
          <p>
            <b>Instructions: </b>
            {instructions}
          </p>
          <p>
            <b>Recommended Glass: </b>
            {glass}
          </p>
          <hr />
        </div>
      )
    }
    return null
  }
}
export default FindDrink
