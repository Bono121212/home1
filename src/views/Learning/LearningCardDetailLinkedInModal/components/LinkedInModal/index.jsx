import React, {Component} from 'react'
import { Button, Checkbox, Image, Modal, } from 'semantic-ui-react'
import Linkedin01 from '../../../../../images/all/popup-img-linkedin-01.png'
import Linkedin02 from '../../../../../images/all/popup-img-linkedin-02.png'
import Linkedin03 from '../../../../../images/all/popup-img-linkedin-03.png'


class LinkedInModal extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});

    handleChange = (e, {value}) => this.setState({value});

    render() {
        const {open, size} = this.state;

        return (
            <>
                {/*<Button onClick={this.show('fullscreen')} basic>보기</Button>*/}

                <Modal size={size} open={open} onClose={this.close} className='w1000 base linkedin'>
                    <Modal.Header>
                        LinkedIn 최초 접속 시 학습 방법 안내
                    </Modal.Header>
                    <Modal.Content>
                        <div className="scrolling-80vh">
                            <div className="content-wrap2">
                                <div className="linkedin-cont">
                                    <ul className="txt-box">
                                        <li>
                                            <div className="text1">1. Linkedin 과정을 처음 학습하는 경우, 아래와 같이 기존에 개인이 보유하고 있는
                                                ‘Linkedin 계정’과 연동하여 사용할 것인지를 확인하는 화면이 보여집니다.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="text1">2. 기존에 개인이 보유하고 있는 ‘Linkedin 계정’과 ‘mySUNI 계정’을
                                                연결하지
                                                않고 학습하고 싶은 경우,
                                            </div>
                                            <div className="text2"><span className="bold">아래 표시된</span> <span
                                                className="red bold">①</span>번, <span className="red bold">②</span>번을
                                                순서대로 클릭하시면, <span className="bold">‘mySUNI계정’으로 학습</span>이 가능합니다.
                                            </div>
                                            <div className="text2"><span className="red">최초 연결 이후에는 학습할 때 마다 별도 로그인 할 필요가 없습니다.</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="text1">3. 기존에 개인이 보유하고 있는 ‘Linkedin 계정’과 ‘mySUNI 계정’을 연결하여
                                                학습하고 싶은 경우
                                            </div>
                                            <div className="text2">아래 표시된 <span className="red bold">③</span>번을 클릭후 개인이
                                                보유한 Linkedin 계정의 ID/PW를 입력하면 됩니다.
                                            </div>
                                            <div className="text2">LinkedIn 과정을 <span
                                                className="red">학습할 때 마다 개인 계정을 입력</span>하면, 학습이력이 <span
                                                className="red">LinkedIn profile에 통합 관리</span>됩니다.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="text1">
                                                <span className="bold">4. LinkedIn 학습사이트 정책으로 Internet Explorer는 더이상 지원하지 않습니다.</span>
                                            </div>
                                            <div className="text2">
                                                <span className="red">지원 브라우저: Microsoft Edge/Chrome/Firefox/Safari(10.1.1 이상) 등을 이용해주세요.</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="img-box">
                                        <ul>
                                            <li>
                                                <Image src={Linkedin01} alt=''/>
                                                <div>상세화면에서 [학습하기] 버튼 클릭</div>
                                                <i className="arrow-popup-linkedin icon"><span
                                                    className="blind">next</span></i>
                                            </li>
                                            <li>
                                                <Image src={Linkedin02} alt=''/>
                                                <div>개인 계정과의 연동을 확인하는 팝업</div>
                                                <i className="arrow-popup-linkedin icon"><span
                                                    className="blind">next</span></i>
                                            </li>
                                            <li>
                                                <Image src={Linkedin03} alt=''/>
                                                <div>재 확인하는 팝업</div>
                                            </li>
                                        </ul>
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

export default LinkedInModal;
