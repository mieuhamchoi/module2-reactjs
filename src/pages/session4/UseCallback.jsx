import React, { useState, useCallback, useMemo } from 'react';

export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  const handleClickCount = useCallback(() => {
    console.log("count",count)
    setCount(count + 1);
  }, []);

  const handleClickNumber = () => {
    console.log("number",number)
    setNumber(number + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClickCount}>Tăng Count</button>
      <p>Number: {number}</p>
      <button onClick={handleClickNumber}>Tăng Number</button>
    </div>
  );
}
