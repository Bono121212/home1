import React from "react";
import { Segment, Image, Button, Icon } from "semantic-ui-react";
import BadgeContainer from "../../../components/Badges/BadgeContainer";
import MyBadgeModal from "../../../components/Badges/MyBadgeModal";

import ImgCongratulating from '../../../images/all/img-congraturation.png';
import BdMybadge from '../../../images/all/badge-v2/certification_bg_white.png';
import LogoImg from '../../../images/all/badge-v2/logo-gnb.png';
import LogoImg2 from "../../../images/all/badge-v2/microsoft.png";
import CollabIcon from "../../../images/all/badge-v2/icon-badge-collabo.png";
import BadgeCard from "../../../components/Badges/BadgeCard";
import SNSListPopup from "../../../components/Badges/SNSListPopup";

const BadgeSample = () => {
    return(
        <section className="content">
            <Segment className="full gCont">
                <section>
                    <h3 className="test">Badge UI(3차)/ 22년 9월 중 배포 / Badge 인증서 클릭시 확인 가능</h3>
                    <div className="preview" style={{padding:0}}>
                        {/* s: badge list 영역 badge-list-type > badge-list-v2
                            list-wrapper 대신 좌측 lnb있는경우 has_lnb, 인증서보기 버튼있는 경우 has_btn 추가
                        */}
                        <div className="badge-list-v2">
                            <ul style={{marginBottom : '50px', borderBottom :'4px solid #ddd'}}>
                                <li></li>
                                <li><strong style={{display:'block', color:'#aaa', fontSize:'20px'}}>mySUNI Badge</strong></li>
                                <li><strong style={{display:'block', color:'#aaa', fontSize:'20px'}}>mySUNI Badge PLUS</strong></li>
                                <li><strong style={{display:'block', color:'#aaa', fontSize:'20px'}}>mySUNI Badge PLUS 2</strong></li>
                            </ul>
                            <ul>
                                <li>
                                    <strong style={{display:'block', color:'#aaa', fontSize:'20px'}}>sample / 인증서보기</strong>
                                </li>
                                <li>
                                    {/* 뱃지 통이미지 예시 */}
                                    <a href={()=>false} className="badge-box-v2">
                                        <span className="badge_thumb">
                                            <img src={`https://image.mysuni.sk.com/suni-asset/public/images/all/badge-v2/BADGE-2t.png`} alt="뱃지 예시"/>
                                        </span>
                                    </a>
                                    {/* <BadgeContainer
                                        badgeName={'AI/DT Badge Level1'}
                                        level='Level1'
                                        badgeStyle={true} //linkable
                                        badgeColor={'blue'}
                                        cooperation={false} //협력사 유무
                                        hasPlus={false} //퍼블용
                                        membersCorp={false} //퍼블용 멤버사 구분
                                    /> */}

                                    <div className="li-badge-bottom">
                                        {/* badge-status > completed : 획득, challenging : 도전중, blind : 도전전 / link */}
                                        <MyBadgeModal />
                                        <div className='list-sns completed'>
                                            <Button className="link"><span>공유하기</span></Button>
                                            <div className="ui popup li-sns visible">
                                                <div className="inner">
                                                    <ul>
                                                        <li>
                                                            <Button icon className="b-sns lnkIn"><span>LinkedIn</span></Button>
                                                        </li>
                                                        <li>
                                                            <Button icon className="b-sns twt"><span>Twitter</span></Button>
                                                        </li>
                                                        <li>
                                                            <Button icon className="b-sns fb"><span>Facebook</span></Button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <BadgeContainer
                                        badgeName={'AI/DT Category Badge Level2 + PLUS'}
                                        level='Level2'
                                        badgeStyle={true} //linkable
                                        badgeColor={'blue'}
                                        cooperation={true} //협력사 유무
                                        hasPlus={true} //퍼블용
                                        membersCorp={false} //퍼블용 멤버사 구분
                                    />
                                    <div className="li-badge-bottom">
                                        <MyBadgeModal cooperation={true} />
                                        <SNSListPopup status="completed"/>
                                    </div>
                                </li>
                                <li>
                                    <BadgeCard
                                        badgeStyle={false}
                                    >
                                        <span className="badge_thumb">
                                            <img src={`https://image.mysuni.sk.com/suni-asset/public/images/all/badge-v2/BADGE-2t-plus_2.png`} alt="뱃지 플러스 예시"/>
                                        </span>
                                    </BadgeCard>
                                    <div className="li-badge-bottom">
                                        <MyBadgeModal />
                                        <SNSListPopup status="completed"/>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="badge-list-v2">
                            <ul>
                                <li>
                                    <strong style={{display:'block', color:'#aaa', fontSize:'20px'}}>sample / 뱃지상태</strong>
                                </li>
                                <li>
                                    {/* 뱃지 통이미지 예시 */}
                                    <a href={()=>false} className="badge-box-v2">
                                        <span className="badge_thumb">
                                            <img src={`https://image.mysuni.sk.com/suni-asset/public/images/all/badge-v2/BADGE-2t.png`} alt="뱃지 예시"/>
                                        </span>
                                    </a>
                                    {/* <BadgeContainer
                                        badgeName={'AI/DT Badge Level1'}
                                        level='Level1'
                                        badgeStyle={true} //linkable
                                        badgeColor={'blue'}
                                        cooperation={false} //협력사 유무
                                        hasPlus={false} //퍼블용
                                        membersCorp={false} //퍼블용 멤버사 구분
                                    /> */}

                                    <div className="li-badge-bottom">
                                        {/* badge-status > completed : 획득, challenging : 도전중, blind : 도전전 / link */}
                                        <div className="badge-status completed">
                                            <span>획득</span>
                                        </div>
                                        <div className='list-sns completed'>
                                            <Button className="link"><span>공유하기</span></Button>
                                            <div className="ui popup li-sns visible">
                                                <div className="inner">
                                                    <ul>
                                                        <li>
                                                            <Button icon className="b-sns lnkIn"><span>LinkedIn</span></Button>
                                                        </li>
                                                        <li>
                                                            <Button icon className="b-sns twt"><span>Twitter</span></Button>
                                                        </li>
                                                        <li>
                                                            <Button icon className="b-sns fb"><span>Facebook</span></Button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <BadgeContainer
                                        badgeName={'AI/DT Category Badge Level2 + PLUS'}
                                        level='Level2'
                                        badgeStyle={true} //linkable
                                        badgeColor={'blue'}
                                        cooperation={true} //협력사 유무
                                        hasPlus={true} //퍼블용
                                        membersCorp={false} //퍼블용 멤버사 구분
                                    />
                                    <div className="li-badge-bottom">
                                        {/* badge-status > completed : 획득, challenging : 도전중, blind : 도전전 / link */}
                                        <div className="badge-status challenging">
                                            <span>도전중</span>
                                        </div>
                                        <div className='list-sns challenging'>
                                            <Button className="link disabled"><span>공유하기</span></Button>
                                            <div className="ui popup li-sns visible">
                                                <div className="inner">
                                                    <ul>
                                                        <li>
                                                            <Button icon className="b-sns lnkIn"><span>LinkedIn</span></Button>
                                                        </li>
                                                        <li>
                                                            <Button icon className="b-sns twt"><span>Twitter</span></Button>
                                                        </li>
                                                        <li>
                                                            <Button icon className="b-sns fb"><span>Facebook</span></Button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <BadgeCard
                                        badgeStyle={false}
                                    >
                                        <span className="badge_thumb">
                                            <img src={`https://image.mysuni.sk.com/suni-asset/public/images/all/badge-v2/BADGE-2t-plus_2.png`} alt="뱃지 플러스 예시"/>
                                        </span>
                                    </BadgeCard>
                                    <div className="li-badge-bottom">
                                        {/* badge-status > completed : 획득, challenging : 도전중, blind : 도전전 / link */}
                                        <div className="badge-status blind">
                                            <span>도전전</span>
                                        </div>
                                        <div className='list-sns blind'>
                                            <Button className="link"><span>공유하기</span></Button>
                                            <div className="ui popup li-sns">
                                                <div className="inner">
                                                    <ul>
                                                        <li>
                                                            <Button icon className="b-sns lnkIn"><span>LinkedIn</span></Button>
                                                        </li>
                                                        <li>
                                                            <Button icon className="b-sns twt"><span>Twitter</span></Button>
                                                        </li>
                                                        <li>
                                                            <Button icon className="b-sns fb"><span>Facebook</span></Button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    {/*    <div className="badge-list-v2">
                            <ul>
                                <li>
                                    <strong style={{display:'block', color:'#aaa', fontSize:'20px'}}>미래Biz<br/>(green : #428052)</strong>
                                </li>
                                <li>

                                    <BadgeContainer
                                        badgeName={'미래Biz Category Badge Level1'}
                                        level='Level1'
                                        badgeStyle={true} //linkable
                                        badgeColor={'green'}
                                        cooperation={false} //협력사 유무
                                        hasPlus={false} //퍼블용
                                        membersCorp={false} //퍼블용 멤버사 구분
                                    />

                                </li>
                                <li>
                                    <BadgeContainer
                                        badgeName={'미래Biz Category Badge Level2 + PLUS'}
                                        level='Level2'
                                        badgeStyle={true} //linkable
                                        badgeColor={'green'}
                                        cooperation={false} //협력사 유무
                                        hasPlus={true} //퍼블용
                                        membersCorp={false} //퍼블용 멤버사 구분
                                    />
                                </li>
                                <li>
                                    <BadgeContainer
                                        badgeName={'미래Biz Category Badge Level3'}
                                        level='Level3'
                                        badgeStyle={true} //linkable
                                        badgeColor={'green'}
                                        cooperation={false} //협력사 유무
                                        hasPlus={false} //퍼블용
                                        membersCorp={false} //퍼블용 멤버사 구분
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="badge-list-v2">
                            <ul>
                                <li>
                                    <strong style={{display:'block', color:'#aaa', fontSize:'20px'}}>행복 경영<br/>(red : #ea012c)</strong>
                                </li>
                                <li>

                                    <BadgeContainer
                                        badgeName={'행복 경영 Category Badge Level1'}
                                        level='Level1'
                                        badgeStyle={false} //linkable
                                        badgeColor={'red'}
                                        cooperation={false} //협력사 유무
                                        hasPlus={false} //퍼블용
                                        membersCorp={false} //퍼블용 멤버사 구분
                                    />

                                </li>
                                <li>
                                    <BadgeContainer
                                        badgeName={'행복 경영 Category Badge Level2 + PLUS'}
                                        level='Level2'
                                        badgeStyle={false} //linkable
                                        badgeColor={'red'}
                                        cooperation={true} //협력사 유무
                                        hasPlus={true} //퍼블용
                                        membersCorp={false} //퍼블용 멤버사 구분
                                    />
                                </li>
                                <li>
                                    <BadgeContainer
                                        badgeName={'행복 경영 Category Badge Level3'}
                                        level='Level3'
                                        badgeStyle={false} //linkable
                                        badgeColor={'red'}
                                        cooperation={false} //협력사 유무
                                        hasPlus={false} //퍼블용
                                        membersCorp={false} //퍼블용 멤버사 구분
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="badge-list-v2">
                            <ul>
                                <li>
                                    <strong style={{display:'block', color:'#aaa', fontSize:'20px'}}>BM Design<br/>(skyblue : #61c1be)</strong>
                                </li>
                                <li>

                                    <BadgeContainer
                                        badgeName={'BM Design Category Badge Level1'}
                                        level='Level1'
                                        badgeStyle={true} //linkable
                                        badgeColor={'skyblue'}
                                        cooperation={false} //협력사 유무
                                        hasPlus={false} //퍼블용
                                        membersCorp={false} //퍼블용 멤버사 구분
                                    />

                                </li>
                                <li>
                                    <BadgeContainer
                                        badgeName={'BM Design Category Badge Level2 + PLUS'}
                                        level='Level2'
                                        badgeStyle={true} //linkable
                                        badgeColor={'skyblue'}
                                        cooperation={false} //협력사 유무
                                        hasPlus={true} //퍼블용
                                        membersCorp={false} //퍼블용 멤버사 구분
                                    />
                                </li>
                                <li>
                                    <BadgeContainer
                                        badgeName={'BM Design Category Badge Level3'}
                                        level='Level3'
                                        badgeStyle={true} //linkable
                                        badgeColor={'skyblue'}
                                        cooperation={false} //협력사 유무
                                        hasPlus={false} //퍼블용
                                        membersCorp={false} //퍼블용 멤버사 구분
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="badge-list-v2">
                            <ul>
                                <li>
                                    <strong style={{display:'block', color:'#323232', fontSize:'20px'}}>멤버사<br/>orange(#ef6d47)</strong>
                                </li>
                                <li>

                                    <BadgeContainer
                                        badgeName={'멤버사 orange Badge Level1'}
                                        level='Level1'
                                        badgeStyle={true} //linkable
                                        badgeColor={'orange'}
                                        cooperation={false} //협력사 유무
                                        hasPlus={false} //퍼블용
                                        membersCorp={true} //퍼블용 멤버사 구분
                                    />

                                </li>
                                <li>
                                    <BadgeContainer
                                        badgeName={'멤버사 orange Badge Level2 + PLUS'}
                                        level='Level2'
                                        badgeStyle={true} //linkable
                                        badgeColor={'orange'}
                                        cooperation={true} //협력사 유무
                                        hasPlus={true} //퍼블용
                                        membersCorp={true} //퍼블용 멤버사 구분
                                    />
                                </li>
                                <li>
                                    <BadgeContainer
                                        badgeName={'멤버사 orange Badge Level3'}
                                        level='Level3'
                                        badgeStyle={true} //linkable
                                        badgeColor={'orange'}
                                        cooperation={false} //협력사 유무
                                        hasPlus={false} //퍼블용
                                        membersCorp={true} //퍼블용 멤버사 구분
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="badge-list-v2">
                            <ul>
                                <li>
                                    <strong style={{display:'block', color:'#323232', fontSize:'20px'}}>멤버사<br/>lightgreen(#7db820)</strong>
                                </li>
                                <li>

                                    <BadgeContainer
                                        badgeName={'멤버사 lightgreen Badge Level1'}
                                        level='Level1'
                                        badgeStyle={true} //linkable
                                        badgeColor={'lightgreen'}
                                        cooperation={false} //협력사 유무
                                        hasPlus={false} //퍼블용
                                        membersCorp={true} //퍼블용 멤버사 구분
                                    />

                                </li>
                                <li>
                                    <BadgeContainer
                                        badgeName={'멤버사 lightgreen Badge Level2 + PLUS'}
                                        level='Level2'
                                        badgeStyle={true} //linkable
                                        badgeColor={'lightgreen'}
                                        cooperation={true} //협력사 유무
                                        hasPlus={true} //퍼블용
                                        membersCorp={true} //퍼블용 멤버사 구분
                                    />
                                </li>
                                <li>
                                    <BadgeContainer
                                        badgeName={'멤버사 lightgreen Badge Level3'}
                                        level='Level3'
                                        badgeStyle={true} //linkable
                                        badgeColor={'lightgreen'}
                                        cooperation={false} //협력사 유무
                                        hasPlus={false} //퍼블용
                                        membersCorp={true} //퍼블용 멤버사 구분
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="badge-list-v2">
                            <ul>
                                <li>
                                    <strong style={{display:'block', color:'#323232', fontSize:'20px'}}>멤버사<br/>purple(#9947df)</strong>
                                </li>
                                <li>

                                    <BadgeContainer
                                        badgeName={'멤버사 purple Badge Level1'}
                                        level='Level1'
                                        badgeStyle={true} //linkable
                                        badgeColor={'purple'}
                                        cooperation={false} //협력사 유무
                                        hasPlus={false} //퍼블용
                                        membersCorp={true} //퍼블용 멤버사 구분
                                    />

                                </li>
                                <li>
                                    <BadgeContainer
                                        badgeName={'멤버사 purple Badge Level2 + PLUS'}
                                        level='Level2'
                                        badgeStyle={true} //linkable
                                        badgeColor={'purple'}
                                        cooperation={true} //협력사 유무
                                        hasPlus={true} //퍼블용
                                        membersCorp={true} //퍼블용 멤버사 구분
                                    />
                                </li>
                                <li>
                                    <BadgeContainer
                                        badgeName={'멤버사 purple Badge Level3'}
                                        level='Level3'
                                        badgeStyle={true} //linkable
                                        badgeColor={'purple'}
                                        cooperation={false} //협력사 유무
                                        hasPlus={false} //퍼블용
                                        membersCorp={true} //퍼블용 멤버사 구분
                                    />
                                </li>
                            </ul>
                        </div>
                    */}
                    </div>
                </section>
                <section>
                    <h3 className="test">Badge 인증서 영역</h3>
                    <div className="preview" style={{paddingLeft: '25%'}}>
                        {/* s: 인증서1 영역 */}
                        <div className="certification_page base mypage-modal-pop">
                            <div className="contents-wrapper">
                                <div className="logo-area">
                                    <Icon className="sk-university"/>
                                </div>
                                <div className="ctf-wrapper">
                                    <div className="image-area">
                                        <Image src={ImgCongratulating}/>
                                    </div>
                                    <div className="message-wrapper">
                                        <span>김써니님의 <strong>AI/DT Literacy</strong><br/>
                                        프로그램 이수가 완료되었음을 알려드립니다.</span>
                                        <p className="message-area">
                                            {`본 프로그램의 이수를 위해 의미 있는 시간과 노력을 기울여 주신 것에 진심으로 감사드리며, mySUNI에서 발급한 수료증을 보내드립니다.
                                            \n『AI/DT Literacy』 프로그램을 이수한다는 것은SK의 구성원들이 필히 갖추어야 하는 AI/DT 역량에 대한 기본적인 이해와 \n지식을 보유한 것은 물론,AI/DT Category에서 제공하는 상위 과정들을 수강할 수 있는 자격을 갖추게 되었음을 의미합니다. \n본 프로그램의 이수를 통해 습득하신 역량이 현재 업무에 실제적으로 활용되기 위해서는지속적인 노력과 학습이 이루어져야 \n한다는 점을 당부드리며, 앞으로도 mySUNI AI/DT Category에 많은 관심을 부탁드립니다.
                                            \n감사합니다.`}
                                        </p>
                                        {/* 인증서 영역 */}
                                        <div className="certi_box">
                                            <div className="my_certificate mybadge">
                                                <Image src={BdMybadge} alt="인증서배경"/>
                                                <div className="txt_box">
                                                    <strong className="name">김써*</strong>
                                                    <p>
                                                        귀하는 아래 프로그램의 전 과정을
                                                        <br/>성공적으로 이수하였으며, Badge 획득 요건을
                                                        <br/>충족하였기에 이 증서를 드립니다.
                                                    </p>
                                                    <span className="category">AI/DT Literacy</span>
                                                    <span className="date">2021.04.27</span>
                                                </div>
                                                <div className="badge badge-list-v2">{/* badge-list-type > badge-list-v2로 변경  */}
                                                {/* 뱃지 통이미지 예시 */}
                                                <div className="badge-box-v2">
                                                    <span className="badge_thumb">
                                                        <img src={`https://image.mysuni.sk.com/suni-asset/public/images/all/badge-v2/BADGE-2t-plus_1.png`} alt="뱃지 예시"/>
                                                    </span>
                                                </div>
                                                {/* 뱃지 통이미지 예시 */}
                                                {/*
                                                    <BadgeContainer
                                                        badgeName={'AI/DT Literacy'}
                                                        level='Level1'
                                                        badgeStyle={false} //linkable
                                                        badgeColor={'blue'}
                                                        cooperation={false} //협력사 유무
                                                        hasPlus={false} //퍼블용
                                                        membersCorp={false} //퍼블용 멤버사 구분
                                                    /> */}
                                                </div>

                                                {/* s: 인증서 하단 로고영역 */}
                                                <div className="bottom_logo">
                                                    <span className='ui image'>
                                                        <img src={LogoImg} alt="logo"/>
                                                    </span>
                                                    {/* s: 협력사 로고 유무에 따른 추가 영역 */}
                                                    {/*  <>
                                                        <em className="icon collabo"><img src={CollabIcon} alt="collabo icon"/></em>
                                                        <span className='ui image'>
                                                            <img src={LogoImg2} alt="logo"/>
                                                        </span>
                                                    </> */}
                                                    {/* e: 협력사 로고 유무에 따른 추가 영역 */}
                                                </div>
                                                {/* e: 인증서 하단 로고영역 */}
                                            </div>
                                        </div>

                                        <div className="bottom-button">
                                            <Button className="fix line">인증서 출력하기</Button>
                                            <Button className="fix bg">인증서 다운로드</Button>
                                            <span>※ 이미지가 안나올 경우, 인터넷 옵션 &#8250; 도구 &#8250; 고급탭 에서 배경색 및 이미지 인쇄 부분을 체크해주세요. </span>
                                            <span>※ 인쇄 사이즈 조정이 어려우면, 이미지 파일을 다운받아 인쇄하여 주시기 바랍니다. </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* e: 인증서1 영역 */}
                        <br />
                        <br />
                        {/* s: 인증서2 영역 */}
                        <div className="certification_page base mypage-modal-pop">
                            <div className="contents-wrapper">
                                <div className="logo-area">
                                    <Icon className="sk-university"/>
                                </div>
                                <div className="ctf-wrapper">
                                    <div className="image-area">
                                        <Image src={ImgCongratulating}/>
                                    </div>
                                    <div className="message-wrapper">
                                        <span>김써니님의 <strong>AI/DT Literacy</strong><br/>
                                        프로그램 이수가 완료되었음을 알려드립니다.</span>
                                        <p className="message-area">
                                            {`본 프로그램의 이수를 위해 의미 있는 시간과 노력을 기울여 주신 것에 진심으로 감사드리며, mySUNI에서 발급한 수료증을 보내드립니다.
                                            \n『AI/DT Literacy』 프로그램을 이수한다는 것은SK의 구성원들이 필히 갖추어야 하는 AI/DT 역량에 대한 기본적인 이해와 \n지식을 보유한 것은 물론,AI/DT Category에서 제공하는 상위 과정들을 수강할 수 있는 자격을 갖추게 되었음을 의미합니다. \n본 프로그램의 이수를 통해 습득하신 역량이 현재 업무에 실제적으로 활용되기 위해서는지속적인 노력과 학습이 이루어져야 \n한다는 점을 당부드리며, 앞으로도 mySUNI AI/DT Category에 많은 관심을 부탁드립니다.
                                            \n감사합니다.`}
                                        </p>
                                        {/* 인증서 영역 */}
                                        <div className="certi_box">
                                            <div className="my_certificate mybadge">
                                                <Image src={BdMybadge} alt="인증서배경"/>
                                                <div className="txt_box">
                                                    <strong className="name">김써*</strong>
                                                    <p>
                                                        귀하는 아래 프로그램의 전 과정을
                                                        <br/>성공적으로 이수하였으며, Badge 획득 요건을
                                                        <br/>충족하였기에 이 증서를 드립니다.
                                                    </p>
                                                    <span className="category">AI/DT Literacy</span>
                                                    <span className="date">2021.04.27</span>
                                                </div>
                                                <div className="badge badge-list-v2">{/* badge-list-type > badge-list-v2로 변경  */}
                                                    {/* 뱃지 통이미지 예시 */}
                                                    <div className="badge-box-v2">
                                                        <span className="badge_thumb">
                                                            <img src={`https://image.mysuni.sk.com/suni-asset/public/images/all/badge-v2/BADGE-2t-plus_2.png`} alt="뱃지 예시"/>
                                                        </span>
                                                    </div>
                                                    {/* 뱃지 통이미지 예시 */}
                                                    {/* <BadgeContainer
                                                        badgeName={'AI/DT Literacy'}
                                                        level='Level1'
                                                        badgeStyle={false} //linkable
                                                        badgeColor={'blue'}
                                                        cooperation={true} //협력사 유무
                                                        hasPlus={true} //퍼블용
                                                        membersCorp={false} //퍼블용 멤버사 구분
                                                    /> */}
                                                </div>

                                                {/* s: 인증서 하단 로고영역 */}
                                                <div className="bottom_logo">
                                                    <span className='ui image'>
                                                        <img src={LogoImg} alt="logo"/>
                                                    </span>
                                                    {/* s: 협력사 로고 유무에 따른 추가 영역 */}
                                                    <>
                                                        <em className="icon collabo"><img src={CollabIcon} alt="collabo icon"/></em>
                                                        <span className='ui image'>
                                                            <img src={LogoImg2} alt="logo"/>
                                                        </span>
                                                    </>
                                                    {/* e: 협력사 로고 유무에 따른 추가 영역 */}
                                                </div>
                                                {/* e: 인증서 하단 로고영역 */}

                                            </div>
                                        </div>

                                        <div className="bottom-button">
                                            <Button className="fix line">인증서 출력하기</Button>
                                            <Button className="fix bg">인증서 다운로드</Button>
                                            <span>※ 이미지가 안나올 경우, 인터넷 옵션 &#8250; 도구 &#8250; 고급탭 에서 배경색 및 이미지 인쇄 부분을 체크해주세요. </span>
                                            <span>※ 인쇄 사이즈 조정이 어려우면, 이미지 파일을 다운받아 인쇄하여 주시기 바랍니다. </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* e: 인증서2 영역 */}
                    </div>
                </section>
            </Segment>
        </section>
    )
}

export default BadgeSample;