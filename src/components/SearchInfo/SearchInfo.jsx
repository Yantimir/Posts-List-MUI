import React from 'react';
import style from "./style.module.css";

export const SearchInfo = ({ searchText, searchCount, searchTarget }) => {

    return (
        searchText &&
        <section className={style["search-title"]}>По запросу <span>{searchText} </span>найдено<span> {searchCount} </span>{searchTarget}</section>
    );
}