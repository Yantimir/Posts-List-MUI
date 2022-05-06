import React from 'react';
import { Box, Typography } from '@mui/material';

export const ContactList = ({ contactsSimpleForm }) => {

    return (
        <Box>
            {
                contactsSimpleForm.map((contact) => (
                    <Box key={contact.phoneNumber}>
                        <Typography>{contact.name}</Typography>
                        <Typography>{contact.lastname}</Typography>
                        <Typography>{contact.phoneNumber}</Typography>
                    </Box>
                ))
            }
        </Box>
    );
}