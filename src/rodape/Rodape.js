import { Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const footer = {
    color: 'white',
};

const socialIcons = {
    fontSize: 24,
    mr: 1,
};

function Rodape() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#5570B4',
                py: 4,
                px: 2,
                marginTop: '90px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row', // Alterando a direção para linha
                flexWrap: 'wrap', // Adicionando quebra de linha se necessário
            }}
        >
            <Box>
                <Typography variant="body2" align="center" style={footer}>
                    © {new Date().getFullYear()} Angular Transportes Premium. Todos os direitos reservados.
                </Typography>
                <Typography variant="body2" align="center" style={footer}>
                    CNPJ: 1234567890001-23
                </Typography>
            </Box>
            <Box sx={{ mt: 2 }}> {/* Adicionando espaçamento acima dos ícones */}
                <IconButton color="inherit" sx={socialIcons}>
                    <FacebookIcon />
                </IconButton>
                <IconButton color="inherit" sx={socialIcons}>
                    <TwitterIcon />
                </IconButton>
                <IconButton color="inherit" sx={socialIcons}>
                    <InstagramIcon />
                </IconButton>
            </Box>
            <Box sx={{ mt: 2, minWidth: 200 }}> {/* Adicionando espaçamento acima dos ícones e definindo uma largura mínima */}
                <Typography variant="body2" style={footer} sx={{ fontFamily: 'Poppins, sans-serif', color: "white", fontSize: 14, marginBottom: 2 }}>
                    <strong>
                        Atendimento:
                    </strong>
                </Typography>
                <Typography variant="body2" style={footer} sx={{ marginBottom: 2 }}>
                    Horário de atendimento:
                    <br />
                    08:00 às 20:00 - Segunda a Domingo,
                    <br />
                    horário de Brasília
                    <br />
                    (Exceto domingo e feriados)
                </Typography>
                <Typography variant="body2" style={footer} sx={{ fontFamily: 'Poppins, sans-serif', color: "white", fontSize: 14, marginBottom: 2 }}>
                    <strong>
                        Endereço:
                    </strong>
                    <br />
                    Av. Afonso Pena, 4785 - Santa Fe
                    <br />
                    Campo Grande/MS CEP: 79031-010
                </Typography>
                <Typography variant="body2" style={footer} sx={{ fontFamily: 'Poppins, sans-serif', color: "white", fontSize: 14, marginBottom: 2 }}>
                    <strong>
                        Central SAC:
                    </strong>
                    <br />
                    (67) 9 9939-9900
                </Typography>
                <Typography variant="body2" style={footer} sx={{ fontFamily: 'Poppins, sans-serif', color: "white", fontSize: 14, marginBottom: 2 }}>
                    <strong>
                        E-mail:
                    </strong>
                    <br />
                    angulartransportespremium@gmail.com
                </Typography>
            </Box>
        </Box>
    );
}

export default Rodape;