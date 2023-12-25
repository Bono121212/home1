import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Button, Modal, Checkbox } from 'semantic-ui-react';
import classNames from 'classnames';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

class TutorialModal extends Component {
    state = { open: true, activeMenu: 'tu01' };
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});


    render() {
        const {open, size, activeMenu} = this.state;
        const paramsIOS = {
            slidesPerView: 1,
            slidesPerGroup: 1,
            navigation: {
                prevEl: '.tuto-swiper-navi.ios .swiper-button-prev',
                nextEl: '.tuto-swiper-navi.ios .swiper-button-next'
            }
        }
        return (
            <>
                <Modal size={size} open={open} className='base tutorials5 front scrolling zh'>
                    <Modal.Header className="tuto-header">
                        <div className="right-btn">
                            <Checkbox label='不再显示' className='base'/>
                            <Button className="close" onClick={this.close}>关闭</Button>
                        </div>
                    </Modal.Header>
                    <Modal.Content className='tuto-content'>
                        <div className="scrolling-80vh">
                            <div className="cont-wrap">
                                <div className="cont-nav">
                                    <div className="tuto-nav">
                                        <Link className={classNames('item tu1',activeMenu==='tu01' ? 'current' : '')} onClick={()=>this.setState({activeMenu: 'tu01'})}>mySUNI应用程序更新说明</Link>
                                        <Link className={classNames('item tu2',activeMenu==='tu02' ? 'current' : '')} onClick={()=>this.setState({activeMenu: 'tu02'})}>iOS应用设定</Link>
                                        <Link className={classNames('item tu3',activeMenu==='tu03' ? 'current' : '')} onClick={()=>this.setState({activeMenu: 'tu03'})}>Android应用设定</Link>
                                    </div>
                                    <div className="tuto-qrcode">
                                        <div className='qrcode-img'>
                                            <img src="https://image.mysuni.sk.com/suni-asset/public/images/all/tuto-v5/tuto-v5-qrcode.png" alt="QR Code" />
                                        </div>
                                        <div className="qrcode-desc">
                                            <p>扫扫二维码 即刻下载<br/><em>全新改版后的<br/>mySUNI应用程序吧！</em></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cont-body">
                                    { activeMenu === 'tu01' && (
                                        <div className="tab_cont tu1">
                                            <div className="tab-img-wrap">
                                                <div className="tab-img t-img1"></div>
                                            </div>
                                        </div>
                                    )}
                                    { activeMenu === 'tu02' && (
                                        <div className='tab_cont tu2'>
                                            <div className='tab_title'>
                                                <img src="https://image.mysuni.sk.com/suni-asset/public/images/all/tuto-v5/tuto-v5-tab2-title-zh.png" alt="IOS 써니 앱 설정" />
                                            </div>  
                                            <Swiper {...paramsIOS}>
                                                <div className='swiper-slide'>
                                                    <div className="tab-img-wrap">
                                                        <div className="tab-img t-img1"></div>
                                                    </div>
                                                </div>
                                                <div className='swiper-slide'>
                                                    <div className="tab-img-wrap">
                                                        <div className="tab-img t-img2"></div>
                                                    </div>
                                                </div>
                                            </Swiper>
                                            <div className='tuto-swiper-navi ios'>
                                                <button type='button' className="swiper-button-prev"></button>
                                                <button type='button' className="swiper-button-next"></button>
                                            </div>
                                        </div>
                                    )}
                                    { activeMenu === 'tu03' && (
                                        <div className='tab_cont tu3'>
                                            <div className='tab_title'>
                                                <img src="https://image.mysuni.sk.com/suni-asset/public/images/all/tuto-v5/tuto-v5-tab3-title-zh.png" alt="Android 써니 앱 설정" />
                                            </div>
                                            <div className="tab-img-wrap">
                                                <div className="tab-img t-img1"></div>
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
