import React from "react";

function Keypad (){
    function handleChange(){
        // This function can be used to handle changes in the keypad
        console.log("Entering password...");
    }
    return <input type="password" onChange={handleChange}/>
}

export default Keypad;