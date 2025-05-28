import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


function App() {
  return (
    <div>
      <Header />
      {notes.map(libro => (
        <Note
        key = {libro.key}
        title = {libro.title}
        content = {libro.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
