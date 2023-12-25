import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Profile48Px from "../../../../images/all/profile-48-px.svg";
import InfoModal from "../InfoModal";

class OverviewCommunityCard extends Component {
    state = {modal : false};

    render(){
        const {modal} = this.state

        return(
            <div className="community-card">
                {modal && <InfoModal/>}
                <div className="inner">
                    <div className='title-area'>
                        <p className='date'>2023.01.10</p>
                        <p className='title'>티몬, 큐텐에 경영권 매각 협상중 2,000억원대</p>
                    </div>
                    <div className="detail-area">
                        <p>평생 학습이라는 것 측면에서 고정 마인드 셋이 아닌 성장 마인드 셋이 학습자에게 필요함을 느꼈습니다.</p>
                    </div>
                    <div className="prf-area">
                        <a className="ui profile" onClick={()=>{this.setState({modal : true})}} href={()=>false}>
                            <div className="pic">
                                <Image src={Profile48Px} alt="프로필사진 임시이미지" />
                            </div>
                            <div className="prf-info">
                                <div className="info-top">
                                    <strong className="prf-name">tmddnjs78</strong>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default OverviewCommunityCard;