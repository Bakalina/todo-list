import {Field, Form, Formik} from 'formik';
import React, {FC} from 'react';
import style from './FormNote.module.css';
import {FormType} from "../../types/noteTypes";

type FormNoteType = {
    submit: (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => void
    name?: string,
    text?: string,
    select?: string,
    date?: string
}

const FormNote: FC<FormNoteType> = ({submit, name= '', text= '',
    select= '', date= '' }) => {

    return (
        <div>
            <Formik
                initialValues={{name: name, text: text, select: select, date: date}}
                onSubmit={submit}>

                {({isSubmitting}) => (
                    <Form className={style.container}>
                        <div className={style.row}>
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
                        </div>
                        <div className={style.containerButton}>
                            <button className={style.button} type="submit" disabled={isSubmitting}>Save Note</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FormNote;