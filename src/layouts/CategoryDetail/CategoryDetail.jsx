import React, {Component} from 'react'
import { Link } from "react-router-dom";
import {Popup, Button} from "semantic-ui-react";
import CategoryBanner1 from "../../images/all/bnr-01.png"
import CategoryBanner2 from "../../images/all/bnr-02.png"
import CategoryBanner3 from "../../images/all/bnr-only-1.png"
import './style.css';
export default class CategoryDetail extends Component {
    state = {isOpen: false};
    handleOpen = () => {
        this.setState({isOpen: true})
    };
    handleClose = () => {
        this.setState({isOpen: false})
    };

    render() {
        return (
            <Popup
                trigger={<Button className="ui detail-open">Category</Button>}
                on='click'
                basic
                open={this.state.isOpen}
                onClose={this.handleClose}
                onOpen={this.handleOpen}
                className='g-menu-detail-v2'
            >
                <div className="layer lms-category">
                    <div className="category-nav-wrap">
                        <div className="category-nav">
                            {/* 팝업 Open시에는 첫번째 메뉴가 활성화 되어야 함 */}
                            <Button>AI</Button>
                            <Button>DT</Button>
                            <Button>행복</Button>
                            <Button>SV·ESG</Button>
                            <Button>혁신디자인</Button>
                            <Button>Global</Button>
                            <Button>Leadership</Button>
                            <Button className="active">Management</Button>{/* .active 활성화 */}
                            <Button>미래반도체</Button>
                            <Button>Green</Button>
                            <Button>BM Design &#38; Storytelling</Button>
                            <Button>SK아카데미</Button>
                            <Button>SK경영</Button>
                            <Button>Life Style</Button>
                            <Button>SK(주) C&amp;C</Button>
                        </div>
                    </div>
                    <div className="category-channel-wrap">
                        <div className="category-header-wrap">
                            <h2>Management</h2>
                            <Link to="/common/CollegeAllNew" onClick={this.handleClose}>전체보기</Link>
                        </div>
                        <div className="category-item-wrap">
                            <div className="category-item-grid">
                                <div className="category-item">
                                    <div className="category-title">
                                        <span className="check-type3">
                                            <label htmlFor="check_nav8_10">
                                                <input type="checkbox" id="check_nav8_10" checked="checked"/>
                                                <span className="check-type3-marker"></span>
                                            </label>
                                        </span>
                                        <Link to="/common/CollegeAllNew" className="category-all">기업 경영/전략<span className="num">70</span></Link>
                                    </div>
                                    <div className="category-list">
                                        <ul>
                                            <li>
                                                <span className="check-type3">
                                                    <label htmlFor="check_nav8_11">
                                                        <input type="checkbox" id="check_nav8_11" checked="checked"/>
                                                        <span className="check-type3-marker"></span>
                                                    </label>
                                                </span>
                                                <Link to="#" className='category-sub'>Financial Story<span className="num">20</span></Link>
                                            </li>
                                            <li>
                                                <span className="check-type3">
                                                    <label htmlFor="check_nav8_12">
                                                        <input type="checkbox" id="check_nav8_12" checked="checked"/>
                                                        <span className="check-type3-marker"></span>
                                                    </label>
                                                </span>
                                                <Link to="#" className='category-sub'>Strategy Essentials<span className="num">19</span></Link>
                                            </li>
                                            <li>
                                                <span className="check-type3">
                                                    <label htmlFor="check_nav8_13">
                                                        <input type="checkbox" id="check_nav8_13" checked="checked"/>
                                                        <span className="check-type3-marker"></span>
                                                    </label>
                                                </span>
                                                <Link to="#" className='category-sub'>Scenario Planning Essentials<span className="num">1</span></Link>
                                            </li>
                                            <li>
                                                <span className="check-type3">
                                                    <label htmlFor="check_nav8_14">
                                                        <input type="checkbox" id="check_nav8_14" checked="checked"/>
                                                        <span className="check-type3-marker"></span>
                                                    </label>
                                                </span>
                                                <Link to="#" className='category-sub'>Scenario Planning Advanced<span className="num">30</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="category-item">
                                    <div className="category-title">
                                        <span className="check-type3">
                                            <label htmlFor="check_nav8_20">
                                                <input type="checkbox" id="check_nav8_20"/>
                                                <span className="check-type3-marker"></span>
                                            </label>
                                        </span>
                                        <Link to="/common/CollegeAllNew" className="category-all">마케팅/브랜드<span className="num">38</span></Link>
                                    </div>
                                    <div className="category-list">
                                        <ul>
                                            <li>
                                                <span className="check-type3">
                                                    <label htmlFor="check_nav8_21">
                                                        <input type="checkbox" id="check_nav8_21"/>
                                                        <span className="check-type3-marker"></span>
                                                    </label>
                                                </span>
                                                <Link to="#" className='category-sub'>마케팅 Essentials<span className="num">19</span></Link>
                                            </li>
                                            <li>
                                                <span className="check-type3">
                                                    <label htmlFor="check_nav8_22">
                                                        <input type="checkbox" id="check_nav8_22"/>
                                                        <span className="check-type3-marker"></span>
                                                    </label>
                                                </span>
                                                <Link to="#" className='category-sub'>브랜드 Essentials<span className="num">19</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="category-item">
                                    <div className="category-title">
                                        <span className="check-type3">
                                            <label htmlFor="check_nav8_30">
                                                <input type="checkbox" id="check_nav8_30"/>
                                                <span className="check-type3-marker"></span>
                                            </label>
                                        </span>
                                        <Link to="/common/CollegeAllNew" className="category-all">재무 회계<span className="num">27</span></Link>
                                    </div>
                                    <div className="category-list">
                                        <ul>
                                            <li>
                                                <span className="check-type3">
                                                    <label htmlFor="check_nav8_31">
                                                        <input type="checkbox" id="check_nav8_31"/>
                                                        <span className="check-type3-marker"></span>
                                                    </label>
                                                </span>
                                                <Link to="#" className='category-sub'>회계 Essentials<span className="num">27</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="category-item">
                                    <div className="category-title">
                                        <span className="check-type3">
                                            <label htmlFor="check_nav8_40">
                                                <input type="checkbox" id="check_nav8_40"/>
                                                <span className="check-type3-marker"></span>
                                            </label>
                                        </span>
                                        <Link to="/common/CollegeAllNew" className="category-all">HR/조직설계<span className="num">25</span></Link>
                                    </div>
                                    <div className="category-list">
                                        <ul>
                                            <li>
                                                <span className="check-type3">
                                                    <label htmlFor="check_nav8_41">
                                                        <input type="checkbox" id="check_nav8_41"/>
                                                        <span className="check-type3-marker"></span>
                                                    </label>
                                                </span>
                                                <Link to="#" className='category-sub'>HR Essentials<span className="num">25</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="category-item">
                                    <div className="category-title">
                                        <span className="check-type3">
                                            <label htmlFor="check_nav8_50">
                                                <input type="checkbox" id="check_nav8_50"/>
                                                <span className="check-type3-marker"></span>

                                            </label>
                                        </span>
                                        <Link to="/common/CollegeAllNew" className="category-all">법무<span className="num">30</span></Link>
                                    </div>
                                    <div className="category-list">
                                        <ul>
                                            <li>
                                                <span className="check-type3">
                                                    <label htmlFor="check_nav8_51">
                                                        <input type="checkbox" id="check_nav8_51"/>
                                                        <span className="check-type3-marker"></span>
                                                    </label>
                                                </span>
                                                <Link to="#" className='category-sub'>공정거래법 Essentials<span className="num">30</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="category-item">
                                    <div className="category-title">
                                        <span className="check-type3">
                                            <label htmlFor="check_nav8_60">
                                                <input type="checkbox" id="check_nav8_60"/>
                                                <span className="check-type3-marker"></span>
                                            </label>
                                        </span>
                                        <Link to="/common/CollegeAllNew" className="category-all">IP<span className="num">30</span></Link>
                                    </div>
                                    <div className="category-list">
                                        <ul>
                                            <li>
                                                <span className="check-type3">
                                                    <label htmlFor="check_nav8_61">
                                                        <input type="checkbox" id="check_nav8_61"/>
                                                        <span className="check-type3-marker"></span>
                                                    </label>
                                                </span>
                                                <Link to="#" className='category-sub'>IP Mind-Set Essentials<span className="num">30</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="category-item">
                                    <div className="category-title">
                                        <span className="check-type3">
                                            <label htmlFor="check_nav8_70">
                                                <input type="checkbox" id="check_nav8_70"/>
                                                <span className="check-type3-marker"></span>
                                            </label>
                                        </span>
                                        <Link to="/common/CollegeAllNew" className="category-all">SCM/Operation<span className="num">10</span></Link>
                                    </div>
                                    {/* 상세목록 없음 */}
                                </div>
                                <div className="category-item">
                                    <div className="category-title">
                                        <span className="check-type3">
                                            <label htmlFor="check_nav8_80">
                                                <input type="checkbox" id="check_nav8_80"/>
                                                <span className="check-type3-marker"></span>
                                            </label>
                                        </span>
                                        <Link to="/common/CollegeAllNew" className="category-all">Competency(Working Smart)<span className="num">30</span></Link>
                                    </div>
                                    <div className="category-list">
                                        <ul>
                                            <li>
                                                <span className="check-type3">
                                                    <label htmlFor="check_nav8_81">
                                                        <input type="checkbox" id="check_nav8_81"/>
                                                        <span className="check-type3-marker"></span>
                                                    </label>
                                                </span>
                                                <Link to="#" className='category-sub'>Negotiaion Essentials<span className="num">28</span></Link>
                                            </li>
                                            <li>
                                                <span className="check-type3">
                                                    <label htmlFor="check_nav8_82">
                                                        <input type="checkbox" id="check_nav8_82"/>
                                                        <span className="check-type3-marker"></span>
                                                    </label>
                                                </span>
                                                <Link to="#" className='category-sub'>Measurement Essentials<span className="num">2</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="category-item">
                                    <div className="category-title">
                                        <span className="check-type3">
                                            <label htmlFor="check_nav8_80">
                                                <input type="checkbox" id="check_nav8_80"/>
                                                <span className="check-type3-marker"></span>
                                            </label>
                                        </span>
                                        <Link to="/common/CollegeAllNew" className="category-all">Biz. Acumen(for all)<span className="num">5</span></Link>
                                    </div>
                                    {/* 상세가 없는경우 */}
                                </div>
                            </div>
                        </div>
                        <div className="category-banner-wrap">
                            <div className="category-banner">
                                <Link to="/introduction/College?subTab=AI"><img src={CategoryBanner1} alt=""/></Link>
                                <Link to="/introduction/College?subTab=AI"><img src={CategoryBanner2} alt=""/></Link>
                                <Link to="/introduction/College?subTab=AI"><img src={CategoryBanner3} alt=""/></Link>
                            </div>
                        </div>
                    </div>
                    {/* <Button className="close" onClick={this.handleClose}>
                        <i className="new16x17 icon"><span className="blind">close</span></i>
                    </Button> */}
                </div>
            </Popup>
        )
    }
}
