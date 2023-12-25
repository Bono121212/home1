import React, {Component} from 'react'
import {Image, Icon} from 'semantic-ui-react'
// import confirmPng from '../../images/all/confirm.png';
import footerLogo from "../../images/all/s-kuniversity-footerN.png"

export default class TeacherFooter extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         isHovered: false,
    //         popup : false
    //     };
    //     this.handleHover = this.handleHover.bind(this);
    // }

    // handleHover(isHovered) {
    //     this.setState({isHovered});
    // }

    render() {

        return (
            <section className="footer2">
                <div className="copy-wrap">
                    <div className="cont-inner">
                        <div className="foot-logo">
                            <Image src={footerLogo} alt="logo"/>
                        </div>
                        <div className="foot-copyright">
                            COPYRIGHT<Icon className="copyright"/><span className="blind">copyright sign</span>
                            mySUNI. ALL RIGHTS RESERVED.
                        </div>
                        <div className="f-nav">
                            {/* <Button className="memberout" onClick={() => this.setState({popup : true})}>탈퇴하기</Button> */}
                            <a className="item active" target="_blank" href="https://mysuni.sk.com/suni-main/community/main/my-communities" rel="noopener noreferrer">커뮤니티 바로가기</a>
                        </div>

                        {/* <Modal //기존에 쓰는 운영의 팝업과 동일
                            open={this.state.popup}
                            className="size-mini">
                            <div className="main">
                                <Modal.Header>탈퇴</Modal.Header>
                                <Modal.Content>
                                    <Modal.Description>
                                        <Image wrapped className="modal-img" size="medium" src={confirmPng}/>
                                        <div className="title">탈퇴하기</div>
                                        <p>탈퇴 시 계정이 삭제됩니다.<br/>정말로 탈퇴하시겠습니까?</p>
                                    </Modal.Description>
                                </Modal.Content>
                            </div>
                            <Modal.Actions className="normal">
                                <Button secondary onClick={() => this.setState({popup:false})}>Cancle</Button>
                                <Button primary onClick={() => this.setState({popup:false})}>OK</Button>
                            </Modal.Actions>
                        </Modal> */}

                    </div>
                </div>
            </section>
        )
    }
}