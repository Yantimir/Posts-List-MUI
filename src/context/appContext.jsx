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
    isLoading: false,
})
AppContext.displayName = "AppContext";