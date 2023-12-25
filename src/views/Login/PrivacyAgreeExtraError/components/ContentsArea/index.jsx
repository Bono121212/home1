import React, { Component } from 'react';
import { Form, Icon, Button, Modal } from 'semantic-ui-react';
import ModalPrivacyMore from '../ModalPrivacyMore';

class ContentsArea extends Component{
    render(){
        return(
            <div className="terms-content">
                <div className="logo-area">
                    <Icon className="sk-login logo-new"/>
                </div>
                <div className="agree-inner">
                    <div className="title-text">
                        <span>SK이노베이션은 <br/>
                        <strong>mySUNI Learning Management System</strong>운영과 관련하여 <br/>
                        다음과 같이 구성원 여러분의 개인정보를 수집합니다.</span>
                    </div>
                    <Form>
                        <Form.Field>
                            <div class="ui checkbox base black">
                                <input class="hidden ui checkbox base" readonly="" tabindex="0" type="checkbox" value="" id="all_chk"/>
                                <label for="all_chk"><strong>[전체동의]</strong> 개인정보 수집 및 이용 동의</label>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <div class="ui checkbox base">
                                <input class="hidden ui checkbox base" readonly="" tabindex="0" type="checkbox" value="" id="p_chk"/>
                                <label for="p_chk"><strong className="check_red">[필수]</strong> 홈페이지 회원가입 및 관리 및 mySUNI 콘텐츠/서비스 제공</label>
                            </div>
                            {/* 방침 제공 */}
                            <div className="privacy-text-box">
                                <div className="inner">
                                    <p className="text1">수집항목</p>
                                    <p className="text2">SK 이노베이션 주식회사 (이하 "회사")는 mySUNI Learning Management System 운영과 관련하여 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 ‘정보통신망법’), 개인정보보호법에 따라 구성원의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을 수립ㆍ공개합니다. 회사는 개인정보처리방침을 개정하는 경우 공지사항(또는 개별공지)을 통하여 공지할 것입니다.</p>
                                    <p className="text3">SK 이노베이션 주식회사 (이하 "회사")는 mySUNI Learning Management System 운영과 관련하여 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 ‘정보통신망법’), 개인정보보호법에 따라 구성원의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을 수립ㆍ공개합니다. 회사는 개인정보처리방침을 개정하는 경우 공지사항(또는 개별공지)을 통하여 공지할 것입니다.</p>
                                </div>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <div class="ui checkbox base">
                                <input class="hidden ui checkbox base" readonly="" tabindex="0" type="checkbox" value="" id="s_chk"/>
                                <label for="s_chk"><strong className="check_gray">[선택]</strong> 개인 맞춤형 특화 콘텐츠 제공</label>
                            </div>
                            {/* 방침 제공 */}
                            <div className="privacy-text-box">
                                <div className="inner">
                                    <p className="text1">수집항목</p>
                                    <p className="text2">SK 이노베이션 주식회사 (이하 "회사")는 mySUNI Learning Management System 운영과 관련하여 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 ‘정보통신망법’), 개인정보보호법에 따라 구성원의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을 수립ㆍ공개합니다. 회사는 개인정보처리방침을 개정하는 경우 공지사항(또는 개별공지)을 통하여 공지할 것입니다.</p>
                                    <p className="text3">SK 이노베이션 주식회사 (이하 "회사")는 mySUNI Learning Management System 운영과 관련하여 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 ‘정보통신망법’), 개인정보보호법에 따라 구성원의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을 수립ㆍ공개합니다. 회사는 개인정보처리방침을 개정하는 경우 공지사항(또는 개별공지)을 통하여 공지할 것입니다.</p>
                                </div>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <div className="top-area">
                                <div class="ui checkbox base">
                                    <input class="hidden ui checkbox base" readonly="" tabindex="0" type="checkbox" value="" id="f_chk"/>
                                    <label for="f_chk"><strong className="check_red">[필수]</strong> 개인정보 처리방침</label>
                                </div>
                                <Modal
                                    className="privacy-modal"
                                    trigger={<Button icon className="go-more">
                                    자세히보기
                                    <Icon className="gray-arrow"/>
                                </Button>}>
                                    <ModalPrivacyMore/>
                                </Modal>
                            </div>
                            {/* 방침 제공 */}
                            <div className="privacy-bottom-box">
                                <p>{`SK이노베이션 주식회사(이하 “회사”)는 「개인정보보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.`}</p>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            {/* 에러문구 */}
                            <span className="validation">개인정보 처리방침에 동의해주세요.</span>

                            <div className="button-area">
                                <Button className="line fix">취소</Button>
                                <Button className="bg fix">확인</Button>
                            </div>
                        </Form.Field>
                    </Form>
                </div>
            </div>
        )
    }
}

export default ContentsArea;