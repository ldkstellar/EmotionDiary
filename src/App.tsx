import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit';
import NEW from './pages/New';
import Diary from './pages/Diary';
import RouteTest from './components/RouteTest';
import Mybutton from './components/MyButton';
import MyHeader from './components/Myheader';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader leftChild={<Mybutton text='왼쪽버튼' onClick={()=>alert('왼쪽 클릭')}/>} headerText='나만의일기장' rightChild={<Mybutton text='오른쪽 버튼' onClick={()=>{alert('오른쪽 버튼 클릭')}}/>}/>
        <h2>동규의 라우팅 공부 </h2>
        <Mybutton text={`버튼`} onClick={()=>{alert(`버튼클릭`)}} type={`positive`}/>
        <Mybutton text={`버튼`} onClick={()=>{alert(`버튼클릭`)}} type={`negative`}/>
        <Mybutton text={`버튼`} onClick={()=>{alert(`버튼클릭`)}} type={`default`}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new' element={<NEW/>}/>
          <Route path='/diary/:id' element={<Diary/>}/>
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
