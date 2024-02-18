import React from "react";

const MyHeader = ({headerText,leftChild,rightChild}:{headerText:string,leftChild:React.ReactElement,rightChild:React.ReactElement})=>{
    return <header>
        <div className="head_btn_left">{leftChild}</div>
        <div className="head_text">{headerText}</div>
        <div className="head_btn_right">{rightChild}</div>
    </header>
}
export default MyHeader;