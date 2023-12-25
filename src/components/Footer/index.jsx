import React, {Component} from 'react'
import {Segment, Container, Form, Select, Input, TextArea, Checkbox, Divider, List, Icon, } from 'semantic-ui-react'
// import ActionButtons from '../ActionButtons'

class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <div className="cont-inner">
                    <i className="s-kuniversity icon"><span className="blind">SK university</span></i>
                    <div className="f-copyright">
                        COPYRIGHT <Icon className='copyright'><span className="blind">copyright sign</span></Icon>SK
                        university. ALL RIGHTS RESERVED.
                    </div>
                    <div className="f-nav">
                        <a className="item">Introduction</a>
                        <a className="item">공지사항</a>
                        <a className="item">FAQ</a>
                        <a className="item">문의하기</a>
                        <a className="item active">개인정보 처리방침</a>
                        <a className="item">서비스 이용약관</a>
                    </div>
                    <div className="ui country buttons">
                        <button className="ui button active">KR</button>
                        <button className="ui button">EN</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer
