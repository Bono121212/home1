import React, {Component} from 'react'
import { Button, Checkbox, Icon, Image, Modal } from 'semantic-ui-react'
import Coursera01 from '../../../../../images/all/popup-img-coursera-01@3x.png';
import Coursera02 from '../../../../../images/all/popup-img-coursera-02@3x.png';
import Coursera03 from '../../../../../images/all/popup-img-coursera-03@3x.png';

class CourseraModal extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});

    render() {
        const {open, size} = this.state;

        return (
            <>
                <Modal size={size} open={open} onClose={this.close} className='w1000 base coursera'>
                    <Modal.Header>
                        Coursera 접속을 통한 학습 방법 안내
                    </Modal.Header>
                    <Modal.Content>
                        <div className="scrolling-80vh">
                            <div className="content-wrap">
                                <div className="coursera-cont">
                                    <ul className="txt-box">
                                        <li>
                                            <p className="text1">1. 과정 학습자 개인별로 mySUNI × Coursera Invitation 메일이 발송됩니다.</p>
                                            <p className="text2">수신 받으신 Invitation 메일 하단의 <strong className="red">[①Join Now]</strong>버튼 클릭 시에 해당 과정 사이트로 접속됩니다</p>
                                        </li>
                                        <li>
                                            <p className="text1">2. 사이트 접속 후, 아래 두가지 옵션 중 하나를 선택해 주세요.</p>
                                            <p className="text2">A.  '학습 프로그램에 참여하기' 팝업 창 <strong className="red">[②Join the program]</strong> 클릭</p>
                                            <p className="text2">B.  사이트 상단 배너 <strong className="red">[③Join]</strong> 클릭</p>
                                        </li>
                                        <li>
                                            <p className="text1">3. 로그인 창이 뜰 경우, <strong className="red">[④ Log in with mySUNI]</strong> 클릭하세요.</p>
                                            <p className="text2">mySUNI 계정으로 자동 로그인되며, 프로그램 가입 이후 학습이 가능합니다.</p>
                                        </li>
                                    </ul>
                                    <div className="img-box">
                                        <ul>
                                            <li>
                                                <Image src={Coursera01} alt='초대메일'/>
                                                <strong className="img-desc">초대 메일 내 Join Now 클릭</strong>
                                            </li>
                                            <li>
                                                <div className="arrow">
                                                    <i className="arrow-popup-coursera icon"><span
                                                    className="blind">next</span></i>
                                                </div>
                                            </li>
                                            <li>
                                                <Image src={Coursera02} alt='프로그램 가입하기'/>
                                                <strong className="img-desc">프로그램 가입하기</strong>
                                            </li>
                                            <li>
                                                <div className="arrow">
                                                    <i className="arrow-popup-coursera icon"><span
                                                    className="blind">next</span></i>
                                                </div>
                                            </li>
                                            <li>
                                                <Image src={Coursera03} alt='Coursera 내 mySUNI 로그인'/>
                                                <strong className="img-desc">Coursera 내 mySUNI 로그인</strong>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="txt-box">
                                        <p className="text1">
                                            <Icon className='document24'/>
                                                Coursera 관련 FAQ
                                        </p>
                                        <div className="ph">
                                            <p className="text2">Q1. 과정을 신청했는데  mySUNI × Coursera Invitation 메일이 오지 않았습니다.</p>
                                            <p className="text3">→ A. 해당 메일을 수신하지 못하신 분들께서는 학습 카드에 명시된 담당자분께 문의 부탁드립니다.</p>
                                        </div>
                                        <div className="ph">
                                            <p className="text2">Q2. “mySUNI(으)로 로그인하십시오” 버튼을 눌러도 로그인이 되질 않습니다.</p>
                                            <p className="text3">→ A. 접속중이신 Chrome, Internet Explorer/Edge 창을 모두 닫으신 후, 다시 접속하시기 바랍니다.</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Content>
                    <Modal.Actions className="actions4">
                        <div className="left">
                            <Checkbox label='오늘 하루 보지 않기' className='base'/>
                        </div>
                        <div className="right">
                            <Button className="close">Close</Button>
                        </div>
                    </Modal.Actions>
                </Modal>
            </>
        )
    }
}

export default CourseraModal;
