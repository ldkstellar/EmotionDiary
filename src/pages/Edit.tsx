import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const Edit = ()=>{
    const navigate = useNavigate();
    const [searchParms , setSearchParms] = useSearchParams();
    const id =  searchParms.get("id");
    const mode = searchParms.get("mode");

    const who = searchParms.get('who');
    const age = searchParms.get('age');

    if (mode) {
        console.log(`mode`,mode);   
    }

    if (id) {
        console.log(id);
    }

    if (age) {
        console.log(`age :`,age);
    }

    if (who) {
        console.log(`who :`,who);
    }

    return(
        <div>
            <h2>수정</h2>
            <p>이곳은 수정하는 곳 입니다.</p>
            <button onClick={()=>{setSearchParms({who:"leedongkyu",age:'25'})}}>QS</button>
            <button onClick={()=>{navigate('/home')}}>home</button>
            <button onClick={()=>{navigate(-1)}}>뒤로가기</button>
        </div>
    );
};

export default Edit;
