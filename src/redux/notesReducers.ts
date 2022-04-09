import {NoteAction, NoteActionTypes, NoteType} from "../types/noteTypes";
import idea from "../image/idea.png";
import task from "../image/task.png";
import quote from "../image/quote.png";
import random from "../image/random.png";


const dataNotes: Array<NoteType> = [
    {
        createDate: "2022-04-03",
        date: "2022-04-14",
        id: 1649009213118,
        name: 'write',
        select: "Idea",
        selectImage: idea,
        text: "write a favorite book",
        active: true
    },
    {
        createDate: "2022-04-04",
        date: "2022-04-23",
        id: 1649102308223,
        name: "shopping",
        select: "Task",
        selectImage: task,
        text: "foods",
        active: true
    },
    {
        createDate: "2022-04-04",
        date: "2022-04-05",
        id: 1649102963423,
        name: "jogging",
        select: "Idea",
        selectImage: idea,
        text: "Start running in the morning",
        active: true
    },
    {
        createDate: "2022-04-04",
        date: "2022-04-22",
        id: 1649103122202,
        name: "buy a laptop",
        select: "Task",
        selectImage: task,
        text: "go shopping",
        active: true
    },
    {
        createDate: "2022-04-04",
        date: "",
        id: 1649103312992,
        name: "book",
        select: "Quote",
        selectImage: quote,
        text: "Sleep is good, he said, and books are better.",
        active: true
    },
    {
        createDate: "2022-04-04",
        date: "2022-04-04",
        id: 1649103387474,
        name: "food",
        select: "Random Thought",
        selectImage: random,
        text: "I want to eat",
        active: true
    },
    {
        createDate: "2022-04-04",
        date: "",
        id: 1649103547264,
        name: "sleep",
        select: "Random Thought",
        selectImage: random,
        text: "i need to more sleep :)",
        active: true
    }
];



export  const notesReducers = (state = dataNotes, action: NoteAction ) => {
    switch (action.type) {
        case NoteActionTypes.ADD_NOTE:

        default: return state
    }
}