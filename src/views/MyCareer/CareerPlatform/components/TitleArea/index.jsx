import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Icon, Popup, Segment} from 'semantic-ui-react'

const TitleArea = () => {

    const [listShow, setListShow] = useState(false);

    const listHandler = () => {
        setListShow(prev => !prev);
    }

    return (
        <>
            <div className="main-info-area content-division">
                <div className="progress-info-wrap personal-channel">
                    <div className="cell">
                        <div className="cell-inner personal-inner">
                            <div className="career-platform-infomation">
                                <span>나</span>의 Career Plan
                                <div className='career-platform-dropdown'>
                                    <div className='text'>데이터사이엔티스트</div>
                                    <button type='button' className={`career-platform-select-control ${listShow ? 'on' : ''}`}
                                        onMouseOver={listHandler} // 2023-11-08 onClick에서 onMouseOver로 변경
                                        ><span className='blind'>선택</span>
                                    </button>
                                    {listShow ? 
                                        <div className='dropdown-wrap'>
                                            <ul className='dropdown-ul' onMouseLeave={listHandler}> {/*  // 2023-11-08 onMouseLeave 추가 */}
                                                <li className='dropdown-item'>
                                                    <Link onClick={() => {}} className='dropdown-link active' to="#">데이터사이엔티스트</Link>
                                                </li>
                                                <li className='dropdown-item'>
                                                    <Link onClick={() => {}} className='dropdown-link' to="#">데이터</Link>
                                                </li>
                                                <li className='dropdown-item'>
                                                    <Link onClick={() => {}} className='dropdown-link' to="#">데이터애널리스트</Link>
                                                </li>
                                            </ul>
                                        </div> : ''}
                                </div>
                                관련 추천 과정
                                {/* 2023-11-07 범례추가, breadcrumb 영향으로 bottom 방향 적용 */}
                                <Popup
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
                                    position='bottom center' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-filter" style={{display:'none'}}>
                <Segment className='full'>
                    <div className="ui inline transparent large dropdown active visible"
                        data-add=" 채널의 추천과정">{/* data-addText 선택시 추가될 text // */}
                        <div className="text">AI 채널의 추천과정</div>
                        <Icon className='dropdown'/>
                        <div className="menu transition visible">
                            <div className="item">AI</div>
                            <div className="item">Design</div>
                            <div className="item">Database</div>
                            <div className="item">Project Managing</div>
                            <div className="item">Big Data</div>
                            <div className="item">AI</div>
                            <div className="item">Design</div>
                            <div className="item">Database</div>
                            <div className="item">Project Managing</div>
                            <div className="item">Big Data</div>
                        </div>
                    </div>
                </Segment>
            </div>
        </>
    )
}

export default TitleArea
