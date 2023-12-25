import classNames from 'classnames';
import React, { Component } from 'react';
import { Icon, Modal, ModalActions, Button } from 'semantic-ui-react';
import '../style.css';


class AddPlayListPopup extends Component {
    state = {isOpen :true, show :true, checked :false.valueOf, write: '일이삼사오륙칠팔구십일이삼사오륙칠팔구십일이삼사오륙칠팔구십일', error : true} 
    close = () =>{this.setState({isOpen : false})}
    click = () =>{this.setState({show : !this.state.show})}
    handleChange = (e)=> {
        this.setState({write: e.target.value});
        if(this.state.write.length > 30) {this.setState({error : true})
        }else{this.setState({error : false})}
    }

    render(){
        const {isOpen, show , error} = this.state;

        return(
            <Modal
                open={isOpen}
                close={this.close}
                className='base w600 pl-add'
                >
                    <Modal.Header className="res xfl">
                        Playlist 추가하기
                        <Button className='close24' onClick={this.close} ><Icon className='close24'/></Button>
                    </Modal.Header>
                    <Modal.Content>
                        <div className='scroll'>
                            <div className={classNames('add-top', {'show' : show})}>
                                <Button onClick={this.click} className='pl-add'><Icon className='listmore16-black'/>새로운 Playlist 만들기</Button>
                                <div className='pl-search'>
                                    <div className={classNames('ui input h38',{'error': error})}>
                                        <input type='text' placeholder='Playlist 명을 입력해주세요.' 
                                            onChange={this.handleChange}
                                            value={this.state.write}/>
                                        <span className='validation'>최대 30자까지 입력 가능합니다.</span>
                                    </div> 
                                    <Button className='bl'>확인</Button>
                                    <Button className='cl' onClick={this.click}>취소</Button>
                                </div>
                            </div>
                            <div className='add-bottom'>
                                {/* No-data */}    
                                <div className="no-cont-wrap">
                                    <Icon className="no-contents80" />
                                    <span className="blind">콘텐츠 없음</span>
                                    <div className="text">{`생성된 Playlist가 없습니다.\n구성원들과 함께 학습할 Playlist를 만들어보세요!`}</div>
                                </div>
                                
                                {/* 
                                <div className='add-list-top'>
                                    <span>나의 Playlist </span><strong>8개</strong>
                                </div> 
                                <div className='add-list'>
                                    <div className='add-item'>
                                        <div className='inner'>
                                            <div className='add-left'>
                                                <Checkbox className='base'/>
                                            </div>
                                            <div className='add-right'>
                                                <div className='add-tit'><strong className='ellipsis'>AI 아싸(Outsider)에서 AI 핵인싸(Insider)로!</strong></div>
                                                <div className='add-info'>
                                                    <div className='add-cnt'>전체 <strong>7개</strong> 학습카드</div>
                                                    <span>2021.12.24</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                    <div className='add-item'>
                                        <div className='inner'> 
                                            <div className='add-left'>
                                                <Checkbox className='base'/>
                                            </div>
                                            <div className='add-right'>
                                                <div className='add-tit'><strong className='ellipsis'>우리팀 마음근력 키우기</strong></div>
                                                <div className='add-info'>
                                                    <div className='add-cnt'>전체 <strong>11개</strong> 학습카드</div>
                                                    <span>2021.12.21</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='add-item'>
                                        <div className='inner'>
                                            <div className='add-left'>
                                                <Checkbox className='base'/>
                                            </div>
                                            <div className='add-right'>
                                                <div className='add-tit'><strong className='ellipsis'>이천포럼 다시보기</strong></div>
                                                <div className='add-info'>
                                                    <div className='add-cnt'>전체 <strong>8개</strong> 학습카드</div>
                                                    <span>2021.12.18</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='add-item'>
                                        <div className='inner'>
                                            <div className='add-left'>
                                                <Checkbox className='base'/>
                                            </div>
                                            <div className='add-right'>
                                                <div className='add-tit'><strong className='ellipsis'>Wifi 쉽게 이해하기</strong></div>
                                                <div className='add-info'>
                                                    <div className='add-cnt'>전체 <strong>6개</strong> 학습카드</div>
                                                    <span>2021.12.11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='add-item'>
                                        <div className='inner'>
                                            <div className='add-left'>
                                                <Checkbox className='base'/>
                                            </div>
                                            <div className='add-right'>
                                                <div className='add-tit'><strong className='ellipsis'>AI 아싸(Outsider)에서 AI 핵인싸(Insider)로!</strong></div>
                                                <div className='add-info'>
                                                    <div className='add-cnt'>전체 <strong>7개</strong> 학습카드</div>
                                                    <span>2021.12.24</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='add-item'>
                                        <div className='inner'>
                                            <div className='add-left'>
                                                <Checkbox className='base'/>
                                            </div>
                                            <div className='add-right'>
                                                <div className='add-tit'><strong className='ellipsis'>우리팀 마음근력 키우기</strong></div>
                                                <div className='add-info'>
                                                    <div className='add-cnt'>전체 <strong>11개</strong> 학습카드</div>
                                                    <span>2021.12.21</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='add-item'>
                                        <div className='inner'>
                                            <div className='add-left'>
                                                <Checkbox className='base'/>
                                            </div>
                                            <div className='add-right'>
                                                <div className='add-tit'><strong className='ellipsis'>이천포럼 다시보기</strong></div>
                                                <div className='add-info'>
                                                    <div className='add-cnt'>전체 <strong>8개</strong> 학습카드</div>
                                                    <span>2021.12.18</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='add-item'>
                                        <div className='inner'>
                                            <div className='add-left'>
                                                <Checkbox className='base'/>
                                            </div>
                                            <div className='add-right'>
                                                <div className='add-tit'><strong className='ellipsis'>Wifi 쉽게 이해하기</strong></div>
                                                <div className='add-info'>
                                                    <div className='add-cnt'>전체 <strong>6개</strong> 학습카드</div>
                                                    <span>2021.12.11</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>*/}
                            </div>
                        </div>
                    </Modal.Content>
                    <ModalActions>
                        <Button className='w190 pop p'>추가</Button>
                    </ModalActions>
            </Modal>
        )
    }
}

export default AddPlayListPopup