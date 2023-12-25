import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Profile48Px from "../../../../images/all/profile-48-px.png";
import InfoModal from "../InfoModal";

class OverviewCommunityCard02 extends Component {
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
                        <p>나는 매일 성장한다라는 느낌을 갖기 위해 뭔가를 해야되겠다고 생각했습니다. </p>
                    </div>
                    <div className="prf-area">
                        <a href={()=>false} className="ui profile" onClick={()=>{this.setState({modal : true})}}>
                            <div className="pic">
                                <Image src={Profile48Px} alt="프로필사진 임시이미지" />
                            </div>
                            <div className="prf-info">
                                <div className="info-top">
                                    <strong className="prf-name">김태양</strong>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default OverviewCommunityCard02;