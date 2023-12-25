import React from 'react';

import './style.css';
import Selectbox from './components/Selectbox';
import SelectRadio01 from './components/SelectRadio01';
import SelectCheck01 from './components/SelectCheck01';
import ModalBasic from './components/ModalBasic';
// import CardType01 from './components/CardType01';
import TableType01 from './components/TableType01';
// import CommunityCard from './components/CommunityCard';
import TabMenu from './components/TabMenu';
import BoxLoopModeInfinityLoop from './components/BoxLoopModeInfinityLoop';
import { Segment } from 'semantic-ui-react';

const AllShow = () => (
    <section className='all-show-wrap'>
        <div className="all-show-inner">
            <h1>Selectbox</h1>
            <Selectbox />

            <h1>라디오</h1>
            <SelectRadio01 />

            <h1>Checkbox</h1>
            <SelectCheck01 />

            <h1>팝업/모달</h1>
            <ModalBasic />

            {/* <h1>CardType01</h1>
            <div className="card-wrap">
                <CardType01 />
                <CardType01 />
                <CardType01 />
                <CardType01 />
            </div>  */}

            <h1>TableType01</h1>
            <TableType01 />

            {/* Tab구현 */}
            <TabMenu/>

            {/* 자격증명 슬라이드 */}
            <div className="middle-swiper">
                <Segment className="full">
                    <div className='swiper-section type2'>
                        <BoxLoopModeInfinityLoop/>
                    </div>
                </Segment>
            </div>
        </div>
    </section>
);



export default AllShow