import React from 'react';
import { AuthorSidebar } from '../../components/AuthorSidebar/AuthorSidebar';
import { UsersListSidebar } from '../../components/UsersListSidebar/UsersListSidebar';
import { SearchInfo } from '../../components/SearchInfo/SearchInfo';
import { PostsList } from '../../components/PostsList/index';
import { Box, Container, Grid, Paper } from '@mui/material';
import { styled } from "@mui/material/styles";
import Spinner from '../../components/Spinner';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#f7f7f7',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const PostPage = ({ searchCountUsers, searchTextUsers, searchCountPosts, searchTextPosts,isLoading }) => {

    return (
        <>
            {isLoading && <Spinner />}
            {<Container>
                <Box sx={{ flexGrow: 1 }}>
                    {<Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Item sx={{ pt: "33px" }}>
                                <AuthorSidebar />
                                <UsersListSidebar
                                    searchCount={searchCountUsers}
                                    searchText={searchTextUsers}
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={8}>
                            <Item sx={{ mb: 5, pt: 5 }}>
                                <SearchInfo searchCount={searchCountPosts} searchText={searchTextPosts} searchTarget="постов"/>
                                <PostsList />
                            </Item>
                        </Grid>
                    </Grid>}
                </Box>
            </Container>}
        </>

    );
} 