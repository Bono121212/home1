import React from 'react'
import {Container} from 'semantic-ui-react'

import './style.css';
import {TitleArea, SurveySidebar, ListTable, } from './components'

const SurveyList = () => (
    <div className='flex'>
        <SurveySidebar/>
        <Container fluid>
            <TitleArea/>
            <ListTable/>
        </Container>
    </div>
);

export default SurveyList
