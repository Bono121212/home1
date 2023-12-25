import React, {Component} from 'react'
import {Popup, Button, Icon} from "semantic-ui-react";
import CategoryBanner1 from "../../images/all/bnr-01.png"
import CategoryBanner2 from "../../images/all/bnr-02.png"
import CategoryBanner3 from "../../images/all/bnr-only-1.png"

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
                className='g-menu-detail'
            >
                <div className="layer lms-category">
                    <div className="table-css">
                        <div className="row head">
                            <div className="cell v-middle">Category</div>
                            <div className="cell v-middle">Channel</div>
                        </div>
                        <div className="row body">
                            <div className="cell vtop">
                                <div className="select-area">
                                    <div className="scrolling">
                                        <Button className="active">AI</Button>
                                        {/* .active 활성화 // */}
                                        <Button>DT</Button>
                                        <Button>행복</Button>
                                        <Button>SV·ESG</Button>
                                        <Button>혁신디자인</Button>
                                        <Button>Global</Button>
                                        <Button>Leadership</Button>
                                        <Button>Management</Button>
                                        <Button>미래반도체</Button>
                                        <Button>Green</Button>
                                        <Button className="bm">BM Design &#38; Storytelling</Button>
                                        <Button>SK아카데미</Button>
                                        <Button>SK경영</Button>
                                        <Button>Life Style</Button>
                                        <Button>SK(주) C&amp;C</Button>
                                        
                                    </div>
                                </div>
                            </div>
                            {/*<div className="cell vtop">
                                <div className="select-area">
                                    <div className="scrolling">
                                        <Button>AI 전체보기 <span>(125)</span></Button>
                                        <Button>AI Fundamental <span>(34)</span></Button>
                                        <Button>AI Biz. Implemetation <span>(20)</span></Button>
                                        <Button>AI Tech Essential <span>(14)</span></Button>
                                        <Button>Computer Vison AI <span>(20)</span></Button>
                                        <Button>Language AI <span>(13)</span></Button>
                                        <Button>Speech AI <span>(8)</span></Button>
                                        <Button>AI Tech Advanced <span>(13)</span></Button>
                                        <Button>AI technologies <span>(3)</span></Button>
                                        <Button>AI Digital Reasoning <span>(19)</span></Button>
                                        <Button>AI Lucidworks <span>(15)</span></Button>
                                        <Button>AI Narrative Science <span>(12)</span></Button>
                                        <Button>AI SAS <span>(8)</span></Button>
                                        <Button>AI Yseop <span>(5)</span></Button>
                                    </div>
                                </div>
                            </div>*/}
                            <div className="category-channel-wrap">
                                <div className="category-title-bar">
                                    <span className="category-title">AI <span className="num">(125)</span></span>
                                    <a className="btn-category-all">
                                        <span>전체보기</span>
                                        <i className="arr-r-gray" />
                                    </a>
                                </div>
                                <div className="category-body">
                                    <div className="category-row">
                                        <span className="check-type2">
                                        <label htmlFor="check1">
                                            <input type="checkbox" id="check1"/>
                                            <span className="check-type2-marker"/>
                                        </label>
                                        <a className="check-type2-text">AI FundamentalFundamentalFundamentalFundamental<strong> (20)</strong></a>
                                        </span>
                                            <span className="check-type2">
                                            <label htmlFor="check1">
                                                <input type="checkbox" id="check1"/>
                                                <span className="check-type2-marker"/>
                                            </label>
                                            <a className="check-type2-text">AI Fundamental<strong> (20)</strong></a>
                                        </span>
                                    </div>
                                    <div className="category-row">
                                        <span className="check-type2">
                                        <label htmlFor="check1">
                                            <input type="checkbox" id="check1"/>
                                            <span className="check-type2-marker"/>
                                        </label>
                                        <a className="check-type2-text">AI Fundamental<strong> (20)</strong></a>
                                        </span>
                                        <span className="check-type2">
                                            <label htmlFor="check1">
                                                <input type="checkbox" id="check1"/>
                                                <span className="check-type2-marker"/>
                                            </label>
                                            <a className="check-type2-text">AI Fundamental<strong> (20)</strong></a>
                                        </span>
                                    </div>
                                    <div className="category-row">
                                        <span className="check-type2">
                                        <label htmlFor="check1">
                                            <input type="checkbox" id="check1"/>
                                            <span className="check-type2-marker"/>
                                        </label>
                                        <a className="check-type2-text">AI Fundamental<strong> (20)</strong></a>
                                        </span>
                                        <span className="check-type2">
                                            <label htmlFor="check1">
                                                <input type="checkbox" id="check1"/>
                                                <span className="check-type2-marker"/>
                                            </label>
                                            <a className="check-type2-text">AI FundamentalFundamentalFundamentalFundamental<strong> (20)</strong></a>
                                        </span>
                                    </div>
                                </div>
                                {/*배너2개일경우*/}
                                {/*<div className="category-banner">
                                    <span className="banner-holder">
                                        <a><img src={CategoryBanner1} alt=""/></a>
                                    </span>
                                    <span className="banner-holder">
                                        <a><img src={CategoryBanner2} alt=""/></a>
                                    </span>

                                </div>*/}
                                {/*배너하나일경우*/}
                                <div className="category-banner-single">
                                    <a><img src={CategoryBanner3} alt=""/></a>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<Button icon href='../mypage/channel-change-modal'
                            className='img-icon change-channel-of-interest'>
                        <span className="underline">관심 Channel 변경 <Icon className='setting17'/></span>
                    </Button>*/}
                    <Button className="close" onClick={this.handleClose}>
                        <i className="new16x17 icon"><span className="blind">close</span></i>
                    </Button>
                </div>
            </Popup>
        )
    }
}
