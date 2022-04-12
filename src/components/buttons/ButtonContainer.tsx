import React, {FC} from 'react';
import Button from "./Button";
import style from './Button.module.css';
import {ButtonType} from "../../types/noteTypes";
import {connect} from "react-redux";
import {changeStateFormCreator, correctNoteCreator} from "../../redux/formReducers";
import {newStateActiveNoteCreator} from "../../redux/notesReducers";

interface ButtonContainerType extends ButtonType {
    newStateActiveNoteCreator: (newStateActiveNotes: boolean) => void;
    changeStateFormCreator: (formState: boolean) => void
    correctNoteCreator: (note: {}) => void,
}

const ButtonContainer: FC<ButtonContainerType> = ({newStateActiveNoteCreator,
    changeStateFormCreator, correctNoteCreator}) => {

    const createNote = () => {
        const note = {
            createDate: "",
            date: "",
            id: 0,
            name: "",
            select: "",
            selectImage: "",
            text: "",
            active: true
        };
        correctNoteCreator(note);
        changeStateFormCreator(true);
    };

    const renderActiveNotes = () => {
        newStateActiveNoteCreator(true);
    };

    const renderArchiveNotes = () => {
        newStateActiveNoteCreator(false);
    };

    return (
        <div className={style.container}>
            <Button name='Active Notes' click={renderActiveNotes} />
            <Button name='Archive Notes' click={renderArchiveNotes} />
            <Button name='Create Note' click={createNote} />
        </div>
    );
};

export default connect(null,
    {newStateActiveNoteCreator, changeStateFormCreator, correctNoteCreator})(ButtonContainer);