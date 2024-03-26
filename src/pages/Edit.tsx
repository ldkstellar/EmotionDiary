import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import MyHeader from "../components/Myheader";
import Mybutton from "../components/MyButton";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import { info } from "../App";
const Edit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { onRemove, onEdit } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);
  const [curDiaryItem,setCurDiaryItem] = useState<info>();
  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );
    console.log(currentDiaryItem);
    
    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      navigate("/", { replace: true });
    }
    setCurDiaryItem(currentDiaryItem);
  }, [params.id, data]);
  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      onRemove(Number(params.id));
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="editPage">
      <MyHeader
        leftChild={
          <Mybutton
            text="<뒤로가기"
            onClick={() => navigate("/", { replace: true })}
          />
        }
        rightChild={
          <Mybutton text="삭제하기" onClick={onClickDelete} type={"negative"} />
        }
        headerText="일기수정하기"
      />
      <Editor initData={curDiaryItem} />
    </div>
  );
};

export default Edit;

