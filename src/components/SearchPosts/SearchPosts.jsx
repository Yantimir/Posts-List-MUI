import React, { useEffect, useContext, useRef, useState } from 'react';
import { AppContext } from '../../context/appContext';
import style from "./style.module.css";
import { ReactComponent as SearchIcon } from './img/ic-search.svg';
import { ReactComponent as CloseIcon } from './img/ic-close-input.svg';


export const SearchPosts = ({ searchText = "" }) => {

    const { handleInputChangePosts, handleFormSubmitPosts, clearSearchPosts } = useContext(AppContext);
    const [searchQueryPosts, setSearchQueryPosts] = useState("");

    useEffect(() => {
        setSearchQueryPosts(searchText);
    });
    const inputRef = useRef(null);

    const handlerForm = (e) => {
        e.preventDefault();
        handleFormSubmitPosts && handleFormSubmitPosts(inputRef.current?.value);
    }

    const handleClickSearchItem = () => {
        inputRef.current.style.color = "red";
    }

    return (
        <form className={style.search} onSubmit={handlerForm}>
            <input
                ref={inputRef}
                type="text"
                onInput={(e) => handleInputChangePosts && handleInputChangePosts(e.target.value)}
                placeholder="Поиск…"
                className={style.input}
                value={searchQueryPosts}
            />
            <button className={style.btn}>
                {searchQueryPosts === ""
                    ? <SearchIcon onClick={handleClickSearchItem} />
                    : <CloseIcon onClick={clearSearchPosts} />
                }
            </button>
        </form>
    );
}
