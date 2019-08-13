import React from "react";
import "./App.css";

import Layout from "./components/layout/Layout";
import Kombbuilder from "./containers/Kombbuilder/Kombbuilder";
import Checkout from "./containers/checkout/checkout";

function App() {
  return (
    <div>
      <Layout>
        <Kombbuilder />
        <Checkout />
      </Layout>
    </div>
  );
}

export default App;
