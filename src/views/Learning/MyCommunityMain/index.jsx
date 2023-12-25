import React from 'react'

import './style.css';
import {
    // TitleArea,
    TitleAreaNew,
    ContentsArea,
} from './components'

const MyCommunityMain = () => (
    <section className='content community'>
        {/* <TitleArea/> */}

        {/* 변경된 타이틀영역.2105 */}
        <TitleAreaNew />

        <ContentsArea tabName="AllList" nodata={false} />
    </section>
);

export default MyCommunityMain
