import React, {FC} from 'react';
import style from './Button.module.css';
import {ButtonType} from "../../types/noteTypes";


const Button: FC<ButtonType> = ({ name, click }) => {
    return (
        <>
            <button className={style.button} onClick={click}>{name}</button>
        </>
    );
};

export default Button;