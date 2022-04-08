import React from 'react';
import Note from "./Note";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";

export interface propsDataNotes {
    dataNotes: {};
    propsData: {}
}

const NoteContainer: propsDataNotes = (props) => {
    console.log(props.dataNotes)
    return (
        <Note propsData: propsDataNotes={props}/>
    );
};


const mapStateToProps = (state: RootState) => state;


export default connect(mapStateToProps)(NoteContainer)
