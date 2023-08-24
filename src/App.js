import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Notes from './components/Notes';
import notes from './notes';

const createNotes = (note) => (
  <Notes key={note.id} title={note.title} content={note.content} />
);

const App = () => (
  <div>
    <Header />
    {notes.map(createNotes)}
    <Footer />
  </div>
);

export default App;
