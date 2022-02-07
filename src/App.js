import React, {useEffect, useState} from 'react';
import { Container} from '@material-ui/core'
import Navbar from './Components/Navbar/Navbar.js';
import {BrowserRouter , Routes,  Route} from  'react-router-dom'
import Home from './Components/Home/Home.js';
import Auth from './Components/Auth/Auth.js';

function App() {

  return (
    <Container max-width="lg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Container>
  );
}

export default App;
