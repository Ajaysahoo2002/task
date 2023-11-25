import React from 'react'
import { useState, useEffect } from 'react';
// import axios from 'axios';

const Home = () => {
  const [employees, setEmployees] = useState([]);

  // Fetch User Data
  // useEffect(() => {
  //   axios.get('https://your-api-url.com/employees')
  //     .then(response => {
  //       setEmployees(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);
  const [data, setData] = useState([
    { id: 1, name: 'John', phoneNumber: "+91 - 9397838323", email: "sample@321gmail.com", age: 25 },
    { id: 2, name: 'Jane', phoneNumber: "+91 - 5433838323", email: "sample@321gmail.com", age: 30 },
    { id: 3, name: 'Bob', phoneNumber: "+91 - 9397838323", email: "sample@321gmail.com", age: 35 },
    { id: 4, name: 'Amy', phoneNumber: "+91 - 9397838323", email: "sample@321gmail.com", age: 20 },
    { id: 5, name: 'Mike', phoneNumber: "+91 - 9397838323", email: "sample@321gmail.com", age: 40 },
  ]);

  const [filterText, setFilterText] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleSortChange = (direction) => {
    setSortDirection(direction);
  };

  const filteredData = data.filter((employee) => {
    const name = employee.name.toLowerCase();
    return name.includes(filterText.toLowerCase());
  });

  const sortedData = filteredData.slice().sort((a, b) => {
    if (sortDirection === 'asc') {
      return a.age - b.age;
    } else {
      return b.age - a.age;
    }
  })
  return (
    <div>

      <form action="">
        <h1>Employee List</h1>
        <input type="text" placeholder='Search...' value={filterText} onChange={handleFilterChange} />

        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((employee, id) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{employee.name}</td>
                <td>{employee.phoneNumber}</td>
                <td>{employee.email}</td>
                <td>{employee.age}</td>
                <td>{employee.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>

    </div>
  )
}

export default Home;
