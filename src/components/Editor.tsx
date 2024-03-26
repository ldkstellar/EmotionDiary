import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { info } from "../App";
import EmotionItem from "./EmotionItem";
import Mybutton from "./MyButton";

const EmotionList = [
  { emotionId: 1, emotionName: "완전좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "그럭저럭" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "매우나쁨" },
];

const getStringedDate = (targetDate: Date) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  let monthString = month < 10 ? `0${month}` : `${month}`;
  let dateString = date < 10 ? `0${date}` : `${date}`;
  return `${year}-${monthString}-${dateString}`;
};

const Editor = ({
  initData,
  onSubmit,
}: {
  onSubmit:(input:any) => void,initData?:info
}) => {
  const navigite = useNavigate();
  useEffect(()=>{
    if (initData) {
      setInput({...initData,date:new Date(Number(initData.date))});
      console.log(initData);
      
      
      
    }
  },[initData])
  const onClickSubmitButton = () => {
      onSubmit(input);
      navigite("/", { replace: true });
    }

  const [input, setInput] = useState<any>({
    emotionId: 1,
    date: new Date(),
    content: "",
  });

  const onChangeInput = (e: {
    target: { name: string; value: string | number };
  }) => {
    if (e.target.name === "createdDate") {
      let dateValue = new Date(e.target.value);
      setInput({ ...input, ["date"]: dateValue });
      
    } else if (typeof e.target.value === "string") {
      setInput({ ...input, ["content"]: e.target.value });
    } else if (typeof e.target.value === "number" && e.target.name ==="emotionId") {
      setInput({ ...input, ["emotionId"]: e.target.value });
      console.log("dd");
    }
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          type="date"
          value={getStringedDate(input.date)}
          onChange={onChangeInput}
        />
      </section>

      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {EmotionList.map((e) => (
            <EmotionItem
              onClick={() => {
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: e.emotionId,
                  },
                });
              }}
              key={e.emotionId}
              {...e}
              isSelected={e.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>

      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="text"
          value={input.content}
          placeholder="오늘은 어땟나요?"
          onChange={onChangeInput}
        />
      </section>

      <section className="button_section">
        <Mybutton text="취소하기" onClick={() => navigite(-1)} />
        <Mybutton
          text="작성완료"
          type="positive"
          onClick={() => {
            onClickSubmitButton();
          }}
        />
      </section>
    </div>
  );
};

export default Editor;

