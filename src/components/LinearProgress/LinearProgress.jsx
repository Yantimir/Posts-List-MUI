import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearIndeterminate() {
    return (
        <Box sx={{ width: '100%', margin: "0 auto", maxWidth: "500px", mb: "15px" }}>
            <LinearProgress color="primary"/>
        </Box>
    );
}