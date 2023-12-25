import React, { Component } from "react";
import { Button, Form, Icon, Input } from "semantic-ui-react";
import LeftArea from "../../../JoiningForm/components/LeftArea";

class ContentsArea extends Component {

    render(){

        return(
            <div className="login-content v2">
                {/* 일러스트 이미지 영역 */}
                <LeftArea />
                {/* 회원가입 form영역 */}
                <div className="right-area join-contents pwd-content">
                    <div className="inner">
                        <div className="logo-section">
                            <Icon className="sk-login logo-new"/>
                        </div>
                        <div className="form-section">
                            <span className="form-title">비밀번호 변경</span>
                            <Form>
                                <Form.Field>
                                    <label>비밀번호 입력</label>
                                    <Input placeholder="비밀번호를 입력해 주세요."/>
                                </Form.Field>
                                <Form.Field>
                                    <label>비밀번호 확인</label>
                                    <Input placeholder="다시 한번 비밀번호를 입력해 주세요."/>
                                    <span className="validation err-msg"><Icon className="error16" />비밀번호가 일치하지 않습니다. 정확히 입력해 주세요.</span>
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