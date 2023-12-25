import React from "react";
import CommentContents from "../CommentCaseNew/components/CommentContents";
import PhotoCommentNew from "../CommentCaseNew/components/PhotoCommentReplyNew";
import TextRadio01 from "../CommentCaseNew/components/TestRadio01";

const Comments = () =>{
    return(
        <div className='contents comment'>
            <PhotoCommentNew/>
            <TextRadio01/>
            <CommentContents/>
        </div>
    )
}
export default Comments;