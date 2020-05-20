import React, { Component } from "react"
import { Link } from "react-router-dom"
import Quarantini from "./quarantini.png"
export default class Navbar extends Component {
  render() {
    const userSignedIn = localStorage.getItem("currentUser")

    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="collpase navbar-collapse">
          <img
            src={Quarantini}
            alt="logo"
            style={{ height: "25px", width: "40px" }}></img>

          <Link to="/welcome" className="navbar-brand">
            Quarantini
          </Link>

          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/specific" className="nav-link">
                Cocktail By Name
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/current" className="nav-link">
                Cocktail By Spirit
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/random" className="nav-link">
                Cocktail by Chance
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Create Drink Log
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/saved" className="nav-link">
                Saved Drinks
              </Link>
            </li>
            {!this.props.currentUser && (
              <>
                <li className="navbar-item">
                  <Link to="/user" className="nav-link">
                    Create User
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    )
  }
}
