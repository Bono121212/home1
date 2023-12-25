import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {
    Icon
} from 'semantic-ui-react'


// const selectOptionsSite = [
//     {key: '', value: 'https://www.icheonforum.com/', text:'이천포럼'},
//     {key: '', value: 'https://on.mysuni.com', text:'mySUNI ON'},
//     {key: '', value: '', text:'mySUNI Connect'},
//     {key: '', value: '', text:'Linkedin Learning'},
//     {key: '', value: '', text:'Coursera'}
// ]

export default class UserFooterV2 extends Component {
    constructor() {
        super();
        this.state = {
            isHovered: false
        };
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(isHovered) {
        this.setState({isHovered});
    }

    render() {
        const activeClass = this.state.isHovered ? 'on' : '';
        return (
            <section className="footer footer2">
                <div className="cont-inner">
                    <div className="footer-inner foot-nav-wrap">
                        <div className="foot-nav">
                            <dl className="foot-nav-item">
                                <dt className="foot-nav-li tit"><a className="item" href="/suni-main/introduction/MySuni"><span>About US</span></a></dt>
                                <dd className="foot-nav-li"><a className="item" href="/suni-main/introduction/MySuni"><span>mySUNI</span></a></dd>
                                <dd className="foot-nav-li"><a className="item" href="/suni-main/introduction/College"><span>Category</span></a></dd>
                                <dd className="foot-nav-li"><a className="item" href="/suni-main/introduction/Certification"><span>인증제도</span></a></dd>
                                <dd className="foot-nav-li"><a className="item" href="/suni-main/introduction/PromotionTab"><span>홍보자료</span></a></dd>
                            </dl>
                            <dl className="foot-nav-item">
                                <dt className="foot-nav-li tit"><a className="item" href="/suni-main/board/support/Notice"><span>고객센터</span></a></dt>
                                <dd className="foot-nav-li"><a className="item" href="/suni-main/board/support/Notice"><span>Notice</span></a></dd>
                                <dd className="foot-nav-li"><a className="item" href="/suni-main/board/support/FAQ"><span>FAQ</span></a></dd>
                                <dd className="foot-nav-li"><a className="item" href="/suni-main/board/support/Q&A"><span>1:1 문의</span></a></dd>
                            </dl>
                            <dl className="foot-nav-item arrow">
                                <dt className="foot-nav-li tit"><Link><span>Sitemap</span><span className="item-icon"><Icon className="angle right"/></span></Link></dt>
                            </dl>
                            <dl className="foot-nav-item arrow">
                                <dt className="foot-nav-li tit"><Link className="on"><span>개인정보처리방침</span><span className="item-icon"><Icon className="angle right"/></span></Link></dt>
                            </dl>
                        </div>
                        <div className="foot-site">
                            {/* <Select placeholder='Family Site' className="f-site" options={selectOptionsSite}/> */}
                            {/* 2021.10.08 재작업 */}
                            <div className={`f-site-box ${activeClass}`} onMouseEnter={() => this.handleHover(true)}
                  onMouseLeave={() => this.handleHover(false)}>
                                <div className="f-site-btnbox"><span>Family Site</span> <Icon name='chevron down' /></div>
                                <div className="f-site-menu">
                                    <ul>
                                        <li className="link-options"><a href="https://www.icheonforum.com/view/fo/main/after" target="_blank" rel="noopener noreferrer">이천포럼</a></li>
                                        <li className="link-options"><a href="https://on.mysuni.com/auth/login" target="_blank" rel="noopener noreferrer">mySUNI ON</a></li>
                                        <li className="link-options"><a href="http://connect.mysuni.com/Mobile/index.asp" target="_blank" rel="noopener noreferrer">mySUNI Connect</a></li>
                                        <li className="link-options"><a href="https://www.linkedin.com/learning/" target="_blank" rel="noopener noreferrer">LinkedIn Learning</a></li>
                                        <li className="link-options"><a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer">Coursera</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-wrap">
                    <div className="cont-inner">
                        <div className="foot-logo">
                            <h2 id="foot-logo"><Icon className="s-kuniversity"/><span className="blind">SK university</span></h2>
                        </div>
                        <div className="foot-copyright">
                            COPYRIGHT<Icon className="copyright"/><span className="blind">copyright sign</span>
                            mySUNI. ALL RIGHTS RESERVED.
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}