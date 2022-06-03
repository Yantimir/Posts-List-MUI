import React, { useContext } from "react";
import { CurrentUserContext } from './../../context/CurrentUserContext';
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { Icon16Crown } from '@vkontakte/icons';
import { Link } from "react-router-dom";


export const Header = ({ children }) => {

    const currentUser = useContext(CurrentUserContext);
    const fakeAvatar = "https://react-learning.ru/image-compressed/default-image.jpg";
    const letterAvatar = currentUser?.name?.split(" ").slice(0, 2).map(n => n.slice(0, 1)).join("");

    return (
        <AppBar position="sticky" sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box>
                    <Toolbar>
                        <Icon16Crown width={32} height={32} />
                        <Link to="/">
                            <Typography
                                sx={{
                                    textDecoration: "none",
                                    color: "#ffffff",
                                    cursor: "pointer",
                                    textTransform: "uppercase",
                                    pl: "15px"
                                }}>
                                Posts List
                            </Typography>
                        </Link>
                    </Toolbar>
                </Box>
                <Box sx={{ pr: "15px", display: "flex", alignItems: "center" }}>
                    {children}
                </Box>
            </Box>
        </AppBar >
    );
};