import logo from './logo.svg';
import './App.css';
import User from './User'
import Profile from './Profile';
import Doctor from './Doctor';
import BottleRen from './BottleRen';
import Login from './Login';
import PropPass from './PropPass';
import Member from './Member';
import RenderLifeCycle from './RenderLifeCycle';

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

// import React from 'react';
// import { Table } from 'react-bootstrap'
// function App(){
// const  student = [
//         { name : "Ashu Pateriya", email : "ashu@gmail.com", address : [{HN : 10, City :"Indore"}]},
//         { name : "Amit Pateriya", email :  "amit@gmail.com", address : [{HN : 50, City :"Dewas"}]},
//         { name : "Rakesh Pateriya", email : "rakesh@gmail.com", address : [{HN : 60, City :"KOL"}]},
//     ]

//   return(
//     <div>
//       <h1>Nested List in Array</h1>
//     <Table striped  >
//     <tr>
//       <td>Name</td>
//       <td>Email</td>
//       <td>address</td>
//     </tr>
//     </Table>
//     {
//       student.map((item)=>
//         <tr>
//           <td>{item.name}</td>
//           <td>{item.email}</td>
//         item.address.map((data) =>
//         <Table >
//         <tr>
//           <td>{data.HN}</td>
//           <td>{data.City}</td>
//         </tr>

//       {/* FOR ARRAY OF OBJECT  */}
//       {
//         student.map((item, index)=>
//        <tr> 
//         <td>{index}={item.name}</td>
//         <td>{index}={item.email}</td>
//        </tr>

//         )
//       )
//     }

//     </Table>
//     </div>
//   )
// }

export default App;

