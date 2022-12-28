import'./Student.scss'
import { Studentdata } from '../../api/studentdata/Studentdata'
import { useState } from 'react'

const Student = () => {
  const [students, setStudents] = useState(Studentdata)
  return (
    <div className='student'>
      <div className="container">
      <h2>Students</h2>
      <div className="user">
      <h2>All Students Data</h2>
      <div className="search">
        <input type='text' name="roll" placeholder='Search by roll...' />
        <input type='text' name="name"  placeholder='Search by roll...' />
        <input type='text' name="class"  placeholder='Search by class...' />
        <button>Search</button>
      </div>
      <div className="tabledata">
        <table>
          <thead>
          <tr>
            <th>Roll</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Section</th>
            <th>Parent</th>
            <th>Address</th>
            <th>Date of Birth</th>
            <th>Phone</th>
            <th>Email</th>
           
          </tr>
          </thead>
          <tbody>
            
              {students.map((student) => {
                return (
                <tr className='table-row'>
                 <td>{student.roll}</td>
                 <td>{student.photo}</td>
                 <td>{student.name}</td>
                 <td>{student.gender}</td>
                 <td>{student.class}</td>
                 <td>{student.section}</td>
                 <td>{student.parent}</td>
                 <td>{student.add}</td>
                 <td>{student.dob}</td>
                 <td>{student.phone}</td>
                 <td>{student.email}</td>
                  </tr>
              )})}
             
            
          </tbody>
        </table>
      </div>
      </div>
      </div>
    </div>

     
  )
}

export default Student