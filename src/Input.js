
import {ContextProvider} from "./Usecontext/UseContextProvider"
const Input = () => {
    const {input,setInput,dispatch} =ContextProvider()
    
  return (
    <div className="input-group mb-3">
  <input type="text" className="form-control"
  onChange={(e)=>setInput(e.target.value)} value={input} placeholder="To-Do-List" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button className="btn btn-outline-secondary" type="button" id="button-addon2" 
  onClick={()=>dispatch({type : "Add-List",payload :{Id : Math.random(),Title : input},setInput :setInput})}>Add</button>
  <button className="btn btn-outline-secondary"
   onClick={()=>dispatch({type : "Deleat-All"})} type="button" id="button-addon2">DeleteAll</button>
</div>
  )
}

export default Input