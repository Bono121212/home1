import React from 'react'

import { Table } from 'semantic-ui-react'

const TotalState = ({DummyBarItemList, DummyCompleteStatusList}) => {

    return (
        <>
        {/* 챌린지 미션 달성 현황 */}
        <article className='content-box'>
            <header className='content-header'>
                <strong>챌린지 참여 현황</strong>
                <span className='fs'>전체 구성원의 챌린지 참여 현황을 그래프로 확인해 보세요!</span>
            </header>
            <article className='complete-status'>
                <div className='status-bar-header'>
                    <span className='header-center'>달성 인원 / 추첨 대상 인원</span>
                    <span className='header-right'>상품 추첨 인원</span>
                </div>
                {DummyBarItemList.map(barItem => (
                    <div className='status-bar' key={barItem.id}>
                        <span className='bar-tit'>{barItem.title}</span>
                        <div className={`bar-gauge ${barItem.myAfter === true && 'after'}`}>
                            {barItem.myposition === true && <span className='my-position'>나의 위치</span>}
                            <span className='gauge-value' style={{width:`${barItem.gaugeValue}%`}}></span>
                            <span className='allow-value'>{barItem.accumulatedMember}명 / {barItem.achievedMember}명</span>
                        </div>
                        <div className='goods'>
                            <span className='goods-pic'>
                                {barItem.goodsPic !== null
                                    ? <span className={`goods ${barItem.goodsPic}`}>{barItem.id + 1}등 상품</span>
                                    : <span className='goods nopic'><span className='blind'>공개예정</span></span>
                                }
                            </span>
                            <span className='goods-range'>{barItem.rangeValue}명</span>
                        </div>
                    </div>
                ))}
            </article>
            <div className='complete-status-footer'>
                상위 선물 추첨 대상자는 하위 선물 추첨 대상에 포함됩니다.<br />
                (ex. 6등 대상은 7,8,9,10등 선물 추첨 대상에도 포함)
            </div>
        </article>
        
        {/* 챌린지 참여 상세 현황 */}
        <article className='content-box'>
            <header className='content-header color'>
                <strong>챌린지 참여 상세 현황</strong>
                <span className='fs'>챌린지에 참여한 구성원을 확인해 보세요!</span>
            </header>
            <article className='complete-detail-status'>
                {/* <p className='table-caption'>* 참여 현황은 오전 {'NN'}시에 업데이트됩니다.</p> */}
                <div className='status-table'>
                    <Table>
                        <colgroup>
                            <col width="50%"/>
                            <col width="50%"/>
                        </colgroup>
                        <Table.Header>
                            <Table.Row className='header-style'>
                                <Table.HeaderCell>참여자 1,000명</Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>미션 참여 현황</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                        {DummyCompleteStatusList.map(statusItem => (
                            <Table.Row 
                                className={`${statusItem.myPosition === true && 'my-state'}`} // [나의 현황] 클래스
                                key={statusItem.id}
                            >
                                {statusItem.myPosition === true && <div className='my-state-prev'><span className='state-info'>상위 미션 참여 인원 N명</span></div>} {/* [나의 현황] : 상위 참여 인원 */}
                                <Table.Cell className='user-wrap'>
                                    {statusItem.myPosition === true && <strong className='detail-my'>MY</strong>} {/* [나의 현황] : 나의 위치 표시 */}
                                    <span className='detail-user'>{statusItem.user}</span>
                                    <span className='detail-user'>{statusItem.email}</span>
                                    <span className='detail-user'>{statusItem.office}</span>
                                </Table.Cell>
                                <Table.Cell textAlign='center'>
                                    <div className='detail-status'>
                                    {statusItem.month.map((monthStatus, index) => (
                                        <React.Fragment key={index}>
                                        <span className={`status-item 
                                                ${monthStatus.class}
                                                ${monthStatus.status === true && 'complete'}`}>
                                        {monthStatus.text}</span>
                                        </React.Fragment>
                                    ))}
                                    </div>
                                </Table.Cell>
                                {statusItem.myPosition === true && <div className='my-state-next'><span className='state-info'>하위 미션 참여 인원 NNN명</span></div>} {/* [나의 현황] : 하위 참여 인원 */}
                            </Table.Row>
                        ))}
                        </Table.Body>
                    </Table>
                </div>
            </article>
        </article>
        </>
    )
}

export default TotalState
