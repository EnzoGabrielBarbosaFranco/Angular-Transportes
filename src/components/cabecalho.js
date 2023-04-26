// import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Header() {
    return (
        <AppBar component="nav" style={{backgroundColor: "#ff751a"}}>
            <Toolbar>
  
                <Typography variant="h4" component="div" fontFamily={'Train One'} sx={{ flexGrow: 1, ml: 4 }} padding={"35px"} style={{color: "black"}}>
                    Angular Transportes Premium
                </Typography>
                <Button color="inherit" sx={{ mr: 4, fontSize: 15 }} fontFamily={'Train One'}>Sobre Nós</Button>
                <Button color="inherit" sx={{ mr: 1, fontSize: 15 }} fontFamily={'Train One'}>Contatos</Button>
            </Toolbar>
        </AppBar>
    );
}
export default Header;