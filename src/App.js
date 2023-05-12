import { Box, CssBaseline } from '@mui/material';
import Header from './components/cabecalho';
import SobreNos from './conteudo/SobreNos';
import BotaoContato from './conteudo/BotaoContatos';
import Cards from './conteudo/Cards';

function App() {
  return (
    <Box sx={{ }}>
      <CssBaseline/>
      <Header/>
      <Cards/>
      <SobreNos/>
      <BotaoContato/>
    </Box>
  );
}

export default App;