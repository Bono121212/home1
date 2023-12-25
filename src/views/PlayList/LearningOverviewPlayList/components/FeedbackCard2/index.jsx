import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Profile48Px from "../../../../../images/all/profile-48-px.png";
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
                        <a href={()=>false} className="ui profile" onClick={()=>{this.setState({modal : true})}}>
                            <div className="pic s48">
                                <Image src={Profile48Px} alt="프로필사진 임시이미지" />
                            </div>
                            <div className="prf-info">
                                <div className="info-top">
                                    <strong className="prf-name">김태양</strong><span className="reg-date">2021.09.29</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="bottom-detail">
                        <p>나는 매일 성장한다라는 느낌을 갖기 위해 뭔가를 해야되겠다고 생각했습니다. </p>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default FeedbackCard;