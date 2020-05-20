import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/navbar.component"
import DrinksList from "./components/drinks-list.component"
import EditDrink from "./components/edit-drink.component"
import CreateDrink from "./components/create-drink.component"
import CreateUser from "./components/create-user.component"
import SpecificCocktail from "./components/SpecificCocktail"
import RandomCocktail from "./components/RandomCocktail"
import WelcomePage from "./components/WelcomePage"
import CurrentSupply from "./components/CurrentSupply"
import Foot from "./components/Foot"
import LoginUsers from "./components/user-login.component"

function App() {
  const [currentUser, setCurrentUser] = useState(false)
  return (
    <Router>
      <div className="container heightMinusFooter">
        <Navbar currentUser={currentUser} />
        <br />
        <Route path="/welcome">
          <WelcomePage />
        </Route>

        <Route path="/" exact render={() => <WelcomePage />} />
        <Route path="/saved" exact render={() => <DrinksList />} />
        <Route path="/specific" render={() => <SpecificCocktail />} />
        <Route path="/random" render={() => <RandomCocktail />} />
        <Route path="/current" render={() => <CurrentSupply />} />
        <Route path="/edit/:id" render={props => <EditDrink {...props} />} />
        <Route path="/create" render={() => <CreateDrink />} />
        <Route path="/user" render={() => <CreateUser />} />
        <Route
          path="/login"
          render={() => <LoginUsers setCurrentUser={setCurrentUser} />}
        />
      </div>
      <div className="container">
        <Foot />
      </div>
    </Router>
  )
}
export default App
