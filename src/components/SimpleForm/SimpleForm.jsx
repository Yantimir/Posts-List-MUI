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
                value={contactInfo.name}
                onChange={handleSimpleFormInputChange}
                name="name"
                label="Введите имя"
                variant="outlined"
                sx={{ m: 1 }}
                size="small"
            />
            <TextField
                value={contactInfo.lastname}
                onChange={handleSimpleFormInputChange}
                name="lastname"
                label="Введите фамилию"
                variant="outlined"
                sx={{ m: 1 }}
                size="small"
            />
            <TextField
                value={contactInfo.phoneNumber}
                onChange={handleSimpleFormInputChange}
                name="phoneNumber"
                label="Введите телефон"
                variant="outlined"
                sx={{ m: 1 }}
                size="small"
            />
            <Button
                variant="contained"
                type="submit"
                size="small"
            >Отправить
            </Button>
        </Box>
    );
}