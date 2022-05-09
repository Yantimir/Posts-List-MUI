import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";
import { LoginOutlined, LogoutOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const Registration = () => {

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (
        <>
            <IconButton onClick={handleOpenModal}>
                {/* ?  */}
                <LoginOutlined  sx={{ color: "#ffffff" }} />
                {/* :  */}
                {/* <LogoutOutlined sx={{ color: "#ffffff" }}/> */}
            </IconButton>
            <Modal
                openModal={openModal}
                handleCloseModal={handleCloseModal}
            >
                <RegistrationForm
                    titleForm="Зарегестрироваться"
                    titleButton="Зарегестрироваться"
                    handleCloseModal={handleCloseModal}
                />
            </Modal>
        </>
    );
}