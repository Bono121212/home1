import React, { useState } from "react";
import { Form, Button, Modal } from "semantic-ui-react";
import PopInqueryHeader from "../../../LoginInquery/components/PopInqueryHeader";
import PopInquery from "../../../LoginInquery/components/PopInquery";

const ContentsArea = () => {
    // 문의하기
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);
    const open = () => {
        setIsOpen(true);
    }

    return (
        <div className="login-content v2">
            {/* 일러스트 이미지 영역 */}
            <div className="left-area">
                <div className="inner">
                    <h1 className="title">Welcome!</h1>
                    <p>구성원의 지속가능한 성장과 행복을 지원하는<br/><strong>‘mySUNI’</strong> 에 오신것을 환영합니다.</p>
                    <div className="illust">
                        <img src="https://image.mysuni.sk.com/suni-asset/public/images/all/login/img_login_welcome.png" alt="머그컵을 들고 서있는 남자1명, 책상에 앉아있는 여자1명이 손인사를 하고있다." />
                    </div>
                </div>
            </div>
            {/* 회원가입 form영역 */}
            <div className="right-area sty2">
                <div className="inner">
                    <div className="login_language_wrap">
                        <span class="blind">언어선택</span>
                        <button type="button" className="btn_language is_active">한국어</button>
                        <b></b>
                        <button type="button" className="btn_language">中文(简体)</button>
                        <b></b>
                        <button type="button" className="btn_language">English</button>
                    </div>

                    <div className="logo big" style={{marginBottom: "1.8rem", marginLeft:"0rem"}}>
                        <i className="sk-university-login-big icon"><span className="blind">SUNI</span></i>
                    </div>

                    <p className="login_1" style={{fontSize: "20px", marginBottom: "10px"}}>로그인</p>
                    <Form>
                        <Form.Field>
                            <label className="blind">Email</label>
                            <div className="ui h48 input">
                                <input id="id" type="text" placeholder="E-mail" name="userID" />
                                <i aria-hidden="true" className="clear link icon"></i>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <label className="blind">Password</label>
                            <div className="ui h48 input">
                                <input id="password" type="password" placeholder="Password" name="password" />
                                <i aria-hidden="true" className="clear link icon"></i>
                            </div>
                        </Form.Field>
                        <div className="save-id-wrap">
                            <div className="ui base checkbox">
                                <input id="inputSaveId" type="checkbox" />
                                <label for="inputSaveId">E-mail 저장</label>
                            </div>
                        </div>
                        <button id="buttonLogin" className="ui button fix bg login">Login</button>
                    </Form>

                    <ul className="txt-btn-area">
                        <li><a href="http://localhost:3000/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-04-01.html" rel="noopener noreferrer" id="aResetPassword">비밀번호 초기화</a></li>
                        <li><a href="https://ma.mysuni.sk.com/suni-asset/public/design-pub-ext/REACT/open1223/dist/html/login/LO-01-01.html" rel="noopener noreferrer" target="_blank">SK 구성원이 아니신가요?</a></li>
                    </ul>
                    <ul className="login-guide">
                        <li><p>최초 로그인 시 비밀번호를 변경해야 합니다.</p></li>
                        <li><p>비밀번호 분실 시, 비밀 번호 초기화를 통해 접속 하실 수 있습니다.</p></li>
                        <li><p>비밀번호 입력 시도 5회 초과하여 계정이 잠겼을 때, 비밀번호 초기화를 통해 접속 하실 수 있습니다.</p></li>
                        <li><p>Help Desk : 02) 6323-9002</p></li>
                    </ul>
                    <div className="btn-helpdesk-area">
                        <button type="button" className="btn-helpdesk" onClick={open}>문의하기</button>
                    </div>
                </div>
            </div>

            <Modal open={isOpen} onClose={close} className='base w1000 inquery-modal'>
                <Modal.Header>
                    <PopInqueryHeader />
                    <Button className="close black" onClick={close}><span className="blind">Close</span></Button>
                </Modal.Header>
                <Modal.Content>
                    <div className="scrolling-80vh">
                        <PopInquery />
                    </div>
                </Modal.Content>
            </Modal>

        </div>
    )
}

export default ContentsArea;