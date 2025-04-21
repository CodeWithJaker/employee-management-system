import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteEmployee, listEmployees } from "../services/EmployeeService";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await listEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    fetchEmployees();
  }, []);

  const addNewEmployee = () => {
    navigator("/add-employee");
  };
  const updateEmployee = (id) => {
    navigator(`/edit-employee/${id}`);
  };

  const removeEmployee = (id) => {
    console.log("Delete employee with ID:", id);
    // Implement the delete functionality here
    deleteEmployee(id).then((response) => { 
      console.log(response.data);
      setEmployees(employees.filter((employee) => employee.id !== id));
    }
    ).catch((error) => {
      console.error("Error deleting employee:", error);
    });
  }

  return (
    <div className="container">
      
      <h2 className="text-center">Add Employee</h2>
      <button className="btn btn-primary mb-2" onClick={addNewEmployee}>
        Add Employee
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateEmployee(employee.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeEmployee(employee.id)}
                >   
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
