import React, {Component} from 'react';
import { Button, Modal, Checkbox, Tab } from 'semantic-ui-react';
import classNames from 'classnames';
import { Link } from "react-router-dom";

class TutorialModal extends Component {
    state = { open: true, activeMenu: 'tu01' };
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});


    render() {
        //
        const {open, size, activeMenu} = this.state;
        const panes2 = [
            {menuItem : 'Simplified menu', render : () =>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img1"/>
                </Tab.Pane>
            },
            {menuItem : 'Profile card', render : () =>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img2"/>
                </Tab.Pane>
            },
        ];
        const panes3 = [
            {menuItem : 'Auto-complete function', render : () =>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img1"/>
                </Tab.Pane>
            },
            {menuItem : 'Typo correction function', render : () =>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img2"/>
                </Tab.Pane>
            },
        ];

        const panes4 = [
            {menuItem : 'My Learning Status', render : () =>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img1"/>
                </Tab.Pane>
            },
            {menuItem : 'Continue learning', render : () =>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img2"/>
                </Tab.Pane>
            },
        ];

        const panes6 =[
            {menuItem : `Learning-pattern-based \nrecommendations`, render : ()=>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img1"/>
                </Tab.Pane>
            }  ,
            {menuItem : `Recommendation\nbased on similar\nlearners​`, render : () =>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img2"/>
                </Tab.Pane>
            },
            {menuItem : `Courses you added \nas a channel of interest`, render : () =>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img3"/>
                </Tab.Pane>
            }
        ];

        return (
            <>
                <Modal size={size} open={open} className='base w1000 tutorials3 front scrolling eng'>
                    <Modal.Header className="header3">
                        <div className="right-btn">
                            <Checkbox label='I don’t want to see this anymore.' className='base'/>
                            <Button className="close" onClick={this.close}>Close</Button>
                        </div>
                    </Modal.Header>
                    <Modal.Content>
                        <div className="scrolling-80vh">
                            <div className="cont-wrap">
                                <div className="left">
                                    <div className="inner">
                                        <div className="top-logo"><i className="logo-new sk-login icon"/></div>
                                        <Link className={classNames('item tu1',activeMenu==='tu01' ? 'current' : '')} onClick={()=>this.setState({activeMenu: 'tu01'})}>mySUNI has been<br/>redesigned! </Link>
                                        <Link className={classNames('item tu2',activeMenu==='tu02' ? 'current' : '')} onClick={()=>this.setState({activeMenu: 'tu02'})}>Simplified menu</Link>
                                        <Link className={classNames('item tu3',activeMenu==='tu03' ? 'current' : '')} onClick={()=>this.setState({activeMenu: 'tu03'})}>Smarter searches</Link>
                                        <Link className={classNames('item tu4',activeMenu==='tu04' ? 'current' : '')} onClick={()=>this.setState({activeMenu: 'tu04'})}>A more convenient<br/>My Learning Section</Link>
                                        <Link className={classNames('item tu5',activeMenu==='tu05' ? 'current' : '')} onClick={()=>this.setState({activeMenu: 'tu05'})}>Learning Card previews <br/>with thumbnails</Link>
                                        <Link className={classNames('item tu6',activeMenu==='tu06' ? 'current' : '')} onClick={()=>this.setState({activeMenu: 'tu06'})}>Recommendations<br/>just for me</Link>
                                    </div>
                                </div>
                                <div className="right">
                                    { activeMenu === 'tu01' && (
                                        <div className="tu-cont tu1">
                                            {/* intro */}
                                            <div className="inner">
                                                <div className="intro-button">
                                                    <ul>
                                                        <li>
                                                            <Link className='intro' onClick={()=>this.setState({activeMenu : 'tu02'})}><i className="icon tuto-01"/>Top menu</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='intro' onClick={()=>this.setState({activeMenu : 'tu05'})}><i className="icon tuto-02"/>Learning<br/>Card</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='intro' onClick={()=>this.setState({activeMenu : 'tu06'})}><i className="icon tuto-03"/>Personalized<br/>recommen<br/>-dations</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    { activeMenu === 'tu02'&& (
                                        <div className="tu-cont tu2">
                                            {/* 간소화된 메뉴 구성 */}
                                            <div className="inner">
                                                <div className="top-text">
                                                    The simplified menu <strong>separates your exploring<br/>/searching area from “my area”</strong> for convenient<br/>searching and learning.
                                                </div>
                                                <Tab menu={{ secondary: true }} panes ={panes2} className="tab-tu"/>
                                            </div>
                                        </div>
                                    )}
                                    { activeMenu === 'tu03'  && (
                                        <div className="tu-cont tu3">
                                            {/* 똑똑한 검색 */}
                                            <div className="inner">
                                                <div className="top-text">
                                                    <strong>Improved search features like auto-complete<br/>and typo correction</strong> make it easier to find<br/>what you want to learn.
                                                </div>
                                                <Tab menu={{ secondary: true }} panes ={panes3} className="tab-tu"/>
                                            </div>
                                        </div>
                                    )}
                                    { activeMenu === 'tu04'  && (
                                        <div className="tu-cont tu4">
                                            {/* 편리해진 나의 학습 확인 */}
                                            <div className="inner">
                                                <div className="top-text">
                                                    Click <strong>“View My Learning Status” to see a summary<br/>of your learning</strong> and quickly get back to the course<br/><strong>you just learned.</strong>
                                                </div>
                                                <Tab menu={{ secondary: true }} panes ={panes4} className="tab-tu"/>
                                            </div>
                                        </div>
                                    )}

                                    { activeMenu === 'tu05' && (
                                        <div className="tu-cont tu5">
                                            {/* 썸네일로 미리보는 콘텐츠 */}
                                            <div className="inner">
                                                <div className="top-text">
                                                    Get a quick understanding of what you’re learning<br/>with <strong>learning cards as images.</strong><br/>Courses from your wish list can be found<br/>under the <strong>My Learning menu.</strong>
                                                </div>
                                                <div className="tab-tu">
                                                    <div className="ui segment tab tab-img-wrap">
                                                        <div className="tab-img t-img1"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    { activeMenu === 'tu06' && (
                                        <div className="tu-cont tu6">
                                            {/* 나만을 위한 추천 */}
                                            <div className="inner">
                                                <div className="top-text">
                                                    <strong>We'll recommend courses by data analysis using<br/>machine learning.</strong> We will continue to upgrade mySUNI,<br/>so look forward to it!
                                                </div>
                                                <Tab menu={{ secondary: true }} panes ={panes6} className="tab-tu"/>
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
