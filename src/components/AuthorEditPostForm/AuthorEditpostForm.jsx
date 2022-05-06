import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import { AppContext } from "../../context/appContext";


export const AuthorEditPostForm = ({ titleForm, titleButton, id, handleCloseEditPost }) => {

    const styleСontentModal = {
        margin: 1,
        width: "300px"
    }
    const location = useLocation();
    const post = location?.state?.post;

    const { handleSendEditPost } = useContext(AppContext);
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues:{
            image: post?.image,
        },
        mode: "onBlur"
    });

    function onSubmit(dataEditPost) {
        handleSendEditPost(id, dataEditPost);
        handleCloseEditPost();
    }

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", maxWidth: "300px" }}
        >
            <Box>
                <Typography variant="h6" color="text.secondary">{titleForm}</Typography>
            </Box>
            <TextField
                {...register("image", {
                    required: "Это поле обязательное"
                })}
                id="image"
                defaultValue={post?.image}
                multiline
                label="image URL"
                variant="outlined"
                sx={styleСontentModal}
                size="small"
            />
            <Box component="div">
                {errors?.image && <Box color="red" sx={{ textAlign: "center", fontSize: "10px" }}>{errors?.image?.message}</Box>}
            </Box>
            <TextField
                {...register("title", {
                    required: "Это поле обязательное"
                })}
                multiline
                rows={2}
                label="Title"
                variant="outlined"
                sx={styleСontentModal}
                size="small"
            />
            <Box component="div">
                {errors?.title && <Box color="red" sx={{ textAlign: "center", fontSize: "10px" }}>{errors?.title?.message}</Box>}
            </Box>
            <TextField
                {...register("text", {
                    required: "Это поле обязательное"
                })}
                multiline
                rows={5}
                label="Text"
                variant="outlined"
                sx={styleСontentModal}
                size="small"
            />
            <Box component="div">
                {errors?.text && <Box color="red" sx={{ textAlign: "center", fontSize: "10px" }}>{errors?.text?.message}</Box>}
            </Box>
            <TextField
                {...register("tags", {
                    required: "Это поле обязательное"
                })}
                label="Tags"
                variant="outlined"
                sx={{ m: 1, width: '300px' }}
                size="small"
            />
            <Button
                variant="contained"
                type="submit"
                sx={styleСontentModal}
            >{titleButton}
            </Button>
        </Box>
    );
}