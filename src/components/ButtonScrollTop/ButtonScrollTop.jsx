import React from 'react';
import "./style.css";
import { IconButton } from '@mui/material';
import { ArrowUpwardOutlined } from '@mui/icons-material';

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
        <IconButton id="scrollTop" className="isShowBtn isShowBtn_hide" onClick={(e) => { 
            e.preventDefault();
            window.scrollTo(0, 0); }}>
            <ArrowUpwardOutlined  />
        </IconButton >
    );
}