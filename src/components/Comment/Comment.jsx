import React, { useContext } from "react";
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { Avatar, IconButton, Typography, Box } from "@mui/material";
import { HighlightOffOutlined } from '@mui/icons-material';
import dayjs from "dayjs";
import "dayjs/locale/ru";
dayjs.locale("ru");

export const Comment = ({ handleDeleteCommentClick, comments, author }) => {

    const currentUser = useContext(CurrentUserContext);
    const onDeleteCommentClick = (idComment) => {
        handleDeleteCommentClick(idComment);
    }

    return (
        <Box>
            {comments && comments.map((comment) =>
                <Box key={`${comment?._id}`}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Box sx={{ mr: "10px", mb: "15px" }}>
                                {comment?.author === currentUser?._id
                                    ? <Avatar src={currentUser?.avatar} aria-label="recipe">
                                        {!currentUser?.avatar && currentUser?.name.slice(0, 1)}
                                    </Avatar>
                                    : <Avatar src={author?.avatar} aria-label="avatar">
                                        {!author?.avatar && author?.name?.slice(0, 1)}
                                    </Avatar>
                                }
                            </Box>
                            <Box sx={{ mr: "10px" }}>
                                {comment?.author === currentUser?._id
                                    ? <>
                                        <Typography
                                            variant="body1" color="text.secondary" sx={{ fontWeight: 700, fontSize: "14px" }}
                                        >{currentUser?.name}
                                        </Typography>
                                        <Box component="span" sx={{ display: "flex" }}>
                                            <Typography
                                                paragraph
                                                variant="caption"
                                                color="text.secondary"
                                            >
                                                {dayjs(comment?.created_at).format("DD-MM-YYYY HH:mm")}
                                            </Typography>
                                        </Box>
                                    </>
                                    : <>
                                        <Typography
                                            variant="body1"
                                            sx={{ fontWeight: 500, fontSize: "16px" }}
                                        >{author?.name}
                                        </Typography>
                                        <Box component="span" sx={{ display: "flex" }}>
                                            <Typography
                                                paragraph
                                                variant="caption"
                                                color="text.secondary"
                                            >
                                                {dayjs(comment?.created_at).format("DD-MM-YYYY HH:mm")}
                                            </Typography>
                                        </Box>
                                    </>
                                }
                            </Box>
                        </Box>
                        <Box>
                            {comment?.author === currentUser?._id
                                && <IconButton
                                    size="small"
                                    onClick={() => onDeleteCommentClick(comment._id)}
                                >
                                    <HighlightOffOutlined
                                        fontSize="medium"
                                        sx={{ cursor: "pointer", color: "rgba(0, 0, 0, 0.54)" }}
                                    />
                                </IconButton>
                            }
                        </Box>
                    </Box>
                    <Box sx={{ ml: "50px", mr: "40px", mb: "30px" }}>
                        <Typography
                            // sx={{
                            //     overflow: "visible",
                            //     flexDirection: "row",
                            //     flex: "1",
                            //     flexWrap: "wrap",
                            //     flexShink: "1"
                            // }}
                            variant="body2"
                            color="text.secondary"
                        >
                            {comment?.text}
                        </Typography>
                    </Box>
                </Box>
            )}
        </Box>
    );
} 