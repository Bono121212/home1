import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Button, Modal, Checkbox, Tab } from 'semantic-ui-react';
import classNames from 'classnames';


class TutorialModal extends Component {
    state = { open: true, activeMenu: 'tu01' };
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});


    render() {
        //
        const {open, size, activeMenu} = this.state;    
        const panes2 = [
            {menuItem : 'Main Page Playlist', render : () =>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img1"/>
                </Tab.Pane>
            },
            {menuItem : '3种类型的Playlist ', render : () =>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img2"/>
                </Tab.Pane>
            },
        ];
        const panes3 = [
            {menuItem : '在学习卡片中创建', render : () =>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img1"/>
                </Tab.Pane>
            },
            {menuItem : '在收藏课程中创建', render : () =>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img2"/>
                </Tab.Pane>
            },
            {menuItem : '在My Page中创建', render : () =>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img3"/>
                </Tab.Pane>
            },
        ];

        const panes4 = [
            {menuItem : 'Playlist详情', render : () =>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img1"/>
                </Tab.Pane>
            },
            {menuItem : '推荐Playlist', render : () =>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img2"/>
                </Tab.Pane>
            },
            {menuItem : '他人推荐的Playlist', render : () =>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img3"/>
                </Tab.Pane>
            },
        ];    

        const panes5 =[
            {menuItem : '通过个人资料弹窗添加', render : ()=>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img1"/>
                </Tab.Pane>
            }  ,
            {menuItem : '查看已收藏的Playlist', render : () =>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img2"/>
                </Tab.Pane>
            },
        ];

        return (
            <>
                <Modal size={size} open={open} className='base w1000 tutorials4 front scrolling chn'>
                    <Modal.Header className="header4">
                        <div className="right-btn">
                            <Checkbox label='不再显示' className='base'/>
                            <Button className="close" onClick={this.close}>Close</Button>
                        </div>
                    </Modal.Header>
                    <Modal.Content>
                        <div className="scrolling-80vh">
                            <div className="cont-wrap">
                                <div className="left">
                                    <div className="inner">
                                        <div className="top-logo"><i className="logo-new sk-login icon"/></div>
                                        <Link className={classNames('item tu1',activeMenu==='tu01' ? 'current' : '')} onClick={()=>this.setState({activeMenu: 'tu01'})}>与成员携手的<br/>mySUNI Playlist !</Link>
                                        <Link className={classNames('item tu2',activeMenu==='tu02' ? 'current' : '')} onClick={()=>this.setState({activeMenu: 'tu02'})}>Main Page</Link>
                                        <Link className={classNames('item tu3',activeMenu==='tu03' ? 'current' : '')} onClick={()=>this.setState({activeMenu: 'tu03'})}>创建Playlist</Link>
                                        <Link className={classNames('item tu4',activeMenu==='tu04' ? 'current' : '')} onClick={()=>this.setState({activeMenu: 'tu04'})}>推荐Playlist</Link>
                                        <Link className={classNames('item tu5',activeMenu==='tu05' ? 'current' : '')} onClick={()=>this.setState({activeMenu: 'tu05'})}>收藏Playlist</Link>
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
                                                            <Link className='intro' onClick={()=>this.setState({activeMenu : 'tu02'})}><i className="icon tuto-01"/>Main Page</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='intro' onClick={()=>this.setState({activeMenu : 'tu03'})}><i className="icon tuto-02"/>创建Playlist</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='intro' onClick={()=>this.setState({activeMenu : 'tu04'})}><i className="icon tuto-03"/>推荐Playlist</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='intro' onClick={()=>this.setState({activeMenu : 'tu05'})}><i className="icon tuto-04"/>收藏Playlist</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    { activeMenu === 'tu02'&& (
                                        <div className="tu-cont tu2">                                            
                                            {/* Main Page */}
                                            <div className="inner">
                                                <div className="top-text">
                                                    <strong>可查看并学习3种类型的Playlist<br/>我创建的、他人推荐的、我收藏的）。</strong>
                                                </div>
                                                <Tab menu={{ secondary: true }} panes ={panes2} className="tab-tu"/>
                                            </div>
                                        </div>
                                    )}
                                    { activeMenu === 'tu03'  && (
                                        <div className="tu-cont tu3">
                                            {/* Playlist 만들기 */}
                                            <div className="inner">
                                                <div className="top-text">
                                                    <strong>可在课程详情页面和收藏课程目录、<br/>My Page中添加课程，创建Playlist。</strong>
                                                </div>
                                                <Tab menu={{ secondary: true }} panes ={panes3} className="tab-tu"/>
                                            </div>
                                        </div>
                                    )}
                                    { activeMenu === 'tu04'  && (
                                        <div className="tu-cont tu4">
                                            {/* Playlist 추천하기 */}
                                            <div className="inner">
                                                <div className="top-text">
                                                    <strong>创建的Playlist可推荐给其他人，也可收到他人的推荐，<br/>体验一同学习的乐趣吧！</strong>
                                                </div>
                                                <Tab menu={{ secondary: true }} panes ={panes4} className="tab-tu"/>
                                            </div>
                                        </div>
                                    )}

                                    { activeMenu === 'tu05' && (
                                        <div className="tu-cont tu5">
                                            {/* Playlist 담아오기 */}
                                            <div className="inner">
                                                <div className="top-text">
                                                    <strong>在个人资料卡公开的Playlist中，点击“添加Playlist”，<br/>与成员们一起学习心仪课程吧。</strong>
                                                </div>
                                                <Tab menu={{ secondary: true }} panes ={panes5} className="tab-tu"/>
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
