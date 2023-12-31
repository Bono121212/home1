import React, {Component} from 'react'
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom';
// import classNames from 'classnames';
import {
    Button,
    Modal,
    Checkbox, Image
} from 'semantic-ui-react';

class TutorialModal extends Component {
    state = {
        open: true,
        activeSubMenu: 'tu1'
    };
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});

    handleChange = (e, {value}) => this.setState({value});

    render() {
        //
        const {open, size, activeSubMenu} = this.state;

        const params = {
            loop: false,
            effect: 'fade',
            autoplay: {
              delay: 7000,
              disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
        }

        return (
            <>
                {/*<Button onClick={this.show('fullscreen')} basic>보기</Button>*/}

                <Modal size={size} open={open} className='base w1000 tutorials2 front scrolling'>
                    <Modal.Header className="header2">
                        <div className="right-btn">
                            <Checkbox label='더 이상 보지 않기' className='base'/>
                            <Button className="close" onClick={this.close}>Close</Button>
                        </div>
                    </Modal.Header>
                    <Modal.Content>
                        <div className="scrolling-80vh">
                            <div className="cont-wrap">
                                <div className="left">
                                    <div className="inner">
                                        <Link to="#" className={activeSubMenu==='tu1' ? 'current' : ''} onClick={()=>this.setState({activeSubMenu: 'tu1'})}>메인페이지 소개</Link>
                                        <Link to="#" className={activeSubMenu==='tu2' ? 'current' : ''} onClick={()=>this.setState({activeSubMenu: 'tu2'})}>My Learning Information</Link>
                                        <Link to="#" className={activeSubMenu==='tu3' ? 'current' : ''} onClick={()=>this.setState({activeSubMenu: 'tu3'})}>테마 별 학습 리스트</Link>
                                        <Link to="#" className={activeSubMenu==='tu4' ? 'current' : ''} onClick={()=>this.setState({activeSubMenu: 'tu4'})}>
                                            인증제도 소개
                                            <span className="beta">
                                                <span className="blind">beta</span>
                                            </span>
                                        </Link>
                                        <Link to="#" className={activeSubMenu==='tu5' ? 'current' : ''} onClick={()=>this.setState({activeSubMenu: 'tu5'})}>Learning Path</Link>
                                    </div>
                                </div>
                                <div className="right">
                                    { activeSubMenu === 'tu1' && (
                                        <div id="tu1" className="tu-cont current">
                                            <div className="title">
                                                <div className="tit1">학습자분들의 소중한 의견을 담아 새롭게 메인페이지를 개편하였습니다.</div>
                                                <div className="txt2">
                                                    이번에 새롭게 시작되는 <b>Badge에 대한 안내</b>와 신규과정, 인기과정 등 <br/>
                                                    <b>다양한 학습 콘텐츠를 선택</b>하실 수 있도록 준비하였습니다.
                                                </div>
                                            </div>
                                            <div className="main-img">
                                                <img src="/images/all/tu-img-main.png" alt="main" />
                                            </div>
                                            <div className="laptop"></div>
                                        </div>
                                    )}

                                    { activeSubMenu === 'tu2' && (
                                        <div id="tu2" className="tu-cont">
                                            <div className="title">
                                                <div className="tit1">나의 학습 진행 상태를 한 눈에 확인할 수 있는 My Learning Information 영역이
                                                    제공됩니다.
                                                </div>
                                                <div className="txt2">
                                                    <ul>
                                                        <li>학습 중인 콘텐츠가 최상단에 배치됩니다.</li>
                                                        <li>
                                                            Badge 획득을 위해 도전중인 Badge가 표기됩니다.<br/>
                                                            Badge를 클릭하면 연결된 학습콘텐츠들을 확인하고 바로 학습할 수 있습니다.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="img"><img src="/images/all/tu-img-contents.png" alt="" /></div>
                                        </div>
                                    )}

                                    { activeSubMenu === 'tu3' && (
                                        <div id="tu3" className="tu-cont">
                                            <div className="title">
                                                <div className="tit1">다양한 테마 별 학습 리스트 제공을 통해 원하는 콘텐츠로의 접근을 빠르게 지원해드립니다.</div>
                                                <div className="txt2">
                                                    <ul>
                                                        <li className="current">
                                                            개인화 추천과정(써니의 Pick) : 학습자들의 특성분석을 통해 당신만을 위한
                                                            맞춤 컨텐츠를 제공 드립니다.
                                                        </li>
                                                        <li>신규과정 : 따끈따끈한 최신 콘텐츠를 모아서 보여 드립니다.</li>
                                                        <li>인기과정 : 나만 모르는건가? 구성원들에게 인기있는 핫한 콘텐츠를 소개 드립니다.</li>
                                                        <li>권장과정 : Deep Change에 필요한 역량을 엄선하여 추천 드립니다.</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/*.swiper-section */}
                                            <Swiper {...params} className="type3">
                                                <div className='swiper-slide'>
                                                    <Image src='/images/all/tu-p01.png' alt=''/>
                                                </div>
                                                <div className='swiper-slide'>
                                                    <Image src='/images/all/tu-p02.png' alt=''/>
                                                </div>
                                                <div className='swiper-slide'>
                                                    <Image src='/images/all/tu-p03.png' alt=''/>
                                                </div>
                                                <div className='swiper-slide'>
                                                    <Image src='/images/all/tu-p04.png' alt=''/>
                                                </div>
                                            </Swiper>
                                        </div>
                                    )}

                                    { activeSubMenu === 'tu4' && (
                                        <div id="tu4" className="tu-cont">
                                            <div className="img"><img src="/images/all/tu-img-badge.jpg" alt=""/></div>
                                        </div>
                                    )}

                                    { activeSubMenu === 'tu5' && (
                                        <div id="tu5" className="tu-cont">
                                            <div className="title">
                                                <div className="tit1">
                                                    Learning Path는 각 Badge의 Skill이나 관련 지식에 따라<br/>
                                                    여러 개의 학습들이 코스로 제공되는 것을 의미합니다.
                                                </div>
                                                <div className="txt2">
                                                    획득하고자 하는 Badge의 Learning Path내 이미 이수한 학습이 있을 경우, <br/>
                                                    학습 완료 처리가 되어 있으므로 추가로 학습을 진행하실 필요는 없습니다.
                                                </div>
                                            </div>
                                            <div className="img">
                                                <img src="/images/all/tu-img-learning.png" alt="" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Modal.Content>
                </Modal>
            </>
        )
    }
}

export default TutorialModal;
