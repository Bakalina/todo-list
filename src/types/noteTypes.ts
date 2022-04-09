export enum NoteActionTypes {
    ADD_NOTE = 'ADD_NOTE'
}

export interface NoteAction {
    type: NoteActionTypes.ADD_NOTE;
    payload?: any;
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