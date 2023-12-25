import React from 'react';
import { Icon } from 'semantic-ui-react';
import PhotoCommentNew from '../../../Sample/CommentCaseNew/components/PhotoCommentReplyNew';
import TestRadio01 from '../../../Sample/CommentCaseNew/components/TestRadio01';
import CubeDetailSec from '../CubeDetailSec';

const CubeCommentNodata = (props) => {
    return (
        <CubeDetailSec className="cube-comment-sec">
            <PhotoCommentNew />
            <TestRadio01 />
            <div className="no-cont-wrap">
                <Icon className="no-contents80" />
                <span className="blind">콘텐츠 없음</span>
                <div className="text">등록된 댓글이 없습니다.</div>
                <div className="text03">댓글을 등록해 주세요.</div>
            </div>
        </CubeDetailSec>
    )
}
export default CubeCommentNodata
