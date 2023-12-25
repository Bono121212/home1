import React from 'react'
import {Container} from 'semantic-ui-react'

import './style.css';
import {TitleArea, ContentsArea} from './components'

const QACreate = () => (
    <div className='flex'>
        <Container fluid>
            <TitleArea/>
            <ContentsArea/>
        </Container>
    </div>
);

export default QACreate
