import React, { useState } from "react";
function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const [valid, setValid] = useState(false)
  function loginHandler(e) {
    if(user.length < 3 || password.length < 6){  
        alert("type of correct Value")
    } 
    else { alert("all Goods")
    }
    e.preventDefault();
  }
  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      console.log("Invalid");
      setErr(true);
    }else{
        setErr(false)
    }
    console.log(e.target.value.length);
    setUser(item)
  }

  function passHandler(e){
   let item = e.target.value;
    if(item.length < 6){ 
        setValid(true)
    }
    else{
     setValid(false)
    }
    setValid(item)
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginHandler}>
        <input type="text" placeholder="enter UserId" onChange={userHandler} />
        {err ? <span>User not Valid</span> : null}
        <br /> <br />
        <input type="text" placeholder="enter password" onChange={passHandler}/>
        {valid ? <span>Password not Valid</span>: null}
        <br /> <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;
