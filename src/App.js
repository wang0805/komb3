import React from "react";
import "./App.css";

import Layout from "./components/layout/Layout";
import Kombbuilder from "./containers/Kombbuilder/Kombbuilder";

function App() {
  return (
    <div>
      <Layout>
        <Kombbuilder />
      </Layout>
    </div>
  );
}

export default App;
