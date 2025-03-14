
import React, { useEffect, useState } from "react";
import "../index.css";

const User = () => {
  const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await fetch("https://dummyjson.com/users", {
            method: "GET", // Explicitly using GET
          });
  
          if (!response.ok) {
            throw new Error(`HTTP error:: ${response.status}`);
          }
  
          const data = await response.json();
          setUsers(data.users); // Use `data.users` since the API wraps users inside an object
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };
  
      fetchUsers();
    }, []);
  
    return (
      <div className="app">
        <table className="table-row-column">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default User