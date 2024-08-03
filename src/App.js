import logo from './logo.svg';
import './App.css';
import User from './User'
import Profile from './Profile';
import Doctor from './Doctor';
import BottleRen from './BottleRen';
import Login from './Login';

// function App() {
//   return (
//     <div>
//       <h1>Hello React</h1>
//       <User />
//       <Profile />
//       <Doctor />
//     </div>
//   );
// }

// export default App;

// FOR STATE Example ================================ STATE COMPONENT =================================
// import { Component, useState } from 'react';
// function App(){
//   const [data, setData] = useState(0)
//   function updateData(){
//     setData(data + 1)
//   }
//   return (
//     <div>
//       <h1>{data}</h1>
//       <button onClick={updateData}>Update Data</button>
//     </div>
//   )
// }
// export default App;

// FOR CLASS Example =============================== CLASS COMPONENT ==================================
// import React, {Component} from 'react'

// class App extends Component {

//   constructor(){
//     super();
//     this.state = {
//       data : 1
//     }
//   }
//   apple(){
//     this.setState({ data: this.state.data + 1 })
//   }
//   render () {
//     return (
//     <div>
//       <h1>Hello Class Component </h1>
//       <p>{this.state.data}</p>
//       <button onClick={()=>{this.apple()}}>Update Data</button>
//     </div>
//     )
//   }

// }
// export default App


// LEARN PROPS with functional Component====================== PROPS Function =====================

// import Student from './Student';
// import { Component, useState } from 'react';
// function App(){
//   const [ name, setName] = useState('ashu')
//   const [email, setEmail] = useState("xyz.com")
//   return (
//     <div>
//       <h1>Props in Student component</h1>
//       <Student name = {name} email = {email}/>
//       <button onClick={()=>{setName("Pateriya")}}>Update Name</button>
//       <button onClick={()=>{setEmail('ashu.com')}}>Update Email</button>
//     </div>
//   )
// }

// export default App;



// PROPS with Class COMPONENT ================= Props with class Component========================
// import PropComponent from './PropComponent';
// import React from 'react';
// class App extends React.Component {
//   constructor(){
//     super()
//     this.state = { 
//       name :"Ravi"
//     }
//   }
//   render(){
//     return (
//       <div>
//         <h1>Hello React</h1>
//         <PropComponent name= {this.state.name} email = {"ashu.com"}/>
//         <button onClick={()=>this.setState({name : "Ashu"})}>Update name</button>
//       </div>
//     );
//   }
  
// }

// export default App;


// GET input box value ============================= ========GET Input Data ======================
// import React, {useState} from 'react';
// function App() {
//   const [data, setData] = useState(null)
//   const [ show, setShow] = useState(false)
//   function getData(val){
   
//     setData(val.target.value);
//     setShow(false)
//   }
//   return (
//     <div>{
//       show?
//       <h1>{data}</h1> :
//       null
//       }
     
//       <input type='text' onChange={getData}></input>
//       <button onClick={()=>setShow(true)}> Print Data</button>
//     </div>
//   );
// }
// export default App;


// HIDE, SHOW Element trogle =============================Trogle===============================

// import React, {useState} from 'react';
// function App() {
//   const [data, setData] = useState(false)
//   return (
//     <div>{
//       data ? <h1>SHOW </h1>:null
//       }
//         {/* <button onClick={()=>setData(false)}>Hide</button>
//         <button onClick={()=>setData(true)}>show</button> */}
//       <button onClick={()=>setData(!data)}>Toggle</button>
//     </div>
//   );
// }
// export default App;

// Handle FORM in React ====================================Handle Form =========================
// import React, { useState } from 'react';
// function App(){

//   const [name, setName] = useState("")
//   const [tnc, setTnc] = useState(false)
//   const [int, setInt] = useState("")

//   function getFromData(e){
//     console.log(name, tnc,int);
//     e.preventDefault()
//   }
//   return (
//     <div>
//       <h1>Handle Form in react</h1>
//       <form onSubmit={getFromData}>
//         <input type='text' placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)} /> <br /><br />
//         <select onChange={(e)=>setInt(e.target.value)}>
//           <option>
//            Select option
//           </option>
//           <option>DC Bhai</option>
//           <option>Disney hotstar</option> 
//         </select> <br /> <br />
//         <input type='checkbox' onChange={(e)=>setTnc(e.target.checked)}/> <span>Accept Terms and Conditons</span>
//         <br /> <br />
//         <button type='submit'>submit</button>
//         <button type='clear'>Clear</button>
//       </form>
//     </div>
//   )
// }

// export default App;

// CONDITION RENDING IN REACT ===========================================RENDERING =================================================

// function App(){
//   return (
//     <div>
//       <h1>Condition renddering</h1>
//       <BottleRen /> 
//     </div>
//   )
// }

// export default App;

// Basic Form Validation in React ======================================Validation in React =====================================

function App(){
  return (
    <div>
      <h1>Basic Form Validation </h1>
      < Login />
    </div>
  )
}

export default App;
