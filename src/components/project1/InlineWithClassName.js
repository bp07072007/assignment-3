import React from 'react'
import './external.css';

const data = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male" },
]

const InlineWithClassName = () => {
  return (
    <>
      <h1>Example for Inline and class name</h1>
      <table>
        <tr style={{ backgroundColor: '#000', color: '#fff' }}>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
            </tr>
          )
        })}
      </table >
    </>
  )
}

export default InlineWithClassName