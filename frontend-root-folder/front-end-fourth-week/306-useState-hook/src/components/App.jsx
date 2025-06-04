import React, {useState} from "react";

function App() {
  const [count, setCount] = useState(0); //Whjat inside the useState is the initial or stating state
  
  function increase(){
    setCount(count + 1);
  }

  function decrease(){
    setCount(count-1);
  }
  //Destructuring
  const [red, green, blue] = [9, 132, 227] //if you have a list and you wanted to name them then do this
  console.log(blue)


  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  )
}

export default App;
