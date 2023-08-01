
import './App.css';
import React ,{ useState } from 'react';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm.js';
 import Alert from './components/Alert.js';
function App() {
  const [mode,unmood]=useState("light");
  const [colour,setcolour]=useState(mode);
  const [alert, setalert]=useState(null);
  const [button ,setbutton]=useState("primary")
  const [colours,uncolour]=useState(true);
  const showalert=(message,type)=>{
 setalert({
  msg:message,
  type:type
 })
 setTimeout(() => {
setalert(null)
 }, 1500);
  }
  const toggleMode=()=>{
    change();
 if(mode==="dark"){
  unmood("light")
  document.body.style.backgroundColor="white"
  showalert("Light mode is enable","success")
  // document.title="TextUtilis LIGHT MODE"
  setbutton("primary")
 }
 else{
  unmood("dark")
  document.body.style.backgroundColor="#5497a4"
  showalert("Dark mode is enable","success")
  setbutton("dark")
  // document.title="TextUtilis DARK MODE"
 }

  }
  const change=()=>{
    uncolour(!colours);
   
  }

  const colourmood=()=>{
  
    console.log(colour);
    if(colour!=="red"){
      setcolour("red");
      document.body.style.backgroundColor="#ed6471";
      setbutton("danger")
      showalert("Danger  mode is enable","success")
    }
    else{
      setcolour("normal");
      document.body.style.backgroundColor="white";
      setbutton("primary")
      showalert("Normal mode is enable","success")
    }
  }
  const colourymood=()=>{
 
    if(colour!=="yellow"){
      setcolour("yellow");
      document.body.style.backgroundColor="#e4c978";
      setbutton("warning")
      showalert("Warning  mode is enable","success")
    }
    else{
      setcolour("normal");
      document.body.style.backgroundColor="white";
      setbutton("primary")
      showalert("Normal mode is enable","success")
    }
  }


  
  return (
<>
<Navbar title ="TextEditer" about="About textutilits" mode={mode}  colour={colourmood} yellow={colourymood}toggleMode={toggleMode}/>
<Alert alert={alert} ></Alert>
<br></br>
<div className="mb-3">


     
      <TextForm mode={mode} button ={button}  showalert={showalert}title="Enter The Text To EDIT"/>  
</div>

</>
  )
}
export default App;
