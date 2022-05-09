import React, { useEffect, useContext, useRef, useState } from 'react';
import { AppContext } from '../../context/appContext';
import style from "./style.module.css";
import { ReactComponent as SearchIcon } from './img/ic-search.svg';
import { ReactComponent as CloseIcon } from './img/ic-close-input.svg';


export const Search = ({ searchText = "" }) => {

    const { handleInputChange, handleFormSubmit, clearSearch } = useContext(AppContext);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        setSearchQuery(searchText);
    });
    const inputRef = useRef(null);

    const handlerForm = (e) => {
        e.preventDefault();
        handleFormSubmit && handleFormSubmit(inputRef.current?.value);
    }

    const handleClickSearchItem = () => {
        inputRef.current.style.color = "red";
    }

    return (
        <form className={style.search} onSubmit={handlerForm}>
            <input
                ref={inputRef}
                type="text"
                onInput={(e) => handleInputChange && handleInputChange(e.target.value)}
                placeholder="Поиск…"
                className={style.input}
                value={searchQuery}
            />
            <button className={style.btn}>
                {searchQuery === ""
                    ? <SearchIcon onClick={handleClickSearchItem} />
                    : <CloseIcon onClick={clearSearch} />
                }
            </button>
        </form>
    );
}
