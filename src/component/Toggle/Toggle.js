import React, { useState } from "react";

const Toggle = () => {

    const [dark, setDark] = useState(false)

    const theme = {
        backgroundColor: dark ? '#000000' : "#FFFFFF",
        color: dark ? "#FFFFFF" : '#000000',
        height: '200px',
        width: '300px'

    }
    return <div >
        <div style={theme}>
            <h3>Mr <sub>***</sub>X</h3>
        </div>
        <button onClick={() => setDark(!dark)}>Change Toggle
        </button>
    </div>;
};

export default Toggle;
