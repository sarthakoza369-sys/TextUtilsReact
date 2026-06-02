import React, { useState } from 'react';

export default function TextForm(props) {
    // 1. Initialized with an empty string so your starting count matches the tutor's (0 characters)
    const [text, setText] = useState(''); 

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Conberted to Upper Case!", "success");
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Conberted to Lower Case!", "success");
    };

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Cleared!", "success");
    };

    const handleCopy = () => {
        var textText = document.getElementById("myBox");
        textText.select();
        navigator.clipboard.writeText(textText.value);
        props.showAlert("Copied to Clipboard!", "success");
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces!", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    return (
        <>
        {/* Fixed the typo from '<v' to '<div' here */}
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042742' }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea 
                    className="form-control" 
                    value={text} 
                    onChange={handleOnChange} 
                    style={{ 
                        backgroundColor: props.mode === 'dark' ? 'grey' : 'white', 
                        color: props.mode === 'dark' ? 'white' : '#042742' 
                    }} 
                    id="myBox" 
                    rows="8"
                ></textarea>
            </div>
            
            {/* All buttons aligned with the tutor's functional setup */}
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042742' }}>
            <h2>Your text summary</h2>
            {/* Added a ternary logic step so an empty textarea correctly displays 0 words instead of 1 empty string word */}
            <p>{text.split(" ").filter((element) => element.length !== 0).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    );
}