import React from "react";
import './index.css'
import Card from "./Components/Card";

function App() {
  const obj = {
    id: 12123,
    name: "SAAS"
  }

  let arr = ["HTML", ' CSS', ' JavaScript']

  return(
    <div className="cardBox">
      <Card name={'HTML 5'} per={'Lorem ipsum dolor sit amet consectetur,'} />
      <Card name={'CSS'} per={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, deleniti?'} />
      <Card name={'JavaScript'} per={'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'}/>
      <Card name={'React Js'} per={'amet consectetur, adipisicing elit. Assumenda, deleniti?'}/>
      <Card name={'Next Js'} per={'Lorem ipsum dolor sit amet deleniti?'}/>
      <Card data={obj.id} arr={arr}/>
    </div>
  )
}

export default App;