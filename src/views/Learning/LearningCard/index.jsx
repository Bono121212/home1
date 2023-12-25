import React from 'react'
import {Card, Segment} from 'semantic-ui-react'

import './style.css';
import {
    BasicTypeHoverAddList,
    BasicTypeHoverRemove,
    BasicTypeHoverAddList01,
    BasicTypeHoverAddList02,
    LabelRequiredState,
    //LabelStampState,
    LabelStampStateMulti,
    LabelRequiredStateValue,
    CommunityCard,
    CommunityProgressCard,
    CompletedLearningCardPlay,
    CompletedLearningCardLearning,
    BasicTypeHoverAddListRequired,
    LearningCardRequired,
    LearningCardEnrolled,
    LearningCardProgress,
    LearningCardCompleted,
    LearningCardCancelled,
    LearningCardClosed,
    LearningCardMissed,
} from './components'

const LearningCard = () => (
    <section className="content">
        <Segment className='full'>

            {/*학습카드 > 기본유형 학습진입유형 Hovered*/}
            <Card.Group className='box-cards'>
                <BasicTypeHoverAddList02/>
                <BasicTypeHoverAddList/>
                <BasicTypeHoverRemove/>
                <BasicTypeHoverAddList01/>
                <BasicTypeHoverAddListRequired/>
            </Card.Group>


            {/*학습카드 > 라벨(Required) 카드*/}
            <Card.Group className='box-cards'>
                <LabelRequiredState/>
                <LabelStampStateMulti/>
                <LabelStampStateMulti/>
                <LabelRequiredStateValue/>
            </Card.Group>


            {/*학습카드 > 커뮤니티 카드*/}
            <Card.Group className='box-cards'>
                <CommunityCard/>
                <CommunityProgressCard/>
            </Card.Group>


            {/*학습카드 > 상태값을 가진 학습카드*/}
            <Card.Group className='box-cards'>
                <LearningCardRequired/>
                <LearningCardEnrolled/>
                <LearningCardProgress/>
                <LearningCardCompleted/>
                <LearningCardCancelled/>
                <LearningCardClosed/>
                <LearningCardMissed/>
            </Card.Group>


            {/*Completed 학습카드 > 버튼 유 버튼 무*/}
            <Card.Group className='list-cards'>
                <CompletedLearningCardPlay/>
                <CompletedLearningCardLearning/>
            </Card.Group>
        </Segment>
    </section>
);

export default LearningCard
