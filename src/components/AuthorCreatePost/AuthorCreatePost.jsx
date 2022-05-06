import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { AuthorCreatePostForm } from "../AuthorCreatePostForm/AuthorCreatePostForm";
import Modal from "../Modal/Modal";
import { styled } from '@mui/material/styles';
import { amber } from '@mui/material/colors';
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(amber[400]),
    backgroundColor: amber[400],
    '&:hover': {
        backgroundColor: amber[500],
    },
}));

export const AuthorCreatePost = ({ id }) => {

    const [openNewPost, setOpenNewPost] = useState(false);
    const handleOpenNewPost = () => setOpenNewPost(true);
    const handleCloseNewPost = () => setOpenNewPost(false);

    return (
        <>
            <ColorButton
                fullWidth={true}
                sx={{ maxWidth: "100%" }}
                size="small"
                variant="contained"
                onClick={handleOpenNewPost}
            >+ Добавить пост
            </ColorButton>
            <Modal
                openModal={openNewPost}
                handleCloseModal={handleCloseNewPost}
            >
                <AuthorCreatePostForm
                    titleForm="Новый пост"
                    titleButton="Отправить"
                    handleCloseNewPost={handleCloseNewPost}
                />
            </Modal>
        </>
    );
}
