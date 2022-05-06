import React from 'react';
// import Link from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import { Breadcrumbs, Link, Box } from '@mui/material';

// const navigate = useNavigate();

function handleClickBack() {
    // navigate(-1);
    // event.preventDefault();
    // console.info('You clicked a breadcrumb.');
}

const _Breadcrumbs = () => {
    return (
        <Box role="presentation" sx={{ pl: "15px", mb: "10px" }} onClick={handleClickBack}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    underline="hover"
                    color="inherit"
                    href="/"
                >HOME
                </Link>
                {/* <Link
                    underline="hover"
                    color="inherit"
                    href="/post/622bd9e806c7d323b8ae4615"
                >Post
                </Link> */}
            </Breadcrumbs>
        </Box>
    );
}

export default _Breadcrumbs;