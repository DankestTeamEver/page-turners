import React, { Component } from "react";

// * * * * ROUTER ELEMENTS
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Account from "./components/Account";
// * * * * ROUTER ELEMENTS END

import githubLogo from "./assets/github.svg";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1>Page Turners</h1>

            <nav className="headerNav">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                {/* <li>
                  <Link to="/home">Home</Link>
                </li> */}
                <li>
                  <Link to="/account">Search Books</Link>
                </li>
              </ul>
            </nav>
          </header>

          <main>
            <div className="pageReturn">
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/home" component={Home} /> */}
              <Route exact path="/account" component={Account} />
            </div>

            {/* <div className="pageReturnAside">
              <h3>I AM A TITLE</h3>
              <p>Hello</p>
            </div> */}
          </main>

          <footer>
            <div className="groupMembers">
              <h3>Group Project By:</h3>
              <ul>
                <li>
                  <img src={githubLogo} alt="Github Logo" />
                  <a href="https://github.com/daibhidhdwaum">@daibhidhdwaum</a>
                </li>
                <li>
                  <img src={githubLogo} alt="Github Logo" />
                  <a href="https://github.com/vigyan-k">@vigyan-k</a>
                </li>
                <li>
                  <img src={githubLogo} alt="Github Logo" />
                  <a href="https://github.com/OksanaSam">@OksanaSama</a>
                </li>
                <li>
                  <img src={githubLogo} alt="Github Logo" />
                  <a href="https://github.com/amay-zingg">@amay-zingg</a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
