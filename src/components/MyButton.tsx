const Mybutton = ({text,type,onClick}:{text:string,type:string,onClick:()=>void})=>{
    return(
        <button className={["Mybutton",`Mybutton_${type}`].join(" ")} onClick={onClick}>
            {text}
        </button>

    );

}

Mybutton.defaultProps = {
    type:"default",
};

export default Mybutton;