import React from 'react';
import "./App.css";

const Index = () => {
  return (
    <div className='background'>
      <nav className='Navbar'>
        <ul className='Nav-list'>
          <li><a href="#">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <section className='section'>
        <h1>Code , Learn and Earn</h1>
        <p>Here you can learn coding for free and earn by selling your codes</p>
        <div className='button-box'>
          <input type={'button'} id="button1" value={'subscribe'}></input>
          <input type={'button2'} id="button2" value={'view channel'}></input></div>
      </section>
      <footer className='footer'>
        <div className='about'>
          <h2>About Us</h2>
          <p>This is my first web page that i have created in React.JS . It just a single homepage of a website. I know its not that much good but i tried. hope so you all would like it. </p>
          <h2>Contact Us : </h2>
          <li>Call : +91 0000000000</li>
          <li>Email : hjcdbkdvbkjbfbjbjkfbkf@gmail.com </li>
          <li>Instagram : instagram_user</li>
          <li>Location : 000-block-street ,india </li>
          <center><h3>React Site[ 1 ] by Vivek Thakur</h3></center>
        </div>
      </footer>
    </div>
  );
};
export default Index;