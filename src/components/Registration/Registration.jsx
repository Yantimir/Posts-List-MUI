import React from "react";
import { LoginOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const Registration = ({ handleOpenModal }) => {

    return (
        <>
            <IconButton onClick={handleOpenModal}>
                <LoginOutlined sx={{ color: "#ffffff" }} />
            </IconButton>
        </>
    );
}