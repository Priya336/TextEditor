import React  ,{useState} from 'react'

export default function TextForm(props) {
   const [text,setText]=useState("");
  
   const handleupclick=()=>{
    console.log(text);
    let newText=text.toUpperCase();
     setText(newText)
     props.showalert("Upper case converted","success")
   }
   const handleloclick=()=>{
    console.log(text);
     setText(text.toLowerCase())
     props.showalert("Lower case converted","success")
   }
   const handleonchange=(event)=>{
  console.log("on change");
  setText(event.target.value);
  
   }
   const handleonclear=()=>{
    let n="";
    setText(n);
    props.showalert("Text is clear","success")

   }
  const handleoncopy=()=>{

   navigator.clipboard.writeText(text);
   props.showalert("Text is copied","success")

   
  }
   
  const extraspace=()=>{
   const txt=text.split(/[ ]+/);
   
   setText(txt.join(" "));
   props.showalert("Extra space is removed","success")
  }
  
  return (
      <>
    <div style={{position:'relative',width:1200 ,marginLeft:400}}>

<h1 style={{textAlign:"center",marginBottom:10,marginTop:50}} ><b>{props.title}</b></h1>
<div className='row'>
  <div className='col'>
 <div><textarea className={`form-control text-${props.mode==="dark"?"light":"dark"} bg-${props.mode==="dark"?"dark":"light"}`}  onChange={handleonchange}  placeholder="Enter your text hear" id="exampleFormControlTextarea1" rows="10" value={text}  style={{fontsize:30}} ></textarea>
 </div>
</div>
<div style={{marginLeft:550,marginTop:50}}>
<button className={`btn btn-${props.button} mx-2`} onClick={handleupclick}>UPPER CASE</button>
<button className={`btn btn-${props.button} mx-2`} onClick={handleloclick}>LOWER CASE</button>
<button className={`btn btn-${props.button} mx-2`} onClick={handleonclear}>CLEAR TEXT</button>
<button className={`btn btn-${props.button} mx-2`} onClick={handleoncopy}>COPY TEXT</button>
<button className={`btn btn-${props.button} mx-2`} onClick={extraspace}>EXTRA SPACE</button>
</div>
</div>
<div className='col'>
    <div style={{marginLeft:40}}>
      <br></br>
    
      <h3 ><b><u>ABOUT ABOVE TEXT</u></b></h3>
      <p><b>Number of word={text.split(/\s+/).length-1} <br></br> Number of letter ={text.length}</b><br></br><b>Time required to read={0.008 * text.split(" ").length}</b></p>
      </div>
      </div>
    <div style={{textAlign:"center",fontSize:50}}><b>Preview</b></div>

    <span style={{color:"white",backgroundColor:"red",fontSize:30}} >{text}</span>
 
    </div>
   
  </>
  )
 
}

