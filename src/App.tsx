import React from 'react';
import HeaderListNotes from "./components/header/HeaderListNotes";
import NoteContainer from "./components/note/NoteContainer";
import ButtonContainer from "./components/buttons/ButtonContainer";
import FormNoteContainer from "./components/formNote/FormNoteContainer";
import StatisticListContainer from "./components/statistic/StatisticListContainer";

function App() {
    return (
        <>
            <HeaderListNotes />
            <FormNoteContainer/>
            <NoteContainer />
            <ButtonContainer />
            <StatisticListContainer />
        </>
    );
}

export default App;
