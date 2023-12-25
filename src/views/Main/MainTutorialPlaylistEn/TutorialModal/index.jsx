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
            {menuItem : 'Three Types of Playlists', render : () =>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img2"/>
                </Tab.Pane>
            },
        ];
        const panes3 = [
            {menuItem : 'Create a playlist\nfrom the learning card', render : () =>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img1"/>
                </Tab.Pane>
            },
            {menuItem : 'Create a playlist\nfrom the wish list ', render : () =>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img2"/>
                </Tab.Pane>
            },
            {menuItem : 'Create a playlist\nfrom My Page ', render : () =>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img3"/>
                </Tab.Pane>
            },
        ];

        const panes4 = [
            {menuItem : 'Playlist Detailed\nPage', render : () =>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img1"/>
                </Tab.Pane>
            },
            {menuItem : 'Recommend a\nPlaylist', render : () =>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img2"/>
                </Tab.Pane>
            },
            {menuItem : 'Recommended\nPlaylist', render : () =>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img3"/>
                </Tab.Pane>
            },
        ];    

        const panes5 =[
            {menuItem : 'Save via the profile pop-up window', render : ()=>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img1"/>
                </Tab.Pane>
            }  ,
            {menuItem : 'See your saved playlist', render : () =>
                <Tab.Pane className="tab-img-wrap">
                    <div className="tab-img t-img2"/>
                </Tab.Pane>
            },
        ];

        return (
            <>
                <Modal size={size} open={open} className='base w1000 tutorials4 front scrolling eng'>
                    <Modal.Header className="header4">
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
                                        <Link className={classNames('item tu1',activeMenu==='tu01' ? 'current' : '')} onClick={()=>this.setState({activeMenu: 'tu01'})}>mySUNI Playlist is <br/>ready for use!</Link>
                                        <Link className={classNames('item tu2',activeMenu==='tu02' ? 'current' : '')} onClick={()=>this.setState({activeMenu: 'tu02'})}>Main Page</Link>
                                        <Link className={classNames('item tu3',activeMenu==='tu03' ? 'current' : '')} onClick={()=>this.setState({activeMenu: 'tu03'})}>Create a Playlist</Link>
                                        <Link className={classNames('item tu4',activeMenu==='tu04' ? 'current' : '')} onClick={()=>this.setState({activeMenu: 'tu04'})}>Recommend a Playlist</Link>
                                        <Link className={classNames('item tu5',activeMenu==='tu05' ? 'current' : '')} onClick={()=>this.setState({activeMenu: 'tu05'})}>Save a Playlist</Link>
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
                                                            <Link className='intro' onClick={()=>this.setState({activeMenu : 'tu03'})}><i className="icon tuto-02"/>Create a <br/>Playlist</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='intro' onClick={()=>this.setState({activeMenu : 'tu04'})}><i className="icon tuto-03"/>Recommend a<br/>Playlist</Link>
                                                        </li>
                                                        <li>
                                                            <Link className='intro' onClick={()=>this.setState({activeMenu : 'tu05'})}><i className="icon tuto-04"/>Save a<br/>Playlist</Link>
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
                                                    <strong>
                                                        You can check three types of playlists (Created,
                                                        <br/>Recommended, and Saved) and get started
                                                        <br/>with your learning.
                                                    </strong>
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
                                                    <strong>
                                                        You can create your playlist and add courses of 
                                                        <br/>your choice in the Course Detailed Page,
                                                        <br/>Wish List, and My Page.
                                                    </strong>
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
                                                    <strong>
                                                        Start learning by recommending your playlist to 
                                                        <br/>others, and have others recommend you as well.
                                                    </strong>
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
                                                    <strong>
                                                        Join the others in their learning by saving playlists 
                                                        <br/>among the ones that are made public in profile cards. 
                                                        <br/>Just click on the Save the Playlist button.
                                                    </strong>
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
