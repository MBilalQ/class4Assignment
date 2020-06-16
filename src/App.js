import React, {useState} from 'react';
import './App.css';
import Message from "./message.js"
import Day from "./day.js"

function App() {

  let [count, setCount] = useState(0)

  let [isMorning, setDayTime] = useState(false)

  return (
    <div className={` ${isMorning ? 'dayLight' : 'nightLight'}`}>
      <Day dayTime = {isMorning ? "Morning" : "Night"} />
      <button onClick = {()=> setDayTime(! isMorning)}>Change Day Time</button>
      <hr />
      <Message counter = {count} />
      
      <button onClick = {()=> setCount(count + 1)}>Update Value</button>
      <br />
      <button onClick = {()=> setCount(0)}> Reset Counter</button>
    </div>
  );
}

export default App;
