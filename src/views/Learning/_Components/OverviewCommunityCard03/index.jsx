import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Profile48Px from "../../../../images/all/profile-48-px.png";
import InfoModal from "../InfoModal";

class OverviewCommunityCard03 extends Component {
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
                        <p>나는 매일 성장한다라는 느낌을 갖기 위해 뭔가를 해야되겠다고 생각했습니다. 계획을 세우고 차근차근 꾸준히 해나가야 한다고 했으니 일과 스스로에게 성장을 체험할 수 있는 구체적인 목표부터 생각해보려합니다.나는 매일 성장한다라는 느낌을 갖기 위해 뭔가를 해야되겠다고 생각했습니다. 계획을 세우고 차근차근 꾸준히 해나가야 한다고 했으니 일과 스스로에게 성장을 한다</p>
                    </div>
                    <div className="prf-area">
                        <a className="ui profile" onClick={()=>{this.setState({modal : true})}} href={()=>false}>
                            <div className="pic">
                                <Image src={Profile48Px} alt="프로필사진 임시이미지" />
                            </div>
                            <div className="prf-info">
                                <div className="info-top">
                                    <strong className="prf-name">AWS Certification Rush Community AWS Certification Rush Community AWS Certification Rush Community</strong>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        )
    }
}

export default OverviewCommunityCard03;