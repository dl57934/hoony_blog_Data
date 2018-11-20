import React, { Component, Fragment } from "react";
import { ApolloProvider } from "react-apollo";
import { HashRouter, Route } from "react-router-dom";
import client from "./client";
import Home from "./Home";
import test from "./test";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <HashRouter>
          <Fragment>
            <Route component={Home} path={"/"} exact={true} />
            <Route component={test} path={"/test/:movieId"} />
          </Fragment>
        </HashRouter>
      </ApolloProvider>
    );
  }
}

export default App;
