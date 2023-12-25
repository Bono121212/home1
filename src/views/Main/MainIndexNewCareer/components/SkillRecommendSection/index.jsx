import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Icon, Segment } from "semantic-ui-react";
import InterestedTags from '../InterestedTags';
import LearningLoopType2B from '../LearningLoopType2B';


const SkillRecommendSection = ({nodata}) => {

    const [listShow, setListShow] = useState(false);

    const listHandler = () => {
        setListShow(prev => !prev);
    }

    return (
        <>
            <Segment className='full career-platform-section'>
                <div className="section-head career-platform-section-head">
                    <div className="sec-tit-txt">
                        <div className="career-platform-infomation">
                            {/* 2023-11-16 bold 처리 제외 */}
                            <span>나</span>의 Career Plan
                            <div className='career-platform-dropdown'>
                                <div className='text'>데이터</div>
                                <button type='button' className={`career-platform-select-control ${listShow ? 'on' : ''}`}
                                    onMouseOver={listHandler} // 2023-11-08 onClick에서 onMouseOver로 변경
                                ><span className='blind'>선택</span>
                                </button>
                                {listShow ? 
                                    <div className='dropdown-wrap'>
                                        <ul className='dropdown-ul' onMouseLeave={listHandler}> {/*  // 2023-11-08 onMouseLeave 추가 */}
                                            <li className='dropdown-item'>
                                                <Link onClick={() => {}} className='dropdown-link' to="#">데이터 사이엔티스트</Link>
                                            </li>
                                            <li className='dropdown-item'>
                                                <Link onClick={() => {}} className='dropdown-link active' to="#">데이터</Link>
                                            </li>
                                            <li className='dropdown-item'>
                                                <Link onClick={() => {}} className='dropdown-link' to="#">데이터애널리스트</Link>
                                            </li>
                                        </ul>
                                    </div> : ''}
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
                {/* <Segment className='full learning-section '>
                </Segment> */}
                <Segment className="full learning-section type2">
                    <div className="section-head">
                        <div className="section-body career-platform-skill">
                            <div className='career-platform-skill-banner'>
                                <div className='skill-banner-content banner4'>
                                    <strong>Skill Profile을 완성</strong>하여
                                    <p>나에게 꼭 맞는 과정을<br/>추천 받아보세요</p>
                                    <Link to="/" className='go-to-page'>Skill Profile 완성하기</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-body">
                    {nodata 
                        ? <LearningLoopType2B swipeName="swiperCareerPlatform"/>
                        :
                        <div className="cardSwiper career-no-cont-wrap">
                            <div className="no-cont-wrap">
                                <Icon className='no-contents80'/><span className="blind">콘텐츠 없음</span>
                                <div className="text">선택한 Skill 관련 과정이 없습니다.<br />다른 Skill의 추천 과정을 학습해 보세요.</div>
                            </div>
                        </div>
                    }
                    </div>
                </Segment>
            </Segment>
        </>
    )

}

export default SkillRecommendSection
