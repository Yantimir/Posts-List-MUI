import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from './../../context/CurrentUserContext';
import { AppContext } from "./../../context/appContext";
import { Comment } from "../Comment/Comment";
import { isLiked } from './../../utils/utils';
import { Likes } from "../Likes/Likes";
import { Typography, Box, Avatar, CardMedia, CardActions, IconButton, Container, Grid, Paper, Card, CardHeader } from "@mui/material";
import { PanoramaFishEye, ArrowBack } from '@mui/icons-material';
import dayjs from "dayjs"; // yarn add dayjs
import "dayjs/locale/ru";
import { CommentSend } from "../CommentSend/CommentSend";
import { Tags } from './../Tags/Tags';
dayjs.locale("ru");
import { styled } from '@mui/material/styles';

import { AuthorEditPost } from "../AuthorEditPost/AuthorEditPost";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#f7f7f7',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const UserPost = ({ _id, likes, author, comments, text, title, image, tags, created_at, updated_at }) => {

    const { handlePostLike, handleDeleteComment } = useContext(AppContext);
    const currentUser = useContext(CurrentUserContext);
    const isLike = likes && isLiked(likes, currentUser._id);
    const dataCreated = dayjs(created_at).format("DD MMMM YYYY HH:mm");
    const dataLastEdit = dayjs(updated_at).format("dddd, DD-MMMM-YYYY HH:mm");

    const navigate = useNavigate();

    const fakeAvatar = "https://react-learning.ru/image-compressed/default-image.jpg";
    const authorName = author?.name?.split(" ").slice(0, 2).join(" "); // фамилия и имя автора
    const letterAvatar = author?.name?.split(" ").slice(0, 2).map(n => n.slice(0, 1)).join("");

    function handleClickBack(event) {
        event.preventDefault();
        navigate(-1);
    }

    function handleLikeClick() {
        handlePostLike(_id, isLike);
    }
    const handleDeleteCommentClick = (idComment) => {
        handleDeleteComment(_id, idComment);
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    // flexWrap: 'wrap',
                    '& > :not(style)': {
                        width: 600,
                        // height: "100%",
                    },
                    mb: "50px",
                    justifyContent: "center"
                }}
            >
                <Paper elevation={1} sx={{width: "20px"}}>
                    <Box>
                        <Box>
                            <IconButton variant="contained" onClick={handleClickBack}>
                                <ArrowBack />
                            </IconButton>
                        </Box>
                        <Box>
                            <IconButton variant="contained" onClick={handleClickBack}>
                                <ArrowBack />
                            </IconButton>
                        </Box>
                    </Box>
                </Paper>
                <Paper>
                    <Box sx={{ flex: "1 0 auto", mb: "15px", p: "20px" }}>
                        <Box component="div" sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box sx={{ display: "flex" }}>
                                <Box sx={{ mr: "15px" }}>
                                    {author.avatar && author.avatar === fakeAvatar
                                        ? <Avatar alt="avatar">
                                            {letterAvatar}
                                        </Avatar>
                                        : <Avatar src={author?.avatar} aria-label="recipe">
                                            {!author?.avatar && author?.name}
                                        </Avatar>
                                    }
                                </Box>
                                <Box>
                                    <Box>
                                        {author?.name &&
                                            <Typography
                                                variant="body1"
                                                color="text.secondary"
                                                sx={{ fontWeight: 700, fontSize: "16px" }}
                                            >
                                                {authorName}
                                            </Typography>
                                        }
                                    </Box>
                                    <Box>
                                        <Box>
                                            <Typography
                                                paragraph
                                                variant="caption"
                                                color="text.secondary"
                                            >
                                                {dataCreated}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                {author?._id === currentUser._id &&
                                    <AuthorEditPost
                                        id={_id}
                                    />
                                }
                            </Box>
                        </Box>

                        <Box>
                            <Box component="div" sx={{ mb: "15px" }}>
                                <CardMedia
                                    component="img"
                                    height="300px"
                                    image={image && image}
                                    alt="image"
                                />
                            </Box>
                            <Box sx={{ mb: "10px", pl: "15px" }}>
                                <Typography variant="body1" sx={{ textAlign: "start", fontWeight: 600, fontSize: "14px" }} >
                                    {title && title}
                                </Typography>
                            </Box>
                            <Box sx={{ mb: "10px", pl: "15px" }}>
                                <Typography variant="body2" sx={{ textAlign: "start" }} color="text.secondary">
                                    {text && text}
                                </Typography>
                            </Box>
                            <Box sx={{ mb: "10px" }}>
                                <CardActions sx={{ marginTop: "auto" }} disableSpacing >
                                    <Likes
                                        likes={likes}
                                        isLike={isLike}
                                        handleLikeClick={handleLikeClick}
                                    />
                                </CardActions>
                            </Box>
                            {tags &&
                                <Box sx={{ mb: "10px", pl: "15px", textAlign: "start" }}>
                                    <Tags tags={tags} />
                                </Box>
                            }
                            <Box component="div" sx={{ display: "flex", mb: "10px", pl: "15px" }}>
                                <PanoramaFishEye sx={{ color: "red", fontSize: "small", mt: "3px" }} />
                                <Typography
                                    sx={{ pl: 1, mb: 0 }}
                                    paragraph
                                    variant="caption"
                                    color="text.secondary"
                                >
                                    Last edit: {dataLastEdit}
                                </Typography>
                            </Box>
                            <Box>
                                <hr style={{ margin: "15px 10px", border: "1px solid #f1f1f1" }}></hr>
                            </Box>
                        </Box>
                        {comments &&
                            <Box>
                                <Box>
                                    <Comment
                                        _id={_id}
                                        created_at={created_at}
                                        comments={comments}
                                        author={author}
                                        handleDeleteCommentClick={handleDeleteCommentClick}
                                    />
                                </Box>
                                <CommentSend id={_id} />
                            </Box>
                        }
                    </Box >
                </Paper>
            </Box >
        </>

    );
}; 