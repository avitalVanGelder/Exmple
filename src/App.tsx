import React from 'react';
import { useState } from "react";
import './App.scss';
import '../node_modules/bootstrap/';
import Task from './components/Task/Task';
import TaskList from './components/TaskList/TaskList';
import Counter from './components/Counter/Counter';
import CounterTimer from './components/CounterTimer/CounterTimer';
import Button from './components/Button/Button';
import SongForm from './components/SongForm/SongForm';

function App() {

  const click1=()=>{
   alert("חזרו בתשובה")
  }

  
  const click2=()=>{
    alert("המשיח הגיע!!!")
  }


  return <div>
   
    {/* <Counter max={5}></Counter> */}
    {/* <Counter max={7}></Counter>
    <CounterTimer></CounterTimer> */}

    {/* <Button myFun={click1} >
      click me
    </Button>

    <Button myFun={click2}>
      hellow
    </Button> */}

    <SongForm></SongForm>
  </div>;
}

export default App;
