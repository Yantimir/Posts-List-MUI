import React from 'react';
import { IconButton, Typography, Box } from "@mui/material";
import { Favorite } from '@mui/icons-material';

export const Likes = ({ likes, isLike, handleLikeClick }) => {

    return (
        <>
            {likes?.length
                ? <Box
                    component="div"
                    sx={{
                        display: "flex",
                        background: "#f7f7f7",
                        width: "auto",
                        height: "auto",
                        borderRadius: "25px",
                    }}>
                    <IconButton
                        size="small"
                        aria-label="add to favorites"
                        onClick={handleLikeClick}
                    >
                        {isLike
                            ? <Favorite sx={{ color: "red" }} />
                            : <Favorite />
                        }
                    </IconButton>
                    {!!likes?.length && <Typography color="text.secondary" sx={{ fontSize: "1rem", pr: 1.7, pt: "5px", pl: 0.3 }}>{likes?.length}</Typography>}
                </Box>
                : <IconButton
                    sx={{ backgroundColor: "#f7f7f7" }}
                    size="small"
                    aria-label="add to favorites"
                    onClick={handleLikeClick}
                >
                    {isLike
                        ? <Favorite sx={{ color: "red" }} />
                        : <Favorite />
                    }
                </IconButton>
            }
        </>
    );
}