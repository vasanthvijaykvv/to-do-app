import React from 'react'
import {ContextProvider} from "./Usecontext/UseContextProvider"
function Display() {
const {state,dispatch} =ContextProvider()
console.log(state.length === 0)
console.log(state)
  return (
    (state.length!==0)?(<div>{state.map(({Title,Id})=>{  
            return (<div key ={Id}><h3>{Title}&nbsp;&nbsp;<button className="btn btn-outline-secondary" 
             onClick={()=>dispatch({type : "Delete",Id :Id})} type="button" id="button-addon2">Delete</button></h3></div>
            )          
    }) }</div>):(<h2>noTask</h2>)
  )
}
//else{
  //return(<h3 key={Math.random()}>No Task</h3>)
//}
export default Display