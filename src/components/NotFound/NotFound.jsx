import React from "react";
import { Container, Box, Typography, Button, Link } from "@mui/material";
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';

export const NotFound = ({ children, title, buttonText, buttonAction }) => {
    return (
        <Container >
            <Box sx={{mt: 5,display: "flex", flexDirection: "column", alignItems: "center", justifyContent: " center"}}>
                <Link href="/">
                    <SentimentDissatisfiedOutlinedIcon aria-hidden="true"  sx={{width: "200px", height: "200px", mb: 3}}/>
                </Link>
                <Typography sx={{mb: 3, fontSize: "30px"}}>
                    {title}
                </Typography>
                {children}
                <Button onClick={buttonAction}  variant="contained">{buttonText}</Button>
            </Box>
        </Container>
    );
}