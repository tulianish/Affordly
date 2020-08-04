/* Contributed by PIYUSH PIYUSH (B00844563, piyush@dal.ca) */


import React from "react";
import "./App.css";
import Signup from "./pages/signup";
import Sell from "./pages/sell";
import Forgot_password from "./pages/forgot_password";
import Create_password from "./pages/create_password";

import Home from "./pages/home";
import AboutUs from "./pages/aboutus";
import Login from "./pages/login";
import Careers from "./pages/Careers";
import Payment from "./pages/Payment";
import Posting from "./pages/Posting";
import Share from "./pages/share";
import Discussion from "./pages/discussionForum";
import RaiseASupportTicket from "./pages/incident";
import Reset_link_sent from "./pages/reset_link_sent";
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
          <Route path="/careers" component={Careers} />
          <Route path="/share" component={Share} />
          <Route path="/incident" component={RaiseASupportTicket} />

          <Route path="/forgot_password" component={Forgot_password} />
          <Route path="/create_password/:token" component={Create_password} />
          <Route path="/reset_link_sent" component={Reset_link_sent} />

          <Route path="/discussion" component={Discussion} />

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
