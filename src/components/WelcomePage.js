import React from "react"
import { Link } from "react-router-dom"

function WelcomePage() {
  return (
    <div>
      <h1>Welcome to Quarantini.</h1>
      <h5>We help you choose what to drink when you're stuck at home.</h5>
      <div style={{ paddingTop: "30px" }}>
        The outside world may be chaotic and uncertain, but in here everything
        is simple and relaxed. You can search refreshing beverages in three
        ways.{" "}
      </div>
      <div style={{ paddingTop: "15px" }}>
        <Link to="/specific">Cocktail By Name</Link>. If you know the name of a
        drink but not the ingredients, this is the page you want.
      </div>
      <div style={{ paddingTop: "10px" }}>
        <Link to="/current">Cocktail By Spirit</Link>. If you want to try a new
        cocktail using liquor you already have, this is the page you want.
      </div>
      <div style={{ paddingTop: "10px" }}>
        <Link to="/random">Cocktail by Chance</Link>. If you're adventurous and
        up for anything, this page will give you a random cocktail recipe.
      </div>
      <div style={{ paddingTop: "15px" }}>
        You can also <Link to="/user">create a user</Link> profile and{" "}
        <Link to="/create">create a log</Link> of the cocktails you've tried.
        Happy sipping!
      </div>
      <div style={{ paddingTop: "40px", display: "flex", flexWrap: "wrap" }}>
        {" "}
        <img
          src={
            "https://www.thecocktaildb.com/images/media/drink/bylfi21504886323.jpg/preview"
          }
          alt="cocktail"
          style={{
            height: "150px",
            width: "150px",
            marginRight: "10px",
          }}
          resizeMode="contain"></img>
        <img
          src={
            "https://www.thecocktaildb.com/images/media/drink/vqws6t1504888857.jpg/preview"
          }
          alt="cocktail"
          resizeMode="contain"
          style={{
            height: "150px",
            width: "150px",
            marginRight: "10px",
          }}></img>
        <img
          src={
            "https://www.thecocktaildb.com/images/media/drink/9uqt9p1576519019.jpg/preview"
          }
          alt="cocktail"
          resizeMode="contain"
          style={{
            height: "150px",
            width: "150px",
            marginRight: "10px",
          }}></img>
        <img
          src={
            "https://www.thecocktaildb.com/images/media/drink/wx7hsg1504370510.jpg/preview"
          }
          alt="cocktail"
          resizeMode="contain"
          style={{
            height: "150px",
            width: "150px",
            marginRight: "10px",
          }}></img>
        <img
          src={
            "https://www.thecocktaildb.com/images/media/drink/rxtqps1478251029.jpg/preview"
          }
          alt="cocktail"
          resizeMode="contain"
          style={{
            height: "150px",
            width: "150px",
            marginRight: "10px",
          }}></img>
        <img
          src={
            "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg/preview"
          }
          alt="cocktail"
          resizeMode="contain"
          style={{
            height: "150px",
            width: "150px",
            marginRight: "10px",
          }}></img>
      </div>
    </div>
  )
}

export default WelcomePage
