import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase b utton was clicked...");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE", "success");
    }

    const handleOnChange = (event) => {
        // console.log("Onchange") ;
        setText(event.target.value);
    }

    const handleLowClick = () => {
        // console.log("Lowercase b utton was clicked...");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }

    const handleClearClick = () => {
        setText("");
    }

    const handleAlterNateClick = () => {     //not working correctly
        for(let i = 0; i < text.length; i++){
            let newText = "";
            if(i%2 === 0){
                newText = newText + text[i].toUpperCase();
            }
            else{
                newText = newText + text[i].toLowerCase();
            }
            setText(newText);
        }
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control" placeholder="Enter text here...."
                        id="myBox" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}
                        rows="8" value={text}
                    ></textarea>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear Text</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleAlterNateClick}>Alternate Text</button>

                </div>
            </div>
            <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>Your text summary: </h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>Time requierd to read: {0.008*(text.split(" ").length)} minutes</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
