// src/components/SpeedDial.js
import React from 'react';
import { SpeedDial, SpeedDialAction, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ShareIcon from '@mui/icons-material/Share';

export default function SpeedDialExample() {
  const actions = [
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ZoomInIcon />, name: 'Zoom' },
    { icon: <ShareIcon />, name: 'Share' },
    { icon: <AddIcon />, name: 'Add' },
  ];

  const handleActionClick = (actionName) => {
    console.log(`${actionName} clicked`);
    switch (actionName) {
      case 'Print':
        window.print(); // Example for print functionality
        break;
    }
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <Tooltip title="Speed Dial" aria-label="speed-dial">
        <SpeedDial
          ariaLabel="Speed Dial"
          icon={<AddIcon />}
          direction="left"
          style={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
          }}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => handleActionClick(action.name)}
            />
          ))}
        </SpeedDial>
      </Tooltip>
    </div>
  );
}
