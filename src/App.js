// import logo from './logo.svg';
import './App.css';
import ModeToggler from './ModeToggler';
import avatar from './logo.svg';

function Logo() {
  const userPic = <img src={avatar} alt='' />;
  return userPic;
}

// function clickHandler(cartNumber) {
//   // cartNumber += 1;
//   // return cartNumber;
//   console.log('click handler is working')
// }

function Btn() {

  const clickHandler = () => console.log('click handler is working')
  
  return (
    <button onClick={clickHandler}>Click me</button>
  )
}

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <Logo />
      <Btn />
      <ModeToggler />
    </>
  )

}

export default App;
