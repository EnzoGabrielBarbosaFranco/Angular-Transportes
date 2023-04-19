// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" style={{backgroundColor: "#ff751a"}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu" 
                        sx={{ mr: 4 }}>


                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} style={{color: "black"}}>
                        Angular Transportes Premium
                    </Typography>
                    <Button color="inherit" sx={{ mr: 4 }}>Sobre Nós</Button>
                    <Button color="inherit" sx={{ mr: 1 }}>Contatos</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Header;