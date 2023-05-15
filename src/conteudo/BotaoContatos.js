import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import InstagramIcon from '@mui/icons-material/Instagram';
import DirectionsIcon from '@mui/icons-material/Directions';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const actions = [
  { icon: <InstagramIcon />, name: 'Instagram', url: 'https://www.instagram.com/angulartransportespremium/' },
  { icon: <WhatsAppIcon />, name: 'WhatsApp', url: 'https://wa.me/5567999399900' },
  { icon: <DirectionsIcon />, name: 'Localização', url: 'https://maps.app.goo.gl/ksADp3F8TZLTcZNW7' },
];

const handleClick = (url) => {
  window.open(url, '_blank');
};

export default function BotaoContato() {
  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
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
    </div>
  );
}