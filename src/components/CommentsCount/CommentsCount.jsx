import React from 'react';
import { Link } from "react-router-dom";
import { IconButton, Typography, Box } from "@mui/material";
import { ChatOutlined } from '@mui/icons-material';

export const CommentsCount = ({ id, comments }) => {
    
    return (
        <>
            <Box
                component="div"
                sx={{
                    display: "flex",
                    background: "#f7f7f7",
                    width: "auto",
                    height: "auto",
                    borderRadius: "25px",
                    ml: "15px"
                }}
            >
                <Link to={`/post/${id}`} style={{ textDecoration: "none", display: "flex" }}>
                    <IconButton size="small" >
                        <ChatOutlined size="small" />
                    </IconButton>
                    {!!comments?.length &&
                        <Typography
                            color="text.secondary"
                            sx={{ fontSize: "1rem", pr: 1.7, pt: "5px", pl: 0.3 }}
                        >{comments?.length}
                        </Typography>
                    }
                </Link>
            </Box>
        </>
    );
}