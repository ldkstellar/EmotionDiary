import { info } from "../App";
import useDiary from "../hooks/useDiary";
import { EmotionList } from "../util/constnts";

const Viewer = ({ curDiaryItem }: { curDiaryItem?: info }) => {
  const emotionItem = EmotionList.find(
    (item) => String(item.emotionId) === String(curDiaryItem?.emotionId)
  );
  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div
          className={`emotion_img_wrapper emotion_img_wrapper_${curDiaryItem?.emotionId}`}
        >
          <img
            src={`../../assets/emotion${curDiaryItem?.emotionId}.png`}
            alt="감정이미지"
          />
          <div>{emotionItem?.emotionName}</div>
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p>{curDiaryItem?.content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;

