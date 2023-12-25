import React from 'react'

import './style.css';
import {
    CommentContents,
} from './components'
import {Segment} from "semantic-ui-react";

const CommentCase = () => (
    <section className='content mylearning'>
        <Segment className='full'>
            <CommentContents/>
        </Segment>
    </section>
);

export default CommentCase
