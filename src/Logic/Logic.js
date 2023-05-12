
export const initialvalue =[{Id :1,Title : "Go to gym"}];

export let reducer = (state,action) => {
   switch(action.type){
       case "Add-List":
           action.setInput("");
           if(action.payload.Title===""){
               return state;
           }
           return [...state,action.payload] 
           
        case "Deleat-All":
            return []
        case "Delete":
              let value = state.filter((e)=>{
                return (e.Id !== action.Id)
              })               
              return value
              
       default :
       return state    
   }
   
}