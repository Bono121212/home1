import React, {Component} from 'react';
import {
    Modal, Image, Button, Checkbox
} from 'semantic-ui-react';

class CourseraModal extends Component {

    state = { open : false };
    close = () => this.setState({ open : false });
    open = () => this.setState({ open : true });

    render(){

        const { open } = this.state;

        return(
            <>
                <Modal
                    open={open}
                    className='base w1000 linkedin inner-scroll'
                    trigger={<Button color='teal' onClick={this.open}>팝업오픈</Button>}
                >
                    <Modal.Header>코세라 접속 시 학습 방법 안내</Modal.Header>
                    <Modal.Content>
                        <div className="scrolling-80vh">
                            <div className="content-wrap2">
                                <div className="linkedin-cont coursera">
                                    <ul className='txt-box'>
                                        <li>
                                            <div className="text1">1. Coursera 과정 학습을 시작하면 Coursera로 넘어가게 됩니다. Coursera 로그인을 위해서는,</div>
                                            <div className="text2">
                                                ① Coursera Site 상단의 <span className="red">‘로그인’</span> 버튼 Click<br/>
                                                ② <span className="red">‘mySUNI로 로그인하기’</span> 버튼 Click<br/>
                                                ③ 신뢰할 수 있는 Site <span className="red">‘예’</span> 버튼 Click
                                            </div>
                                        </li>
                                        <li>
                                            <div className="text1">2. Coursera 계정이 없는 경우, ‘신규 Coursera 사용자’ 버튼을 선택 후 로그인을 하면됩니다.</div>
                                        </li>
                                        <li>
                                            <div className="text1">3. 기존에 개인이 보유하고 있는 ‘Coursera계정’과 ‘mySUNI 계정’을 연결하여 학습하고 싶은 경우, ‘신규 Coursera 사용자’버튼을 선택하여 로그인 하면 됩니다.</div>
                                            <div className="text2">기존 계정이 "sk.com"인 경우 : '기존 Coursera 사용자임' 버튼 선택 (기존 Coursera 비밀번호와 동일)</div>
                                        </li>
                                    </ul>
                                    <div className="img">
                                        <Image src="/images/all/img-coursera.jpg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Content>
                    <Modal.Actions className='actions4'>
                        <div className="left">
                            <Checkbox label='오늘 하루 보지 않기' className='base'/>
                        </div>
                        <div className="right">
                            <Button className='close' onClick={this.close}> Close</Button>
                        </div>
                    </Modal.Actions>
                </Modal>
            </>
        )
    }
}

export default CourseraModal;