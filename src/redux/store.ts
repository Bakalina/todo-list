import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {notesReducers} from "./notesReducers";
import {formReducers} from "./formReducers";


const reducers = combineReducers({
    notesReducers: notesReducers,
    formReducers: formReducers
});

export const store = createStore(reducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof reducers>


