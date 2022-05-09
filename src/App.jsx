import React, { useState, useEffect } from "react";
import api from "./utils/Api";
import useDebounce from './hooks/useDebounce';
import { Routes, Route, useNavigate } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, Box } from "@mui/material";

import { AppContext } from './context/appContext';
import { CurrentUserContext } from './context/CurrentUserContext';
import { CurrentPostsContext } from "./context/CurrentPostsContext";
import { CurrentAllUsersContext } from "./context/CurrentAllUsersContext";

import { PostPage } from "./pages/PostPage/PostPage";
import { PostDetailsPage } from "./pages/PostDetailsPage/PostDetailsPage";
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

import { Header } from "./components/Header";
import { Search } from "./components/Search/Search";
import Breadcrumbs from "./components/Breadcrumbs";
import { Footer } from "./components/Footer";
import { ButtonScrollTop } from "./components/ButtonScrollTop/ButtonScrollTop";
import { Registration } from "./components/Registration/Registration";
import { AuthorAvatar } from "./components/AuthorAvatar/AuthorAvatar";


const theme = createTheme({
    palette: {
        primary: {
            main: "#444444",
        },
        secondary: {
            main: "rgba(0, 0, 0, 0.54)",
        },
    },
    typography: {
        fontFamily: [
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});

export const App = () => {

    const [posts, setPosts] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [searchQuery, setSearchQuery] = useState("");
    const delaySearchQuery = useDebounce(searchQuery, 200);
    const [allUsers, setAllUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        Promise.all([api.getAllPosts(), api.getUserInfo(), api.getAllUsers()])
            .then(([postsData, userData, usersData]) => {
                setPosts(postsData);
                setCurrentUser(userData);
                setAllUsers(usersData);
                handleRequest(usersData); // поиск
            })
            .catch(err => alert(err))
            .finally(() => {
                setIsLoading(false);
            })
    }, [delaySearchQuery]);

    // поиск по автору и по title
    const handleInputChange = (inputValue) => {
        setSearchQuery(inputValue);
    }
    const handleFormSubmit = (inputValue) => {
        setSearchQuery(inputValue);
        navigate("/");
        handleRequest();
    }
    
    const handleRequest = (usersData) => {
        // поиск по title
        // api.searchPosts(searchQuery)
        //     .then(dataSearch => setPosts(dataSearch))
        //     .catch(error => console.log(error))

        // поиск по автору
        if (searchQuery !== "") {
            const filterUsers = usersData.filter(user => user?.name.toLowerCase().includes(searchQuery.toLowerCase()));
            setAllUsers(prevState => filterUsers);
        }
    }
    // очистка поиска 
    const clearSearch = () => {
        setSearchQuery("");
    }
    // установка лайка
    function handlePostLike(postId, isLiked) {
        api.changeLikeStatus(postId, isLiked)
            .then((newPostData) => {
                const newPostsState = posts.map(post => {
                    return post._id === newPostData._id ? newPostData : post;
                });
                setPosts(newPostsState);
            });
    }
    // создание нового поста
    function handleCreateNewPost(postData) {
        postData = { ...postData, tags: postData.tags.split(",").map(tag => tag.trim()) }
        api.createNewPost(postData)
            .then((newPostData) => {
                setPosts(prevState => [...prevState, newPostData]);
            });
    }
    // удаление поста
    function handleDeletePost(postId) {
        api.deletePostById(postId)
            .then((newPostData) => {
                const newPostState = posts.filter(post => {
                    return post._id !== newPostData._id;
                })
                setPosts(newPostState);
            })
    }
    // редактирование поста
    function handleSendEditPost(postId, postData) {
        postData = { ...postData, tags: postData.tags.split(",").map(tag => tag.trim()) }
        api.editPostById(postId, postData)
            .then((newPostData) => {
                const newPostState = posts.map(post => {
                    return post._id === newPostData._id ? newPostData : post;
                });
                setPosts(newPostState);
            });
    }
    // изменение аватара автора
    function handleSendNewAvatar(avatarData) {
        api.changeAvatar(avatarData)
            .then((newAvatarData) => {
                setCurrentUser(newAvatarData);
            })
    }
    // изменение данных автора
    function handleSendNewAuthor(userData) {
        api.changeNameAndAbout(userData)
            .then((newAuthorData) => {
                setCurrentUser(newAuthorData);
            })
    }
    // добавление комментария
    function handleSendNewComment(postId, commentData) {
        api.addNewCommentById(postId, commentData)
            .then((newCommentData) => {
                const newCommentState = posts.map(comment => {
                    return comment._id === newCommentData._id ? newCommentData : comment;
                });
                setPosts(newCommentState);

            });
    }
    // удаление комментария
    function handleDeleteComment(postId, commentId) {
        api.deleteComment(postId, commentId)
            .then((newCommentData) => {
                const newCommentState = posts.map(comment => {
                    return comment._id === newCommentData._id ? newCommentData : comment;
                });
                setPosts(newCommentState);
            });
    }
    //регистрация
    function handleSignupUser(dataUser) {
        api.signupUser(dataUser)
            .then((newDataUser) => {
                console.log(newDataUser)
                // const newCommentState = posts.map(comment => {
                //     return comment._id === newCommentData._id ? newCommentData : comment;
                // });
                // setPosts(newCommentState);
            });
    }

    return (
        <ThemeProvider theme={theme}>
            <AppContext.Provider value={{
                handleInputChange,
                handleFormSubmit,
                clearSearch,
                handlePostLike,
                handleDeletePost,
                handleSendNewAvatar,
                handleSendNewAuthor,
                handleCreateNewPost,
                handleSendEditPost,
                handleSendNewComment,
                handleDeleteComment,
                handleSignupUser,
            }}>
                <CurrentPostsContext.Provider value={posts}>
                    <CurrentAllUsersContext.Provider value={allUsers}>
                        <CurrentUserContext.Provider value={currentUser}>
                            <Container maxWidth="lg"
                                sx={{
                                    display: "flex",
                                    minHeight: "100vh",
                                    flexDirection: "column",
                                }}>
                                <Header>
                                    {/* <Search searchText={searchQuery} /> */}
                                    <Box sx={{pl: "15px"}}>
                                        <AuthorAvatar />
                                    </Box>
                                    <Registration />
                                </Header>
                                <Box sx={{ pl: "10px", mb: 1 }}>
                                    <Breadcrumbs />
                                </Box>
                                <Box sx={{ flex: "1 0 auto" }}>
                                    <Routes>
                                        <Route path="/" element={
                                            <>
                                                <PostPage
                                                    searchCount={allUsers.length}
                                                    searchText={searchQuery}
                                                    isLoading={isLoading}
                                                />
                                                <ButtonScrollTop />
                                            </>
                                        } />
                                        <Route path="/post/:postID" element={
                                            <PostDetailsPage />}
                                        />
                                        <Route path="*" element={
                                            <NotFoundPage />}
                                        />
                                    </Routes>
                                </Box>
                                <Footer sx={{ flex: "0 0 auto" }} />
                            </Container>
                        </CurrentUserContext.Provider>
                    </CurrentAllUsersContext.Provider>
                </CurrentPostsContext.Provider>
            </AppContext.Provider>
        </ThemeProvider>
    );
}