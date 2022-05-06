import React, { useState, useEffect, useRef, useContext } from "react";
import { AppContext } from "../../context/appContext";
import { IconButton, Box, MenuItem, Paper, MenuList, Popper, Grow, ClickAwayListener } from "@mui/material";
import { MoreHoriz, DeleteOutline, EditOutlined } from '@mui/icons-material';
import { AuthorEditPostForm } from "../AuthorEditPostForm/AuthorEditpostForm";
import Modal from "../Modal/Modal";

export const AuthorEditPost = ({ id }) => {

    const { handleDeletePost } = useContext(AppContext);
    const [openEditPost, setOpenEditPost] = useState(false);
    const handleOpenEditPost = () => setOpenEditPost(true);
    const handleCloseEditPost = () => setOpenEditPost(false);
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const prevOpen = useRef(open);

    // удаление поста
    const handleDeletePostClick = () => {
        handleDeletePost(id);
    }

    const handleToggleMoreHoriz = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleCloseMoreHoriz = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDownMoreHoriz(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    return (
        <>
            <Box>
                <IconButton
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggleMoreHoriz}
                >
                    <MoreHoriz />
                </IconButton>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleCloseMoreHoriz}>
                                    <MenuList
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDownMoreHoriz}
                                    >
                                        <MenuItem onClick={handleDeletePostClick}>
                                            <DeleteOutline sx={{ mr: "2px", mb: "5px" }} />
                                            Delete
                                        </MenuItem>
                                        <MenuItem onClick={() => {
                                            handleToggleMoreHoriz();
                                            handleOpenEditPost();
                                        }}>
                                            <EditOutlined sx={{ mr: "2px", mb: "5px" }} />
                                            Edit post
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </Box>
            <Modal
                openModal={openEditPost}
                handleCloseModal={handleCloseEditPost}
            >
                <AuthorEditPostForm
                    titleForm="Редактировать пост"
                    titleButton="Отправить"
                    id={id}
                    handleCloseEditPost={handleCloseEditPost}
                />
            </Modal>
        </>
    );
}
