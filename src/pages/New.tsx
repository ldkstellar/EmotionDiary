import MyHeader from "../components/Myheader";
import Mybutton from "../components/MyButton";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const NEW = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const navigtion = useNavigate();
  const onSubmit = (input:any)=>{
    onCreate(input.date,input.content,input.emotionId)
  }
  return (
    <div>
      <MyHeader
        leftChild={<Mybutton text="<뒤로 가기" onClick={() => navigtion(-1)} />}
        headerText="새일기쓰기"
        rightChild={undefined}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default NEW;
