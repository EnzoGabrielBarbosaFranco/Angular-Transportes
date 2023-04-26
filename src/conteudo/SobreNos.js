import { Box, Toolbar, Typography } from "@mui/material";

function SobreNos() {
    const sobrenos = {
        color: "white",
        backgroundColor: "#5570B4",
        padding: "10px",
    };
    const texto = {
        color: "white",
        backgroundColor: "#5570B4",
        padding: "150px",
    };
    const missao = {
        color: "white",
        backgroundColor: "#5570B4",
    };
    return (
        <Box component="main" fullWidth sx={{}}>
            <Toolbar />
            <Typography variant="h4" textAlign={"center"} style={sobrenos} marginTop={20} sx={{ fontSize: 40 }} >
                Saiba mais sobre nós
            </Typography>
            <Typography style={missao} textAlign={"center"} sx={{ fontSize: 18, lineHeight: 1.35 }}>Nossa Missão:
            </Typography>
            <Typography style={texto} textAlign={"center"} sx={{ fontSize: 15, lineHeight: 1.5 }}>
                Aprendemos que um ótimo serviço começa e termina com profissionais experientes e amigáveis, o que explica
                <br />
                nosso rigoroso processo de contratação. Acreditamos que nossa equipe seja a melhor do setor e temos total
                <br />
                confiança em cada pessoa que fornece nossos serviços.
                <br />
                <br />
                ANGULAR TRANSPORTES PREMIUM LTDA busca finalizar cada reboque (guincho) com responsabilidade e o maior
                <br />
                nível de qualidade para passar credibilidade e confiança à seus clientes. Com foco em serviços personalizados,
                <br />
                preços competitivos e satisfação do cliente, estamos sempre nos esforçando para atender e superar nossas
                <br />
                expectativas.
            </Typography>
        </Box>
    );
}
export default SobreNos;