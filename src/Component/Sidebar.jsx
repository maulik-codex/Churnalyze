import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const NAVIGATION = [
  { segment: 'dashboard', title: 'Dashboard', icon: <DashboardIcon /> },
  
];

const DASHBOARD_SUBMENU = [
  { key: 'unpredicted', label: 'Unpredicted Data' },
  { key: 'predict-churn', label: 'Predict Churn' },
  { key: 'email', label: 'Email' },
];

const sidebarFont = `Inter, Roboto, Segoe UI, Arial, sans-serif`;

export default function Sidebar({ onNavigate }) {
  const [collapsed, setCollapsed] = React.useState(false);

  const handleToggle = () => setCollapsed((prev) => !prev);

  return (
    <div
      style={{
        width: collapsed ? 60 : 240,
        background:'rgb(255, 255, 255)' ,
        height: '100vh',
        padding: '16px 0',
        transition: 'width 0.2s',
        overflow: 'hidden',
        fontFamily: sidebarFont,
        fontSize: 15,
      }}
    >
      <div
        style={{ display: 'flex', justifyContent: collapsed ? 'center' : 'flex-end', padding: '0 8px 16px 8px' }}
      >
        <button
          onClick={handleToggle}
          style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}
        >
          {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </button>
      </div>
      {NAVIGATION.map((item) => (
        <div key={item.segment}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 16px',
              cursor: 'pointer',
              color:"orange",
              fontWeight: 500,
              fontSize: 16,
              borderRadius: 8,
              margin: '0 8px',
              justifyContent: collapsed ? 'center' : 'flex-start',
              transition: 'background 0.15s',
            }}
            onClick={() => onNavigate && onNavigate(`./${item.title}.jsx`)}
            onMouseOver={e => e.currentTarget.style.background = '#e0e0e0'}
            onMouseOut={e => e.currentTarget.style.background = 'transparent'}
          >
            {item.icon}
            {!collapsed && <span style={{ marginLeft: 12 }}>{item.title}</span>}
          </div>
         
          {item.segment === 'dashboard' && !collapsed && (
            <div style={{ marginLeft: 36 }}>
              {DASHBOARD_SUBMENU.map((sub) => (
                <div
                  key={sub.key}
                  style={{
                    padding: '8px 0',
                    color:'orange',
                    cursor: 'pointer',
                    fontWeight: 400,
                    fontSize: 15,
                    borderRadius: 6,
                    margin: '2px 0',
                    transition: 'background 0.15s',
                  }}
                  onClick={() => onNavigate && onNavigate(`./${sub.label.replace(/ /g, '')}.jsx`)}
                  onMouseOver={e => e.currentTarget.style.background = '#e0e0e0'}
                  onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                >
                  {sub.label}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
