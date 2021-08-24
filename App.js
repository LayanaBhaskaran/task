
import {useState} from 'react';
import Blue from './component/Blue';
import Red from './component/Red';
import Green from './component/Green';


function App() {
  const[blue,setBlue]=useState('false');
  const[red,setRed]=useState('false');
  const[green,setGreen]=useState('false');

  const bluekHandler=()=>{
    setBlue(!blue);
  }

  const redHandler=()=>{
    setRed(!red);
  }

  const greenHandler=()=>{
    setGreen(!green);
  }
  return (
   <div>
     <div> <button style={{color : 'blue'}} onClick={bluekHandler}>BLUE</button></div>
     <div>  <button style={{color : 'red'}} onClick={redHandler}>RED</button></div>
     <div> <button style={{color : 'green'}} onClick={greenHandler}>GREEN</button></div>
      {blue&&<Blue/>}
      {red&&<Red/>}
      {green&&<Green/>}
    </div>
  );
}

export default App;
