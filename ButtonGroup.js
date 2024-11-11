// src/components/ButtonGroupExample.js
import React from 'react';
import { Button, ButtonGroup, Tooltip } from '@mui/material';

export default function ButtonGroupExample() {
  const handleClick = (action) => {
    console.log(`${action} button clicked`);
  };

  return (
    <div style={{ padding: 16 }}>
      <ButtonGroup variant="contained" aria-label="button group">
        <Tooltip title="Click to perform Action 1" arrow>
          <Button
            color="primary"
            onClick={() => handleClick('Action 1')}
          >
            Action 1
          </Button>
        </Tooltip>
        <Tooltip title="Click to perform Action 2" arrow>
          <Button
            color="secondary"
            onClick={() => handleClick('Action 2')}
          >
            Action 2
          </Button>
        </Tooltip>
        <Tooltip title="Click to perform Action 3" arrow>
          <Button
            color="success"
            onClick={() => handleClick('Action 3')}
          >
            Action 3
          </Button>
        </Tooltip>
      </ButtonGroup>
    </div>
  );
}
