import React, {Component} from 'react'
import { Button, Label, Card, Image, Icon } from 'semantic-ui-react'
import CardThumbImg from '../../../images/all/bg_img1.png';


function BottomActionsStatus (props) { // 상태별 하단 버튼 또는 상태표시
    const {card, learn} = props;
    switch(card) {
        case "yet" : //라이브 예정
            return learn ? (
                <Button icon className="confirm" disabled><strong>신청 완료</strong></Button>) :
                (<Button icon className="confirm"><strong>신청하기</strong></Button>)
        case "yet5" : //라이브 5분전
            return learn ? (
                <Button icon className="confirm" disabled><strong>신청 완료</strong></Button>) :
                (<Button icon className="confirm"><strong>신청하기</strong></Button>)
        case "ing" : //라이브 진행중
            return <Button icon className="confirm" disabled><strong>LIVE 진행중</strong></Button>
        case "done" : //라이브 종료
            return <Button icon className="confirm" disabled><strong>LIVE 종료</strong></Button>
        default : return <></>
    }
}

class CardLiveType extends Component {
    constructor() {
        super();
        this.state = {
            isHovered: false
        };
        this.props = {
            cardStatus : "" ,
            alarmStatus : false,
            isHovered: false,
            learn : false // 신청하기 여부
        /*
            yet : 라이브 예정,
            yet5 : 라이브 5분전,
            ing : 라이브 진행중,
            done : 라이브 종료
            alarmStatus ? 알림 받는중 : 알림 신청 전
        */
        }
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(isHovered) {
        this.setState({isHovered});
    }

    render() {
        const activeClass = this.state.isHovered ? 'on' : '';
        const {cardStatus, alarmStatus, learn} = this.props;

        return (
            <div data-action='CLICK' data-action-name=''>{/* 2023-11-17 개발 페이지와 구조 통일화를 위해 추가 */}
            <Card className={`card-item ${activeClass} live`}
                onMouseEnter={() => this.handleHover(true)} onMouseLeave={() => this.handleHover(false)}
            >
                {/* 22-10 라이브 예정일때 보임 */}
                    <div className="bookmark-wrap">
                { //라이브예정일때 아이콘
                    cardStatus === "yet" ?
                        <Button icon className={alarmStatus ?  "icon-alarm on" : "icon-alarm"}/> :
                        <Button icon className={alarmStatus ? "icon-bookmark on" : "icon-bookmark"}/>
                }
                    </div>

                <div className="card-inner">
                    <div className="thumbnail-area">
                        <div className="thumb-img-area">
                            <Image src={CardThumbImg} className="thumb-img" alt="썸네일 이미지" />
                        </div>
                        <div className="thumb-info top">
                            <div className="txticon-wrap">
                            {//22-10 라이브 진행 표시
                                cardStatus === "yet" || cardStatus === "yet5" ?  (
                                    <Label className="live yet"><div className="custom-icon icon-live"></div><span>LIVE 예정</span></Label>)
                                : (cardStatus === "ing" ? (
                                    <Label className="live red"><div className="custom-icon icon-live"></div><span>LIVE</span></Label>)
                                : (<Label className="live done"><div className="custom-icon icon-live"></div><span>LIVE 종료</span></Label>)
                                )
                            }
                            </div>
                        </div>

                        {/* 22-10 live 비노출 영역 : 시간
                        <div className="thumb-info bottom">
                            <Label><span>1h 30m</span></Label>
                        </div> */}

                    </div>
                    <div className="contents-area">
                        <div className="title-area">
                            {/* 22-10 live 비노출 영역 : 카테고리 명, 학습상태
                            <div className="status">
                                <Label className="college-name"><span>미래반도체</span></Label>
                                <Label className="my-stat learning"><span>학습중</span></Label>
                            </div>*/}
                            <div className="header">Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp</div>
                        </div>

                        <div className="icon-area txticon-wrap bottom">

                        {/*  22-10 live 비노출 영역 : 이수인원 및 별점
                            <div className="f-left">
                                <Label>
                                    <div className="custom-icon icon-user"></div><span>3,300</span>
                                </Label>
                            </div>
                            <div className="f-right">
                                <Label>
                                    <div className="custom-icon icon-star"></div><span>4.9</span>
                                </Label>
                            </div>
                        */}

                            {/* 22-10 live 일정 (기간형과 동일) */}
                            <ul className="period-info">
                                <li className="row"/>
                                <li className="row">
                                    <div className="p-head"><Icon className='icon-clock'/><strong>학습기간</strong></div>
                                    <div className="p-detail"><span>11월 6일</span><strong>오후 1:40</strong></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="hover-content">
                    <div className="thumb-img-area">
                        <Image src={CardThumbImg} className="thumb-img" alt="프로필 이미지" />
                    </div>
                    <div className="hover-content-inner">
                        <div className="lang-wrap">
                            <ul className="lang-list">
                                <li><span>KOR</span></li>
                                <li><span>CHN</span></li>
                                <li><span>ENG</span></li>
                            </ul>
                        </div>
                        <div className="text-wrap">
                            <p className="text-area">
                            반도체 Tech의 핵심 개념과 기술 용어를 각 주제별로 쉽고 간결하게 설명해주는 온라인 지식백과 Course 입니다. 본 과정을 통해 반도체에서 다루는 주요 개념과 용어를 학습하여, 반도체 Tech. 학습의 기초를 다질 수 있습니다. (각 영상 4~5분) ※ 강사 : SK하이닉스 박성원 TL, 서민석 TL, 신홍섭 TL, 임정빈 TL, 정승규 TL
                            </p>
                        </div>
                        <div className="icon-area txticon-wrap bottom">
                            <div>
                                <Label>
                                    <div className="custom-icon icon-grade"></div><span>Intermediate</span>
                                </Label>
                            </div>
                            <div>
                                <Label>
                                    <div className="custom-icon icon-badge"></div><span>Badge</span>
                                </Label>
                            </div>
                        </div>

                        {/* 22-10 신청하기 버튼 (기간형과 동일) */}
                        <div className="bottom-button-area">
                            <BottomActionsStatus card={cardStatus} learn={learn} />
                        </div>
                    </div>
                </div>

            </Card>
            </div>
        )
    }
}


export default CardLiveType
