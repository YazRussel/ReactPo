import React from "react";
import { useState } from "react";


function App() {
  // const[first, setFirst] = useState("");
  // const[last, setLast] = useState("");
  const[fullName, setFullName] = useState({
    fName: "",
    lName: ""
  })


  function handleChange(event){
    // const newValue = event.target.value;
    // const inputName = event.target.name;
    const {value, name} = event.target;

    // console.log(newValue)
    // console.log(inputName)
    // if(inputName === "fName"){
    //   setFullName({fName: newValue})
    // }else if(inputName === "lName"){
    //   setFullName({lName: newValue})
    // }
    setFullName(prevValue => {
      // console.log(prevValue)
      if(name === "fName"){
        return {
          fName: value,
          lName: prevValue.lName
        }
      }else if(name === "lName"){
        return{
          fName: prevValue.fName,
          lName: value
        }
      }
    })
  }
  // function handleChangeFirst(event){
  //   setFirst(event.target.value)
  // }

  // function handleChangeLast(event){
  //   setLast(event.target.value)
  // }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input 
          onChange={handleChange} 
          name="fName" 
          placeholder="First Name" 
          value={fullName.fName} 
        />
        <input 
          onChange={handleChange} 
          name="lName" 
          placeholder="Last Name" 
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
