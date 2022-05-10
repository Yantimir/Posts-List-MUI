import React from 'react';
import { Box, Modal } from '@mui/material';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const _Modal = ({ openModal, handleCloseModal, children }) => {

    const styleModal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "auto",
        bgcolor: 'background.paper',
        boxShadow: 24,
    }

    return (
        <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <Box sx={styleModal}>
                <Box sx={{ width: "100%", height: "40px", backgroundColor: "#444444" }}>
                    <KeyboardArrowLeft
                        sx={{
                            cursor: "pointer",
                            m: "8px",
                            color: "#f1f1f1"
                        }}
                        onClick={handleCloseModal}
                    />
                </Box>
                <Box sx={{ p: "15px" }}>
                    {children}
                </Box>
            </Box>
        </Modal >
    );
}

export default _Modal;