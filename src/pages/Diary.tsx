import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams(); // 커스텀 훅
  console.log(id);
  return (
    <div>
      <h2>일기장</h2>
      <p>이곳은다이어리 상세페이지입니다.</p>
    </div>
  );
};

export default Diary;

