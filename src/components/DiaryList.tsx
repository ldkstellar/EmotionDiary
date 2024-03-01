import React, { useState } from "react";
import { info } from "../App";

interface option{
    value:string,
    name:string
}

const sortOptionList = [
    {value:"latest",name:"최신순"},
    {value:"oldest",name:"오래된순"}
    
];

const ControlMenu = ({value,onChange,optionList}:{value:string,onChange:React.Dispatch<string>,optionList:option[]})=>{
    return(
        <select value={value} onChange={(e)=>onChange(e.target.value)}>
            {optionList.map((it,idx)=><option key={idx} value={it.value}>{it.name}</option>)}
        </select>)
}

const DiaryList = ({diaryList}:{diaryList:info[]})=>{

    const [sortType,setSortType] = useState('latest');

    const getProcessedDiaryList = ()=>{
        // 비교 함수
        const compare = (a:info,b:info)=> {
            if (sortType === 'latest') {
                return parseInt(b.date) - parseInt(a.date);
            }
            else{
                return parseInt(a.date)  - parseInt(b.date);
            }
        }

        // 배열의 깊은 복사하는 방법
        const copyList:info[] = JSON.parse(JSON.stringify(diaryList));
        const sortedList = copyList.sort(compare);
        return sortedList;
         
    }

    return(
        <div>
            <ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionList}/>
            {getProcessedDiaryList().map((it)=>(
                <div key={it.id}>
                    {it.content}
                </div>
            ))}
        </div>

    )
}

DiaryList.defaultProps = {
    DiaryList:[]
};

export default DiaryList;