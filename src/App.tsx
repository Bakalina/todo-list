import React from 'react';
import HeaderListNotes from "./components/header/HeaderListNotes";
import NoteContainer from "./components/note/NoteContainer";
import ButtonContainer from "./components/buttons/ButtonContainer";

function App() {
    return (
        <>
            <HeaderListNotes/>
            <NoteContainer/>
            <ButtonContainer/>
        </>
    );
}

export default App;
