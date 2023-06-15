import React, { useMemo, useState } from "react";

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  // Sử dụng useMemo để tính toán giá trị chỉ khi count thay đổi
  const doubledCount = useMemo(() => {
    console.log("Tính toán giá trị mới, doubledCount");
    return count * 2;
  }, [count]);

  const doubledCountNoMemo = () => {
    console.log("Tính toán giá trị mới, doubledCountNoMemo");
    return count * 2;
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Giá trị count: {count}</p>
      <p>Giá trị doubledCount (được memoized): {doubledCount}</p>
      <p>Giá trị doubledCount (được memoized): {doubledCountNoMemo()}</p>
      <p>Number: {number}</p>
      <button onClick={incrementCount}>Tăng Count</button>
      <button
        onClick={() => {
          setNumber(Math.random());
        }}
      >
        Tăng Number
      </button>
    </div>
  );
}
