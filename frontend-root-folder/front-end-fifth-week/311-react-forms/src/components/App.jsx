import React from "react";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event){
    console.log(event.target.value);
    setName(event.target.value)
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
  }
  function handleClick(event){
    setHeading(name);
    event.preventDefault();
  }
//In a form once you submit it refresh
//What we can do is to use preventDefault
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input 
        onChange={handleChange} 
        type="text" 
        placeholder="What's your name?"
        value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
