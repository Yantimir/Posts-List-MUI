import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";

export const SimpleForm = ({ addContactsSimpleForm }) => {

    const [contactInfo, setContactInfo] = useState({
        name: "",
        lastname: "",
        phoneNumber: ""
    });

    const handleSimpleFormInputChange = (e) => {
        setContactInfo({
            ...contactInfo,
            [e.target.name]: e.target.value
        });
    }

    const hahdleSimpleFormSubmit = (e) => {
        e.preventDefault();
        addContactsSimpleForm(contactInfo);
        setContactInfo({
            name: "",
            lastname: "",
            phoneNumber: ""
        });
    }

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={hahdleSimpleFormSubmit}
            sx={{ display: "flex", flexDirection: "column" }}
        >
            <Typography>Введите данные</Typography>
            <TextField
                onChange={handleSimpleFormInputChange}
                name="name"
                label="Введите имя"
                variant="outlined"
                sx={{ m: 1, width: '300px' }}
                size="small"
            />
            <TextField
                onChange={handleSimpleFormInputChange}
                name="lastname"
                label="Введите фамилию"
                variant="outlined"
                sx={{ m: 1, width: '300px' }}
                size="small"
            />
            <TextField
                onChange={handleSimpleFormInputChange}
                name="phoneNumber"
                label="Введите телефон"
                variant="outlined"
                sx={{ m: 1, width: '300px' }}
                size="small"
            />
            <Button
                variant="contained"
                type="submit"
                sx={{ width: '200px' }}
                size="small"
            >Отправить
            </Button>
        </Box>
    );
}