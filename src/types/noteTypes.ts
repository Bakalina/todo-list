export enum NoteActionTypes {
    ADD_NOTE = 'ADD_NOTE',
    DELETE_NOTE = 'DELETE_NOTE',
    CHANGE_ACTIVE_NOTE = 'CHANGE_ACTIVE_NOTE',
    CHANGE_STATE_ACTIVE_NOTE = 'CHANGE_STATE_ACTIVE_NOTE',
    CHANGE_DATA_NOTES = 'CHANGE_DATA_NOTES'
}

export enum FormActionTypes {
    CHANGE_STATE_FORM = 'CHANGE_STATE_FORM',
    CORRECT_NOTE = 'CORRECT_NOTE'
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
        | NoteActionTypes.CHANGE_DATA_NOTES
        | NoteActionTypes.DELETE_NOTE
        | NoteActionTypes.CHANGE_ACTIVE_NOTE
        | NoteActionTypes.CHANGE_STATE_ACTIVE_NOTE;
    newNote: NoteType;
    newDataNotes: Array<NoteType>;
    newStateActive: Array<NoteType>;
    newStateActiveNotes: boolean;
}

export interface FormAction {
    type: FormActionTypes.CHANGE_STATE_FORM
        | FormActionTypes.CORRECT_NOTE;
    formState: boolean;
    note: NoteType
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