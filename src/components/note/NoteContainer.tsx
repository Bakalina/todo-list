import React, {FC} from 'react';
import Note from "./Note";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {NoteType} from "../../types/noteTypes";

type PropsType = {
    dataNotes: Array<NoteType>
}

const NoteContainer: FC<PropsType> = ({dataNotes}) => {


    return (
        <>
            {dataNotes.map(el => <Note key={el.id}
                                       createDate={el.createDate}
                                       date={el.date}
                                       name={el.name}
                                       select={el.select}
                                       selectImage={el.selectImage}
                                       text={el.text}
                                       id={el.id}
                                       active={el.active} />)}
        </>
    );
};


const mapStateToProps = (state: RootState) => state.notesReducers;

export default connect(mapStateToProps)(NoteContainer)
