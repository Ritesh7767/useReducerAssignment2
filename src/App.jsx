import { useReducer, useState } from 'react'

const reducer = (data, action) => {
  switch(action.type){
    case "email" : return {...data, [action.type] : action.payload}
    case "password" : return {...data, [action.type] : action.payload}
    case "reset" : return {email : "", password : ""}
    default : throw error ("Invalid type")
  }
}

function App() {
  
  let [userData, dispatch] = useReducer(reducer, {email : "", password : ""})

  const handleSubmit = event => {
    event.preventDefault()
    dispatch({type : "reset"})
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >Enter your email <input type="email" name='email' value={userData.email}  placeholder='Enter your email here' onChange={event => dispatch({type : event.target.name, payload : event.target.value})}/> </label><br /><br />
        <label >Enter your password <input type="password" name='password' value={userData.password} placeholder='Enter your password here' onChange={event => dispatch({type : event.target.name, payload : event.target.value})} /> </label><br /><br />
        <input type="submit" />
      </form>
      <div>
        {
          
          !userData.email && !userData.password ? "No details Found" : 
          <>
            <div>email :- {userData.email}</div>
            <div>pass :- {userData.password}</div> 
          </>
        }
      </div>
    </>
  )
}

export default App
