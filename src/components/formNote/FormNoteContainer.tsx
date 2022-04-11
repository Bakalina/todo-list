import React, {FC} from 'react';
import {FormType} from "../../types/noteTypes";
import {connect} from "react-redux";
import {addNewNoteCreator} from "../../redux/notesReducers";
import {changeStateFormCreator} from "../../redux/formReducers";
import {RootState} from "../../redux/store";
import FormNote from "./FormNote";

type FormNoteContainerType = {
    formState: boolean,
    addNewNoteCreator: ({}) => void,
    changeStateFormCreator: (arg0: boolean) => void
}

const FormNoteContainer: FC<FormNoteContainerType> = ({formState, addNewNoteCreator, changeStateFormCreator}) => {


    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {

        let date = values.date
        let createDate = new Date
        let name = values.name
        let select = values.select
        let text = values.text
        let selectImage;
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

        let note = {
            id: Date.now(),
            name: name,
            select: select,
            selectImage: selectImage,
            text: text,
            date: date,
            createDate: createDate.toISOString().split('T')[0],
            active: true
        }

        addNewNoteCreator(note)
        setSubmitting(false);
        changeStateFormCreator(false)
    }


    if (formState) {
        return (
            <FormNote submit={submit}/>
        );
    } else {
        return <div>{}</div>
    }
};

let mapStateToProps = (state: RootState) => state.formReducers;


export default connect(mapStateToProps,{addNewNoteCreator, changeStateFormCreator})(FormNoteContainer);