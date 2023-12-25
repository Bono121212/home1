import React,{ useEffect, useState } from 'react'
import { Modal } from 'semantic-ui-react';

import MyState from './MyState';
import TotalState from './TotalState';

/////////////////////////////////////
// [S]퍼블 확인용
// [나의 현황 : MyState]
// missionEnd : 미션 종료 여부 true | false
const DummyMissionList = [
    {
        id:0, 
        title:'10월 미션', 
        // missionEnd:false,
        items: [
            {
                missionType:'미션 1',
                badgeTitle:'ChatGPT 추천<br>시리즈1 모두 이수하기',
                missionResult:'미션 성공',
                missionBadge:'oct_1',
                completeDate:'2023.10.20',
                attendLink:'https://mysuni.sk.com/suni-main/hot-topic/detail/2ead1270-314d-4445-b57e-080fefd5d9f0',
                review:false
            },
            {
                missionType:'미션 2',
                badgeTitle:'후기 작성하기',
                missionResult:'미션 성공',
                missionBadge:'oct_2',
                completeDate:'2023.10.20',
                attendLink:'https://mysuni.sk.com/suni-main/lecture/card/CARD-18ux/cube/CUBE-15da/discussion',
                review:true
            }
        ]
    },
    {
        id:1, 
        title:'11월 미션', 
        // missionEnd:false,
        items: [
            {
                missionType:'미션 1',
                badgeTitle:'Chat GPT 추천<br>시리즈2 5개 이수하기',
                missionResult:'미션 성공',
                missionBadge:'nov_1',
                completeDate:'2023.11.20',
                attendLink:'',
                review:true
            },
            {
                missionType:'미션 2',
                badgeTitle:'동료에게 추천하고<br>싶은 과정 작성하기',
                missionResult:'미션 성공',
                missionBadge:'nov_2',
                completeDate:'2023.11.20',
                attendLink:'',
                review:true
            }
        ]
    },
    {
        id:2, 
        title:'12월 미션', 
        // missionEnd:false,
        items: [
            {
                missionType:'미션 1',
                badgeTitle:'구성원 추천과정<br>5개 이수하기',
                missionResult:'미션 성공',
                missionBadge:'dec_1',
                completeDate:'2023.12.20',
                attendLink:'',
                review:false
            },
            {
                missionType:'미션 2',
                badgeTitle:'2024년 mySUNI에게<br>바라는 점 작성하기',
                missionResult:'미션 성공',
                missionBadge:'dec_2',
                completeDate:'2023.12.20',
                attendLink:'',
                review:false
            }
        ]
    }
]

// [전체 현황 : TotalState]
// 구성원 미션 달성 현황
const DummyBarItemList = [
    {id:0, title:'메인 미션 포함 7개', gaugeValue:50, accumulatedMember:'2', achievedMember:'19', rangeValue:1, goodsPic:'goods1', myposition:false, myAfter: null},
    {id:1, title:'메인 미션 포함 6개 이상 달성', gaugeValue:100, accumulatedMember:'332', achievedMember:'1,096', rangeValue:2, goodsPic:'goods2', myposition:false, myAfter: null},
    {id:2, title:'메인 미션 포함 5개 이상 달성', gaugeValue:0, accumulatedMember:'1', achievedMember:'1', rangeValue:3, goodsPic:'goods3', myposition:true, myAfter: null},
    {id:3, title:'메인 미션 포함 4개 이상 달성', gaugeValue:80, accumulatedMember:'62', achievedMember:'69', rangeValue:5, goodsPic:'goods4', myposition:false, myAfter: null},
    {id:4, title:'메인 미션 포함 3개 이상 달성', gaugeValue:10, accumulatedMember:'82', achievedMember:'89', rangeValue:20, goodsPic:'goods5', myposition:false, myAfter: null},
    {id:5, title:'메인 미션 포함 1개 이상 달성', gaugeValue:50, accumulatedMember:'12', achievedMember:'19', rangeValue:40, goodsPic:'goods6', myposition:false, myAfter: true},
    {id:6, title:'월별 미션 6개 달성', gaugeValue:70, accumulatedMember:'732', achievedMember:'749', rangeValue:60, goodsPic:'goods7', myposition:false, myAfter: true},
    {id:7, title:'월별 미션 4개 이상 달성', gaugeValue:100, accumulatedMember:'1,001', achievedMember:'1,096', rangeValue:80, goodsPic:'goods8', myposition:false, myAfter: true},
    {id:8, title:'월별 미션 2개 이상 달성', gaugeValue:20, accumulatedMember:'12', achievedMember:'96', rangeValue:100, goodsPic:'goods9', myposition:false, myAfter: true},
    {id:9, title:'월별 미션 1개 이상 달성', gaugeValue:80, accumulatedMember:'1,731', achievedMember:'7,417', rangeValue:200, goodsPic:'goods10', myposition:false, myAfter: true}
]

// 챌린지 참여 상세 현황
const DummyCompleteStatusList = [
    {
        id:0, user:'홍*동', email:'su**sk.com', office:'Sk C&C', myPosition:false,
        month: [
            {text:'메인', class:'main', status:true},
            {text:'10월 미션1', class:'oct_1', status:false},
            {text:'10월 미션2', class:'oct_2', status:false},
            {text:'11월 미션1', class:'nov_1', status:true},
            {text:'11월 미션2', class:'nov_2', status:true},
            {text:'12월 미션1', class:'dec_1', status:false},
            {text:'12월 미션2', class:'dec_2', status:false},
        ]
    },
    {
        id:1, user:'김*동', email:'ki**sk.com', office:'kk C&C', myPosition:false,
        month: [
            {text:'메인', class:'main', status:true},
            {text:'10월 미션1', class:'oct_1', status:false},
            {text:'10월 미션2', class:'oct_2', status:false},
            {text:'11월 미션1', class:'nov_1', status:true},
            {text:'11월 미션2', class:'nov_2', status:true},
            {text:'12월 미션1', class:'dec_1', status:false},
            {text:'12월 미션2', class:'dec_2', status:false},
        ]
    },
    {
        id:2, user:'강*****동', email:'ka**sk**sk.com', office:'SK트레이딩인터내셔널 SK트레이딩인터내셔널', myPosition:false,
        month: [
            {text:'메인', class:'main', status:true},
            {text:'10월 미션1', class:'oct_1', status:false},
            {text:'10월 미션2', class:'oct_2', status:false},
            {text:'11월 미션1', class:'nov_1', status:true},
            {text:'11월 미션2', class:'nov_2', status:true},
            {text:'12월 미션1', class:'dec_1', status:false},
            {text:'12월 미션2', class:'dec_2', status:false},
        ]
    },
    {
        id:3, user:'박***동', email:'pa**skpa**skpa**skpa**sk.com', office:'SK주식회사 홀딩스 SK주식회사 홀딩스', myPosition:true,
        month: [
            {text:'메인', class:'main', status:true},
            {text:'10월 미션1', class:'oct_1', status:false},
            {text:'10월 미션2', class:'oct_2', status:false},
            {text:'11월 미션1', class:'nov_1', status:true},
            {text:'11월 미션2', class:'nov_2', status:false},
            {text:'12월 미션1', class:'dec_1', status:false},
            {text:'12월 미션2', class:'dec_2', status:false},
        ]
    },
    {
        id:4, user:'dummy dummy', email:'dummy dummy dummy', office:'dummy dummy dummy dummy', myPosition:false,
        month: [
            {text:'메인', class:'main', status:true},
            {text:'10월 미션1', class:'oct_1', status:false},
            {text:'10월 미션2', class:'oct_2', status:false},
            {text:'11월 미션1', class:'nov_1', status:true},
            {text:'11월 미션2', class:'nov_2', status:false},
            {text:'12월 미션1', class:'dec_1', status:false},
            {text:'12월 미션2', class:'dec_2', status:false},
        ]
    },
    {
        id:5, user:'dummy', email:'dummy dummy dummy', office:'dummy', myPosition:false,
        month: [
            {text:'메인', class:'main', status:true},
            {text:'10월 미션1', class:'oct_1', status:false},
            {text:'10월 미션2', class:'oct_2', status:false},
            {text:'11월 미션1', class:'nov_1', status:true},
            {text:'11월 미션2', class:'nov_2', status:false},
            {text:'12월 미션1', class:'dec_1', status:false},
            {text:'12월 미션2', class:'dec_2', status:false},
        ]
    },
    {
        id:6, user:'dummy dummy', email:'dummy dummy', office:'dummy dummy dummy dummy', myPosition:false,
        month: [
            {text:'메인', class:'main', status:true},
            {text:'10월 미션1', class:'oct_1', status:false},
            {text:'10월 미션2', class:'oct_2', status:false},
            {text:'11월 미션1', class:'nov_1', status:true},
            {text:'11월 미션2', class:'nov_2', status:false},
            {text:'12월 미션1', class:'dec_1', status:false},
            {text:'12월 미션2', class:'dec_2', status:false},
        ]
    },
    {
        id:7, user:'dummy', email:'dummy', office:'dummy', myPosition:false,
        month: [
            {text:'메인', class:'main', status:true},
            {text:'10월 미션1', class:'oct_1', status:false},
            {text:'10월 미션2', class:'oct_2', status:false},
            {text:'11월 미션1', class:'nov_1', status:true},
            {text:'11월 미션2', class:'nov_2', status:false},
            {text:'12월 미션1', class:'dec_1', status:false},
            {text:'12월 미션2', class:'dec_2', status:false},
        ]
    },
    {
        id:8, user:'dummy', email:'dummy', office:'dummy', myPosition:false,
        month: [
            {text:'메인', class:'main', status:true},
            {text:'10월 미션1', class:'oct_1', status:false},
            {text:'10월 미션2', class:'oct_2', status:false},
            {text:'11월 미션1', class:'nov_1', status:true},
            {text:'11월 미션2', class:'nov_2', status:false},
            {text:'12월 미션1', class:'dec_1', status:false},
            {text:'12월 미션2', class:'dec_2', status:false},
        ]
    },
    {
        id:9, user:'dummy', email:'dummy', office:'dummy', myPosition:false,
        month: [
            {text:'메인', class:'main', status:true},
            {text:'10월 미션1', class:'oct_1', status:false},
            {text:'10월 미션2', class:'oct_2', status:false},
            {text:'11월 미션1', class:'nov_1', status:true},
            {text:'11월 미션2', class:'nov_2', status:false},
            {text:'12월 미션1', class:'dec_1', status:false},
            {text:'12월 미션2', class:'dec_2', status:false},
        ]
    },
    {
        id:10, user:'dummy', email:'dummy', office:'dummy', myPosition:false,
        month: [
            {text:'메인', class:'main', status:true},
            {text:'10월 미션1', class:'oct_1', status:false},
            {text:'10월 미션2', class:'oct_2', status:false},
            {text:'11월 미션1', class:'nov_1', status:true},
            {text:'11월 미션2', class:'nov_2', status:false},
            {text:'12월 미션1', class:'dec_1', status:false},
            {text:'12월 미션2', class:'dec_2', status:false},
        ]
    },
]
// [E]퍼블 확인용
/////////////////////////////////////

const PromotionDashboard = () => {
    
    const [isOpen, setIsOpen] = useState(true);
    const close = () => setIsOpen(false);

    const [index, setIndex] = useState(0);

    /////////////////////////////////////
    // [S]퍼블 확인용
    const [nowState, setNowState] = useState(''); //[메인 미션] 상태 CSS 클래스 관리

    useEffect(() => {
        setNowState('end') // none, null | half | end
    },[])

    const missionReview = false;  //[메인 미션 진행상태 표시] 성공, 참여하기 버튼
    // [E]퍼블 확인용
    /////////////////////////////////////

    return (
        <>
            {/* [S]퍼블확인용 */}
            <div style={{padding:'5rem', textAlign:'center'}}>
                <button onClick={() => setIsOpen(true)}>open popup</button>
            </div>
            {/* [E]퍼블확인용 */}

            {/* 대시보드 */}
            <Modal
                open={isOpen}
                onClose={close}
                className='base promotion-dashboard'
            >
                <Modal.Header className='res'>
                    2023 Growth Level-up Challenge 참여 현황
                    <button type='button' className='close' onClick={close} >Close</button>
                </Modal.Header>
                <Modal.Content className='scrolling-80vh promotion-contents'>
                    <div className='promotion-title-pic'>
                        <a 
                            href='https://mysuni.sk.com/suni-main/board/support/notice-detail/NTC-0000al' 
                            rel='noopener noreferrer' className='goto-mission'>
                            <span className='blind'>미션 안내 바로가기</span>
                        </a>
                    </div>
                    <div className='tab-control'>
                        <button className={`tab ${index === 0 && 'active'}`} onClick={() => setIndex(0)}>나의 현황</button>
                        <button className={`tab ${index === 1 && 'active'}`} onClick={() => setIndex(1)}>전체 현황</button>
                    </div>
                    <div className='promotion-content'>
                        {index === 0 
                            ? <MyState nowState={nowState} missionReview={missionReview} DummyMissionList={DummyMissionList} /> //나의 현황
                            : <TotalState DummyBarItemList={DummyBarItemList} DummyCompleteStatusList={DummyCompleteStatusList} /> //전체 현황
                        }
                    </div>
                </Modal.Content>
            </Modal>
        </>
    )
}

export default PromotionDashboard
