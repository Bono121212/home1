import React, { Component } from "react";

import { Button, Popup,  Image} from "semantic-ui-react";

import BtnLang from '../../../images/all/btn-gnb-lang.svg';



class LanguageSelectPopup extends Component {
    state = {  activeItem: '',  isOpen: false};

    handleOpen = () => {this.setState({ isOpen: true })}
    handleClose = () => {this.setState({ isOpen: false })}

    render(){
        return(
            /* 운영과 달라져서 class new 추가 */
            <Popup className="pop_language_slt new"
                trigger={
                    <Button className="btn_lang">
                        <Image src={BtnLang} className="btn_lang" alt="다국어선택"/>
                    </Button>
                }
                open={this.state.isOpen}
                onOpen={this.handleOpen}
                onClose={this.handleClose}
                on='click'
                position='bottom right'
            >

                {/* header 삭제 */}
                {/* <Popup.Header className="lang_header">
                    <strong className="h_tit">Language</strong>
                    <div className="close_wrapper">
                        <Button className="close" Icon onClick={this.handleClose}></Button>
                    </div>
                </Popup.Header> */}
                <Popup.Content>
                    <div className="lang_inner">
                        <ul>{/* 내가 선택한 언어 class on추가 */}
                            <li><button className="on">한국어</button></li>
                            <li><button>中文(简体)</button></li>
                            <li><button>English</button></li>
                        </ul>
                    </div>
                </Popup.Content>
            </Popup>
        )
    }
}

export default LanguageSelectPopup;