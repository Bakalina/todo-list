import {FormAction, FormActionTypes} from "../types/noteTypes";


const initialState = {
    formState: false,
    note: {
        createDate: "",
        date: "",
        id: 0,
        name: "",
        select: "",
        selectImage: "",
        text: "",
        active: true
    }
};

export const formReducers = (state = initialState, action:FormAction) => {

    switch (action.type) {
    case FormActionTypes.CHANGE_STATE_FORM:
        return {
            ...state,
            formState: action.formState};
    case FormActionTypes.CORRECT_NOTE:
        return {
            ...state,
            note: action.note};
    default: return state;
    }

};

export const changeStateFormCreator = (formState: boolean) => ({type: FormActionTypes.CHANGE_STATE_FORM, formState});
export const correctNoteCreator = (note: {}) => ({type: FormActionTypes.CORRECT_NOTE, note});
