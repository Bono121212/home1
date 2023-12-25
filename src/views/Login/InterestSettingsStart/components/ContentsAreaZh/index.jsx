import React, { Component } from 'react';
import { Button, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import directionImg from "../../../../../images/all/direction-v2.png"
import introheaderbg from "../../../../../images/all/onboarding-chn.png";

class ContentsAreaZh extends Component {
    state = {}
    handleChange = (e, { value }) => this.setState({ value })

    render() {
        return (
            <>
                <div className="setting-introduction">
                    <div className="intro-header">
                        <div className="inner interest">
                            <Image src={introheaderbg} className="intro-header-img" alt="开始个性化学习设置" />
                            <div className="text-wrap">
                                <h2>开始个性化学习设置</h2>
                                <p>仅需回答几个问题, 即可得到适合OOOOO先生/女士学习的课程推荐哦!</p>
                                <Link to={'/login/interest-settings-part'}>
                                    <Button className="ui button fix bg">开始</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="intro-guide">
                    <div className="common-intro case1">
                        <div className="inner">
                            <div className="strong">mySUNI는 구성원 개인의 자기 성장과 행복 추구를 위해<br />성장역량을 강화하는 새로운 학습 플랫폼입니다.</div>
                            <div className="normal">또한, 학습 조직 구축을 위한 출발점으로 Deep Change와<br />행복을 위한 선순환 Cycle을 만들어 갑니다.</div>
                        </div>
                    </div>
                    <div className="ui full segment">
                        <div className="intro-suni">
                            <div className="cont-text-box mission">
                                <div className="title">Mission</div>
                                <div className="strong">Human Capital 축적·확보를 위한 그룹 차원의 통합 Infra</div>
                                <div className="normal">
                                    Deep Change 필요 역량 조기 확보/육성의 공간<br />
                                    구성원 역량 Transformation을 위한 학습의 場<br />
                                    회사와 개인의 동시 성장을 통한 지속적/장기적 행복 창출 기반
                                </div>
                            </div>
                            <div className="direction">
                                <Image src={directionImg} alt='direction' />
                            </div>
                            <div className="cont-text-box solution">
                                <div className="title">Solution</div>
                                <div className="strong">mmySUNI의 학습은 구성원이 스스로 학습경로를<br />선택하여 디자인 할 수 있습니다.</div>
                                <div className="normal">
                                    AI/DT 등 최근 환경변화를 반영한 수준 높은 교육 컨텐츠를<br />
                                    언제 어디서나 학습할 수 있습니다. 또한, 학습 후 자기 주도적인 커리어를<br />
                                    만들어갈 수 있도록 구성원의 무한한 가능성을 지원합니다.
                                </div>
                            </div>
                            <ul className="solution-route">
                                <li>
                                    <div>
                                        <img src="https://image.mysuni.sk.com/suni-asset/public/introduction/images/introduction-self-dircted-learning.png" alt="Self-directed Learning" />
                                    </div>
                                    <h3>Self-directed Learning</h3>
                                    <div className="text">개인 관심/수준에 따라 학습자가<br />직접 디자인하는 학습 경로</div>
                                </li>
                                <li>
                                    <div>
                                        <img src="https://image.mysuni.sk.com/suni-asset/public/introduction/images/introduction-adaptive-learning.png" alt="Adaptive Learning" />
                                    </div>
                                    <h3>Adaptive Learning</h3>
                                    <div className="text">Machine Learning 기반 개인화된<br />Contents Curation</div>
                                </li>
                                <li>
                                    <div>
                                        <img src="https://image.mysuni.sk.com/suni-asset/public/introduction/images/introduction-social-learning.png" alt="Social Learning" />
                                    </div>
                                    <h3>Social Learning</h3>
                                    <div className="text">직무별 전문가와 학습 컨텐츠를<br />연결한 커뮤니티</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="providers">
                        <div className="inner">
                            <h2>Content Providers</h2>
                            <ul>
                                <li>
                                    <a href="http://www.postech.ac.kr/" rel="noopener noreferrer" target="_blank">
                                        <Image src="https://image.mysuni.sk.com/suni-asset/public/introduction/images/postech.png" alt="postech" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.snu.ac.kr/" rel="noopener noreferrer" target="_blank">
                                        <Image src="https://image.mysuni.sk.com/suni-asset/public/introduction/images/seoul-university.png" alt="서울대학교" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.microsoft.com/" rel="noopener noreferrer" target="_blank">
                                        <Image src="https://image.mysuni.sk.com/suni-asset/public/introduction/images/microsoft.png" alt="마이크로소프트" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">
                                        <Image src="https://image.mysuni.sk.com/suni-asset/public/introduction/images/google.png" alt="구글" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.ideou.com/" rel="noopener noreferrer" target="_blank">
                                        <Image src="https://image.mysuni.sk.com/suni-asset/public/introduction/images/ideo.png" alt="IDEO U" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/checkpoint/enterprise/login/81530810?application=learning&amp;redirect=https://www.linkedin.com/learning&amp;authModeName=OP_SUNI" rel="noopener noreferrer" target="_blank">
                                        <Image src="https://image.mysuni.sk.com/suni-asset/public/introduction/images/linked-in.png" alt="링크드인" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://coursera.org/" rel="noopener noreferrer" target="_blank">
                                        <Image src="https://image.mysuni.sk.com/suni-asset/public/introduction/images/coursera.png" alt="coursera" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://dbr.donga.com/" rel="noopener noreferrer" target="_blank">
                                        <Image src="https://image.mysuni.sk.com/suni-asset/public/introduction/images/dbr.png" alt="dbr" />
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.hbrkorea.com/" rel="noopener noreferrer" target="_blank">
                                        <Image src="https://image.mysuni.sk.com/suni-asset/public/introduction/images/hbr.png" alt="hbr" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.fastcampus.co.kr/" rel="noopener noreferrer" target="_blank">
                                        <Image src="https://image.mysuni.sk.com/suni-asset/public/introduction/images/fastcampus.png" alt="패스트캠퍼스" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.sericeo.org/" rel="noopener noreferrer" target="_blank">
                                        <Image src="https://image.mysuni.sk.com/suni-asset/public/introduction/images/sericeo.png" alt="sericeo" />
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.learningmate.co.kr" rel="noopener noreferrer" target="_blank">
                                        <Image src="https://image.mysuni.sk.com/suni-asset/public/introduction/images/learning-mate.png" alt="learning-mate" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.masocampus.com/" rel="noopener noreferrer" target="_blank">
                                        <Image src="https://image.mysuni.sk.com/suni-asset/public/introduction/images/maso.png" alt="maso" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.multicampus.com" rel="noopener noreferrer" target="_blank">
                                        <Image src="https://image.mysuni.sk.com/suni-asset/public/introduction/images/multicampus.png" alt="멀티캠퍼스" />
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.samiledu.com/" rel="noopener noreferrer" target="_blank">
                                        <Image src="https://image.mysuni.sk.com/suni-asset/public/introduction/images/samil.png" alt="samil" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.sebasi.co.kr/" rel="noopener noreferrer" target="_blank">
                                        <Image src="https://image.mysuni.sk.com/suni-asset/public/introduction/images/time15.png" alt="time15" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://academy.elice.io/" rel="noopener noreferrer" target="_blank">
                                        <Image src="https://image.mysuni.sk.com/suni-asset/public/introduction/images/elice.png" alt="elice" />
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.ohmyschool.org/" rel="noopener noreferrer" target="_blank">
                                        <Image src="https://image.mysuni.sk.com/suni-asset/public/introduction/images/ohmyschool.png" alt="ohmyschool" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.imooc.co.kr/" rel="noopener noreferrer" target="_blank">
                                        <Image src="https://image.mysuni.sk.com/suni-asset/public/introduction/images/carrot.png" alt="carrot" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://creativetv.co.kr/user/Main.do" rel="noopener noreferrer" target="_blank">
                                        <Image src="https://image.mysuni.sk.com/suni-asset/public/introduction/images/hyundai.png" alt="hyundai" />
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.hunet.co.kr" rel="noopener noreferrer" target="_blank">
                                        <Image src="https://image.mysuni.sk.com/suni-asset/public/introduction/images/hunet.png" alt="hunet" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="start-wrap">
                    <Link to={'/login/interest-settings-part'}>
                        <Button className="ui button fix bg">Get started</Button>
                    </Link>
                </div>
            </>
        )
    }
}

export default ContentsAreaZh
