import React, { useState } from "react";

function ToggleButton() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {isVisible && <button onClick={toggleVisibility}>Hide Button</button>}
      {!isVisible && <button onClick={toggleVisibility}>Show Button</button>}
    </div>
  );
}

export default ToggleButton;


