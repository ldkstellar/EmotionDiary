import MyHeader from "../components/Myheader";
import Mybutton from "../components/MyButton";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
const NEW =()=>{
    const navigtion = useNavigate();
    return(
        <div>
           <MyHeader leftChild={<Mybutton text="<뒤로 가기" onClick={()=>navigtion(-1)}/>} headerText="새일기쓰기" rightChild={undefined}/>
           <Editor />
        </div>
    )
};

export default NEW;