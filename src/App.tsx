import { useReducer, useRef } from 'react';
import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit';
import NEW from './pages/New';
import Diary from './pages/Diary';
import RouteTest from './components/RouteTest';

export interface info{
  id:number,
  date:any,
  content:string,
  emotion:number,
}

export const DiaryStateContext = React.createContext<info[]>([]);
export const DiaryDispatchContext = React.createContext<any|undefined>(undefined);
const dummyData:info[] = [
  {
    id:1,
    emotion:1,
    content:"오늘의 일기 1번",
    date:1709015129674

  },
  {
    id:2,
    emotion:2,
    content:"오늘의 일기 2번",
    date:1709015129675

  },
  {
    id:3,
    emotion:3,
    content:"오늘의 일기 3번",
    date:1709015129676

  },
]




const reducer = (state:info[],action:any)=>{
  let newState = [];

  switch (action.type) {

    case 'INIT':
      return action.data;

    case 'CREATE':
      newState = [action.data,...state];
      break;

    case 'REMOVE':
      newState = state.filter((it)=>it.id !== action.targetId);
      break;
    
    case 'EDIT':
      newState = state.map((it)=>it.id === action.data.id ? {...action.data}:it);
      break;
  
    default:
      return state;
  }
  
  return newState;
}

function App() {
  const [data ,dispatch] = useReducer(reducer,dummyData);
  const dataId = useRef(0);

  const onCreeate = (date:any,content:string,emotion:number)=>{
    dispatch({type:"CREATE",data:{
      id: dataId.current,
      date: new Date(date).getTime(),
      content,
      emotion
    }})
    dataId.current +=1;
  }

  const onRemove = (targetId:number)=>{
    dispatch({type:"REMOVE",targetId});
  }

  const onEdit = (targetId:number,date:any,content:string,emotion:number)=>{
    dispatch({
      type:"EDIT",
      data:{
        id:targetId,
        date:new Date(date).getTime(),
        content,
        emotion
      }
    });
  }

    
 
  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{onCreeate,onEdit,onRemove}}>
        <BrowserRouter>
          <div className="App">
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
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
   
  );
}
export default App;
