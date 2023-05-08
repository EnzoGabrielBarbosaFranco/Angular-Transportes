// import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function Header() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <AppBar component="nav" style={{ backgroundColor: "#ff751a" }}>
            <Toolbar>

                <Typography variant="h4" component="div" fontFamily={'Train One'} sx={{ flexGrow: 1, ml: 4 }} padding={"35px"} style={{ color: "black" }}>
                    Angular Transportes Premium
                </Typography>
                <Button color="inherit" sx={{ mr: 4, fontSize: 15 }} fontFamily={'Train One'}>Sobre Nós</Button>
                <Button color="inherit" sx={{ mr: 1, fontSize: 15 }} fontFamily={'Train One'} onClick={handleClickOpen}>Telefone</Button>
            </Toolbar>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">
                        {"Telefone para contato:"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description" sx={{  fontSize: 20 }} textAlign={'center'}>
                        +55 (67) 9 9939-9900
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
        </AppBar>
    );
}