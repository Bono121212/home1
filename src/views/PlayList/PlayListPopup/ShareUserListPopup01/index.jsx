import React, {Component} from 'react';
import {Button, Modal, Icon,Image } from 'semantic-ui-react';
import prf1 from '../../../../images/all/profile-48-px.svg';
import prf2 from '../../../../images/all/profile-03-48px.svg';
import prf3 from '../../../../images/all/profile-10-48px.svg';

class ShareUserListPopup01 extends Component{
    state = {isOpen :true}
    close = () =>{this.setState({isOpen : false})}
    render(){
        const {isOpen} = this.state;
        return(            
            <Modal
                open={isOpen}
                close={this.close}
                className='base w500 pl-share-user'
                >
                <Modal.Header className='res xfl'>
                    <span>추천받은 구성원 </span><strong>8명</strong>
                    <Button className='close24' onClick={this.close} ><Icon className='close24'/></Button>
                </Modal.Header>
                <Modal.Content>
                    <div className='inner scrolling-40vh'>
                        <div className='sh-user-list'>
                                <div className='user-prf'>
                                    <div className='ui profile'>
                                        <div className='pic s48'>
                                            <Image src={prf1} alt='프로필사진'/>
                                        </div>
                                        <div className='prf-info'>
                                            <div className='info-top'>
                                                <strong className='prf-name'>홍*동</strong>
                                                <span className='prf-comp'>SK C&amp;C</span>
                                                <span className="prf-group">/ CV Digital 그룹</span>
                                            </div>
                                            <span className='prf-email'>abc**@sk.com</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='user-prf'>
                                    <div className='ui profile'>
                                        <div className='pic s48'>
                                            <Image src={prf2} alt='프로필사진'/>
                                        </div>
                                        <div className='prf-info'>
                                            <div className='info-top'>
                                                <strong className='prf-name'>윤*슬</strong>
                                                <span className='prf-comp'>SK C&amp;C</span>
                                                <span className="prf-group">/ CV Digital 그룹</span>
                                            </div>
                                            <span className='prf-email'>sys**@sk.com</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='user-prf'>
                                    <div className='ui profile'>
                                        <div className='pic s48'>
                                            <Image src={prf3} alt='프로필사진'/>
                                        </div>
                                        <div className='prf-info'>
                                            <div className='info-top'>
                                                <strong className='prf-name'>나*진</strong>
                                                <span className='prf-comp'>SK C&amp;C</span>
                                                <span className="prf-group">/ CV Digital 그룹</span>
                                            </div>
                                            <span className='prf-email'>nanaj**@sk.com</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='user-prf'>
                                    <div className='ui profile'>
                                        <div className='pic s48'>
                                            <Image src={prf1} alt='프로필사진'/>
                                        </div>
                                        <div className='prf-info'>
                                            <div className='info-top'>
                                                <strong className='prf-name'>홍*동</strong>
                                                <span className='prf-comp'>SK C&amp;C</span>
                                                <span className="prf-group">/ CV Digital 그룹</span>
                                            </div>
                                            <span className='prf-email'>abc**@sk.com</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='user-prf'>
                                    <div className='ui profile'>
                                        <div className='pic s48'>
                                            <Image src={prf2} alt='프로필사진'/>
                                        </div>
                                        <div className='prf-info'>
                                            <div className='info-top'>
                                                <strong className='prf-name'>윤*슬</strong>
                                                <span className='prf-comp'>SK C&amp;C</span>
                                                <span className="prf-group">/ CV Digital 그룹</span>
                                            </div>
                                            <span className='prf-email'>sys**@sk.com</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='user-prf'>
                                    <div className='ui profile'>
                                        <div className='pic s48'>
                                            <Image src={prf2} alt='프로필사진'/>
                                        </div>
                                        <div className='prf-info'>
                                            <div className='info-top'>
                                                <strong className='prf-name'>윤*슬</strong>
                                                <span className='prf-comp'>SK C&amp;C</span>
                                                <span className="prf-group">/ CV Digital 그룹</span>
                                            </div>
                                            <span className='prf-email'>sys**@sk.com</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='user-prf'>
                                    <div className='ui profile'>
                                        <div className='pic s48'>
                                            <Image src={prf3} alt='프로필사진'/>
                                        </div>
                                        <div className='prf-info'>
                                            <div className='info-top'>
                                                <strong className='prf-name'>나*진</strong>
                                                <span className='prf-comp'>SK C&amp;C</span>
                                                <span className="prf-group">/ CV Digital 그룹</span>
                                            </div>
                                            <span className='prf-email'>nanaj**@sk.com</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='user-prf'>
                                    <div className='ui profile'>
                                        <div className='pic s48'>
                                            <Image src={prf3} alt='프로필사진'/>
                                        </div>
                                        <div className='prf-info'>
                                            <div className='info-top'>
                                                <strong className='prf-name'>나*진</strong>
                                                <span className='prf-comp'>SK C&amp;C</span>
                                                <span className="prf-group">/ CV Digital 그룹</span>
                                            </div>
                                            <span className='prf-email'>nanaj**@sk.com</span>
                                        </div>
                                    </div>
                                </div>

                        </div>
                    </div>
                </Modal.Content>
                <Modal.Actions>
                    <Button className="w190 pop p">확인</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}
 
export default ShareUserListPopup01;