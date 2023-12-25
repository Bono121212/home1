import React from 'react'
import {
    TitleAreaNew,
    ContentsArea,
} from './components'

const IngNodata = () => (
    <section className='content community'>
        {/* <TitleArea/> */}

        {/* 변경된 타이틀영역.2105 */}
        <TitleAreaNew />

        <ContentsArea tabName="ManageList" nodata={true} />
    </section>
);

export default IngNodata
