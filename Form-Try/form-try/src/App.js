import react from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css'

function App() {
  const style ={
      padding : "5px" ,
  }
  return (
    <div className="App">
      <form className='login'>
        <label for="name">Name : 
          <input type={'text'} id="name" placeholder='enter your name'></input>
        </label>

        <label for="email">Email : 
          <input type={'email'} id="email" placeholder='your email address'></input>
        </label>

        <label for="password">Password : 
          <input type={'password'} id="password" placeholder='password'></input>
        </label>
        <input type={'button'} value="submit" style={style}></input>
      </form>
    </div>
  );
}

export default App;
