import React, { useContext } from "react";
import { CurrentUserContext } from './../../context/CurrentUserContext';
import { Avatar } from "@mui/material";

export const AuthorAvatar = () => {

    const currentUser = useContext(CurrentUserContext);
    const fakeAvatar = "https://react-learning.ru/image-compressed/default-image.jpg";
    const letterAvatar = currentUser?.name?.split(" ").slice(0, 2).map(n => n.slice(0, 1)).join("");
    return (
        <>
            {currentUser.avatar && currentUser.avatar === fakeAvatar
                ? <Avatar
                    alt="avatar"
                >
                    {letterAvatar}
                </Avatar>
                : <Avatar
                    src={currentUser?.avatar}
                    alt="avatar"
                >
                    {!currentUser.avatar && currentUser.name}
                </Avatar>}
        </>
    );
}
