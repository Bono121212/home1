import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Segment } from "semantic-ui-react";
import InterestedTags from '../InterestedTags';
import LearningLoopType2B from '../LearningLoopType2B';


const SkillRecommendSection = () => {

    const [listShow, setListShow] = useState(true);

    const listHandler = () => {
        setListShow(prev => !prev);
    }

    return (
        <>
            <Segment className='full career-platform-section'>
                <div className="section-head career-platform-section-head">
                    <div className="sec-tit-txt">
                        <div className="career-platform-infomation">
                            <strong>김써니님</strong>의 
                            <div className='career-platform-dropdown'>
                                <div className='text'>데이터</div>
                                <button type='button' className='career-platform-select-control'  onClick={listHandler}>
                                    <span className='blind'>선택</span>
                                </button>
                                {listShow ? 
                                    <div className='dropdown-wrap'>
                                        <ul className='dropdown-ul'>
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
                        </div>
                    </div>
                    <div className="sec-tit-btn"><Link to="/MyCareer/CareerPlatform" className="btn-more">전체보기</Link></div>
                </div>
                <Segment className='full learning-section '>
                    <InterestedTags/>
                </Segment>
                <Segment className="full learning-section type2">
                    <div className="section-head">
                        <div className="section-body career-platform-skill">
                            <div className='career-platform-skill-banner'>
                                <div className='skill-banner-content banner1'>
                                    <strong>내 커리어에 필요한 과정들만 추천해드려요.</strong>
                                    <p>Skill 프로필 완성도를 높일수록 추천 정확도가 더 올라가요.</p>
                                    <Link to="/" className='go-to-page'>Skill 프로필 작성하기</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-body">
                        <LearningLoopType2B swipeName="swiperCareerPlatform"/>
                    </div>
                </Segment>
            </Segment>
        </>
    )

}

export default SkillRecommendSection