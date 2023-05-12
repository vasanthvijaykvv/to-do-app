import Input from './Input';
import './App.css';
import Display from './Display';
import {UseContextProvider} from "./Usecontext/UseContextProvider";
function App() {
  
  return (
    <div className="App">
      <UseContextProvider>
        <Input/>
        <Display/>
      </UseContextProvider>     
    </div>
  );
}

export default App;
