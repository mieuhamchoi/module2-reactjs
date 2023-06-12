import React from 'react'

export default function Student(props) {
  return (
    <table className="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
            </tr>
        </thead>
        <tbody>
            {
                props.studentList.map((student) => 
                    <tr>
                        <th scope="row">1</th>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                    </tr>
                )
            }
        </tbody>
    </table>
  )
}
