import { Box, CssBaseline } from '@mui/material';
import Header from './components/cabecalho';
import SobreNos from './conteudo/SobreNos';


function App() {
  return (
    <Box  sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
      <SobreNos/>
    </Box>
  );
}

export default App;