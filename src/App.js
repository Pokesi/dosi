import React, { Component } from 'react';
import WrappedHome from './components/Home/Home.js';
import { Routes, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<WrappedHome />} />
        </Routes>
      </div>
    );
  }
}

export default App;
