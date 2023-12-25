import React, {Component} from 'react'
import {Image, Button } from 'semantic-ui-react'
import {Link} from "react-router-dom";
// import classNames from 'classnames';

// import CategoryDetail from '../CategoryDetail/CategoryDetail'
import HeaderLogo from "../../images/all/header-logo-t.svg"
import '../sample.css'

export default class UserHeader extends Component {
    state = {activeItem: '', focus: false, write: '', noticeOpen: true };

    handleClick = () =>
        this.setState((prevState) => ({active: !prevState.active}))

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    closeNotification = () => this.setState({noticeOpen: false})

    render() {
        // const {activeItem, noticeOpen} = this.state;

        return (
            <>
                <section className="header-t">
                    <div className="group">
                        <div className="cont-inner">
                            <div className="t-title">
                                <strong>강사전용 학습관리 시스템</strong>
                            </div>
                            <div className="t-logo">
                                <Link to="/main/MainIndexNew">
                                    <Image src={HeaderLogo}/>
                                </Link>
                            </div>
                            <div className="t-logout">
                                <Button>로그아웃</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}