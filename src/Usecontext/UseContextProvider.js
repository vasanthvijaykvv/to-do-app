import React,{createContext,useContext,useReducer,useState} from 'react'
import { initialvalue,reducer } from '../Logic/Logic'

const AppProvider = createContext(null)
export const UseContextProvider = ({children}) => {
    let [state,dispatch] = useReducer(reducer,initialvalue)
    let [input, setInput] = useState("")
    
  return (
    <div><AppProvider.Provider value={{state,dispatch,input,setInput}} >
        {children}    
    </AppProvider.Provider></div>
  )
}
export const ContextProvider = () => {
    const {state,dispatch,input,setInput} = useContext(AppProvider)
    return ({state,dispatch,input,setInput})
}
 