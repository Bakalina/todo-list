import {Field, Form, Formik} from 'formik';
import React, {FC} from 'react';
import style from './FormNote.module.css';


type FormType = {
    name: string,
    date: string,
    select: string,
    text: string,
}

type dataType = {
    name: string,
    date: string,
    select: string,
    text: string,
}

const addNote = (data: FormType) => {
    let date = data.date
    let createDate = new Date
    let name = data.name
    let select = data.select
    let text = data.text
    let selectImage = ''
    switch (select) {
        case 'Task' :
            selectImage = 'img/task.png'
            break;
        case 'Idea' :
            selectImage = 'img/idea.png'
            break;
        case 'Quote' :
            selectImage = 'img/quote.png'
            break;
        case 'Random Thought' :
            selectImage = 'img/random.png'
            break;
    }
}


const FormNote = () => {

    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const note = values
        addNote(values)
        setSubmitting(false);
        console.log(note)
    }


    return (
        <div>
            <Formik
                initialValues={{name: '', text: ''}}
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
                                <option value="" selected disabled hidden>Select a category</option>
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
                            <button type="submit" disabled={isSubmitting}>Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FormNote;