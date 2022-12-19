import React from 'react';
import "./App.css";
import Nav from "./Components/Navbar/Nav.jsx";
import Header from "./Components/Header/Header.jsx";
import Section from "./Components/Section/Section.jsx";
const Home = () => {
  return (
    <div className='body'>
      <Nav />
      <Header />
      <Section />
    </div>
  );
};
export default Home;