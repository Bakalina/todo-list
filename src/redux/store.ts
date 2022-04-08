import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {notesReducers} from "./notesReducers";


const reducers = combineReducers({
    dataNotes: notesReducers,
})

export const store = createStore(reducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof reducers>




