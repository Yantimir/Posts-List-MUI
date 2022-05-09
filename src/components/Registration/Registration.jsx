import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";
import { LoginOutlined, LogoutOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const Registration = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <IconButton>
                {/* ?  */}
                <LoginOutlined onClick={handleOpen} sx={{ color: "#ffffff" }} />
                {/* :  */}
                {/* <LogoutOutlined sx={{ color: "#ffffff" }}/> */}
            </IconButton>
            <Modal
                openModal={open}
                handleCloseModal={handleClose}
            >
                <RegistrationForm
                    titleForm="Зарегестрироваться"
                    titleButton="Отправить"
                />
            </Modal>
        </>
    );
}