import logo from "./logo.svg";
import "./App.css";
//  
import Profile from "./Profile";
import Doctor from "./Doctor";
import BottleRen from "./BottleRen";
import Login from "./Login";
import PropPass from "./PropPass";
import Member from "./Member";
import RenderLifeCycle from "./RenderLifeCycle";

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

// function App(){
//   return (
//     <div>
//       <h1>Basic Form Validation </h1>
//       < Login />
//     </div>
//   )
// }

// export default App;

// Pass Props as a Function in React ==============================================Pass Props ====================================

// function App(){
//   function getData(){
//     alert("Alter")
//   }
//   return (
//     <div>
//       <h1>Pass Props as a Function </h1>
//       <PropPass data = {getData}/>
//       <Member data = {getData}/>
//     </div>
//   )
// }

// export default App;

// FIRST LIFE CYCLE METHOD in React ==============================================Constructor =====================================
// IN CLASS COMPONENT FIRST We work

// import React, { Component } from 'react';

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       data : "ASHU PATERIYA "
//     }
//     console.log("FIRST CALL");
//   }
//   render() {
//     console.log("RENDER CALL");
//     return (
//       <div>
//         <h1>First Life Cycle Method  Constructor { this.state.data }</h1>
//       </div>
//     )
//   }

// }

// export default App;

// RENDER METHOD IN LIFE CYCLE Method ========================================RENDER METHOD=============================
// import React, { useState } from 'react';
// function App(){
//   const [name, setName ] = useState("Ashu")
//   return(
//     <div>
//       <h1>Main File </h1>
//       < RenderLifeCycle name = {name}/>
//       <button onClick={()=>setName("Pateriya")}>Update Name</button>
//     </div>
//   )
// }

// export default App;

// COMPONENT DID MOUNT method ===============================================COMPONENT DID MOUNT==========================

// import React, { Component } from 'react';

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       name : "Ashu"
//     }
//     console.log("CONSTRUCTOR");
//   }
//   componentDidMount(){
//     console.log("COMPONENT DID MOUNT");
//   }
//   render(){
//     console.log("RENDER");
//     return (
//       <div>
//         <h1>Component Did Mount {this.state.name}</h1>
//         <button onClick={()=> this.setState({name : "Pateriya"})}>Update Name </button>
//       </div>
//     )
//   }
// }

// export default App;

// COMPONENT DID UPDATE Mount =======================================COMPOUNENT UPDATE Mount==================

/*import React, { Component } from 'react';
  class App extends Component {
    constructor(){
      super();
      this.state = {
        count : 0
      }
      console.log("Constructor");
    }
    componentDidUpdate(preProp, preState, snapshot){
      console.log("componentDidUpdate", preState);
      if(preState.count  === this.state.count){
        console.log("count mactched");
        alert("Count Matched")
       }
      //  else if(this.state.count < 5){
      //   this.setState({count : this.state.count + 1})
      // }
    }
    render(){
      console.log("RENDER");
      return (
        <div>
        <h1>COMPONENT DID UPDATE MOUNT { this.state.count }</h1>
        <button onClick={()=>this.setState({count :1 })}>Update Count</button>
        </div>
      )
    }
  }

export default App;
 */

// SHOULD COMPONENT UPDATE METHOD in React =================================================SHOULD COMPONENT METHOD===================

/* import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      count : 0
    }
    console.log("Constructor");

  }
  shouldComponentUpdate(){
    console.log("shouldCompount Update", this.state.count);
    return true
  }
  render(){
    console.log("render");
    return (
      <div>
        <h1>Should Component update method { this.state.count }</h1>
        <button onClick={()=> this.setState({count : this.state.count + 1})}>Update Name</button>
      </div>
    )
  }
}

export default App;
*/

// COMPONENT WILL UNMOUNT LIFE CYCLE METHOD =====================================UNMOUNT COMPONENT=====================

/* 
import React, { Component } from 'react';
import Unmount from './UnmountLife';

class App extends Component {
  constructor(){
    super();
    this.state = {
      show : true
    }
  }
  render(){
    return (
      <div>
       { this.state.show ?  < Unmount />: <h1>CHILD Component Removed</h1>
        }
        <button onClick={() => this.setState({show : !this.state.show})}>Updae Toggle</button>
      </div>
    )
  }
}

export default App;

*/

// HOOK IN REACT ========================================================HOOKS =======================
/*
import React, { useState } from 'react';

function App (){
  const [data, setData] = useState('Ravi')
  return (
    <div>
      <h1>Hook in react {data}</h1>
      <button onClick={()=>setData("Ashu")}>Update Name</button>
    </div>
  )
}

export default App;
*/

// USEEFFECT IN REACT ============================================= useEffect in React==================

/*
import React, { useEffect, useState} from 'react';
import UseEffect from './UseEffect';
function App(){

  const [count, setCount] = useState(100);
  const [data, setData] = useState(10)

  return(
    <div>
      < UseEffect  data = {data} count = {count}/>
      <button onClick={()=> setCount(count + 1)}>update Count</button>
      <button onClick={()=> setData(data + 1)}>update Data</button>

    </div>
  )
}

export default App;

*/

// STYLE IN REACT =====================================================Style ==========================
//  BOOTSTRAP + STYLE in React
/*
import React, { useState} from 'react';
import './style.css';
import style from './custom.module.css';
import { Button, Card } from 'react-bootstrap';

function App(){
  
  return(
    <div>
      <h1 className='primary'> CSS style in React Type 1</h1>
      <h1 style={{color: 'blue', backgroundColor : "gray"}}> CSS style in React Type 2</h1>
      <h1 className={style.success}> CSS style in React Type 3</h1>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/536/354" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    </div>
  )
}

export default App;
*/

// Handle Array with List =============================================Handle Array ======================

/*
// import React from 'react';

// function App(){
// let data = ["aakash", "aashu", "aayushi", "anjali", "rohan"]
// let student = [
//   { name : "Ashu Pateriya", email : "ashu@gmail.com"},
//   { name : "Amit Pateriya", email :  "amit@gmail.com"},
//   { name : "Rakesh Pateriya", email : "rakesh@gmail.com"},

// ]
// return (
//     <div>
//          <h1>Handle Array with list</h1>
//          <table border= "2">
//           <tbody>
      
//        <tr> 
//         <td>Name</td>
//         <td>Email</td>
//        </tr>
  
//       {/* {
//         data.map((item)=>
//           <h1>Name is : {item}</h1>
//         )
       
      // } */

//       {/* FOR ARRAY OF OBJECT  */}
//       {
//         student.map((item, index)=>
//        <tr key={index}>
//         <td>{item.name}</td>
//         <td>{item.email}</td>
//        </tr>
//         )
//       }
//       </tbody>
//     </table>
//     </div>
//   )
// }

// export default App;

// */

// LIST HANDLE in react=====================================================BOOTSTRAP + TABLE =================================

// import React from 'react';
// import { Table } from 'react-bootstrap'
// function App(){

//   let student = [
//       { name : "Ashu Pateriya", email : "ashu@gmail.com"},
//       { name : "Amit Pateriya", email :  "amit@gmail.com"},
//       { name : "Rakesh Pateriya", email : "rakesh@gmail.com"},
//   ]
//   return (
//     <div>
//       <h1>List Handle table + bootstrap </h1>
//       <Table  striped bordered hove="true" variant='dark'>
//         <tbody>
//           <tr>
//             <td>Name</td>
//             <td>Email</td>
//           </tr>
//       {
//         student.map((item, index)=>
//         item.email === "ashu@gmail.com" ?
//         <tr key={index}>
//           <td>{item.name}</td>
//           <td>{item.email}</td>
//         </tr>: null
//         )
//       }
//       </tbody>
//       </Table>
//     </div>
//   )
// }

// export default App;

// NESTED LIST IN REACT =======================================================NESTED LIST======================================

// import React from "react";
// import { Table } from "react-bootstrap";
// function App() {
//   const student = [
//     {
//       name: "Ashu Pateriya",
//       email: "ashu@gmail.com",
//       address: [{ HN: 10, City: "Indore" }
//         ,{ HN: 100, City: "Indore" },
//         { HN: 101, City: "Indore" },
//         { HN: 120, City: "Indore" }
//       ],
//     },
//     {
//       name: "Amit Pateriya",
//       email: "amit@gmail.com",
//       address: [{  HN: 10, City: "Indore" }
//         ,{ HN: 100, City: "Indore" },
//         { HN: 101, City: "Indore" },
//         { HN: 120, City: "Indore" }],
//     },
//     {
//       name: "Rakesh Pateriya",
//       email: "rakesh@gmail.com",
//       address: [{  HN: 10, City: "Indore" }
//         ,{ HN: 100, City: "Indore" },
//         { HN: 101, City: "Indore" },
//         { HN: 120, City: "Indore" }],
//     },
//   ];

//   return (
//     <div>
//       <h1>Nested List in Array</h1>
//       <Table striped>
//         <tbody>
//           <tr>
//             <td>S.No</td>
//             <td>Name</td>
//             <td>Email</td>
//             <td>address</td>
//           </tr>
//       {student.map((item, index) => (
//         <tr key={index}>
//           <td>{index +1}</td>
//           <td>{item.name}</td>
//           <td>{item.email}</td>
//           <td>
//             <Table striped>
//               <tbody>
//                 {item.address.map((data, index) => (
//                   <tr key={index}>
//                     <td>{data.HN}</td>
//                     <td>{data.City}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </td>
//         </tr>
//       ))}
//       </tbody>
//       </Table>
//     </div>
//   );
// }

// export default App;



// REUSE COMPONENT IN REACT====================================================REUSE COMPONENT==================================

// import React from "react";
// import UsersReuse from "./UsersReuse";

// function App(){
//   let student = [
//           { name : "Ashu Pateriya", email : "ashu@gmail.com"},
//           { name : "Amit Pateriya", email :  "amit@gmail.com"},
//           { name : "Rakesh Pateriya", email : "rakesh@gmail.com"},
//       ]
//   return (
//     <div>
//       <h1>Reuse component in react</h1>
//       {
//         student.map((item)=>
//           <UsersReuse data ={item} />
//         )
//       }
//     </div>
//   )
// }

// export default App;

// 

// FRAGMENT in React ==============================================FRAGMENT ========================================

/*import React, {Fragment} from "react";

function App(){

  return (
    <Fragment>
      <h1>Hello Qura</h1>
      <h1>Welcome to the team bro</h1>
    </Fragment>
  )
}
 /* We Fragment for handle div problem come after we managed two h1 tag */

// LIFTING State in REACT ======================================== LIFTING STATE ==================================
// When  send Data child to parent component in react

// This process is Parent to child data send
/*import React from "react";
import ChildComponent from "./ChildComponent";
function App(){
  let data = "Parent Pass"

  return(
    <>
    <h1>Lifting State in React</h1>
    < ChildComponent name = {data} />
    </>
  )
}


export default App;
*/

// Child to parent data send
/*
import React from "react";
import ChildComponent from "./ChildComponent";
function App(){
  
  function ParentAlert(data){
    alert(data)
  }

  return(
    <>
    <h1>Lifting State in React</h1>
    < ChildComponent alert = {ParentAlert} />
    </>
  )
}


export default App;

*/


// USEMEMO in REACT ============================================== useMemo =========================
/*import React,{useState, useMemo} from "react";

function App(){
  const [count, setCount] = useState(0)
  const [item, setItem] = useState(10)
const multiCountMemo = useMemo(()=>{
  console.log("multiCount");
  return count * 5;
},[count])

  return (
    <>
    <h1>Use Memo in React </h1>
    <h3>Count : {count}</h3>
    <h3>Items : {item}</h3>
    <h4>{multiCountMemo}</h4> 
    <button onClick={()=>setCount(count+1)}>Click Me!</button>
    <button onClick={()=>setItem(item*10)}>Click Item</button>
    </>
  )
}

export default App;
*/

// Ref in React it is used in class based component =====================================Ref=========

/*import React,{ Component, createRef } from "react";

class App extends Component {
  constructor(){
    super()
    this.inputRef = createRef();
  }
  componentDidMount(){
    console.log("object", this.inputRef.current.value = "Ashu Pateriya");
  }
    getValue(){
      console.log(this.inputRef.current.value);
      this.inputRef.current.style.color = "yellow"
      this.inputRef.current.style.backgroundColor = "gray"
    }
  
  render(){
    return (
      <>
      <h1>Ref with class Component</h1>
      <input type="text" ref={this.inputRef}/>
      <button onClick={()=>this.getValue()}>Check Ref</button>
      </>
    )
  }
}

export default App;

*/


//  useRef in react=======================================useRef===============================
/*import React,{ useRef} from "react";

function App(){
  let inputVal = useRef(null);
  function handleButton(){
console.log("text");
// inputVal.current.value = "Ashu Pateriya"
// inputVal.current.focus()
    inputVal.current.style.color = "red"
    inputVal.current.style.backgroundColor = "purple"
    inputVal.current.style.display = 'none'
}
  return (
    <>
    <h1>useRef in React</h1>
    <input type="text" ref={inputVal} />
    <button onClick={handleButton()}>Click Me!</button>
    </>
  )
}

export default App; 
*/

// useForward in react ===============================useForward=============================

/*import React, {useRef} from "react";
import User from './UseRefernce';
function App(){
  let inputRef = useRef(null);
  function updateData (){
    inputRef.current.value = 'Ashutosh pateriya'
    inputRef.current.style.color="red"
    inputRef.current.focus()

  }
  return (
    <>
    <h1>useForward in React</h1>
    <User ref = {inputRef} />
    <button onClick={updateData}>Click me</button>
    </>
  )
}

export default App;

*/
// Controller Component in react ========================Controller Component====================

/* import React, {useState} from "react";

function App(){
  const [data, setData ] = useState("123")
  return (
    <>
    <input type="text" data = {data} onChange={(e)=> setData(e.target.value)} />
    <h3> Value :{data}</h3>
    </>
  )
}

export default App;
*/


// Uuncontroller compounent ===============================Uncontroller Compounent ================

/* import React, {useRef} from "react";

function App (){
  const inputRef = useRef(null)
  const inputRef2 = useRef(null)
  function updateValue(e){
    e.preventDefault()
    console.log("input ref", inputRef.current.value);
    const inputData = document.getElementById('input3').value;
    console.log("inputData", inputData);
  }
return (
  <>
    <form onSubmit={updateValue}>
      <input type="text" ref={inputRef} /> <br/><br/>
      <input type="text" ref={inputRef2} /> <br/><br/>
      <input id = "input3" type="text" /> <br/><br/>
      <button >Update value</button>
    </form>
  </>
)
}

export default App;
*/


// High Order component ====================================HOC ==============================
/*
import React, { useState} from "react";


function App(){

  return (
    <>
      <h3>High Order Component</h3>
      <Hoc cmd = {Counter}/>
      <HocRed  cmd = {Counter}/>
      <HocGreen cmd = {Counter}/>
      
    </>
  )
}

function Hoc(props){
  return (
    <>
    <h2 style={{backgroundColor: "red", width:150}}>Red <props.cmd/></h2>
    </>
  )
}
function HocRed(props){
  return <h2 style={{backgroundColor: "blue", width:150}}>Blue < props.cmd/></h2>
}
function HocGreen(props){
  return <h2 style={{backgroundColor:"green", width:150}}>Green < props.cmd/></h2>
}

function Counter(){
  const [ item, setItem ] = useState(0)
  return (
    <>
    <h1>count : {item}</h1>
    <button onClick={()=> setItem(item + 1)}>Update count</button>
    </>
  )
}

export default App;

*/

// React Route in react ============================================= REACT ROUTE =================

import React from "react";
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
function App(){
  return(
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element= { <Home /> } ></Route>
        <Route path="/about" element= { <About /> } ></Route>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
