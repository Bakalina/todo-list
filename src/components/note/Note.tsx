import React from 'react';
import style from './Note.module.css'
import archive from "../../image/archive.png";
import basket from "../../image/basket.png";
import edit from "../../image/edit.png";
import task from "../../image/task.png";


const Note = () => {
    return (
        <div className={style.container}>
            <div className={style.row}>
                <div className={style.colLogo}><img alt='logo' src={task} /></div>
                <div className={style.colName}>Name</div>
                <div className={style.col}>Created</div>
                <div className={style.col}>Category</div>
                <div className={style.col}>Content</div>
                <div className={style.col}>Dates</div>
                <div className={style.colIcon}><img alt='edit' src={edit}/></div>
                <div className={style.colIcon}><img alt='archive' src={archive}/></div>
                <div className={style.colIcon}><img alt='basket' src={basket}/></div>
            </div>
        </div>
    );
};

export default Note;
