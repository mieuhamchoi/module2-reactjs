import React, { useRef } from "react";

export default function UseRef() {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log("inputRef", inputRef.current);
    console.log("inputRef", inputRef.current.value);
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
