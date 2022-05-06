import React from "react";
import style from "./style.module.css";
import classnames from "classnames";

const Spinner = () => {
    return (
        <div className={style["wrapper-spinner"]}>
            <div className={classnames(style.spinner, style.spinner__gray)}></div>
        </div>
    );
}

export default Spinner;