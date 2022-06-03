import React from "react"
export const AppContext = React.createContext({
    handleInputChangeUsers: () => {},
    handleInputChangePosts: () => {},
    handleFormSubmitUsers: () => {},
    handleFormSubmitPosts: () => {},
    clearSearchUsers: () => {},
    clearSearchPosts: () => {},
    handlePostLike: () => {},
    handleDeletePost: () => {},
    handleSendNewAvatar: () => {},
    handleSendNewAuthor: () => {},
    handleCreateNewPost: () => {},
    handleSendEditPost: () => {},
    handleSendNewComment: () => {},
    handleDeleteComment: () => {},
    handleSignUpUser: () => {},
    handleSignInUser: () => {},
    isLoading: false,
})
AppContext.displayName = "AppContext";