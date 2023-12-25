import React from 'react'

import './style.css';
import {
    TitleArea,
    ContentsArea,
} from './components'

const MyNoteListAll = () => (
    <section className='content mylearning'>
        <TitleArea/>
        <ContentsArea/>
    </section>
);

export default MyNoteListAll
