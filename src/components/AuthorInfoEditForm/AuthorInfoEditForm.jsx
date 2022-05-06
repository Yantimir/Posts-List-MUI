import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../../context/appContext";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { Box, Button, TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import { amber } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(amber[400]),
    backgroundColor: amber[400],
    '&:hover': {
        backgroundColor: amber[500],
    },
}));

export const AuthorInfoEditForm = ({ handleExpandClick }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });
    const currentUser = useContext(CurrentUserContext);
    const { handleSendNewAuthor } = useContext(AppContext);

    function onSubmit(dataNewAuthor) {
        handleSendNewAuthor(dataNewAuthor);
        setTimeout(() => {
            handleExpandClick();
        }, 400);
    }

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
        >
            <TextField
                {...register("name", {
                    required: "Это поле обязательное"
                })}
                label="Name"
                variant="filled"
                sx={{ m: 1, width: '100%', pl: "10px", pr: "10px" }}
                size="small"
            />
            <Box>
                {errors?.name && <Box color="red" sx={{ textAlign: "center", fontSize: "10px" }}>{errors?.name?.message}</Box>}
            </Box>
            <TextField
                {...register("about", {
                    required: "Это поле обязательное"
                })}
                label="About"
                variant="filled"
                sx={{ m: 1, width: '100%', pl: "10px", pr: "10px" }}
                size="small"
            />
            <Box>
                {errors?.about && <Box color="red" sx={{ textAlign: "center", fontSize: "10px" }}>{errors?.about?.message}</Box>}
            </Box>
            <Box sx={{ display: "flex" }}>
                <Box sx={{ m: 1 }}>
                    <Button
                        size="small"
                        variant="contained"
                        fullWidth={true}
                        type="button"
                        onClick={() => setTimeout(() => { handleExpandClick(); }, 400)}
                    >Отменить
                    </Button>
                </Box>
                <Box sx={{ m: 1 }}>
                    <ColorButton
                        size="small"
                        variant="contained"
                        fullWidth={true}
                        type="submit"
                    >Отправить
                    </ColorButton>
                </Box>
            </Box>
        </Box>
    );
}