import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';

const desktopOS = [
  { label: 'Balance', value: 60 },
  { label: 'Age', value: 30 },
  { label: 'Removed', value: 10 },
];

const valueFormatter = (v) => `${v}%`;

function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75] }]}
      series={[{ data: [20, 28, 32, 37, 45, 57, 59, 63, 69, 73, 77, 81] }]}
      height={250}
    />
  );
}

function PieActiveArc() {
  return (
    <PieChart
      series={[
        {
          data: desktopOS,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          valueFormatter,
        },
      ]}
      height={250}
      width={300}
    />
  );
}

const cardStyle = {
  background: '#fff',
  padding: '16px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  fontFamily: "'Poppins', sans-serif",
};

const headingStyle = {
  marginBottom: '8px',
  fontSize: '18px',
  fontWeight: 600,
  color: '#333',
};

const listItemStyle = {
  fontSize: '15px',
  color: '#555',
  marginBottom: '4px',
};

const Dashboard = () => {
  return (
    <div style={{ padding: '24px', fontFamily: "'Poppins', sans-serif", backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '24px' }}>Dashboard</h2>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '24px' }}>
        <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={cardStyle}>
              <h4 style={headingStyle}>Bar Graph</h4>
              <BarChart
                xAxis={[{ scaleType: 'band', data: ['A', 'B', 'C', 'D'] }]}
                series={[{ data: [4, 3, 5, 2] }]}
                width={300}
                height={200}
              />
            </div>
            <div style={cardStyle}>
              <h4 style={headingStyle}>Bar Graph Stats</h4>
              <ul style={{ paddingLeft: '16px' }}>
                <li style={listItemStyle}>Value A: 4</li>
                <li style={listItemStyle}>Value B: 3</li>
                <li style={listItemStyle}>Value C: 5</li>
                <li style={listItemStyle}>Value D: 2</li>
              </ul>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={cardStyle}>
              <h4 style={headingStyle}>Histogram Stats</h4>
              <ul style={{ paddingLeft: '16px' }}>
                <li style={listItemStyle}>Peak: 81</li>
                <li style={listItemStyle}>Average: 50</li>
                <li style={listItemStyle}>Trend: Increasing</li>
              </ul>
            </div>
            <div style={cardStyle}>
              <h4 style={headingStyle}>Histogram</h4>
              <BasicLineChart />
            </div>
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={cardStyle}>
            <h4 style={headingStyle}>Pie Chart</h4>
            <PieActiveArc />
          </div>
          <div style={cardStyle}>
            <h4 style={headingStyle}>Pie Chart Stats</h4>
            <ul style={{ paddingLeft: '16px' }}>
              <li style={listItemStyle}>Balance: 60%</li>
              <li style={listItemStyle}>Age: 30%</li>
              <li style={listItemStyle}>Removed: 10%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
