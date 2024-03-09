import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const Edit = ()=>{
    const navigate = useNavigate();
    const params = useParams();
    return(
        <div>
            <h2>{params.id}번째 일기 수정하는 곳 입니다.</h2>
            <p>이곳은 수정하는 곳 입니다.</p>
            <button onClick={()=>{navigate('/home')}}>home</button>
            <button onClick={()=>{navigate(-1)}}>뒤로가기</button>
        </div>
    );
};

export default Edit;
