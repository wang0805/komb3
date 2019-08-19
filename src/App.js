import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Kombbuilder from "./containers/Kombbuilder/Kombbuilder";
import Orders from "./containers/orders/orders";
import Checkout from "./containers/checkout/checkout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/" exact component={Kombbuilder} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
