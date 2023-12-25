import React from 'react'

import BageBox from './BageBox';

const MyState = ({nowState, missionReview, DummyMissionList}) => {

    return (
    <>
        <div className='dashboard-infomation'>
            <div className='info-tit'><span className='now-user'>{'김써니'}</span>님의 챌린지 참여 현황</div>
            <p className='info-txt'>아래 미션을 완료하여 스탬프를 모아주세요!<br />미션을 완료한 구성원을 대상으로 추첨을 통해 선물을 드려요.</p>
            <p className='line-deco'>참여기간: ~12/15까지</p>
        </div>

        {/* 챌린지 참여 현황 */}
        <article className='content-box'>
            <header className='content-header'>
                <strong>챌린지 참여 현황</strong>
                <div>총 7개 미션 중 <span className='count main'>메인 미션 1개</span> <span className='count month'>월별 미션 1개</span> 완료했어요!</div>
            </header>
            <div className='status-board'>
                <div className='main-status'>
                    <article className='badge-info align'>
                        <span className='header-tit'>메인 미션</span>
                        <div className={`promotion-badge_main badge ${nowState}`}></div>
                        <strong>Foundation Skill 과정 중<br/>2개 과정 이수하기</strong>
                        {missionReview
                            ? 
                            <React.Fragment>
                                <span className='badge-result'>미션 성공</span>
                                <span>2023.10.20</span>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <a href='/' className='mission-join' rel='noopener noreferrer'>참여하기</a>
                                <div className='badge-count'><strong>1</strong>/2</div>
                            </React.Fragment>
                        }
                    </article>
                </div>
                <section className='badge-group'>
                    {DummyMissionList.map(badge => (
                        <article 
                            className={`badge-sub-group ${badge.missionEnd === true && 'mission-end'}`}
                            key={badge.id}
                        >
                            <div className='sub-group-header'>
                                <strong>{badge.title}</strong>
                            </div>
                            <div className='badge-info-box'>
                                {badge.missionEnd === true && 
                                    <div className='end-message-box'>
                                        <div className='end-message'>
                                            <strong>미션 종료!</strong>
                                            <p>참여해주셔서 감사합니다.</p>
                                        </div>
                                    </div>
                                }
                                {badge.items.map((item, index) => (
                                    <React.Fragment key={index}>
                                    <BageBox {...item} />
                                    </React.Fragment>
                                ))}
                            </div>
                        </article>
                    ))}
                </section>
                <div className='message'>&bull; 세부 미션 안내는 매월 공개되며, 이미 학습을 완료한 구성원들도 챌린지에 자동 참여됩니다.</div>
            </div>
        </article>
        </>
    )
}

export default MyState
