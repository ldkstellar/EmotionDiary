import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit';
import NEW from './pages/New';
import Diary from './pages/Diary';
import RouteTest from './components/RouteTest';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>동규의 라우팅 공부 </h2>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new' element={<NEW/>}/>
          <Route path='/diary' element={<Diary/>}/>
          <Route path='/edit' element={<Edit/>}/>
        </Routes>
        <a href='/new'>new로 이동</a>
        <br/>
        <RouteTest/>
      </div>
    </BrowserRouter>
  );
}

export default App;
