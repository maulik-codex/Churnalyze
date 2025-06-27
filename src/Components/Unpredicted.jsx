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
    salary: 50000
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
    salary: 72000
  },
  {
    id: 103,
    surname: "Schmidt",
    creditScore: 720,
    geography: "Germany",
    gender: "Female",
    age: 42,
    tenure: 5,
    balance: 180000,
    products: 2,
    hasCreditCard: true,
    isActive: false,
    salary: 85000
  },
  {
    id: 104,
    surname: "Dubois",
    creditScore: 680,
    geography: "France",
    gender: "Male",
    age: 28,
    tenure: 3,
    balance: 50000,
    products: 1,
    hasCreditCard: true,
    isActive: true,
    salary: 45000
  },
  {
    id: 105,
    surname: "Garcia",
    creditScore: 750,
    geography: "Spain",
    gender: "Female",
    age: 55,
    tenure: 10,
    balance: 320000,
    products: 2,
    hasCreditCard: false,
    isActive: true,
    salary: 110000
  },
  {
    id: 106,
    surname: "Smith",
    creditScore: 600,
    geography: "United Kingdom",
    gender: "Male",
    age: 30,
    tenure: 2,
    balance: 15000,
    products: 1,
    hasCreditCard: false,
    isActive: false,
    salary: 38000
  },
  {
    id: 107,
    surname: "Wang",
    creditScore: 700,
    geography: "Germany",
    gender: "Female",
    age: 38,
    tenure: 7,
    balance: 90000,
    products: 1,
    hasCreditCard: true,
    isActive: true,
    salary: 60000
  },
  {
    id: 108,
    surname: "Rossi",
    creditScore: 620,
    geography: "France",
    gender: "Male",
    age: 48,
    tenure: 4,
    balance: 75000,
    products: 2,
    hasCreditCard: true,
    isActive: false,
    salary: 55000
  },
  {
    id: 109,
    surname: "Müller",
    creditScore: 780,
    geography: "Germany",
    gender: "Female",
    age: 33,
    tenure: 9,
    balance: 400000,
    products: 3,
    hasCreditCard: true,
    isActive: true,
    salary: 150000
  },
  {
    id: 110,
    surname: "Silva",
    creditScore: 690,
    geography: "Spain",
    gender: "Male",
    age: 25,
    tenure: 1,
    balance: 20000,
    products: 1,
    hasCreditCard: false,
    isActive: true,
    salary: 30000
  },
  {
    id: 111,
    surname: "Jones",
    creditScore: 670,
    geography: "United Kingdom",
    gender: "Female",
    age: 40,
    tenure: 6,
    balance: 120000,
    products: 2,
    hasCreditCard: true,
    isActive: true,
    salary: 70000
  },
  {
    id: 112,
    surname: "Kim",
    creditScore: 730,
    geography: "Germany",
    gender: "Male",
    age: 50,
    tenure: 12,
    balance: 280000,
    products: 1,
    hasCreditCard: false,
    isActive: false,
    salary: 95000
  },
  {
    id: 113,
    surname: "Lefevre",
    creditScore: 640,
    geography: "France",
    gender: "Female",
    age: 31,
    tenure: 3,
    balance: 40000,
    products: 1,
    hasCreditCard: true,
    isActive: true,
    salary: 48000
  },
  {
    id: 114,
    surname: "Gonzales",
    creditScore: 710,
    geography: "Spain",
    gender: "Male",
    age: 45,
    tenure: 8,
    balance: 160000,
    products: 2,
    hasCreditCard: true,
    isActive: false,
    salary: 80000
  },
  {
    id: 115,
    surname: "Brown",
    creditScore: 660,
    geography: "United Kingdom",
    gender: "Female",
    age: 29,
    tenure: 2,
    balance: 30000,
    products: 1,
    hasCreditCard: false,
    isActive: true,
    salary: 42000
  },
  {
    id: 116,
    surname: "Schneider",
    creditScore: 740,
    geography: "Germany",
    gender: "Male",
    age: 36,
    tenure: 7,
    balance: 200000,
    products: 2,
    hasCreditCard: true,
    isActive: true,
    salary: 90000
  },
  {
    id: 117,
    surname: "Durand",
    creditScore: 630,
    geography: "France",
    gender: "Female",
    age: 52,
    tenure: 5,
    balance: 60000,
    products: 1,
    hasCreditCard: true,
    isActive: false,
    salary: 50000
  }

  
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UnpredictedData;
