import React, {useContext} from 'react'
import { ParentContext } from './Parent';


export default function Child(props) {
    const { notes, addNote, number, setNumber } = useContext(ParentContext);
    return (
        <>
          <div>Child</div>
          <div>Name: {props.name}</div>
          <div>Notes: {notes.join(', ')}</div>
          <button onClick={() => addNote('New Note')}>Add Note</button>
          <span>{number}</span>
          <button onClick={() => {
            setNumber(Math.random())
          }}>setNumber</button>
        </>
      );
}
