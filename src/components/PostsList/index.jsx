import React, { useContext } from "react";
import { CurrentPostsContext } from "../../context/CurrentPostsContext";
import { Post } from "../Post";
import { Box, Grid } from "@mui/material";
import LinearIndeterminate from '../../components/LinearProgress/LinearProgress';


// pagination
export const PostsList = () => {

    const posts = useContext(CurrentPostsContext);

    return (
        <Box sx={{ mb: "20px" }}>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 0, sm: 1, md: 2 }}>
                {posts.map(({ __v, ...post }) => <Post key={post._id} {...post} />).reverse()}
            </Grid>
        </Box>
    );
};