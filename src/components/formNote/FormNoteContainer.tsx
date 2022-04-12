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
    addNewNoteCreator: (newNote: {}) => void;
    changeStateFormCreator: (arg0: boolean) => void;
    dataNotes: Array<NoteType>
    changeDataNotesCreator : (newDataNotes: Array<NoteType>) => void
}

const FormNoteContainer: FC<FormNoteContainerType> = ({ dataNotes,note, formState,
                                                          addNewNoteCreator, changeStateFormCreator ,
                                                          changeDataNotesCreator}) => {

    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {

        let date = values.date
        let createDate = new Date
        let name = values.name
        let select = values.select
        let text = values.text
        let selectImage = '';
        switch (select) {
            case 'Task' :
                selectImage = 'https://cdn-icons-png.flaticon.com/512/1368/1368593.png'
                break;
            case 'Idea' :
                selectImage = 'https://cdn-icons-png.flaticon.com/512/841/841743.png'
                break;
            case 'Quote' :
                selectImage = 'https://cdn-icons.flaticon.com/png/512/4338/premium/4338294.png?token=exp=1649615808~hmac=c62b0537a6962d2c73b4628ef55fb263'
                break;
            case 'Random Thought' :
                selectImage = 'https://cdn-icons.flaticon.com/png/512/2263/premium/2263511.png?token=exp=1649615852~hmac=3c74f075b08b17351f0b38507ad58cf0'
                break;
        }

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
            }
            addNewNoteCreator(newNote)
        } else {
            let newDataNotes = dataNotes.map(el => {
                if (el.id === note.id) {
                    el.name = name
                    el.text = text
                    el.select = select
                    el.selectImage = selectImage
                    el.date = date
                }
                return el
            })

            changeDataNotesCreator(newDataNotes)
        }

        changeStateFormCreator(false)
        setSubmitting(false);
    }


    if (formState) {
        return note.id === 0 ? <FormNote submit={submit}/> : <FormNote submit={submit}
                                                                       name={note.name}
                                                                       text={note.text}
                                                                       select={note.select}
                                                                       date={note.date}/> ;
    } else {
        return <div>{}</div>
    }
};

const mapStateToProps = (state: RootState) => {
    return {
        formState: state.formReducers.formState,
        note: state.formReducers.note,
        dataNotes: state.notesReducers.dataNotes
    }
}


export default connect(mapStateToProps,{addNewNoteCreator, changeStateFormCreator, changeDataNotesCreator})(FormNoteContainer);