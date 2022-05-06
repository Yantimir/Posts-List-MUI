import React, { useContext, useRef, useState, useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Modal from "../Modal/Modal";
import { AuthorCreatePost } from '../AuthorCreatePost/AuthorCreatePost';
import { AuthorAvatarEditForm } from '../AuthorAvatarEditForm/AuthorAvatarEditForm';
import { AuthorInfoEditForm } from '../AuthorInfoEditForm/AuthorInfoEditForm';
import { AddAPhotoTwoTone, MailOutlined, BusinessCenterOutlined } from '@mui/icons-material';
import { IconButton, Box, Avatar, Typography, Button, CardActions, Collapse } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Socials } from '../Socials';

const ExpandMoreStyle = styled((props) => {
    const { expand, ...other } = props;
    return <Box {...other} />;
})(({ expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(0deg)',
    width: 'auto',
}));

export const AuthorSidebar = () => {

    const currentUser = useContext(CurrentUserContext);
    const [openModalAvatar, setOpenModalAvatar] = useState(false);
    const handleOpenModalAvatar = () => setOpenModalAvatar(true);
    const handleCloseModalAvatar = () => setOpenModalAvatar(false);
    const fakeAvatar = "https://react-learning.ru/image-compressed/default-image.jpg";
    const currentUserName = currentUser?.name?.split(" ").slice(0, 2).join(" "); // ФИ
    const letterAvatar = currentUser?.name?.split(" ").slice(0, 2).map(n => n.slice(0, 1)).join("");

    // открытие/закрытие выпадающего меню
    const [expanded, setExpanded] = useState(false);
    const [open] = useState(false);
    const anchorRef = useRef(null);
    const prevOpen = useRef(open);

    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);
    //--------------------------------------------------------------------------
    // открытие расширенного текста поста
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <Box>
                    <IconButton
                        id="fade-button"
                        aria-controls={openModalAvatar ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openModalAvatar ? 'true' : undefined}
                        onClick={handleOpenModalAvatar}
                    >
                        {currentUser.avatar && currentUser.avatar === fakeAvatar
                            ? <Avatar
                                alt="avatar"
                            >
                                {letterAvatar}
                            </Avatar>
                            : <Avatar
                                src={currentUser?.avatar}
                                alt="Mingazitdinov"
                            >
                                {!currentUser.avatar && currentUser.name}
                            </Avatar>}
                        <AddAPhotoTwoTone sx={{ color: "#444444", fontSize: "large", position: "absolute", top: "5px", right: "1px" }} />
                    </IconButton>
                    <Modal
                        openModal={openModalAvatar}
                        handleCloseModal={handleCloseModalAvatar}
                    >
                        <AuthorAvatarEditForm handleCloseModal={handleCloseModalAvatar} />
                    </Modal>
                </Box>
                <Box sx={{ pl: "10px", mb: "5px" }}>
                    {currentUser?.name &&
                        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 700, fontSize: "16px" }}>
                            {currentUserName}
                        </Typography>
                    }
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography
                            color="text.secondary"
                            sx={{ fontWeight: 600, fontSize: "12px" }}
                        >
                            {currentUser?.email}
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography
                            color="text.secondary"
                            sx={{ fontWeight: 600, fontSize: "12px" }}
                        >
                            {currentUser?.about}
                        </Typography>
                    </Box>
                    {currentUser && <Socials />}
                </Box>
            </Box>
            <CardActions disableSpacing sx={{display: "block", pr: "10px", pl: "10px"}}>
                <ExpandMoreStyle
                    fontSize="small"
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-label="show more"
                >
                    {!expanded &&
                        <Button
                            sx={{ width: "100%"}}
                            variant="contained"
                            size="small"
                            // expand={expanded}
                            aria-label="show more"
                            onClick={handleExpandClick}
                        >Редактировать профиль
                        </Button>
                    }
                </ExpandMoreStyle>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <AuthorInfoEditForm handleExpandClick={handleExpandClick} />
            </Collapse>
            <Box sx={{ mb: "20px", mt: "5px", pl: "10px", pr: "10px" }}>
                <AuthorCreatePost />
            </Box>
            <Box>
                <hr style={{ margin: "15px 10px 0 10px", border: "1px solid #f1f1f1" }}></hr>
            </Box>
        </Box>
    );
}