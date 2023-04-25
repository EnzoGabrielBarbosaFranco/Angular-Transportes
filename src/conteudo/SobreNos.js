import { Box, Toolbar, Typography } from "@mui/material";

function SobreNos() {
    const sobrenos = {
        color: "white",
        backgroundColor: "#5570B4",
        padding: "10px",
        fontFamily: "Arial"
    };
    const texto = {
        color: "white",
        backgroundColor: "#5570B4",
        padding: "100px",
        fontFamily: "Arial",
    };
    return (
        <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
            <Typography variant="h4" textAlign={"center"} style={sobrenos} marginTop={10} fontSize={40}>
                Saiba mais sobre nós
            </Typography>
            <Typography style={sobrenos} textAlign={"center"}>Nossa Missão:</Typography>
            <Typography variant="body1" gutterBottom style={texto}>
                Aprendemos que um ótimo serviço começa e termina com profissionais experientes e amigáveis, o que explica
                nosso rigoroso processo de contratação. Acreditamos que nossa equipe seja a melhor do setor e temos total
                confiança em cada pessoa que fornece nossos serviços.
            </Typography>
        </Box>
    );
}
export default SobreNos;