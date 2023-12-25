import React, {Component} from 'react'
import { Icon } from 'semantic-ui-react'

class TitleArea extends Component {
    render() {
        return (
            <>
                <div className="header">
                    <div className="logo">
                        <i className="sk-university-login icon"><span className="blind">my suni</span></i>
                    </div>
                    <div className="login_language_wrap">
                        <span className="blind">언어선택</span>
                        <button type="button" className="btn_language is_active">한국어</button>
                        <b/>
                        <button type="button" className="btn_language">中文(简体)</button>
                        <b/>
                        <button type="button" className="btn_language">English</button>
                    </div>
                </div>
                <div className="desc-box">
                    <div className="desc-box-inner">
                        <Icon className='login-sub2 woman'/>
                        <div className="right-side">
                            <h2><strong className="primary">비밀번호 변경</strong> 안내</h2>
                            <p>구성원의 소중한 개인정보를 보호하고 개인정보 도용으로 인한 피해를 예방하기 위해 <strong className="primary">6개월 주기로 비밀번호 변경을 안내</strong>해 드리고 있습니다.</p>
                            <p>정기적인 비밀번호 변경으로 개인정보를 보호해 주세요.</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default TitleArea
