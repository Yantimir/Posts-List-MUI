import React, { useEffect, useContext, useRef, useState } from 'react';
import { AppContext } from '../../context/appContext';
import style from "./style.module.css";
import { ReactComponent as SearchIcon } from './img/ic-search.svg';
import { ReactComponent as CloseIcon } from './img/ic-close-input.svg';


export const SearchUsers = ({ searchText = "" }) => {

    const { handleInputChangeUsers, handleFormSubmitUsers, clearSearchUsers } = useContext(AppContext);
    const [searchQueryUsers, setSearchQueryUsers] = useState("");

    useEffect(() => {
        setSearchQueryUsers(searchText);
    });
    const inputRef = useRef(null);

    const handlerForm = (e) => {
        e.preventDefault();
        handleFormSubmitUsers && handleFormSubmitUsers(inputRef.current?.value);
    }

    const handleClickSearchItem = () => {
        inputRef.current.style.color = "red";
    }

    return (
        <form className={style.search} onSubmit={handlerForm}>
            <input
                ref={inputRef}
                type="text"
                onInput={(e) => handleInputChangeUsers && handleInputChangeUsers(e.target.value)}
                placeholder="Поиск…"
                className={style.input}
                value={searchQueryUsers}
            />
            <button className={style.btn}>
                {searchQueryUsers === ""
                    ? <SearchIcon onClick={handleClickSearchItem} />
                    : <CloseIcon onClick={clearSearchUsers} />
                }
            </button>
        </form>
    );
}
