import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import MyHeader from "../components/Myheader";
import Mybutton from "../components/MyButton";
import Editor from "../components/Editor";

const Edit = () => {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <div>
      <MyHeader
        leftChild={<Mybutton text="<뒤로가기" onClick={() => {}} />}
        rightChild={
          <Mybutton text="삭제하기" onClick={() => {}} type={"negative"} />
        }
        headerText="일기수정하기"
      />
    </div>
  );
};

export default Edit;

