
const EmotionItem = ({emotionId,emotionName,isSelected,onClick}:{emotionId:number,emotionName:string,isSelected:boolean,onClick:()=>void}) => {
    return(
        <div onClick={onClick} className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}`:""}`}>
            <img className="emotion_img" src={process.env.PUBLIC_URL + `assets/emotion${emotionId}.png`}/>
            <div className="emotion_name">{emotionName}</div>
        </div>

    );
}

export default EmotionItem;