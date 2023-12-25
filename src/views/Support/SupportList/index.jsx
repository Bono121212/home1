import React from 'react'
import {Container} from 'semantic-ui-react'

import './style.css';
import {TitleArea, ContentList} from './components'

const SupportList = () => (
    <div className='flex'>
        <Container fluid>
            <TitleArea/>
            <Container>
                <ContentList/>
            </Container>
        </Container>
    </div>
);

export default SupportList
