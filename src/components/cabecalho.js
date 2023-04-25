// import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Header() {
    return (
        <AppBar component="nav" style={{backgroundColor: "#ff751a"}}>
            <Toolbar>
  
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, ml: 4 }} style={{color: "black"}}>
                    Angular Transportes Premium
                </Typography>
                <Button color="inherit" sx={{ mr: 4 }}>Sobre Nós</Button>
                <Button color="inherit" sx={{ mr: 1 }}>Contatos</Button>
            </Toolbar>
        </AppBar>
    );
}
export default Header;