import React from "react";



export const FavoritePage = ({isLoading, favoritesUser}) => {

    
    return (
        <>
            {isLoading && <LinearIndeterminate />}
            {<UserPost {...post}/>}
        </>
    );
}; 