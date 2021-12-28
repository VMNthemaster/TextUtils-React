import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [btnTextColor, setBtnTextColor] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtnTextColor("light");
      document.body.style.backgroundColor = "#140b51";
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode("light");
      setBtnTextColor("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" btnTextColor={btnTextColor} aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        {/* // toggleMode is a function */}
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element = {<About/>} />
            <Route exact path="/" element = {<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />} /> */}
            <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />
            <About/>
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
