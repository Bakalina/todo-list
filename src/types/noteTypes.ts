export enum NoteActionTypes {
    ADD_NOTE = 'ADD_NOTE',
    DELETE_NOTE = 'DELETE_NOTE',
    CHANGE_ACTIVE_NOTE = 'CHANGE_ACTIVE_NOTE',
    CHANGE_STATE_ACTIVE_NOTE = 'CHANGE_STATE_ACTIVE_NOTE'
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
    type: NoteActionTypes.ADD_NOTE
        | NoteActionTypes.DELETE_NOTE
        | NoteActionTypes.CHANGE_ACTIVE_NOTE
        | NoteActionTypes.CHANGE_STATE_ACTIVE_NOTE;
    newNote: NoteType;
    newDataNotes: Array<NoteType>;
    newStateActive: Array<NoteType>;
    newStateActiveNotes: boolean;
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

export interface StatisticListType {
    logo?: string;
    name: string;
    active: number | string;
    archive: number | string;
    styleRow?: string;

}

export interface StatisticNotes {
    select: string;
    selectImage: string;
    active: number;
    archive: number;
    id: number
}