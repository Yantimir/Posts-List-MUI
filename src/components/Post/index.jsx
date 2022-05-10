import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./style.module.css";
import dayjs from "dayjs"; // yarn add dayjs
import "dayjs/locale/ru"
dayjs.locale("ru");

import { isLiked } from './../../utils/utils';
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { AppContext } from "../../context/appContext";
import { Likes } from "../Likes/Likes";
import { CommentsCount } from './../CommentsCount/CommentsCount';
import { Tags } from "../Tags/Tags";
import { AuthorEditPost } from "../AuthorEditPost/AuthorEditPost";

import { Card, CardHeader, Avatar, CardMedia, CardContent, Typography, CardActions, Grid, Box } from "@mui/material";
import { PanoramaFishEye } from '@mui/icons-material';



export const Post = ({_id ,image, likes, tags, comments, title, author, text, created_at, updated_at }) => {

    const location = useLocation();
    const state = location.state;
    

    const dataCreated = dayjs(created_at).format("DD MMMM YYYY HH:mm");
    const dataLastEdit = dayjs(updated_at).format("dddd, DD-MMMM-YYYY HH:mm");
    const currentUser = useContext(CurrentUserContext);
    const { handlePostLike } = useContext(AppContext);
    const isLike = likes && isLiked(likes, currentUser._id);

    const fakeAvatar = "https://react-learning.ru/image-compressed/default-image.jpg";
    const authorName = author?.name?.split(" ").slice(0, 2).join(" "); // фамилия и имя автора
    const currentUserName = currentUser?.name?.split(" ").slice(0, 2).join(" ");
    const letterAvatar = author?.name?.split(" ").slice(0, 2).map(n => n.slice(0, 1)).join("");

    // установка лайка
    const handleLikeClick = () => {
        handlePostLike(_id, isLike);
    }

    return (
        <Grid className={style.grid} container item xs={12} sm={12} md={12}>
            <Card className={style.card} sx={{ width: 550 }}>
                <CardHeader
                    avatar={
                        author?._id !== currentUser?._id
                            ? <Avatar src={author?.avatar} aria-label="recipe">
                                {letterAvatar}
                            </Avatar>
                            : <Avatar src={currentUser?.avatar} aria-label="recipe">
                                {currentUserName}
                            </Avatar>
                    }
                    title={
                        author?.name &&
                        <Box component="span" sx={{ display: "flex" }}>
                            <Link to={`/post/${_id}`} style={{ textDecoration: "none", color: "#444444" }}>
                                <Typography color="text.secondary" variant="body1" sx={{ fontWeight: 700, fontSize: "16px" }}>
                                    {authorName}
                                </Typography>
                            </Link>
                        </Box>
                    }
                    subheader={
                        <Box component="span" sx={{ display: "flex" }}>
                            <Typography
                                sx={{ mb: 0.5 }}
                                paragraph
                                variant="caption"
                                color="text.secondary"
                            >
                                {dataCreated}
                            </Typography>
                        </Box>
                    }
                    action={author?._id === currentUser._id &&
                        <AuthorEditPost
                            id={_id}
                            state={{
                                ...state,
                                backgroundLocation: location,
                                post: {
                                    _id,
                                    image,
                                    likes,
                                    tags,
                                    comments,
                                    title,
                                    author,
                                    text,
                                    created_at,
                                    updated_at
                                }
                            }}
                        />
                    }
                />
                {image &&
                    <Link
                        to={`/post/${_id}`}
                        style={{ textDecoration: "none", fontSize: "20px", color: "#444444" }}
                    >
                        <CardMedia
                            component="img"
                            height="300px"
                            sx={{ p: "15px" }}
                            image={image && image}
                            alt="image"
                        />
                    </Link>
                }
                <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>
                    {title &&
                        <Link to={`/post/${_id}`} style={{ textDecoration: "none", color: "#444444" }}>
                            <Typography variant="body1" sx={{ fontWeight: 600, fontSize: "14px", mb: "10px" }}>
                                {title}
                            </Typography>
                        </Link>}

                    {text &&
                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: "start" }}>
                            {text}
                        </Typography>}
                </CardContent>
                <CardActions sx={{ marginTop: "auto" }} disableSpacing >
                    <Box sx={{ display: "flex", alignItems: "center", pl: "8px" }}>
                        <Likes
                            likes={likes}
                            isLike={isLike}
                            handleLikeClick={handleLikeClick}
                        />
                        <CommentsCount
                            id={_id}
                            comments={comments}
                        />
                    </Box>
                </CardActions>
                <Box component="div" sx={{ pl: 2, pt: 2, display: "flex", alignItems: "start" }}>
                    <Tags tags={tags} />
                </Box>
                <Box>
                    <hr style={{ margin: "0 10px 10px", border: "1px solid #f7f7f7" }}></hr>
                </Box>
                <Box sx={{ pl: 2, display: "flex", alignItems: "center", jistifyContent: "center" }}>
                    <PanoramaFishEye sx={{ mb: "16px", color: "red", fontSize: "small" }} />
                    <Typography
                        sx={{ pl: 1 }}
                        paragraph
                        variant="caption"
                        color="text.secondary"
                    >
                        Last edit: {dataLastEdit}
                    </Typography>
                </Box>
            </Card>
        </Grid >
    );
};