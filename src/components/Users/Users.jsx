import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

export const Users = ({ _id, about, avatar, email, name }) => {

    const fakeAvatar = "https://react-learning.ru/image-compressed/default-image.jpg";
    const userName = name?.split(" ").slice(0, 2).join(" "); // фамилия и имя автора
    const letterAvatar = (name?.split(" ").slice(0, 2).map(n => n.slice(0, 1))).join("");

    return (
        <Box sx={{ display: "flex", mb: "15px" }}>
            <Box>
                {avatar && avatar === fakeAvatar
                    ? <Avatar
                        alt="avatar"
                    >
                        {letterAvatar}
                    </Avatar>
                    : <Avatar
                        src={avatar && avatar}
                        alt="avatar"
                    >
                        {!avatar && name}
                    </Avatar>}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", pl: "15px" }}>
                <Box component="span">
                    <Typography variant="body1" sx={{ textAlign: "start", fontWeight: 700, fontSize: "14px" }}>
                        {name && userName}
                    </Typography>
                </Box>
                <Box component="span">
                    <Typography variant="body1" sx={{ textAlign: "start",fontWeight: 600, fontSize: "10px" }}>
                        {email && email}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};