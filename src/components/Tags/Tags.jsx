import React from 'react';
import { Box, Typography } from '@mui/material';

export const Tags = ({ tags }) => {

    const [tagsValue] = tags;

    return (
        <>
            {!!tagsValue
                ? <Typography
                    sx={{ pl: 0, mb: 2 }}
                    paragraph
                    variant="caption"
                    color="text.secondary"
                >
                    Tags: {tags.map((tag, index) =>
                        tag !== "" && <Box
                            key={`${tag}_${index}`}
                            component="span"
                            sx={{
                                ml: 1,
                                p: 0.5,
                                border: "1px solid rgba(0, 0, 0, 0.1)",
                                borderRadius: "5px",
                                background: "#f7f7f7"
                            }}>
                            {tag}
                        </Box>
                    )}
                </Typography>
                : <Typography
                    sx={{ pl: 0, mb: 2 }}
                    paragraph
                    variant="caption"
                    color="white"
                >
                    Tags: none
                </Typography>
            }
        </>
    );
}