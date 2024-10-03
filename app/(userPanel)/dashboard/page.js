"use client"
import React from "react";
import { useState } from "react";

function page() {

  const [counter, setCounter ] = useState(0)
  const addCounter = () => {
    setCounter(prevCount => setCounter(prevCount + 1))
  }
  prevCount => setCounter(prevCount + 1)

  return (
    <>
    <h1>users list page</h1>
    <h1>{counter}</h1>
    <button onClick={addCounter}>click me</button>    
    </>
  );
}

export default page;
