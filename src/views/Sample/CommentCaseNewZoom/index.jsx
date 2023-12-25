import React from 'react'
import { Segment } from 'semantic-ui-react';
import CommentContents from './components/CommentContents';
import PhotoCommentNew from './components/PhotoCommentNew';
import PhotoCommentThumb from './components/PhotoCommentThumb';
import TestRadio01 from './components/TestRadio01';


const CommentCaseNew = () => (
    <section className='content '>
        <Segment className="full">
            <p style={{fontSize:'20px', margin:'20px 0 10px', fontWeight:'bold'}}>댓글 기본 버전</p>
            <PhotoCommentNew />
            <p style={{fontSize:'20px', margin:'20px 0 10px', fontWeight:'bold'}}>썸네일 이미지 들어간 버전</p>
            <PhotoCommentThumb />
            <p style={{fontSize:'20px', margin:'20px 0 10px', fontWeight:'bold'}}>대댓글 작성 버전</p>
            {/* commentSort */}
            <TestRadio01/>
            {/* commentsList */}
            <CommentContents />
        </Segment>
    </section>
);

export default CommentCaseNew
