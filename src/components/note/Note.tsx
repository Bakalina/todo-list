import React, {FC} from 'react';
import style from './Note.module.css'
import archive from "../../image/archive.png";
import basket from "../../image/basket.png";
import edit from "../../image/edit.png";
import {NoteType} from "../../types/noteTypes";

interface Note extends NoteType {
    deleteNote: (id: number) => void
}

const Note: FC<Note> = ({ selectImage, name, createDate, select, text,
                                date,id,deleteNote}) => {

    return (
        <div className={style.container}>
            <div className={style.row}>
                <div className={style.colLogo}><img alt='logo' src={selectImage} /></div>
                <div className={style.colName}>{name}</div>
                <div className={style.col}>{createDate}</div>
                <div className={style.col}>{select}</div>
                <div className={style.col}>{text}</div>
                <div className={style.col}>{date}</div>
                <div className={style.colIcon}><img alt='edit' src={edit}/></div>
                <div className={style.colIcon}><img alt='archive' src={archive}/></div>
                <div className={style.colIcon} onClick={()=>deleteNote(id)}><img alt='basket' src={basket}/></div>
            </div>
        </div>
    );
};

export default Note;
