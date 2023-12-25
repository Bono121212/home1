import React, {Component} from 'react'
import {
    Segment,
} from 'semantic-ui-react'

import CommentContents from "../CommentContents";
import ActionButtons from "../ActionButtons";
import CommentsSort from '../CommentsSort';
import PhotoCommentNew from '../PhotoCommentReplyNew';

class ContentsArea extends Component {
    render() {
        return (
            <Segment className='full'>
                <div className='comment-area'>
                    <PhotoCommentNew />
                    <CommentsSort/>
                    <CommentContents/>
                </div>

                <ActionButtons className='bottom'/>
            </Segment>
        )
    }
}


export default ContentsArea
