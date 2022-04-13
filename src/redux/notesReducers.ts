import {NoteAction, NoteActionTypes, NoteType} from "../types/noteTypes";


const initialState = {
    dataNotes: [
        {
            createDate: "2022-04-03",
            date: "2022-04-14",
            id: 1649009213118,
            name: 'write',
            select: "Idea",
            selectImage: 'https://cdn-icons-png.flaticon.com/512/841/841743.png',
            text: "write a favorite book",
            active: true
        },
        {
            createDate: "2022-04-04",
            date: "2022-04-23",
            id: 1649102308223,
            name: "shopping",
            select: "Task",
            selectImage: 'https://cdn-icons-png.flaticon.com/512/1368/1368593.png',
            text: "foods",
            active: true
        },
        {
            createDate: "2022-04-04",
            date: "2022-04-05",
            id: 1649102963423,
            name: "jogging",
            select: "Idea",
            selectImage: 'https://cdn-icons-png.flaticon.com/512/841/841743.png',
            text: "Start running in the morning",
            active: true
        },
        {
            createDate: "2022-04-04",
            date: "2022-04-22",
            id: 1649103122202,
            name: "buy a laptop",
            select: "Task",
            selectImage: 'https://cdn-icons-png.flaticon.com/512/1368/1368593.png',
            text: "go shopping",
            active: true
        },
        {
            createDate: "2022-04-04",
            date: "",
            id: 1649103312992,
            name: "book",
            select: "Quote",
            selectImage: 'https://cdn-icons-png.flaticon.com/512/206/206059.png',
            text: "Sleep is good, he said, and books are better.",
            active: true
        },
        {
            createDate: "2022-04-04",
            date: "2022-04-04",
            id: 1649103387474,
            name: "food",
            select: "Random Thought",
            selectImage: 'https://cdn-icons-png.flaticon.com/512/7268/7268079.png',
            text: "I want to eat",
            active: true
        },
        {
            createDate: "2022-04-04",
            date: "",
            id: 1649103547264,
            name: "sleep",
            select: "Random Thought",
            selectImage: 'https://cdn-icons-png.flaticon.com/512/7268/7268079.png',
            text: "i need to more sleep :)",
            active: true
        }
    ],
    stateActiveNotes: true,
};

export const notesReducers = (state = initialState, action: NoteAction) => {
    switch (action.type) {
    case NoteActionTypes.ADD_NOTE:
        return {
            ...state,
            dataNotes: [...state.dataNotes ,action.newNote]
        };
    case NoteActionTypes.CHANGE_STATE_ACTIVE_NOTE:
        return {
            ...state,
            stateActiveNotes: action.newStateActiveNotes
        };
    case NoteActionTypes.CHANGE_DATA_NOTES:
        return {
            ...state,
            dataNotes: action.newDataNotes
        };
    default: return state;
    }
};

export const addNewNoteCreator = (newNote: NoteType) =>
    ({type: NoteActionTypes.ADD_NOTE, newNote});

export const newStateActiveNoteCreator = (newStateActiveNotes: boolean) =>
    ({type: NoteActionTypes.CHANGE_STATE_ACTIVE_NOTE, newStateActiveNotes});

export const changeDataNotesCreator = (newDataNotes: Array<NoteType>) =>
    ({type: NoteActionTypes.CHANGE_DATA_NOTES, newDataNotes});