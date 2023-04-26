import { Box, CssBaseline } from '@mui/material';
import Header from './components/cabecalho';
import SobreNos from './conteudo/SobreNos';
import BotaoContato from './conteudo/BotaoContatos';


function App() {
  return (
    <Box sx={{ }}>
      <CssBaseline/>
      <Header/>
      <SobreNos/>
      <BotaoContato/>
    </Box>
  );
}

export default App;