import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './Pages';
import Apple from './Pages/apple';
import Otros from './Pages/otros';
import Registro from './Pages/registro';
import Samsung from './Pages/samsung';
import Xiaomi from './Pages/xiaomi';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/apple' component={Apple} />
        <Route path='/samsung' component={Samsung} />
        <Route path='/xiaomi' component={Xiaomi} />
        <Route path='/otros' component={Otros} />
        <Route path='/registro' component={Registro} />
      </Routes>
    </Router>
  );
}

export default App;
