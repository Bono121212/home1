import React, {Component} from 'react'
import {
    Icon
} from 'semantic-ui-react'

export default class UserFooter extends Component {
    render() {
        return (
            <section className="footer">
                <div className="cont-inner">
                    <Icon className="s-kuniversity"/><span className="blind">SK university</span>
                    <div className="f-copyright">
                        COPYRIGHT<Icon className="copyright"/><span className="blind">copyright sign</span>
                        mySUNI. ALL RIGHTS RESERVED.
                    </div>
                    <div className="f-nav">
                        <a className="item" href='/introduction/all-introduction'>Introduction</a>
                        <a className="item" href='/support/notice-list-user'>Notice</a>
                        <a className="item" href='/support/faq-list-user'>FAQ</a>
                        <a className="item" href='/support/qa-list-user'>Q&A</a>
                        <a className="item active" href='/common/privacy-policy-modal'>개인정보 처리방침</a>
                    </div>

                    {/*<div className="country-toogle">*/}
                    {/*    <Radio toggle />*/}
                    {/*</div>*/}
                </div>
            </section>
        )
    }
}