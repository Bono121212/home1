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
        this.state = {isHovered1: false, isHovered2: false};
        this.handleHover1 = this.handleHover1.bind(this);
        this.handleHover2 = this.handleHover2.bind(this);
    }

    handleHover1(isHovered1) {
        this.setState({isHovered1});
    }
    handleHover2(isHovered2) {
        this.setState({isHovered2});
    }

    render() {
        const activeClass1 = this.state.isHovered1 ? 'on' : '';
        const activeClass2 = this.state.isHovered2 ? 'on' : '';
        return (
            <section className="footer footer3">
                <div className="cont-inner">
                    <div className="footer-inner foot-nav-wrap">
                        <div className="foot-nav2">
                            <Link className="item" to=""><strong>개인정보 처리방침</strong></Link>
                            <Link className="item" to=""><span>mySUNI</span></Link>
                            <Link className="item" to=""><span>고객센터</span></Link>
                            <Link className="item" to=""><span>서비스 전체보기</span></Link>
                        </div>
                        <div className="foot-site">
                            <div className={`f-site-box ${activeClass1}`} onMouseEnter={() => this.handleHover1(true)} onMouseLeave={() => this.handleHover1(false)}>
                                <div className="f-site-btnbox"><span>SK주식회사 C&amp;C</span> <Icon name='chevron down' /></div>
                                <div className="f-site-menu">
                                    <ul><li className="link-options"><a href="none" rel="noopener noreferrer">SK하이닉스</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK텔레콤</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK이노베이션</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK네트웍스서비스</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK주식회사 C&amp;C</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK케미칼</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SKC</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">워커힐</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK네트웍스</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK엠앤서비스</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK가스</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK에너지</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK지오센트릭</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK엔무브</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK주식회사</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK텔링크</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK브로드밴드</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK텔레시스</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK트레이딩인터내셔널</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK인천석유화학</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK바이오팜</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK머티리얼즈</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK실트론</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK바이오텍</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK매직</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SKC HT&amp;M</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK아이이테크놀로지</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SUPEX추구협의회</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">Suni_Edu</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK 피유코어</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK디스커버리</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK어드밴스드</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK렌터카</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK디앤디</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK picglobal</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK넥실리스</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">울산지피에스</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">행복나래</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK오앤에스</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK스토아</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK엔펄스</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">ESSENCORE</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK&nbsp;하이이엔지</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK&nbsp;하이스텍</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">행복모아</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">가우스랩스 인크</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">서비스탑</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">서비스에이스</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">PS&amp;M</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">에프앤유신용정보</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK E&amp;S</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">코원에너지서비스</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">부산도시가스</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">충청에너지서비스</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">영남에너지서비스</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">영남에너지서비스(포항)</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">전남도시가스</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">강원도시가스</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">전북에너지서비스</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">부산정관에너지(주)</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">나래에너지서비스</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">파주에너지서비스</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">여주에너지서비스</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK China</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK온</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK어스온</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SKGCSH</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK핀크스</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SKHYCL</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SKHYCQL</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK스퀘어</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK Siltron CSS</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SKC High Tech Plastics</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK시그넷</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">민팃</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK Life Science Inc.</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SKC해외</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">mySUNIC</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK쉴더스</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">아이디케이스퀘어드</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK 임업</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">아이지이</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">대한송유관공사</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">mySUNI Creative Challenge</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SKT Open Collabo</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">에코밴스</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">환경시설관리주식회사</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK 에코플랜트</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK에코엔지니어링</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">LNG Americas Inc</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">Prism China</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK C&amp;C Beijing Co., Ltd.</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SKMS</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">써니운영</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">한국넥슬렌</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">테라온</a></li><li className="link-options"><a href="none" rel="noopener noreferrer">SK바이오사이언스</a></li></ul>
                                </div>
                            </div>
                            <div className={`f-site-box ${activeClass2}`} onMouseEnter={() => this.handleHover2(true)} onMouseLeave={() => this.handleHover2(false)}>
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
                    <div className="copy-wrap">
                        <div className="foot-logo">
                            <img src="https://image.mysuni.sk.com/suni-asset/public/images/all/logo_footer_v3.png" alt="SK mySUNI" />
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