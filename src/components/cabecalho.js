import AppBar from '@mui/material/AppBar';
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [openEmail, setOpenEmail] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleScrollToSobreNos = () => {
    const sobreNosDiv = document.getElementById('sobre-nos');
    sobreNosDiv.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth', });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenEmail = () => {
    setOpenEmail(true);
  };

  const handleCloseEmail = () => {
    setOpenEmail(false);
  };

  return (
    <AppBar component="nav" style={{ backgroundColor: "#ff751a" }}>
      <Toolbar>
        <Typography
          variant="h4"
          component="button"
          fontFamily={'Train One'}
          sx={{ flexGrow: 1, mr: 93, padding: "35px", color: "black", border: "none", background: "none", cursor: "pointer" }}
          onClick={handleScrollToTop}>
          Angular Transportes Premium
        </Typography>

        <Button color="inherit" sx={{ mr: 2, fontSize: 15 }} fontFamily={'Train One'} onClick={handleScrollToSobreNos}>
          <Box component="span" sx={{ mr: 2, mt: 1 }}>
            <InfoIcon />
          </Box>
          Sobre Nós
        </Button>

        <Button color="inherit" sx={{ mr: 3, fontSize: 15 }} fontFamily={'Train One'} onClick={handleClickOpen}>
          <Box component="span" sx={{ mr: 2, mt: 1 }}>
            <PhoneIcon />
          </Box>
          Telefone
        </Button>

        <Button color="inherit" sx={{ mr: 1, fontSize: 15 }} fontFamily={'Train One'} onClick={handleOpenEmail}>
          <Box component="span" sx={{ mr: 2, mt: 1 }}>
            <SupportAgentIcon />
          </Box>
          Fale Conosco
        </Button>
      </Toolbar>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Telefone para contato:"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{ fontSize: 20 }} textAlign={'center'}>
            +55 (67) 9 9939-9900
          </DialogContentText>
        </DialogContent>
      </Dialog>

      <Dialog
        open={openEmail}
        onClose={handleCloseEmail}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Entre em contato conosco:"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{ fontSize: 20 }} textAlign={'center'}>
            angulartransportespremium@gmail.com
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </AppBar >
  );
}