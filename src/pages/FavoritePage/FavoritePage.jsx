import React from "react";
import Spinner from "../../components/Spinner";



export const FavoritePage = ({isLoading, favoritesUser}) => {

    return (
        <>
            {isLoading && <Spinner />}
            {<UserPost {...post}/>}
        </>
    );
}; 