export enum NoteActionTypes {
    ADD_NOTE = 'ADD_NOTE'
}


export interface InitialDataNotes {
    [index: number]: {
        createDate: String;
        date: String;
        id: Number;
        name: String;
        select: String;
        selectImage: String;
        text: String;
        active: boolean;
    }
}

export interface NoteAction {
    type: NoteActionTypes.ADD_NOTE;
    payload?: any;
}