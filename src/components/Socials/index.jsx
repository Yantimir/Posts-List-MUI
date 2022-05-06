import React from "react";
import { IconButton, Box } from "@mui/material";
import { Icon28LogoVkOutline } from '@vkontakte/icons';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import style from "./style.module.css";

export const Socials = () => {
    return (
        <Box sx={{ display: "flex" }}>
            <a
                className={style.a}
                href="https://github.com/Yantimir"
                target="_blank"
                title="github"
            >
                <GitHubIcon fontSize="small" />
            </a>

            <a
                className={style.a}
                href="https://mail.ru/mingazitdinov"
                target="_blank"
                title="mail"
            >
                <AlternateEmailIcon fontSize="small" />
            </a >

            <a
                className={style.a}
                href="https://vk.com/mingazitdinov"
                target="_blank"
                title="vk"
            >
                <Icon28LogoVkOutline width={20} height={20} />
            </a >

            <a
                className={style.a}
                href="https://www.instagram.com/tmingazitdinov/"
                target="_blank"
                title="instagram"
            >
                <InstagramIcon fontSize="small" />
            </a >

            <a
                className={style.a}
                href="https://t.me/mingazitdinov"
                target="_blank"
                title="telegram"
            >
                <TelegramIcon fontSize="small" color="inherit" />
            </a>
        </Box >
    );
}
