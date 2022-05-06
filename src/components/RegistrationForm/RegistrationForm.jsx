import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Typography, TextField } from "@mui/material";

export const RegistrationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    function onSubmit(data) {
        data
    }

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", maxWidth: "300px" }}
        >
            <Typography>Введите данные</Typography>
            <TextField
                {...register("name", {
                    required: "Это поле обязательно"
                })}
                id="name"
                label="Введите имя"
                variant="outlined"
                sx={{ m: 1, width: '300px' }}
                size="small"
            />
            <Box component="div">
                {errors?.name && <Box color="red" sx={{ textAlign: "center", fontSize: "10px" }}>{errors?.name?.message}</Box>}
            </Box>
            <TextField
                {...register("email")}
                label="Введите ваш город"
                variant="outlined"
                sx={{ m: 1, width: '300px' }}
                size="small"
            />
            <TextField
                {...register("password", {
                    pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                        message: "Пароль должен содержать минимум 8 символов, одну букву латинского алфавита и одну цифру"
                    }
                })}
                label="Введите password"
                variant="outlined"
                sx={{ m: 1, width: '300px' }}
                size="small"
            />
            <Box component="div">
                {errors?.password && <Typography color="red" sx={{ textAlign: "center", fontSize: "10px" }}>{errors?.password?.message}</Typography>}
            </Box>
            <Button
                variant="contained"
                type="submit"
                sx={{ width: '300px', m: 1 }}
            >Зарегестрироваться
            </Button>
        </Box>
    );
}