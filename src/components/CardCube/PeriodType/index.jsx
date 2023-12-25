import React, {Component} from 'react'
import { Button, Label, Card, Image, Icon } from 'semantic-ui-react'
import CardThumbImg from '../../../images/all/bg_img1.png';

function PeriodTable (props) { // 상태별 신청/취소 기간, 교육 기간 표시
    const status = props.status;
    return (
        <ul className="period-info">
            {//신청 전(오늘, 기간남음, 정원 초과)
                (status === "today" || status === "remain" || status === "full") &&
                <li className="row">
                    <div className="p-head"><Icon className='icon-pencil'/><strong>신청기간</strong></div>
                    <div className="p-detail"><span>10.18 ~ 12.31</span></div>
                </li>
            }
            {//신청 종료
                (status === "applyEnd") &&
                <li className="row">
                    <div className="p-head"><Icon className='icon-pencil'/><strong>신청기간</strong></div>
                    <div className="p-detail"><span>신청 종료</span></div>
                </li>
            }
            {//신청후(승인 대기, 학습 예정) ~ 학습 전
                (status === "pending" || status === "upcoming") &&
                <li className="row">
                    <div className="p-head"><Icon className='icon-cancle'/><strong>취소기간</strong></div>
                    <div className="p-detail"><span>10.18 ~ 12.31</span></div>
                </li>
            }
            {//학습 중, 학습 완료
                (status === "learning" || status === "completed") &&
                <li className="row"/>
            }
            {//교육 종료
                (status === "studyEnd") &&
                <li className="row">
                    <div className="p-head"><Icon className='icon-book-open'/><strong>학습일정</strong></div>
                    <div className="p-detail"><span>교육 종료</span></div>
                </li>
            }
            {//기본값
                (status !== "studyEnd") &&
                <li className="row">
                    <div className="p-head"><Icon className='icon-book-open'/><strong>학습일정</strong></div>
                    <div className="p-detail"><span>01.18 ~ 03.31</span></div>
                </li>
            }
        </ul>
    )
}

function ActionsStatus (props) { // 상태별 하단 버튼 또는 상태표시
    const status = props.status;
    switch(status) {
        case "full" :
            return <Button className="confirm" disabled><strong>정원 초과</strong></Button>
        case "pending":
            return <Button className="confirm" disabled><strong>승인 대기</strong></Button>
        case "upcoming" :
            return <Button className="confirm" disabled><strong>학습 예정</strong></Button>
        case "learning" :
            return <Button className="confirm" disabled><strong>학습 중</strong></Button>
        case "completed" :
            return <Button className="confirm" disabled><strong>학습 완료</strong></Button>
        case "applyEnd" :
            return <Button className="confirm" disabled><strong>승인 대기</strong></Button>
        case "studyEnd" :
            return <Button className="confirm" disabled><strong>학습 완료</strong></Button>
        default : //신청 전(오늘, 기간남음)
            return <Button className="confirm"><strong>신청하기</strong></Button>
    }
}

class CardPeriodType extends Component {
    constructor() {
        super();
        this.state = {
            isHovered: false
        };
        this.props = {
            cardStatus : '' ,
            isHovered: false
            /*
            today : 오늘마감,
            remain : N일 남음,
            full : 정원 초과,
            pending : 승인 대기,
            upcoming : 학습 예정,
            learning : 학습 중,
            completed : 학습 완료
            applyEnd : 신청 종료
            studyEnd : 교육 종료
            */
        }
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(isHovered) {
        this.setState({isHovered});
    }

    render() {
        const activeClass = this.state.isHovered ? 'on' : '';
        const cardStatus = this.props.cardStatus;

        return (
            <div data-action='CLICK' data-action-name=''>{/* 2023-11-17 개발 페이지와 구조 통일화를 위해 추가 */}
                <Card className={`card-item ${activeClass} period`}
                    onMouseEnter={() => this.handleHover(true)} onMouseLeave={() => this.handleHover(false)}
                >
                    <div className="bookmark-wrap">
                        <Button icon className="icon-bookmark"/>
                    </div>
                    <div className="card-inner">
                        <div className="thumbnail-area">
                            <div className="thumb-img-area">
                                <Image src={CardThumbImg} className="thumb-img" alt="썸네일 이미지" />
                            </div>
                            <div className="thumb-info top">
                                <div className="txticon-wrap">

                                    {/* 22-10 리본구역 */}
                                    {
                                        cardStatus === "today" ? (<Label className="day red"><div className="custom-icon icon-clock" /><span>오늘 마감</span></Label>) : (
                                            cardStatus === "remain" ? <Label className="day"><div className="custom-icon icon-calendar" /><span>3일 남음</span></Label> :
                                            cardStatus === "full" && <Label className="day full-over"><div className="custom-icon icon-warn" /><span>정원 초과</span></Label>
                                        )
                                    }

                                </div>
                            </div>
                            <div className="thumb-info bottom">
                                <Label><span>1h 30m</span></Label>
                            </div>
                        </div>
                        <div className="contents-area">
                            <div className="title-area">
                                {/* 22-10 기간형카드 비노출 영역 : 카테고리명, 학습 상태
                                <div className="status">
                                    <Label className="college-name"><span>미래반도체</span></Label>
                                    <Label className="my-stat learning"><span>학습 중</span></Label>
                                </div> */}
                                <div className="header">Card/Cube 제목 Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp</div>
                            </div>
                            <div className="icon-area txticon-wrap bottom">

                            {/* 22-10 기간형카드 비노출 영역 : 이수인원 및 별점
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

                                {/* 22-10 신청/취소기간 표시 (Live형과 동일) */}
                                <PeriodTable status={cardStatus} />

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
                                {`반도체 Tech의 핵심 개념과 기술 용어를 각 주제별로 쉽고 간결하게 설명해주는 온라인 지식백과 Course 입니다. 본 과정을 통해 반도체에서 다루는 주요 개념과 용어를 학습하여, 반도체 Tech. 학습의 기초를 다질 수 있습니다. (각 영상 4~5분) ※ 강사 : SK하이닉스 박성원 TL, 서민석 TL, 신홍섭 TL, 임정빈 TL, 정승규 TL`}
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

                            {/* 22-10 신청하기 버튼 (라이브형과 동일)*/}
                            <div className="bottom-button-area">
                                <ActionsStatus status={cardStatus} />
                            </div>

                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}


export default CardPeriodType
