// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Textform from "./components/Textform"
import React, { useState } from 'react'
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
   const [alert, setalert] = useState(null);

   const showAlert =  (message,type)=>{
      setalert({
        msg: message,
        type:type,
      })
      setTimeout(() => {
        setalert(null);
      }, 1500);
   }
  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor ="grey";
      showAlert("dark mode has been enable","success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor ="white";
      showAlert("light mode has been enable","success");
    }
  }
 
  return (
   <div>
    <Router>
    <Navbar title="TextFun &#9997;&#128512;" abouttext="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
    <Route exact path="/about">
      <About  mode={mode}/>
    </Route>
    <Route exact path="/">
      <Textform showAlert={showAlert} heading="Try TextFUN-Word Counter-character counter" mode={mode}/>
    </Route>
  </Switch>
  </div>
  </Router>
    
    
    </div>
    );
  }


export default App;


// <div>
//     <Router>
//     <Navbar title="TextUtils2" abouttext="About" mode={mode} toggleMode={toggleMode}/>
//     <Alert alert={alert}/>
//     <div className="container my-3">
//     <Switch>
//     <Route exact path="/about">
//       <About />
//     </Route>
//     <Route exact path="/">
//       <Textform showAlert={showAlert} heading="Enter the test to analysis" mode={mode}/>
//     </Route>
//   </Switch>
//   </div>
//   </Router>
    
    
//     </div>
    

// <div>
//     <Navbar title="TextUtils2" abouttext="About" mode={mode} toggleMode={toggleMode}/>
//       <Alert alert={alert}/>
//         <div className="container my-3">
//       <Textform showAlert={showAlert} heading="Enter the test to analysis" mode={mode}/>
//   </div>
    
//     </div>