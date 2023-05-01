import React from 'react';

function Keypad() {
    function handleInputChange() {
        console.log('Entering password...');
    }

    return (
        <div>
            <label htmlFor="password">Enter password:</label>
            <input id="password" type="password" onChange={handleInputChange} />
        </div>
    );
}

export default Keypad;
