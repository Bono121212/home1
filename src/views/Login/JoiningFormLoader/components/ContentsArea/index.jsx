import React, { Component } from "react";
import { Button, Dimmer, Form, Icon, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
import LeftArea from "../../../JoiningForm/components/LeftArea";

class ContentsArea extends Component {

    render(){

        return(
            <div className="login-content v2">
                {/* 일러스트 이미지 영역 */}
                <LeftArea />

                {/* 회원가입 form영역 */}
                <div className="right-area join-contents">
                    <Dimmer className="white-dimmer" active>
                        <div className="loading-area">
                            <span className="load-pot"/>
                            <strong>{`회원가입코드를 확인하고 있습니다.\n잠시만 기다려 주세요.`}</strong>
                        </div>
                    </Dimmer>
                    <div className="inner">
                        <div className="logo-section">
                            <Icon className="sk-login logo-new"/>
                        </div>
                        <div className="form-section">
                            <span className="form-title">회원가입</span>
                            <Form>
                                <Form.Field>
                                    <label>아이디 입력</label>
                                    <Input placeholder="Email"/>
                                </Form.Field>
                                <Form.Field>
                                    <label>회원가입코드 입력</label>
                                    <Input placeholder="회원가입코드 6자리"/>
                                </Form.Field>
                                <Form.Field>
                                    <span>회원가입코드의 유효기간이 만료되었나요?</span>
                                    <Link to="#">회원가입코드 재 요청</Link>
                                </Form.Field>
                                <Button className="fix bg" onClick={this.handleClick}>인증하기</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentsArea;