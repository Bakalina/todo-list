import React from 'react';
import HeaderListNotes from "./components/header/HeaderListNotes";
import NoteContainer from "./components/note/NoteContainer";
import ButtonContainer from "./components/buttons/ButtonContainer";
import FormNoteContainer from "./components/formNote/FormNoteContainer";

function App() {
    return (
        <>
            <HeaderListNotes />
            <FormNoteContainer/>
            <NoteContainer />
            <ButtonContainer />
        </>
    );
}

export default App;
