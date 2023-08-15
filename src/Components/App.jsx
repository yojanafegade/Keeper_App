import React from "react";
import Heading from './Heading'
import Footer from "./Footer";
import Note from './Note'
import notes from '../note'




function App() {
    return (

        <div>
            <Heading></Heading>

            {notes.map(
                 notes=>
                        <Note
                            key={notes.key}
                            title={notes.title}
                            content={notes.content}
                        /> 
            )}


            <Footer />

        </div>
    );
}

export default App;
