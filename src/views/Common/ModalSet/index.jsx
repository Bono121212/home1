import React from 'react'
import {
    Segment
} from 'semantic-ui-react'
import {
    ClassSeriesDetailModal,
    ConfirmModal,
} from './components'
import './style.css';

const ModalSet = () => (
    <section className='content mylearning'>
        <Segment className='full'>
            <ClassSeriesDetailModal/>
            <ConfirmModal/>
        </Segment>
    </section>
);

export default ModalSet
