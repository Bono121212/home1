import React, { Component } from 'react';
import { Form, Icon, Button, Image } from "semantic-ui-react";
import ImgWelcome from '../../../../../images/all/loing-intorduction-suni.png';

class ContentsArea extends Component{
    render(){
        return (
            <Form className="terms-content">
                <div className="logo-area">
                    <Icon className="sk-login logo-new"/>
                </div>
                <Form.Field>
                    <div className="header-tit">
                        <span>회원가입 완료 !</span>
                    </div>
                </Form.Field>
                <Form.Field className="wel-wrap">
                    <div className="image-wrap">
                        <Image src={ImgWelcome}/>
                    </div>
                    <div className="msg-wrap">
                        <strong className="suni-tit">mySUNI</strong>
                        <strong>성장과 행복을 위한 학습 플랫폼 mySUNI에 오신 것을 환영합니다.</strong>
                        <span>mySUNI와 함께 새로운 학습 여정을 시작해 볼까요?</span>
                    </div>
                </Form.Field>
                <div className="button-area">
                    <Button className="bg fix">로그인</Button>
                </div>
            </Form>
        )
    }
}

export default ContentsArea;