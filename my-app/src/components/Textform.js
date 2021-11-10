import React , {useState}  from 'react'
// import React from 'react'

// console.log(usestate("Enter text here2"));

export default function Textform(props) {
    const handleUpClick =()=>{
        // console.log("Uppercase was click" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to Uppercase","success");
        
    }
    const handledownClick =()=>{
        // console.log("Uppercase was click" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to Lowercase","success");
        
    }
    const handleonChange =(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    // const handleOnChange = (event)=>{
    //     // console.log("On change");
    //     setText(event.target.value) 
    // }

    // Credits: A
    // const handleCopy = () => {
    //     console.log("I am copy");
    //     var text = document.getElementById("myBox");
    //     text.select(); 
    //     navigator.clipboard.writeText(text.value);
    //     document.getSelection().removeAllRanges();
    //     props.showAlert("Copied to Clipboard!", "success");
    // }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    
    const [text,setText] = useState(" ");
    return (
    <div>
        
        <div className="container" style={{color: props.mode === 'dark' ? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.mode === 'dark' ? '#716c6c':'white' , color: props.mode === 'dark' ? 'white':'black'}} id="mybox" rows="8"></textarea></div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 my-1" onClick={handledownClick}>Convert to Lowercase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 my-1" onClick={handleClearClick}>Clear Text</button>
        
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button></div>
        <div className="container my-2" style={{color: props.mode === 'dark' ? 'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}. Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"write some  thing"}</p>
        </div>
        </div>
        )
    }
    // <p>{text.length>0?text:"Nothing to preview!"}</p>
    // <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>