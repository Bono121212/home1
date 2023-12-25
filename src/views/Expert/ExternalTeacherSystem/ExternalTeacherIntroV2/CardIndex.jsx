import React from 'react'
import './style.css';
import {TitleArea,ContentsArea} from './components'

const CardIndex = () => (
    <section className='content external-teacher'>
        <TitleArea/>
        <ContentsArea type="Card" />
    </section>
);

export default CardIndex