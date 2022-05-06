import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../../context/appContext";
import { Box, Button, Typography, TextField } from "@mui/material";

export const AuthorAvatarEditForm = ({ handleCloseModal }) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });
    
    const { handleSendNewAvatar } = useContext(AppContext);

    function onSubmit(dataNewAvatar) {
        handleSendNewAvatar(dataNewAvatar);
        handleCloseModal();
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
                <Typography variant="h6" color="text.secondary">Изменить аватар</Typography>
            </Box>
            <TextField
                {...register("avatar", {
                    required: "Это поле обязательное"
                })}
                label="image URL"
                variant="outlined"
                sx={{ m: 1, width: '300px' }}
                size="small"
            />
            <Box component="div">
                {errors?.avatar && <Box color="red" sx={{ textAlign: "center", fontSize: "10px" }}>{errors?.avatar?.message}</Box>}
            </Box>
            <Button
                variant="contained"
                type="submit"
                sx={{ width: '300px', m: 1 }}
            >Отправить
            </Button>
        </Box>
    );
}