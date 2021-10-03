import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Notes from "./Components/Notes";
import Login from "./Components/Login";

const App = () => {
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <HashRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        {isUserLoggedIn ? (
          <>
            <Route exact path="/">
              <Redirect to="/notes" />
            </Route>
            <Route path="/notes">
              <Notes />
            </Route>
          </>
        ):<Redirect to="/login" />}
      </Switch>
    </HashRouter>
  );
};

export default App;
