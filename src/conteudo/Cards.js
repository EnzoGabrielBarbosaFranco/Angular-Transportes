import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Cards() {
    const cards = {
        color: "black",
        padding: "400px",
        paddingTop: "140px",
    };
    const servicos = {
        color: "#162b6f",
        paddingBottom: "20px"
    };
    return (
        <div style={cards}>
            <Typography variant="h3" component="h3" textAlign="center" style={servicos}
                sx={{
                    fontSize: 70,
                    fontFamily: 'oswald-medium, oswald, sans-serif',
                }}>
                Serviços
            </Typography>
   <img src="../" alt="" />
            <Card sx={{ backgroundColor: '#8f8f8f' , marginBottom: '16px' }}>
                <CardMedia
                    sx={{ height: 280 }}
                    image="./imagens/imagen-caminhao.webp"
                    title="assistencia-rodoviaria"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" textAlign="center">
                        Guincho 24 Horas
                    </Typography>
                    <Typography variant="body2" textAlign="center" color="text.secondary">
                        "Seja qual for a hora ou o problema, conte com nosso serviço de guincho 24 horas para resgatar seu veículo e trazer tranquilidade ao seu dia."
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ backgroundColor: '#8f8f8f', marginBottom: '16px' }}>
                <CardMedia
                    sx={{ height: 280 }}
                    image="../imagens/imagen-caminhao.webp"
                    title="assistencia-rodoviaria"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" textAlign="center">
                        Reboque de longa distância
                    </Typography>
                    <Typography variant="body2" textAlign="center" color="text.secondary">
                        "Transportamos seu veículo com segurança e agilidade em reboques de longa distância.
                        <br />
                        Conte conosco para levar seu automóvel a qualquer destino, sem preocupações."
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ backgroundColor: '#8f8f8f' , marginBottom: '16px' }}>
                <CardMedia
                    sx={{ height: 280 }}
                    image="../imagens/imagen-caminhao.webp"
                    title="assistencia-rodoviaria"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" textAlign="center">
                        Assistência rodoviária
                    </Typography>
                    <Typography variant="body2" textAlign="center" color="text.secondary">
                        "Quando a estrada te desafia, nossa assistência rodoviária está aqui para ajudar.
                        <br />
                        Conte conosco para resolver problemas mecânicos, trocar pneus e garantir que você continue sua jornada com tranquilidade e segurança."
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
export default Cards;