import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function FloatingActionButtonExample() {
  const handleClick = () => {
    alert('Floating Action Button Clicked!');
  };

  return (
    <div style={{ marginTop:'5px', height: '100vh' }}>
      <Tooltip title="Add" aria-label="add">
        <Fab
          color="primary"
          aria-label="add"
          style={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
          }}
          onClick={handleClick}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}
