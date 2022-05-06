import React from "react";
import { useNavigate } from "react-router-dom";
import { NotFound } from './../../components/NotFound/NotFound';

export const NotFoundPage = () => {

    const navigate = useNavigate();

    return (
        <NotFound title="Страница не найдена" buttonText="На главную" buttonAction={() => navigate("/")}>
        </NotFound>
    );
}; 