import React from 'react';
import { AuthorSidebar } from '../../components/AuthorSidebar/AuthorSidebar';
import { UsersListSidebar } from '../../components/UsersListSidebar/UsersListSidebar';
import { SearchInfo } from '../../components/SearchInfo/SearchInfo';
import { PostsList } from '../../components/PostsList/index';
import { Box, Container, Grid, Paper } from '@mui/material';
import { styled } from "@mui/material/styles";
import LinearProgress from '../../components/LinearProgress/LinearProgress';
import { ButtonScrollTop } from '../../components/ButtonScrollTop/ButtonScrollTop';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#f7f7f7',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const PostPage = ({ searchCount, searchText, isLoading }) => {

    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Item sx={{ pt: "33px" }}>
                            <AuthorSidebar />
                            <UsersListSidebar searchCount={searchCount} searchText={searchText}/>
                        </Item>
                    </Grid>

                    {isLoading
                        ? <LinearProgress />
                        : <Grid item xs={8}>
                            <Item sx={{ mb: 5, pt: 5 }}>
                                {/* <SearchInfo searchCount={searchCount} searchText={searchText} /> */}
                                <PostsList />
                            </Item>
                        </Grid>}
                </Grid>
            </Box>
        </Container>
    );
} 