export const EmotionList = [
  { emotionId: 1, emotionName: "verygood" },
  { emotionId: 2, emotionName: "good" },
  { emotionId: 3, emotionName: "soso" },
  { emotionId: 4, emotionName: "bad" },
  { emotionId: 5, emotionName: "worst" },
];

export const getStringedDate = (targetDate: Date) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  let monthString = month < 10 ? `0${month}` : `${month}`;
  let dateString = date < 10 ? `0${date}` : `${date}`;
  return `${year}-${monthString}-${dateString}`;
};

