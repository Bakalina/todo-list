import React from 'react';
import HeaderListNotes from "./components/header/HeaderListNotes";
import NoteContainer from "./components/note/NoteContainer";
import ButtonContainer from "./components/buttons/ButtonContainer";
import FormNote from "./components/formNote/FormNote";

function App() {
    return (
        <>
            <HeaderListNotes />
            <FormNote />
            <NoteContainer />
            <ButtonContainer />
        </>
    );
}

export default App;
