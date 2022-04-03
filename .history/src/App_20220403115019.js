import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Profile from "./pages/Profile";
import UserStore from "./store/users";

function App() {
  return (
    <UserStore>
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </UserStore>
  );
}

export default App;
