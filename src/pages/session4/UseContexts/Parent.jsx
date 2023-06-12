import React, { createContext, useState } from 'react';
import Child from './Child'

export const ParentContext = createContext();

export default function Parent() {
    const [number, setNumber] = useState(1);
    const [notes, setNotes] = useState([]);

    const addNote = (note) => {
      setNotes([...notes, note]);
    };
  
    
  return (
    <>
        <h1>Parent</h1>
        <ParentContext.Provider  value={{ notes, addNote, number,  setNumber}}>
          <Child name="Toàn"></Child>
        </ParentContext.Provider>
    </>
  )
}
