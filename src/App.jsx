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
// import { Search } from "./components/Search/Search";
import Breadcrumbs from "./components/Breadcrumbs";
import { Footer } from "./components/Footer";
import { ButtonScrollTop } from "./components/ButtonScrollTop/ButtonScrollTop";
import { Registration } from "./components/Registration/Registration";
import { AuthorAvatar } from "./components/AuthorAvatar/AuthorAvatar";
import { SearchPosts } from "./components/SearchPosts/SearchPosts";


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
    const [searchQueryUsers, setSearchQueryUsers] = useState("");
    const [searchQueryPosts, setSearchQueryPosts] = useState("");
    const delaySearchQueryUsers = useDebounce(searchQueryUsers, 200);
    const delaySearchQueryPosts = useDebounce(searchQueryPosts, 200);
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
                handleRequestUsers(usersData); // поиск по пользователям
                handleRequestPosts(postsData); // поиск по постам
            })
            .catch(err => alert(err))
            .finally(() => {
                setIsLoading(false);
            })
    }, [delaySearchQueryUsers, delaySearchQueryPosts]);

    // поиск по автору и по title
    const handleInputChangeUsers = (inputValueUsers) => {
        setSearchQueryUsers(inputValueUsers);

    }
    const handleInputChangePosts = (inputValuePosts) => {
        setSearchQueryPosts(inputValuePosts);

    }
    const handleFormSubmitUsers = (inputValueUsers) => {
        setSearchQueryUsers(inputValueUsers);
        navigate("/");
        handleRequestUsers();
    }

    const handleFormSubmitPosts = (inputValuePosts) => {
        setSearchQueryPosts(inputValuePosts);
        navigate("/");
        handleRequestPosts();
    }

    const handleRequestPosts = () => {
        //поиск по title
        api.searchPosts(searchQueryPosts)
            .then(dataSearchPosts => setPosts(dataSearchPosts))
            .catch(error => console.log(error))
    }
    const handleRequestUsers = (usersData) => {
        // поиск по автору
        if (searchQueryUsers !== "") {
            const filterUsers = usersData.filter(user => user?.name.toLowerCase().includes(searchQueryUsers.toLowerCase()));
            setAllUsers(prevState => filterUsers);
        }
    }
    // очистка поиска 
    const clearSearchUsers = () => {
        setSearchQueryUsers("");
    }
    const clearSearchPosts = () => {
        setSearchQueryPosts("");
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
            });
    }

    return (
        <ThemeProvider theme={theme}>
            <AppContext.Provider value={{
                handleInputChangeUsers,
                handleInputChangePosts,
                handleFormSubmitUsers,
                handleFormSubmitPosts,
                clearSearchUsers,
                clearSearchPosts,
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
                                    flexDirection: "column"
                                }}>
                                <ButtonScrollTop />
                                <Header>
                                    <SearchPosts searchText={searchQueryPosts} />
                                    <Box sx={{ pl: "15px" }}>
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
                                                    searchCountUsers={allUsers.length}
                                                    searchTextUsers={searchQueryUsers}
                                                    searchCountPosts={posts.length}
                                                    searchTextPosts={searchQueryPosts}
                                                    isLoading={isLoading}
                                                />
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