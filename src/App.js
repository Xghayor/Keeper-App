import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Notes from './components/Notes'

const App = () => {
  return (
   <div>
      <Header />
      <Notes />
      <Footer />
   </div>
  );
};

export default App;
