import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import history from "./history";
import "./App.scss";
import { LoginPage } from "./pages/Login";
const loading = () => (
  <div className="animated fadeIn pt-3 text-center"> Loading... </div>
);

const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));
const ChatPage = React.lazy(() => import("./components/ChatPage"));

const Register = React.lazy(() => import("./pages/Register"));
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            <React.Suspense fallback={loading()}>
              <Switch>
                <Route
                  exact
                  path="/login"
                  name="Login Page"
                  component={LoginPage}
                />
                <Route
                  exact
                  path="/register"
                  name="Register Page"
                  render={(props) => <Register {...props} />}
                />
                <Route path="/chat" exact component={(props) => <ChatPage />} />
                <Route path="/" component={(props) => <DefaultLayout />} />
              </Switch>
            </React.Suspense>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
