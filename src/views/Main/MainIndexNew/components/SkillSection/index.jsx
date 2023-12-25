import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Segment } from "semantic-ui-react";
import LearningLoopType1A from '../LearningLoopType1A';


class SkillSection extends Component {
    render() {
        return (
            <>
                <Segment className="full learning-section type1">
                    <div className="section-head">
                        <div className="sec-tit-txt">
                            미래변화에 대응하는 핵심 역량, <strong>Foundation skill 과정</strong>
                            <Link to="" className='btn-skill'>
                                <img src="https://image.mysuni.sk.com/suni-asset/public/images/all/icon-list-question-24-px.svg" alt="Foundation Skill 과정안내" />
                            </Link>
                        </div>
                        <div className="sec-tit-btn"><button className="btn-more">전체보기</button></div>
                    </div>
                    <div className="section-body">
                        {/* <LearningLoopType1 swipeName="swiperRequired"/> */}
                        {/* 아래는 핵인싸 카드만 넣은 임시파일입니다 */}
                        <LearningLoopType1A swipeName="swiperRequired"/>
                    </div>
                </Segment>
            </>
        )
    }

}

export default SkillSection