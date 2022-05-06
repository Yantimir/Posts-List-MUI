import React, { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import style from "./style.module.css";
import { ReactComponent as SearchIcon } from './img/ic-search.svg';
import { ReactComponent as CloseIcon } from './img/ic-close-input.svg';


export const Search = () => {

    const { handleInputChange, handleFormSubmit } = useContext(AppContext);
    const handlerForm = (e) => {
        e.preventDefault();
        handleFormSubmit&& handleFormSubmit(e.target.querySelector("input__emMnZ")?.value);
    }

    return (
        <form className={style.search} onSubmit={handlerForm}>
            <input
                type="text"
                onInput={(e) => handleInputChange && handleInputChange(e.target.value)}
                placeholder="Поиск…"
                className={style.input}
            />
            <button className={style.btn}>
                <SearchIcon />
                {false && <CloseIcon />}
            </button>
        </form>
    );
}
