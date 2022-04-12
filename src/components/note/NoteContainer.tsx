import React, {FC} from 'react';
import Note from "./Note";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {NoteType} from "../../types/noteTypes";
import {changeDataNotesCreator} from "../../redux/notesReducers";
import {changeStateFormCreator, correctNoteCreator} from "../../redux/formReducers";

type PropsType = {
    dataNotes: Array<NoteType>,
    stateActiveNotes: boolean,
    changeDataNotesCreator: (newDataNotes: Array<NoteType>) => void ,
    correctNoteCreator: (note: {}) => void,
    changeStateFormCreator: (formState: boolean) => void
}

const NoteContainer: FC<PropsType> = ({stateActiveNotes, dataNotes,
    changeDataNotesCreator,
    correctNoteCreator, changeStateFormCreator}) => {

    const deleteNote = (id: number) => {
        dataNotes = dataNotes.filter(el => el.id !== id);
        changeDataNotesCreator(dataNotes);
    };

    const newStateActive = (id: number) => {
        dataNotes = dataNotes.map(el => {
            if (el.id === id) {
                el.active? el.active = false: el.active = true;
            }
            return el;
        });
        changeDataNotesCreator(dataNotes);
    };

    const correctNote = (id: number) => {
        dataNotes.forEach(el => {
            if (el.id === id) correctNoteCreator(el);
        });
        changeStateFormCreator(true);
    };

    return (
        <>
            {dataNotes.filter(el => el.active === stateActiveNotes)
                .map(el => <Note key={el.id}
                    createDate={el.createDate}
                    date={el.date}
                    name={el.name}
                    select={el.select}
                    selectImage={el.selectImage}
                    text={el.text}
                    id={el.id}
                    active={el.active}
                    deleteNote={deleteNote}
                    newStateActive={newStateActive}
                    correctNote={correctNote}
                />)}
        </>
    );
};

const mapStateToProps = (state: RootState) => state.notesReducers;

export default connect(mapStateToProps,
    {changeDataNotesCreator, correctNoteCreator, changeStateFormCreator})(NoteContainer);
