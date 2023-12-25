import React from 'react'
import {
    TitleAreaNew,
    ContentsArea,
} from './components'

const FavoritNodata = () => (
    <section className='content community'>
        {/* <TitleArea/> */}

        {/* 변경된 타이틀영역.2105 */}
        <TitleAreaNew />

        <ContentsArea tabName="LikeList" nodata={true} />
    </section>
);

export default FavoritNodata
