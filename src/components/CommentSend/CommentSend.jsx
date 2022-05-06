import React, { useContext, useState } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { AppContext } from "../../context/appContext";
import { Avatar, IconButton, Box, TextField } from "@mui/material";
import { ArrowCircleRightOutlined } from '@mui/icons-material';

export const CommentSend = ({ id }) => {
    const currentUser = useContext(CurrentUserContext);
    const { handleSendNewComment } = useContext(AppContext);
    // новый комментарий
    const [newCommentData, setNewCommentData] = useState({
        text: ""
    });
    // данные из input нового комментария
    const handleUpdateNewCommentChange = (e) => {
        setNewCommentData({
            ...newCommentData,
            [e.target.name]: e.target.value
        })
    }

    // добавление комментария
    const handleSendNewCommentClick = (e) => {
        e.preventDefault();
        handleSendNewComment(id, newCommentData);
        e.target.reset();
    }

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                mt: "15px"
            }}
            onSubmit={handleSendNewCommentClick}
            component="form"
            noValidate
            autoComplete="off"
        >
            <Avatar
                sx={{ mr: "10px" }}
                src={currentUser.avatar && currentUser.avatar} aria-label="avatar"
            >
                {currentUser.avatar && currentUser.name.slice(0, 1)}
            </Avatar>
            <Box sx={{
                width: "800ch",
                maxWidth: "100%"
            }}>
                <TextField
                    size="small"
                    color="secondary"
                    onChange={handleUpdateNewCommentChange}
                    multiline
                    maxRows={7}
                    name="text"
                    label="Comment"
                    variant="outlined"
                    fullWidth
                />
            </Box>
            {newCommentData.text !== "" &&
                <IconButton
                    type="submit"
                    size="small"
                    sx={{ justifyContent: "center", alignItems: "center" }}>
                    <ArrowCircleRightOutlined
                        fontSize="medium"
                        sx={{ cursor: "pointer", color: "rgba(0, 0, 0, 0.54)" }}
                    />
                </IconButton>
            }
        </Box>
    );
}