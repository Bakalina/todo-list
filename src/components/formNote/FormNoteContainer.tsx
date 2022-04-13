import React, {FC} from 'react';
import {FormType, NoteType} from "../../types/noteTypes";
import {connect} from "react-redux";
import {addNewNoteCreator, changeDataNotesCreator} from "../../redux/notesReducers";
import {changeStateFormCreator} from "../../redux/formReducers";
import {RootState} from "../../redux/store";
import FormNote from "./FormNote";

interface FormNoteContainerType{
    note: NoteType;
    formState: boolean;
    addNewNoteCreator: (newNote: NoteType) => void;
    changeStateFormCreator: (arg0: boolean) => void;
    dataNotes: Array<NoteType>
    changeDataNotesCreator : (newDataNotes: Array<NoteType>) => void
}

const FormNoteContainer: FC<FormNoteContainerType> = ({ dataNotes,note, formState,
    addNewNoteCreator, changeStateFormCreator ,
    changeDataNotesCreator}) => {

    const addSelectImage = (select: string) => {
        let selectImage = '';
        switch (select) {
        case 'Task' :
            selectImage = 'https://cdn-icons-png.flaticon.com/512/1368/1368593.png';
            break;
        case 'Idea' :
            selectImage = 'https://cdn-icons-png.flaticon.com/512/841/841743.png';
            break;
        case 'Quote' :
            selectImage = 'https://cdn-icons-png.flaticon.com/512/206/206059.png';
            break;
        case 'Random Thought' :
            selectImage = 'https://cdn-icons-png.flaticon.com/512/7268/7268079.png';
            break;
        }
        return selectImage;
    };

    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {

        const date = values.date;
        const createDate = new Date;
        const name = values.name;
        const select = values.select;
        const text = values.text;
        const selectImage = addSelectImage(select);


        if (note.id === 0) {
            const newNote = {
                id: Date.now(),
                name: name,
                select: select,
                selectImage: selectImage,
                text: text,
                date: date,
                createDate: createDate.toISOString().split('T')[0],
                active: true
            };
            addNewNoteCreator(newNote);
        } else {
            const newDataNotes = dataNotes.map(el => {
                if (el.id === note.id) {
                    el.name = name;
                    el.text = text;
                    el.select = select;
                    el.selectImage = selectImage;
                    el.date = date;
                }
                return el;
            });

            changeDataNotesCreator(newDataNotes);
        }

        changeStateFormCreator(false);
        setSubmitting(false);
    };


    if (formState) {
        return note.id === 0 ? <FormNote submit={submit}/> : <FormNote submit={submit}
            name={note.name}
            text={note.text}
            select={note.select}
            date={note.date}/> ;
    } else {
        return <div>{}</div>;
    }
};

const mapStateToProps = (state: RootState) => {
    return {
        formState: state.formReducers.formState,
        note: state.formReducers.note,
        dataNotes: state.notesReducers.dataNotes
    };
};


export default connect(mapStateToProps,
    {addNewNoteCreator, changeStateFormCreator, changeDataNotesCreator})(FormNoteContainer);