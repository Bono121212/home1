import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Profile48Px from "../../../../../images/all/profile-48-px.svg";
import InfoModal from "../InfoModal";

class FeedbackCard extends Component {
    state = {modal : false};

    render(){
        const {modal} = this.state

        return(
            <div className="feedback-card">
                {modal && <InfoModal/>}
                <div className="inner">
                    <div className="top-prf">                        
                        <a className="ui profile" onClick={()=>{this.setState({modal : true})}} href={()=>false}>
                            <div className="pic s48">
                                <Image src={Profile48Px} alt="프로필사진 임시이미지" />
                            </div>
                            <div className="prf-info">
                                <div className="info-top">
                                    <strong className="prf-name">김써니</strong><span className="reg-date">2021.09.29</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="bottom-detail">
                        <p>평생 학습이라는 것 측면에서 고정 마인드 셋이 아닌 성장 마인드 셋이 학습자에게 필요함을 느꼈습니다.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeedbackCard;