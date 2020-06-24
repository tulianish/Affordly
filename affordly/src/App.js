import React from "react";
import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import Signup from "./pages/signup";
import Sell from "./pages/sell";
import Home from "./pages/home";
import AboutUs from "./pages/aboutus";
import Login from "./pages/login";
import Careers from "./pages/Careers";
import Payment from "./pages/Payment";
import Posting from "./pages/Posting";
import RaiseASupportTicket from "./pages/incident";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/sell" component={Sell} />
          <Route path="/about" component={AboutUs} />
          <Route path="/careers" component={Careers} />
          <Route path="/payment" component={Payment} />
          <Route path="/incident" component={RaiseASupportTicket} />
          <Route
            path="/posting/:id"
            exact
            render={(props) => <Posting {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
