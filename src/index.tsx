import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./Index.less";
import "bootstrap";
import { Home } from "./Home";
import { Provider } from "react-redux";
import store from "./store";
const App: React.StatelessComponent = () => (
  (
    <main>
      <Switch>
        <Route exact={true} path="/" component={Home} />
      </Switch>
    </main>
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
, document.getElementById("app"));
