import React from "react"
export const AppContext = React.createContext({
    handleInputChange: () => {},
    handleFormSubmit: () => {},
    clearSearch: () => {},
    handlePostLike: () => {},
    handleDeletePost: () => {},
    handleSendNewAvatar: () => {},
    handleSendNewAuthor: () => {},
    handleCreateNewPost: () => {},
    handleSendEditPost: () => {},
    handleSendNewComment: () => {},
    handleDeleteComment: () => {},
    handleSignupUser: () => {},
    isLoading: false,
})
AppContext.displayName = "AppContext";