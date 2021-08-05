import React, {useState} from 'react'
import ReactMarkdown from 'react-markdown'
import './style.css'

 const MarkDownReact = () => {
     const [markDown, setMarkDown]=useState("## This is Markdown...");
    return <>
        <div className="center-div">
            <textarea className="left-side" value={markDown} onChange={(e)=> setMarkDown(e.target.value)}></textarea>
            <div className="right-side">
                <ReactMarkdown>{markDown}</ReactMarkdown></div>
        </div>
    </>;
}
export default MarkDownReact;
