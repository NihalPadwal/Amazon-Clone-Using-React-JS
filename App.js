import React, { useEffect } from "react";
import "./App.css";
import Header from "./component/Header.js";
import Home from "./component/Home.js";
import Checkout from "./component/Checkout.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/Login.js";
import { auth } from "./component/firebase";
import { useStateValue } from "./component/Stateprovider";
import Imageslider from "./component/Imageslider"

function App() {

  const[{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Imageslider/>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
