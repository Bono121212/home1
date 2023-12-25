import React, {Component} from 'react';
import { Button, Modal, Icon,Image } from 'semantic-ui-react';
import prf1 from '../../../../images/all/profile-48-px.svg';
import prf2 from '../../../../images/all/profile-03-48px.svg';
import prf3 from '../../../../images/all/profile-10-48px.svg';
import { Left } from './Left';



class SharePlayListPopup21 extends Component {
    
    state = {isOpen :true,focus: false, activeItem : ''} 
    close = () =>{this.setState({isOpen : false})}
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render(){
        const {isOpen} = this.state;

        return(
            <Modal
                open={isOpen}
                close={this.close}
                className='base w1200 pl-share'
                >
                <Modal.Header className="res xfl">
                    <span>Playlist 추천하기</span>
                    <Button className='close24' onClick={this.close} ><Icon className='close24'/></Button>
                </Modal.Header>
                <Modal.Content>
                    <div className='inner scrolling-80vh'>
                        <div className='sh-left'>
                            {/* tab-menu */}
                            <Left />
                        </div>
                        <div className='sh-right'>
                            {/* right - header */}
                            <div className='sh-header'>
                                <div className='h-left'>
                                    <span>Selected</span><strong> 8명</strong>
                                </div>
                                <div className='h-right'>
                                    <Button icon className='all-dt'><Icon className='delete14'/>전체삭제</Button>
                                </div>
                            </div>
                            {/* right - contents */}
                            <div className='sh-list-contents'>
                                
                                {/* No-data */}    
                                {/* <div className="no-cont-wrap">
                                    <Icon className="no-contents80" />
                                    <span className="blind">콘텐츠 없음</span>
                                    <div className="text">{` Playlist를 추천할\n학습자를 선택해주세요.`}</div>
                                </div> */}
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
                                        <Button icon className='img-icon clear'><Icon className='clear2'/></Button>
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
                                        <Button icon className='img-icon clear'><Icon className='clear2'/></Button>
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
                                        <Button icon className='img-icon clear'><Icon className='clear2'/></Button>
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
                                        <Button icon className='img-icon clear'><Icon className='clear2'/></Button>
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
                                        <Button icon className='img-icon clear'><Icon className='clear2'/></Button>
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
                                        <Button icon className='img-icon clear'><Icon className='clear2'/></Button>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                        <div className='sh-bottom'>
                            <div className='sh-tit'>메시지 내용</div>
                            <div className='ui right-top-count input'>{/* class : error > validation */}
                                <span className="count"><span className="now">0</span>/<span className="max">50</span></span>
                                <input type="text" placeholder="Playlist와 함께 추천할 메시지 내용을 입력해주세요."/>
                                <span className="validation">최대 50자까지 입력 가능합니다.</span>
                            </div>
                            
                        </div>
                    </div>
                </Modal.Content>
                <Modal.Actions>
                    <Button className="w190 pop p">추천</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default SharePlayListPopup21;

