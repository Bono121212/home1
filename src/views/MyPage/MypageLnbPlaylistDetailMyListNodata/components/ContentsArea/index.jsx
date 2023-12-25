import React, {Component} from 'react';
import { Segment, Label, Icon, Menu, Image, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import ProfileSample1 from '../../../../../images/all/profile-01@2x.png';
//import thumb1 from '../../../../../images/all/bg_img1.png';
//import thumb2 from '../../../../../images/all/bg_img2.png';
//import thumb3 from '../../../../../images/all/bg_img3.png';

class ContentsArea extends Component {
    state = { MenuOpen : false, on : false,  }
    popupRef = React.createRef();

    //편집하기 popup 
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }
    handleClickOutside = (event) =>{
        if(!this.popupRef.current.contains(event.target)){
            this.setState({MenuOpen : false})
        }
    } 
    render() {
        const { MenuOpen, on } = this.state;

        return (
            <div className="mypage_contents profile-playlist-contents">
                <div className='mypage-title-wrap'>
                    <strong className="mypage_title">Playlist</strong>
                    <a href={()=>false} className='btn-txt btn-tolist'>목록으로</a>
                </div>
                <Segment className="full">
                    <div className="group-wrapper">
                        <div className='playlist-list detail-list-wrapper'>
                            <div className='playlist-detail-infobox'>
                                <div className='playlist-detail-info-inner'>
                                    <div className='playlist-tit'>AI 아싸(Outsider)에서 AI 핵인싸(Insider)로!</div>
                                    <div className='playlist-subtxt'>AI 기본 정보와 현재 직무에서 활용 가능한 참고 학습카드 공유합니다.</div>
                                    <div className='playlist-sub-infobox'>
                                        <div className='f-left'>
                                            <div className='maker-thumb'>
                                                <Image src={ProfileSample1} alt="만든사람 프로필이미지"/>
                                            </div>
                                            <div className='maker-user'>김써니</div>
                                            <div className='maker-date'>2021.12.24 생성</div>
                                        </div>
                                        <div className='f-right'>
                                            {/* start 2022-03 변경된 부분 */}
                                            <Button icon className='bigRight like' onClick={()=> this.setState({on : !on})}>
                                                <Icon className={classNames(on ? 'likeOnBig' : 'likeOffBig')}/>
                                                <span>4,288</span>
                                            </Button>
                                            <Button icon className='bigRight thumb'>
                                                <Icon className='tumbUpBig'/>
                                                <span>추천하기</span>
                                            </Button>
                                            <div className='edit-btn-area' ref={this.popupRef}>
                                                <Button icon className={classNames('bigRight edit',{'on' : MenuOpen})} onClick={()=> this.setState({MenuOpen : !MenuOpen})}>
                                                    <Icon className={classNames(MenuOpen ? 'editBigOn' : 'editBigOff')}/>
                                                    <span>편집하기</span>
                                                </Button>
                                                {/* 편집하기 클릭시 뜨는 popup */}
                                                <div className={classNames('ed-popup',{'on' : MenuOpen})} >
                                                    <div className='inner'>
                                                        <ul>
                                                            <li>
                                                                <Button icon className='ed-edit'>
                                                                    <Icon className='edit16'/> Edit
                                                                </Button>
                                                            </li>
                                                            <li>
                                                                <Button icon className='ed-delete'>
                                                                    <Icon className='delete16'/> Delete
                                                                </Button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end 2022-03 변경된 부분 */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='playlist-detail-content'>
                                <Menu className='playlist-view-tab'>
                                    <Menu.Item as={Link} onClick={this.handleItemClick} to="" className='active'>
                                        View All
                                    </Menu.Item>
                                    <Menu.Item as={Link} onClick={this.handleItemClick} to="">
                                        Comments
                                    </Menu.Item>
                                    <div className='playlist-view-right'>
                                        <Label as='button' className='onlytext'> <Icon className='list-recommended'/><span>추천받은 구성원 <strong>8명</strong></span></Label>
                                        <Label as='button' className='onlytext'> <Icon className='list-like'/><span>담아간 구성원 <strong>29명</strong></span></Label>
                                    </div>
                                </Menu>
                                <div className='playlist-view-content'>
                                    <div className="list-top">
                                        <div className="list-top-left f-left">
                                            <div>총 <strong>0개</strong> 학습카드</div>
                                            {/* 학습카드 추가 전엔 학습시간 표시 없음 */}
                                        </div>
                                        <div className="list-top-right f-right">
                                            {/* 학습카드 추가전엔 편집하기 버튼 없음 */}
                                        </div>
                                    </div>

                                    <div className="playlist-detail-wrap">
                                        <div className="no-cont-wrap">
                                            <Icon className="no-contents80" />
                                            <span className="blind">콘텐츠 없음</span>
                                            <div className="text">등록된 학습카드가 없습니다.<br />지금 바로 학습카드를 추가해보세요.</div>
                                            <Button className="btn-playlist big"><Icon className='create16'/>학습카드 추가하기</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Segment>
            </div>
        )
    }
}
export default ContentsArea;