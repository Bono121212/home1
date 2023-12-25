import React from 'react';
import { Link } from 'react-router-dom';
import { Segment } from "semantic-ui-react";
import InterestedTags from '../InterestedTags';
import LearningLoopType1B from '../LearningLoopType1B';


const SkillRecommendSectionType3 = () => {

    // const [listShow, setListShow] = useState(true);

    // const listHandler = () => {
    //     setListShow(prev => !prev);
    // }

    return (
        <>
            <Segment className='full career-platform-section'>
                <div className="section-head career-platform-section-head">
                    <div className="sec-tit-txt">
                        <div className="career-platform-infomation">
                            {/* 2023-11-16 bold 처리 제외 */}
                            <span>나</span>의 Career Plan
                            <div className='career-platform-dropdown single'>
                                <div className='text'>데이터애널리스트</div>
                                {/* <button type='button' className='career-platform-select-control'  onClick={listHandler}>
                                    <span className='blind'>선택</span>
                                </button>
                                {listShow ? 
                                    <div className='dropdown-wrap'>
                                        <ul className='dropdown-ul'>
                                            <li className='dropdown-item'>
                                                <Link onClick={() => {}} className='dropdown-link' to="#">데이터 사이엔티스트</Link>
                                            </li>
                                            <li className='dropdown-item'>
                                                <Link onClick={() => {}} className='dropdown-link' to="#">데이터</Link>
                                            </li>
                                            <li className='dropdown-item'>
                                                <Link onClick={() => {}} className='dropdown-link active' to="#">데이터애널리스트</Link>
                                            </li>
                                        </ul>
                                    </div> : ''} */}
                            </div>
                            관련 추천 과정
                            {/* 
                                2023-11-07 범례추가 
                                2023-11-16 메인에서 범례표시 제외
                            */}
                            {/* <Popup
                                className='career-tag-legend-popup'
                                trigger={<button type='button' className='career-tag-legend-trigger'><span className='blind'>범례</span></button>}
                                // open
                                content={
                                    <div className='career-tag-legend-wrap'>
                                        <span className='career-skill none'>Skill to Learn <i>(New Skill)</i></span>
                                        <span className='career-skill have'>Skill to Learn <i>(Up Skill)</i></span>
                                        <span className='career-skill need'>Skill you have</span>
                                    </div>
                                }
                                position='bottom center' /> */}
                        </div>
                    </div>
                    <div className="sec-tit-btn"><Link to="/MyCareer/CareerPlatform" className="btn-more">전체보기</Link></div>
                </div>
                <InterestedTags/>
                <Segment className="full learning-section type1">
                    <div className="section-body">
                        <LearningLoopType1B swipeName="swiperCareerPlatform"/>
                    </div>
                </Segment>
            </Segment>
        </>
    )

}

export default SkillRecommendSectionType3
