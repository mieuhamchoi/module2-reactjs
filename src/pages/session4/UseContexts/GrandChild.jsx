import React, { useContext } from "react";
import { ParentContext } from "./Parent";
export default function GrandChild() {
  const { notes, addNote, number, setNumber } = useContext(ParentContext);
  return (
    <>
      <h1>GrandChild</h1>
      <span>{number}</span>
      <button
        onClick={() => {
          setNumber(Math.random());
        }}
      >
        Tăng
      </button>
    </>
  );
}
