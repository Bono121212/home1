import React, {Component} from 'react';
import { Segment, Label, Icon, Menu, Image, Comment, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import ProfileSample1 from '../../../../../images/all/profile-01@2x.png';
import PhotoCommentNew from '../PhotoCommentReplyNew';
import TestRadio01 from '../TestRadio01';
// import CommentContents from '../CommentContents';

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
                    <Link to='#' className='btn-txt btn-tolist'>목록으로</Link>
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
                                    <Menu.Item as={Link} onClick={this.handleItemClick} to="">
                                        View All
                                    </Menu.Item>
                                    <Menu.Item as={Link} onClick={this.handleItemClick} to="" className='active'>
                                        Comments
                                    </Menu.Item>
                                    <div className='playlist-view-right'>
                                        <Label as='button' className='onlytext'> <Icon className='list-recommended'/><span>추천받은 구성원 <strong>8명</strong></span></Label>
                                        <Label as='button' className='onlytext'> <Icon className='list-like'/><span>담아간 구성원 <strong>29명</strong></span></Label>
                                    </div>
                                </Menu>
                                <div className='playlist-view-content'>
                                    {/* 댓글 기본영역 */}
                                    <PhotoCommentNew/>

                                    {/* 작성된 댓글영역 */}
                                    <TestRadio01/>

                                    <Comment.Group className="base">
                                        <div className="no-cont-wrap">
                                            <Icon className="no-contents80" />
                                            <span className="blind">콘텐츠 없음</span>
                                            <div className="text">등록된 글이 없습니다.</div>
                                        </div>
                                    </Comment.Group>
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