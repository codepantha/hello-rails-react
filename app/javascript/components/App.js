import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Greeting from "./Greeting";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Greeting greeting='Falala' />} />
        <Route exact path="/greetings" element={<Greeting greeting='List of listings' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
