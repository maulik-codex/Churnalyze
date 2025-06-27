import React, { useState } from 'react';
import './Unpredicted.css';

const dummyData = [
  {
    id: 101,
    surname: "Sharma",
    creditScore: 720,
    geography: "India",
    gender: "Female",
    age: 29,
    tenure: 5,
    balance: 150000,
    products: 2,
    hasCreditCard: true,
    isActive: true,
    salary: 50000,
    probability: "76%"
  },
  {
    id: 102,
    surname: "Verma",
    creditScore: 650,
    geography: "Germany",
    gender: "Male",
    age: 35,
    tenure: 8,
    balance: 250000,
    products: 1,
    hasCreditCard: false,
    isActive: true,
    salary: 72000,
    probability: "45%"
  }
  // Add more rows as needed
];

const UnpredictedData = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selected, setSelected] = useState({});

  const handleSelectAll = () => {
    const newSelected = {};
    dummyData.forEach((item) => {
      newSelected[item.id] = !selectAll;
    });
    setSelected(newSelected);
    setSelectAll(!selectAll);
  };

  const handleCheckboxChange = (id) => {
    setSelected((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="table-container">
      <h2>Unpredicted Data</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th>Customer ID</th>
            <th>Surname</th>
            <th>Credit Score</th>
            <th>Geography</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Tenure</th>
            <th>Balance</th>
            <th>Number of Products</th>
            <th>Has Credit Card</th>
            <th>Active Member</th>
            <th>Estimated Salary</th>
            <th>Probability</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((row, index) => (
            <tr key={row.id}>
              <td>{index + 1}</td>
              <td>
                <input
                  type="checkbox"
                  checked={!!selected[row.id]}
                  onChange={() => handleCheckboxChange(row.id)}
                />
              </td>
              <td>{row.id}</td>
              <td>{row.surname}</td>
              <td>{row.creditScore}</td>
              <td>{row.geography}</td>
              <td>{row.gender}</td>
              <td>{row.age}</td>
              <td>{row.tenure}</td>
              <td>{row.balance}</td>
              <td>{row.products}</td>
              <td>{row.hasCreditCard ? "Yes" : "No"}</td>
              <td>{row.isActive ? "Yes" : "No"}</td>
              <td>{row.salary}</td>
              <td>{row.probability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UnpredictedData;
