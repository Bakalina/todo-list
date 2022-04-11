import React, {FC} from 'react';
import Note from "./Note";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {NoteType} from "../../types/noteTypes";
import {deleteNoteCreator, newActiveNotesCreator} from "../../redux/notesReducers";

type PropsType = {
    dataNotes: Array<NoteType>,
    deleteNoteCreator: (newDataNotes: Array<NoteType>) => {},
    newActiveNotesCreator: (newDataNotes: Array<NoteType>) => {},
    stateActiveNotes: boolean
}

const NoteContainer: FC<PropsType> = ({stateActiveNotes, dataNotes, deleteNoteCreator, newActiveNotesCreator}) => {
    console.log(stateActiveNotes)
    const deleteNote = (id: number) => {
        dataNotes = dataNotes.filter(el => el.id !== id)
       return  deleteNoteCreator(dataNotes)
    }

    const newStateActive = (id: number) => {
        dataNotes = dataNotes.map(el => {
            if (el.id === id) {
                el.active? el.active = false: el.active = true
            }
            return el
        })
        return newActiveNotesCreator(dataNotes)
    }


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
                                       newStateActive={newStateActive}/>)}
        </>
    );
};


const mapStateToProps = (state: RootState) => state.notesReducers;

export default connect(mapStateToProps, {deleteNoteCreator, newActiveNotesCreator})(NoteContainer)
