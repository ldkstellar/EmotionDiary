export const EmotionList = [
  { emotionId: 1, emotionName: "완전좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "그럭저럭" },
  { emotionId: 4, emotionName: "bad" },
  { emotionId: 5, emotionName: "매우bad" },
];

export const getStringedDate = (targetDate: Date) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  let monthString = month < 10 ? `0${month}` : `${month}`;
  let dateString = date < 10 ? `0${date}` : `${date}`;
  return `${year}-${monthString}-${dateString}`;
};

