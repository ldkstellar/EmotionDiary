const EmotionItem = ({
  emotionId,
  emotionName,
  isSelected,
  onClick,
}: {
  emotionId: number;
  emotionName: string;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`EmotionItem ${
        isSelected ? `EmotionItem_on_${emotionId}` : ""
      }`}
    >
      <img
        alt="이미"
        className="emotion_img"
        src={`../../assets/emotion${emotionId}.png`}
      />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;

