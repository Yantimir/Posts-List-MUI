import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../../context/appContext";
import { Box, Button, Typography, TextField } from "@mui/material";

export const AuthorCreatePostForm = ({ titleForm, titleButton, handleCloseNewPost }) => {

    const { handleCreateNewPost } = useContext(AppContext);
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    function onSubmit(dataNewPost) {
        handleCreateNewPost(dataNewPost);
        handleCloseNewPost();
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
                multiline
                size="small"
                label="image URL"
                variant="outlined"
                sx={{ m: 1, width: '300px' }}
            />
            <Box component="div">
                {errors?.image && <Box color="red" sx={{ textAlign: "center", fontSize: "10px" }}>{errors?.image?.message}</Box>}
            </Box>
            <TextField
                {...register("title", {
                    required: "Это поле обязательное"
                })}
                multiline
                rows={3}
                size="small"
                label="Title"
                variant="outlined"
                sx={{ m: 1, width: '300px' }}
            />
            <Box component="div">
                {errors?.title && <Box color="red" sx={{ textAlign: "center", fontSize: "10px" }}>{errors?.title?.message}</Box>}
            </Box>
            <TextField
                {...register("text", {
                    required: "Это поле обязательное"
                })}
                multiline
                rows={7}
                size="small"
                label="Text"
                variant="outlined"
                sx={{ m: 1, width: '300px' }}
            />
            <Box component="div">
                {errors?.text && <Box color="red" sx={{ textAlign: "center", fontSize: "10px" }}>{errors?.text?.message}</Box>}
            </Box>
            <TextField
                {...register("tags")}
                size="small"
                label="Tags"
                variant="outlined"
                sx={{ m: 1, width: '300px' }}
            />
            <Button
                variant="contained"
                type="submit"
                sx={{ width: '300px', m: 1 }}
            >{titleButton}
            </Button>
        </Box>
    );
}