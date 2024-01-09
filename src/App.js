import Home from "./Home";
import Bayel from "./Bayel";
import {useState} from "react";
import minus from './img/enderman.jpg'
import first from './img/main_fon_1.jpg'
import second from './img/main_fon_2.jpg'
import third from './img/main_fon_3.jpg'
import fourth from './img/main4.jpg'
import fifth from './img/main5.jpg'
import sixth from './img/main6.jpg'
import seventh from './img/main7.jpg'
import eighth from './img/main8.jpg'
import ninth from './img/main9.jpg'
import tenth from './img/main10.jpg'
import eleventh from './img/main11.jpg'
import twelfth from './img/main12.jpg'
import therteenth from './img/main13.jpg'
import fourteenth from './img/main14.jpg'
import fifteenth from './img/main15.jpg'
import sixteenth from './img/main16.jpg'
import seventeenth from './img/main17.jpg'
import './style.css';


function App() {

const [num, setNum] = useState(0)

  return (
    <div>
      <h1>SELECT A Minecraft wallpaper</h1>
      <h1>{num}</h1> 
      <div className="buttons">
        <button onClick={()=>{
          if(num < 15)setNum(num + 1)
        }}>+</button>
        <button onClick={()=>{
          if(num > -1)setNum(num - 1)
        }}>-</button>

        <button onClick={()=>{
          setNum(0)
        }}>reset</button>

        <button onClick={()=>{
          setNum(15)
        }}>max</button>

        <button onClick={() => setNum(Math.min(num + 5, 15))}>+5</button>

        <button onClick={() => setNum(Math.max(num - 5, 0))}>-5</button>
        
      </div>
<br/>
      <img className="donkey" src={
        num < 0
        ? minus
        : num < 0
        ? first
        : num < 1
        ? second
        : num < 2
        ? third
        : num < 3
        ? fourth
        : num < 4
        ? fifth
        : num < 5
        ? sixth
        : num < 6
        ? seventh
        : num < 7
        ? eighth
        : num < 8
        ? ninth
        : num < 9
        ? tenth
        : num < 10
        ? eleventh
        : num < 11
        ? twelfth
        : num < 12
        ? therteenth
        : num < 13
        ? fourteenth
        : num < 14
        ? fifteenth
        : num < 15
        ? sixteenth
        : seventeenth
      } alt="" />

    </div>
  );
}

export default App;
