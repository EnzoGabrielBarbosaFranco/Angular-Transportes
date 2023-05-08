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
  { icon: <InstagramIcon />, name: 'Instagram', url: 'https://www.instagram.com/angulartransportespremium/' },
  { icon: <EmailIcon />, name: 'Email', url: 'angulartransportespremium@gmail.com' },
  { icon: <LocalPhoneRoundedIcon />, name: 'Telefone',url:'' },
  { icon: <DirectionsIcon />, name: 'Localização', url: 'https://www.google.com/maps/dir/-20.4306639,-54.5505696/Av.+Afonso+Pena,+4785+-+Santa+Fe,+Campo+Grande+-+MS,+79031-010/@-20.4494987,-54.6007196,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x9486e89588ee763d:0xa4d7688c3e686ef!2m2!1d-54.5911086!2d-20.4591406' },
];

const handleClick = (url) => {
  window.open(url, '_blank');
};

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
            onClick={() => handleClick(action.url)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}