import React from 'react'
import {Header, Breadcrumb} from 'semantic-ui-react'

const sections = [
    {key: 'Home', content: 'HOME', link: true},
    {key: 'Learning', content: '설문', link: true},
    {key: 'Cube', content: '설문조사 양식관리', active: true},
];

const TitleArea = () => (
    <div>
        <Breadcrumb icon='right angle' sections={sections}/>
        <Header as='h2' dividing >설문양식 관리</Header>
    </div>
);

export default TitleArea