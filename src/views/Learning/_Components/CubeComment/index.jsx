import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import CommentContents from '../../../Sample/CommentCaseNew/components/CommentContents';
import PhotoCommentNew from '../../../Sample/CommentCaseNew/components/PhotoCommentReplyNew';
import TestRadio01 from '../../../Sample/CommentCaseNew/components/TestRadio01';
import CubeDetailSec from '../CubeDetailSec';

const CubeComment = (props) => {
    return (
        <CubeDetailSec className="cube-comment-sec">
            <PhotoCommentNew />
            <TestRadio01 />
            <CommentContents pin={props.pin} secret={props.secret} myPost={props.myPost} />
            <div className="more-comments">
                <Button icon className='left moreview'>
                    <Icon className='moreview' /> more comments
                </Button>
            </div>
        </CubeDetailSec>
    )
}
export default CubeComment
