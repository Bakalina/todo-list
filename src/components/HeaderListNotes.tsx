import React from 'react';
import style from './HeaderListNotes.module.css';
import basket from '../image/basket.png'
import archive from '../image/archive.png'


const HeaderListNotes = () => {
    return (
        <div className={style.container}>
            <div className={style.row}>
                <div className={style.colName}>Name</div>
                <div className={style.col}>Created</div>
                <div className={style.col}>Category</div>
                <div className={style.col}>Content</div>
                <div className={style.col}>Dates</div>
                <div className={style.colIcon}><img alt='archive' src={archive}/></div>
                <div className={style.colIcon}><img alt='basket' src={basket}/></div>
            </div>
        </div>
    );
};

export default HeaderListNotes;