import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Cuisines from "./Components/Cuisines";

import Header from "./Components/Header";
import Itilian from "./Components/Itilian";
import Chinese from "./Components/Chinese";
import Mexican from "./Components/Mexican";
import Indian from "./Components/Indian";
import Japanese from "./Components/Japanese";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisines" element={<Cuisines />} />
          <Route path="/italian" element={<Itilian />} />
          <Route path="/chinese" element={<Chinese />} />
          <Route path="/mexican" element={<Mexican />} />
          <Route path="/indian" element={<Indian />} />
          <Route path="/japanese" element={<Japanese />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
