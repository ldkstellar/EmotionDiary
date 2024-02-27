import { info } from "../App";
const DiaryList = ({diaryList}:{diaryList:info[]})=>{

    return(
        <div>
            {diaryList.map((it)=>(
                <div key={it.id}>
                    {it.content}
                </div>
            ))}
        </div>

    )
}

export default DiaryList;