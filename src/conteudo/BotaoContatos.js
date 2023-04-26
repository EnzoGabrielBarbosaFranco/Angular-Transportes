import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import DirectionsIcon from '@mui/icons-material/Directions';
import EmailIcon from '@mui/icons-material/Email';

const actions = [
  { icon: <InstagramIcon />, name: 'Instagram' },
  { icon: <EmailIcon />, name: 'Email' },
  { icon: <LocalPhoneRoundedIcon />, name: 'Telefone' },
  { icon: <DirectionsIcon />, name: 'Localização' },
];

export default function BotaoContato() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 18, right: 18 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}