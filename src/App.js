import "./App.css";

import Login from "./pages/Login";
import Register from "./pages/Register";

import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
