import {FormAction, FormActionTypes} from "../types/noteTypes";


const initialState = {
    formState: false
}

export const formReducers = (state = initialState, action:FormAction ) => {

        switch (action.type) {
            case FormActionTypes.CHANGE_STATE_FORM:
                return {formState: action.formState}
            default: return state
    }

};

export const changeStateFormCreator = (formState: boolean) => ({type: FormActionTypes.CHANGE_STATE_FORM, formState})
