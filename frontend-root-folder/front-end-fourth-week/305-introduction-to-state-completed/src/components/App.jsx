import React from "react";

var isDone = false;

function strike() {
  // document.getElementById("root").style.textDecoration = "line-thorugh";
  isDone = true;
}

function unStrike() {
  // document.getElementById("root").style.textDecoration = "null";
  isDone = false;
}
//Declarative programming change the look depending the condition
//Imperative telling to do different
const strikeThrough = {textDecoration : "line-through"};

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike()}>Change to strike through</button>
      <button onClick={unStrike()}>Change back</button>
    </div>
  );
}

export default App;
