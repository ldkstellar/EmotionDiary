import { useParams, useNavigate } from "react-router-dom";
import MyHeader from "../components/Myheader";
import Mybutton from "../components/MyButton";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/constnts";
const Diary = () => {
  const params = useParams(); // 커스텀 훅
  const navigation = useNavigate();
  const curDiaryitem = useDiary(params.id);
  if (!curDiaryitem) {
    return <div>데이터로딩중</div>;
  }
  const title = new Date(curDiaryitem.date);

  return (
    <div>
      <MyHeader
        headerText={getStringedDate(title)}
        leftChild={<Mybutton text="<뒤로가기" onClick={() => navigation(-1)} />}
        rightChild={
          <Mybutton
            text="수정하기"
            onClick={() => navigation(`/edit/${params.id}`)}
          />
        }
      />
      <Viewer curDiaryItem={curDiaryitem} />
    </div>
  );
};

export default Diary;

