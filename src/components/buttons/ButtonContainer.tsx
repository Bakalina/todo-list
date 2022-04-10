import React, {FC} from 'react';
import Button from "./Button";
import style from './Button.module.css'
import {ButtonType} from "../../types/noteTypes";
import {useDispatch} from "react-redux";
import {changeStateFormCreator} from "../../redux/formReducers";


const ButtonContainer: FC<ButtonType> = () => {
    let dispatch = useDispatch()

    const createNote = () => {
        dispatch(changeStateFormCreator(true))
    }

    return (
        <div className={style.container}>
            <Button name='Active Notes' click={()=> alert('hi')} />
            <Button name='Archive Notes' click={()=> alert('hi')} />
            <Button name='Create Note' click={createNote} />
        </div>
    );
};

export default ButtonContainer;