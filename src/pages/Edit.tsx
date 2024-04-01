import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import MyHeader from "../components/Myheader";
import Mybutton from "../components/MyButton";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import { info } from "../App";
import useDiary from "../hooks/useDiary";
const Edit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { onRemove, onEdit } = useContext(DiaryDispatchContext);

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      onRemove(Number(params.id));
      navigate("/", { replace: true });
    }
  };
  const curDiaryItem = useDiary(params.id);

  const onSubmit = (input: any) => {
    onEdit(Number(params.id), input.date, input.content, input.emotionId);
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
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;

