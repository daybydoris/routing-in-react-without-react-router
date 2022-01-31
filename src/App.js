import React from "react";
import Route from "./components/Route";
import About from "./components/About";
import Contents from "./components/Contents";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <About />
      </Route>
      <Route path="/contents">
        <Contents />
      </Route>
      <Route path="/gallery">
        <Gallery />
      </Route>
      <Route path="/all">
        <About />
        <Contents />
        <Gallery />
      </Route>
    </div>
  );
}

export default App;