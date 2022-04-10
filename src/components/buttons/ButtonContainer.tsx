import React, {FC} from 'react';
import Button from "./button";
import style from './Button.module.css'
import {ButtonType} from "../../types/noteTypes";


const ButtonContainer: FC<ButtonType> = () => {
    return (
        <div className={style.container}>
            <Button name='Active Notes' click={()=> alert('hi')} />
            <Button name='Archive Notes' click={()=> alert('hi')} />
            <Button name='Create Note' click={()=> alert('hi')} />
        </div>
    );
};

export default ButtonContainer;