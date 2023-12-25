import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Accordion } from 'semantic-ui-react';

class ContentsArea extends Component {
    state = {activeIndex: 2}
    handleNote = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ?  -1 : index;
        this.setState({ activeIndex: newIndex });
    };

    render() {
        const { activeIndex } = this.state;

        return (
            <div className="mypage_contents my-skill-contents">
                <strong className="mypage_title">My Foundation Skill</strong>

                <div className="sort-reult">
                    <div className="section-count">총 <span>288개</span>의 과정을 이수하였습니다.</div>
                </div>

                {/* My Foundation Skill List */}
                <div className='my-skill-list'>
                    {/* Business Capability */}
                    <div className='my-skill-item'>
                        <div className='icon-area'>
                            <img src="https://image.mysuni.sk.com/suni-asset/public/images/all/skill-v1/icon-100-px-fs-01.svg" alt="Business Capability" />
                        </div>
                        <div className='title-area'>
                            <p className='tit'><strong>Business Capability</strong></p>
                            <p className='txt'>
                                미래 변화를 읽고 새로운 Biz.Model을<br />구체화하는 능력
                            </p>
                        </div>
                        <div className='cube-area'>
                            {/* 22-09-29 수정 문구변경 */}
                            <Link className='cube-item'>
                                <span className="label-state-cube2 learn"><span className='blind'>cube 학습전</span></span>
                                <p className='tit'>미래 경영환경을 '나의 업무'에 반영하기</p>
                            </Link>
                            {/* 22-09-30 수정 문구변경 */}
                            <Link className='cube-item'>
                                <span className="label-state-cube2 learned"><span className='blind'>cube 학습완료</span></span>
                                <p className='tit'>[과정명 변경 ]나의 업무에 SV∙ESG 통합하기</p>
                            </Link>
                            <Link className='cube-item'>
                                <span className="label-state-cube2 learning"><span className='blind'>cube 학습중</span></span>
                                <p className='tit'>Biz 가치를 창출하는 고객경험디자인 Skill</p>
                            </Link>
                            <Link className='cube-item'>
                                <span className="label-state-cube2 learning"><span className='blind'>cube 학습중</span></span>
                                <p className='tit'>도전! 가치창출을 위한 새로운 비즈니스 모델 만들기</p>
                            </Link>
                        </div>
                    </div>
                    {/* // Business Capability */}
                    {/* Design Skills */}
                    <div className='my-skill-item'>
                        <div className='icon-area'>
                            <img src="https://image.mysuni.sk.com/suni-asset/public/images/all/skill-v1/icon-100-px-fs-02.svg" alt="Design Skills" />
                        </div>
                        <div className='title-area'>
                            <p className='tit'><strong>Design Skills</strong></p>
                            <p className='txt'>
                                새로운 가치를 창출하기 위해<br />문제 해결 방법을 디자인하는 능력
                            </p>
                        </div>
                        <div className='cube-area'>
                            <Link className='cube-item'>
                                <span className="label-state-cube2 learn"><span className='blind'>cube 학습전</span></span>
                                <p className='tit'>컨설턴트의 논리적 문제해결 Skill</p>
                            </Link>
                            <Link className='cube-item'>
                                <span className="label-state-cube2 learned"><span className='blind'>cube 학습완료</span></span>
                                <p className='tit'>혁신가의 창의적 문제해결 Skill</p>
                            </Link>
                            <Link className='cube-item'>
                                <span className="label-state-cube2 learning"><span className='blind'>cube 학습중</span></span>
                                <p className='tit'>미래와 전략의 만남 불확실성에 대응하기</p>
                            </Link>
                        </div>
                    </div>
                    {/* // Design Skills */}
                    {/* Social Skills */}
                    <div className='my-skill-item'>
                        <div className='icon-area'>
                            <img src="https://image.mysuni.sk.com/suni-asset/public/images/all/skill-v1/icon-100-px-fs-03.svg" alt="Social Skills" />
                        </div>
                        <div className='title-area'>
                            <p className='tit'><strong>Social Skills</strong></p>
                            <p className='txt'>
                                성장 마인드를 가지고 협업해<br />Performance를 제고하는 능력
                            </p>
                        </div>
                        <div className='cube-area'>
                            <Link className='cube-item'>
                                <span className="label-state-cube2 learn"><span className='blind'>cube 학습전</span></span>
                                <p className='tit'>Self Awareness, 진짜 나를 찾아가는 행복 여정</p>
                            </Link>
                            <Link className='cube-item'>
                                <span className="label-state-cube2 learned"><span className='blind'>cube 학습완료</span></span>
                                <p className='tit'>Empathy, 정서 읽어주는 리더 - 행복 채워가는 우리</p>
                            </Link>
                            <Link className='cube-item'>
                                <span className="label-state-cube2 learning"><span className='blind'>cube 학습중</span></span>
                                <p className='tit'>Communication, 사람을 얻고 성과를 잡는 커뮤니케이션 핵심 스킬</p>
                            </Link>
                        </div>
                    </div>
                    {/* // Social Skills */}
                    {/* Digital &amp; Data Skills */}
                    <div className='my-skill-item'>
                        <div className='icon-area'>
                            <img src="https://image.mysuni.sk.com/suni-asset/public/images/all/skill-v1/icon-100-px-fs-04.svg" alt="Digital &amp; Data Skills" />
                        </div>
                        <div className='title-area'>
                            <p className='tit'><strong>Digital &amp; Data Skills</strong></p>
                            <p className='txt'>
                                Digital 기술을 활용해 일하는 방식과 <br />Performance를 제고하는 능력
                            </p>
                            <div className='btn-area'>
                                <Button className='btn-assessment'><Icon></Icon>Assessment</Button>
                            </div>
                        </div>
                        <div className='cube-area'>
                            <Accordion className='acco-cube'>
                                {/* 22-09-29 수정 그룹명추가 */}
                                {/* 22-09-30 수정 과정명변경 */}
                                <Accordion.Title className='title-only'>
                                    <p className='tit'>디지털 리터러시 : Digital시대를 살아가기 위한 기초 체력</p>
                                </Accordion.Title>
                                <Accordion.Title
                                    active={activeIndex === 1}
                                    index={1}
                                    onClick={this.handleNote}
                                    className={activeIndex !== 1 ? '' : 'is-active'}
                                >
                                    <span className="label-tit">역량 확보</span>
                                    <p className='tit'>Digital Citizenship</p>
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 1}>
                                    <Link className='cube-item'>
                                        <span className="label-state-cube2 learning"><span className='blind'>cube 학습중</span></span>
                                        <p className='tit'>Digital Citizenship</p>
                                    </Link>
                                </Accordion.Content>
                                <Accordion.Title
                                    active={activeIndex === 2}
                                    index={2}
                                    onClick={this.handleNote}
                                    className={activeIndex !== 2 ? '' : 'is-active'}
                                >
                                    <p className='tit'>DT Application Skill</p>
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 2}>
                                    <Link className='cube-item'>
                                        <span className="label-state-cube2 learn"><span className='blind'>cube 학습전</span></span>
                                        <p className='tit'>Tools for Digital Transformation</p>
                                    </Link>
                                    <Link className='cube-item'>
                                        <span className="label-state-cube2 learned"><span className='blind'>cube 학습완료</span></span>
                                        <p className='tit'>EIM의 이해</p>
                                    </Link>
                                    <Link className='cube-item'>
                                        <span className="label-state-cube2 learning"><span className='blind'>cube 학습중</span></span>
                                        <p className='tit'>Data로 생각하는 인재되기 (16가지 역량)</p>
                                    </Link>
                                    <Link className='cube-item'>
                                        <span className="label-state-cube2 learning"><span className='blind'>cube 학습중</span></span>
                                        <p className='tit'>통계부터 머신러닝까지 하루만에 끝내기 1 - 데이터 기초</p>
                                    </Link>
                                    <Link className='cube-item'>
                                        <span className="label-state-cube2 learning"><span className='blind'>cube 학습중</span></span>
                                        <p className='tit'>통계부터 머신러닝까지 하루만에 끝내기 2 - 미래예측</p>
                                    </Link>
                                    <Link className='cube-item'>
                                        <span className="label-state-cube2 learning"><span className='blind'>cube 학습중</span></span>
                                        <p className='tit'>통계부터 머신러닝까지 하루만에 끝내기 3 - 효과검증</p>
                                    </Link>
                                    <Link className='cube-item'>
                                        <span className="label-state-cube2 learning"><span className='blind'>cube 학습중</span></span>
                                        <p className='tit'>Data Driven Decision Making</p>
                                    </Link>
                                </Accordion.Content>
                                <Accordion.Title
                                    active={activeIndex === 3}
                                    index={3}
                                    onClick={this.handleNote}
                                    className={activeIndex !== 3 ? '' : 'is-active'}
                                >
                                    <p className='tit'>AI/DT Fundamentals</p>
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 3}>
                                    <Link className='cube-item'>
                                        <span className="label-state-cube2 learned"><span className='blind'>cube 학습완료</span></span>
                                        <p className='tit'>Big Data 입문 A to Z</p>
                                    </Link>
                                    <Link className='cube-item'>
                                        <span className="label-state-cube2 learning"><span className='blind'>cube 학습중</span></span>
                                        <p className='tit'>데이터 분석 방법 및 사례</p>
                                    </Link>
                                    <Link className='cube-item'>
                                        <span className="label-state-cube2 learn"><span className='blind'>cube 학습전</span></span>
                                        <p className='tit'>AI 101 Essentials</p>
                                    </Link>
                                    <Link className='cube-item'>
                                        <span className="label-state-cube2 learning"><span className='blind'>cube 학습중</span></span>
                                        <p className='tit'>머신러닝/딥러닝 이해</p>
                                    </Link>
                                    <Link className='cube-item'>
                                        <span className="label-state-cube2 learning"><span className='blind'>cube 학습중</span></span>
                                        <p className='tit'>The Road to AI - AI Biz 적용 프로세스</p>
                                    </Link>
                                    <Link className='cube-item'>
                                        <span className="label-state-cube2 learning"><span className='blind'>cube 학습중</span></span>
                                        <p className='tit'>AI Biz Case - 환경</p>
                                    </Link>
                                    <Link className='cube-item'>
                                        <span className="label-state-cube2 learning"><span className='blind'>cube 학습중</span></span>
                                        <p className='tit'>[AI Biz Insight] 딥러닝을 활용한 Sales QA 자동화</p>
                                    </Link>
                                    <Link className='cube-item'>
                                        <span className="label-state-cube2 learning"><span className='blind'>cube 학습중</span></span>
                                        <p className='tit'>[AI Biz Insight] RPA를 활용한 SK텔레콤의 업무 효율화 사례</p>
                                    </Link>
                                    <Link className='cube-item'>
                                        <span className="label-state-cube2 learning"><span className='blind'>cube 학습중</span></span>
                                        <p className='tit'>SK 데이터 분석을 위한 Python 기초</p>
                                    </Link>
                                    <Link className='cube-item'>
                                        <span className="label-state-cube2 learning"><span className='blind'>cube 학습중</span></span>
                                        <p className='tit'>Cloud 입문 A to Z</p>
                                    </Link>
                                </Accordion.Content>
                            </Accordion>
                            <div className='skill-desc-area'>
                                <span className="label-tit">역량 확보</span>
                                <p className='desc'>
                                    '역량 확보' 영역은 Assess에 따라 이미 충분한 역량을 확보한 것으로 확인되는 영역을 의미합니다. <br /> 학습을 희망하시는 경우 언제든지 학습 가능합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* // Digital Literacy */}
                </div>
                {/* // My Foundation Skill List */}
            </div>
        )
    }
}


export default ContentsArea
