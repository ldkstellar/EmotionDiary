import { useNavigate, useParams, useSearchParams} from "react-router-dom";
import MyHeader from "../components/Myheader";
import Mybutton from "../components/MyButton";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
const Edit = () => {
  const navigate = useNavigate();
  const { onCreate } = useContext(DiaryDispatchContext);
  const params = useParams();
  return (
    <div className="editPage">
      <MyHeader
        leftChild={<Mybutton text="<뒤로가기" onClick={() =>navigate(-1)} />}
        rightChild={
          <Mybutton text="삭제하기" onClick={() => {}} type={"negative"} />
        }
        headerText="일기수정하기"
      />
       <Editor onSubmit={undefined}/>
    </div>
  );
};

export default Edit;

