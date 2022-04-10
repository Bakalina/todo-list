import {Field, Form, Formik} from 'formik';
import React from 'react';
import style from './FormNote.module.css';
import {FormType} from "../../types/noteTypes";
import {useDispatch, useSelector, useStore} from "react-redux";
import {addNewNoteCreator} from "../../redux/notesReducers";
import {changeStateFormCreator} from "../../redux/formReducers";



const FormNote = () => {

    let dispatch = useDispatch()
    // @ts-ignore
    let stateForm = useSelector(state => state.formReducers.formState)


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

        dispatch(addNewNoteCreator(note))
        setSubmitting(false);
        dispatch(changeStateFormCreator(false))
    }


    if (stateForm) {
        return (
            <div>
                <Formik
                    initialValues={{name: '', text: '', select: '', date: ''}}
                    onSubmit={submit}>

                    {({isSubmitting}) => (
                        <Form className={style.container}>
                            <div>
                                <div>Name:</div>
                                <Field required type="text" name="name"/>
                            </div>
                            <div>
                                <div>Category:</div>
                                <Field required name="select" as="select">
                                    <option value="" disabled hidden>Select a category</option>
                                    <option value="Task">Task</option>
                                    <option value="Idea">Idea</option>
                                    <option value="Quote">Quote</option>
                                    <option value="Random Thought">Random Thought</option>
                                </Field>
                            </div>
                            <div>
                                <div>Text:</div>
                                <Field required component="textarea" name="text"/>
                            </div>
                            <div>
                                <div>Date:</div>
                                <Field type="date" name="date"/>
                            </div>
                            <div>
                                <button type="submit" disabled={isSubmitting}>Save Note</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    } else {
        return <div>{}</div>
    }
};

export default FormNote;