export enum NoteActionTypes {
    ADD_NOTE = 'ADD_NOTE',
    DELETE_NOTE = 'DELETE_NOTE'
}

export enum FormActionTypes {
    CHANGE_STATE_FORM = 'CHANGE_STATE_FORM'
}

export interface NoteType{
    createDate: string;
    date: string;
    id: number;
    name: string;
    select: string;
    selectImage: string;
    text: string;
    active: boolean;
}

export interface NoteAction {
    type: NoteActionTypes.ADD_NOTE | NoteActionTypes.DELETE_NOTE;
    newNote: NoteType;
    newDataNotes: Array<NoteType>
}

export interface FormAction {
    type: FormActionTypes.CHANGE_STATE_FORM;
    formState: boolean;
}

export interface ButtonType{
    name?: string,
    click?: () => void
}

export interface FormType {
    name: string,
    date: string,
    select: string,
    text: string
}