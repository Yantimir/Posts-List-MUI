import React, { useContext } from "react";
import { CurrentAllUsersContext } from "../../context/CurrentAllUsersContext";
import { Users } from "../Users/Users";
import { Box } from "@mui/material";

export const UsersList = () => {

    const allUsers = useContext(CurrentAllUsersContext);
    const uniqIds = new Set(allUsers.map(ids => ids._id));

    return (
        <Box>
            {/* {allUsers.map(({ __v, ...user }) => <Users key={user._id} {...user} />)} */}
            {[...uniqIds]
                .map(id => allUsers.find(user => id === user._id))
                .map(element => <Users key={element._id} {...element} />)}
        </Box>
    );
};