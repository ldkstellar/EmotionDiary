import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { info } from "../App";
import DiaryItem from "./DiaryItem";
import Mybutton from "./MyButton";

interface option {
  value: string;
  name: string;
}

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const filterOptionList = [
  { value: "all", name: "전부다" },
  { value: "good", name: "좋은 감정만" },
  { value: "bad", name: "안좋은 감정만" },
];

const ControlMenu = ({
  value,
  onChange,
  optionList,
}: {
  value: string;
  onChange: React.Dispatch<string>;
  optionList: option[];
}) => {
  return (
    <select
      className="ControlMenu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }: { diaryList: info[] }) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");

  const getProcessedDiaryList = () => {
    // 비교 함수
    const compare = (a: info, b: info) => {
      if (sortType === "latest") {
        // 내림차순
        return parseInt(b.date) - parseInt(a.date);
      } else {
        //  오름 차순
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    const filterCallback = (item: info) => {
      if (filter === "good") {
        return item.emotionId <= 3;
      } else {
        return item.emotionId > 3;
      }
    };

    // 배열의 깊은 복사하는 방법
    const copyList: info[] = JSON.parse(JSON.stringify(diaryList));
    const filterList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallback(it));
    const sortedList = filterList.sort(compare);
    return sortedList;
  };

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />

          <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </div>

        <div className="right_col">
          <Mybutton
            type="positive"
            text="새 일기 쓰기"
            onClick={() => navigate("/new")}
          />
        </div>
      </div>

      {getProcessedDiaryList().map((it) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  DiaryList: [],
};

export default DiaryList;

