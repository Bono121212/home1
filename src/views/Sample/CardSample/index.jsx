import React from "react";
import { Segment } from "semantic-ui-react";
import { CardCommonType, CardLiveType, CardPeriodType, CardLiveTypeHover, CardPeriodTypeHover } from "../../../components/CardCube";

const CardSample = () => {
    return(
        <section className="content sample">
            <Segment className="gCont full">
                <section>
                    <h3 className="test">Card UI</h3>
                    <div className="preview" style={{padding:0}}>
                        <h4 style={{fontSize: "1.25rem", color : "blue"}}><strong>상시형 카드(UI 변동없음)</strong></h4>
                        <ul className="flex">
                            <li style={{marginRight :20, marginBottom : 20}}>
                            <CardCommonType
                                popular={true}
                                title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                                src="https://image.mysuni.sk.com/suni-asset/thumb/20221223/63a573b343af260001e8f0a2.JPG"
                            />
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                            <CardCommonType
                                popular={false}
                                state="learn"
                                title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                                src="https://image.mysuni.sk.com/suni-asset/icon/group/C_07.png"
                            />
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                            <CardCommonType
                                popular={false}
                                state="learning"
                                title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                                src="https://image.mysuni.sk.com/suni-asset/icon/group/C_01.png"
                            />
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                            <CardCommonType
                                isHovered={true}
                                popular={false}
                                state="learn"
                                title="Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp"
                                src="https://image.mysuni.sk.com/suni-asset/thumb/20211020/616fc3d57dc4c7000189ea97.jpg"
                            />
                            </li>
                        </ul>
                    </div>
                    <hr style={{border: "3px solid #ddd"}}/>
                    <div className="preview" style={{marginTop : 20, padding :0}}>
                        <h4 style={{fontSize: "1.25rem", color : "blue", marginBottom : 5}}><strong>기간형 카드</strong></h4>
                        {/*
                            today : 오늘마감,
                            remain : N일 남음,
                            full : 정원 초과,
                            pending : 승인 대기,
                            upcoming : 학습 예정,
                            learning : 학습 중,
                            completed : 학습 완료
                        */}
                        <ul className="flex">
                            <li style={{marginRight :20, marginBottom : 20}}>
                                <div>
                                    <strong>오늘 마감</strong>
                                </div>
                                <CardPeriodType cardStatus="today"/>
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                                <div>
                                    <strong>D-n</strong>
                                </div>
                                <CardPeriodType cardStatus="remain"/>
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                                <div>
                                    <strong>정원 초과</strong>
                                </div>
                                <CardPeriodType cardStatus="full"/>
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                                <div>
                                    <strong>승인 대기</strong>
                                </div>
                                <CardPeriodType cardStatus="pending"/>
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                                <div>
                                    <strong>학습 예정</strong>
                                </div>
                                <CardPeriodType cardStatus="upcoming"/>
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                                <div>
                                    <strong>학습 중</strong>
                                </div>
                                <CardPeriodType cardStatus="learning"/>
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                                <div>
                                    <strong>학습 완료</strong>
                                </div>
                                <CardPeriodType cardStatus="completed"/>
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                                <div>
                                    <strong>신청 종료 (호버시는 상태별 텍스트)</strong>
                                </div>
                                <CardPeriodType cardStatus="applyEnd"/>
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                                <div>
                                    <strong>교육 종료 (호버시는 상태별 텍스트)</strong>
                                </div>
                                <CardPeriodType cardStatus="studyEnd"/>
                            </li>
                        </ul>
                        <h4 style={{fontSize: "1.25rem", color : "blue", marginBottom : 5}}><strong>기간형 카드 Hover</strong></h4>
                        <ul className="flex">
                            <li style={{marginRight :20, marginBottom : 20}}>
                                <div>
                                    <strong>신청 전(오늘 마감 / D-n)</strong>
                                </div>
                                <CardPeriodTypeHover cardStatus="today"/>
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                                <div>
                                    <strong>정원 초과</strong>
                                </div>
                                <CardPeriodTypeHover cardStatus="full"/>
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                                <div>
                                    <strong>승인 대기</strong>
                                </div>
                                <CardPeriodTypeHover cardStatus="pending"/>
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                                <div>
                                    <strong>학습 예정</strong>
                                </div>
                                <CardPeriodTypeHover cardStatus="upcoming"/>
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                                <div>
                                    <strong>학습 중</strong>
                                </div>
                                <CardPeriodTypeHover cardStatus="learning"/>
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                                <div>
                                    <strong>학습 완료</strong>
                                </div>
                                <CardPeriodTypeHover cardStatus="completed"/>
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                                <div>
                                    <strong>신청 종료 (신청정보 없을 시)</strong>
                                </div>
                                <CardPeriodTypeHover cardStatus="applyEnd"/>
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                                <div>
                                    <strong>교육 종료 (신청정보 없을 시)</strong>
                                </div>
                                <CardPeriodTypeHover cardStatus="studyEnd"/>
                            </li>
                        </ul>
                    </div>
                    <hr style={{border: "3px solid #ddd"}}/>
                    <div className="preview" style={{padding:0, paddingTop : 20}}>
                        <h4 style={{fontSize: "1.25rem", color : "blue", marginBottom : 5}}><strong>라이브형 카드</strong></h4>
                        {/*
                            yet : 라이브 예정,
                            ing : 라이브 진행중,
                            done : 라이브 종료
                        */}
                        <ul className="flex">
                            <li style={{marginRight :20, marginBottom: 40}}>
                                <div>
                                    <strong>라이브 예정 - Live 신청 전</strong>
                                </div>
                                <CardLiveType cardStatus="yet" alarmStatus={false}/>
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                                <div>
                                    <strong>라이브 예정 - Live 신청 완료</strong>
                                </div>
                                <CardLiveType cardStatus="yet" alarmStatus={true}/>
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                                <div>
                                    <strong>라이브 예정 - Live 5분전</strong>
                                </div>
                                <CardLiveType cardStatus="yet5" alarmStatus={true}/>
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                                <div>
                                    <strong>라이브 진행중</strong>
                                </div>
                                <CardLiveType cardStatus="ing" alarmStatus={false}/>
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                                <div>
                                    <strong>라이브 종료</strong>
                                </div>
                                <CardLiveType cardStatus="done" alarmStatus={false}/>
                            </li>
                        </ul>
                        <h4 style={{fontSize: "1.25rem", color : "blue", marginBottom : 5}}><strong>라이브형 카드 Hover</strong></h4>
                        {/*
                            yet : 라이브 예정,
                            yet5 : 라이브 5분전,
                            ing : 라이브 진행중,
                            done : 라이브 종료
                        */}
                        <ul className="flex">
                            <li style={{marginRight :20, marginBottom: 40}}>
                                <div>
                                    <strong>라이브 예정 - Live 신청 전</strong>
                                </div>
                                <CardLiveTypeHover cardStatus="yet" alarmStatus={false}/>
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                                <div>
                                    <strong>라이브 예정 - Live 신청 완료</strong>
                                </div>
                                <CardLiveTypeHover cardStatus="yet" learn={true} alarmStatus={true}/>
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                                <div>
                                    <strong>라이브 예정 - Live 5분전</strong>
                                </div>
                                <CardLiveTypeHover cardStatus="yet5" alarmStatus={true} learn={true}/>
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                                <div>
                                    <strong>라이브 진행중</strong>
                                </div>
                                <CardLiveTypeHover cardStatus="ing" />
                            </li>
                            <li style={{marginRight :20, marginBottom: 40}}>
                                <div>
                                    <strong>라이브 종료</strong>
                                </div>
                                <CardLiveTypeHover cardStatus="done" />
                            </li>
                        </ul>
                    </div>
                </section>
            </Segment>
        </section>
    )
}

export default CardSample;