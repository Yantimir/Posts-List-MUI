import React, { useCallback, useContext } from "react";
import { CurrentPostsContext } from "../../context/CurrentPostsContext";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../utils/Api";
import { useApi } from "../../hooks/useApi";
import { UserPost } from "../../components/UserPost";
import { NotFound } from "../../components/NotFound/NotFound";
import LinearIndeterminate from "../../components/LinearProgress/LinearProgress";


export const PostDetailsPage = () => {
    const posts = useContext(CurrentPostsContext);
    const navigate = useNavigate();
    const { postID } = useParams();

    const handlerData = useCallback(() => {
        return api.getPostById(postID)
    }, [postID, posts]);

    const { data: post, loading, error } = useApi(handlerData);

    return (
        <>
            {loading && <LinearIndeterminate />}
            {error && <NotFound title="Пост не найден" buttonText="Назад" buttonAction={() => navigate(-1)} />}
            {post && <UserPost {...post} />}
        </>
    );
}; 