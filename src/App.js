import React,{useState,createContext,Provider} from 'react';
export const context = createContext();
const App = (props) =>{
  const [mainState,funcState] = useState([]);
 const  effectState = () => {
     funcState();
  }
  return (
    <div className = "container">
    <context.Provider value = {{...mainState,effectState}}>
    {props.children}
    </context.Provider>
    </div>
  );
}
export default App ;