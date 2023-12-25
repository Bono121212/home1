import React, {Component, createRef} from 'react'
import {
    Sticky,
    Menu
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
// import TabMenuInner from '../TabMenuInner'

// img internal
import PlayerImg from '../../../../../images/all/promotion-player.png';
import PlayerImg02 from '../../../../../images/all/promotion-player-02.png';
import PlayerImg03 from '../../../../../images/all/promotion-player-03.png';
import PlayerImg04 from '../../../../../images/all/promotion-player-04.png';
import PlayerIcon from '../../../../../images/all/play-icon.png';

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'promotionData'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu2 offset0'>
                    <div className="cont-inner">
                        <Menu className='sku2'>
                            <Menu.Item
                                name='suniIntroduction'
                                active={activeItem === 'suniIntroduction'}
                                onClick={this.handleItemClick}
                                as={Link} to="/introduction/all-introduction"
                            >
                                mySUNI 소개
                            </Menu.Item>
                            <Menu.Item
                                name='collegeIntroduction'
                                active={activeItem === 'collegeIntroduction'}
                                onClick={this.handleItemClick}
                                as={Link} to="/introduction/college-introduction"
                            >
                                Category 소개
                            </Menu.Item>
                            <Menu.Item
                                name='certificationIntroduction'
                                active={activeItem === 'certificationIntroduction'}
                                onClick={this.handleItemClick}
                                as={Link} to="/introduction/certification-system-introduction"
                            >
                                인증제도 소개
                            </Menu.Item>
                            <Menu.Item
                                name='promotionData'
                                active={activeItem === 'promotionData'}
                                onClick={this.handleItemClick}
                                as={Link} to="/introduction/promotion-data"
                            >
                                홍보자료
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>

                <div className="ui attached tab" data-tab="first">

                </div>

                <div className="ui attached tab" data-tab="second">

                </div>

                <div className="ui attached active" data-tab="third">
                        <div className="common-intro case3">
                        <div className="mainVideoInner">
                          <div className="promotion-strong">구성원들의 mySUNI 이해 및 활용방법에 도움되는 홍보 자료입니다.</div>
                          <img className="playIcon" src={PlayerIcon} alt="play-icon" />
                          <video className="fp-engine promotionVideo" src="https://sku.ap.panopto.com/Panopto/Pages/Embed.aspx?id=11fe97d5-0a86-4393-b7bd-ac6200807d1b" poster={PlayerImg} width="720px" height="400px" />
                        </div>
                        <div className="subVideo-inner">
                            <div className="subVideo"><img className="subVideoThumbImg" src={PlayerImg} alt="main" />
                              <p className="subVideo-text"><Link to="#" className="active">SKinnoMan x mySUNI ‘써니를 묻다’ 1편 LMS/구성원 Comm.</Link></p>
                              <img className="playIcon" src={PlayerIcon} alt="play-icon" />
                            </div>
                            <div className="subVideo"><img className="subVideoThumbImg" src={PlayerImg02} alt="main" />
                              <p className="subVideo-text"><Link to="#">SKinnoMan x mySUNI ‘써니를 묻다’ 2편 College/Helpdesk</Link></p>
                              <img className="playIcon second" src={PlayerIcon} alt="play-icon" />
                            </div>
                            <div className="subVideo"><img className="subVideoThumbImg" src={PlayerImg03} alt="main" />
                              <p className="subVideo-text"><Link to="#">SKinnoMan x mySUNI ‘써니를 묻다’ 3편 C-team 인터뷰</Link></p>
                              <img className="playIcon thrid" src={PlayerIcon} alt="play-icon" />
                            </div>
                            <div className="subVideo"><img className="subVideoThumbImg" src={PlayerImg04} alt="main" />
                              <p className="subVideo-text"><Link to="#">Untact시대 SK구성원들의<br/>학습방식</Link></p>
                              <img className="playIcon" src={PlayerIcon} alt="play-icon" />
                            </div>
                          </div>
                        </div>
                  </div>
            </div>
        )
    }
}


export default ContentsArea
