import React from 'react';
import CubeDetailSec from '../../../_Components/CubeDetailSec';
import CommentForm from "../../../../../components/Comment/CommentForm";
import CommentSort from "../../../../../components/Comment/CommentSort";
import CommentContents from "../../../../../components/Comment/CommentContents";
import Pagination from "../../../../../components/Comment/Pagenation";

const CubeComment = (props) => {
    return (
        <CubeDetailSec className="cube-comment-sec">
			{/* 코멘트입력/정렬/댓글/페이징 */}
			<CommentForm />
			<CommentSort />
			<CommentContents />
			<Pagination />
        </CubeDetailSec>
    )
}
export default CubeComment
