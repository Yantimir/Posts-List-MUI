import React from 'react';
import "./style.css";
import { Button } from '@mui/material';
import { ArrowUpwardOutlined } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { amber } from '@mui/material/colors';

const ScrollButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(amber[400]),
    backgroundColor: amber[400],
    '&:hover': {
        backgroundColor: amber[500],
    },
    borderRadius: "20px",
    height: "40px",
    minWidth: "0px"
}));

export const ButtonScrollTop = () => {

    window.onload = () => {
        window.onscroll = () => {
            const scrollBtn = document.querySelector(".isShowBtn");
            if (window.scrollY > 500) {
                scrollBtn.classList.remove("isShowBtn_hide");
            }
            else {
                scrollBtn.classList.add("isShowBtn_hide");
            }
        }
    }

    return (
        <ScrollButton
            id="scrollTop"
            className="isShowBtn isShowBtn_hide"
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo(0, 0);
            }}>
            <ArrowUpwardOutlined  sx={{color: "#616161"}}/>
        </ScrollButton >
    );
}