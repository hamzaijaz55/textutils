import './App.css';
import Navbar2 from './Components/Navbar2';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, { useState } from 'react';
// import About from './Components/About';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");


  const [alert, setAlert] = useState();

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type,
      
    })
    setTimeout(()=> {
      setAlert(null);
    },3000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", 'success')
      document.title = 'Text_Utils - Dark Mode';
      setInterval(()=> {
        document.title = 'Install text-utils Now';
      },1000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", 'success')
      document.title = 'Text_Utils - Light Mode';
      setInterval(()=> {
        document.title = 'Install text-utils Now';
      },1000);
    }
  }
  return (
    <>
    {/* <Router>
    <Routes>
      <Route path='/' component={"TextForm"} />
      <Route path='/About' component={"About"} />
      <Route  path='*' component={"Home"} />

    </Routes>
    </Router> */}
    {/* <Router> */}
      
    

      {/* <Routes> */}

          {/* <Route path="/about">
            <About />
          </Route> */}
          
          {/* <Route path="/"> */}
          {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> */}
          {/* </Route>
      </Routes> */}

        
      
      

      {/* <Router> */}
      <Navbar2 title="Text_Utils" mode={mode} toggleMode={toggleMode} />
      <Alert  alert={alert}/>
      {/* <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} /> */}
         
          {/* <Route exact path="about" element={<About />} /> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
      {/* </Routes>
    </Router> */}
    </>
  );
}

export default App;