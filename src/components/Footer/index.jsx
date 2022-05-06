import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import {Socials} from "../Socials"

export const Footer = () => {
    return (
        <AppBar position="static" >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                    <Toolbar>
                        <Typography variant="h6" component="h1" sx={{ fontSize: "12px", flexGrow: 1 }}>
                            Copyright © 2022 Material-UI SAS.
                        </Typography>
                    </Toolbar>
                </Box>
                {/* <Socials /> */}
            </Box>
        </AppBar>
    );
};