import React, {Component} from 'react';
import { Segment, Icon, Menu, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {ListGroup, CardGroup, PlaylistAllTop, CommentsSort, ClearInputBox} from './components'
import './style.css';

class PlaylistListAll extends Component {
    state = {boardType: 'card'}
    handleTypeCard = () => {
        this.setState({boardType: 'card'});
    }
    handleTypeList = () => {
        this.setState({boardType: 'list'});
    }
    render() {
        return (
            <section className='content playlist-all'>
                <Segment className="full">
                    <div className='playlist-all-wrapper'>
                        <div className='playlist-all-infobox'>
                            <h1 className='playlist-tit'><strong>전체 Playlist 둘러보기</strong></h1>
                            <div className='playlist-subtxt'>mySUNI에서 생성된 전체 공개 Playlist를 탐색해보세요.</div>
                        </div>
                        <div className='playlist-all-container'>
                            <div className='playlist-all-content'>
                                <Menu className='playlist-view-tab'>
                                    <Menu.Item as={Link} onClick={this.handleItemClick} to="" className='active'>
                                        전체
                                    </Menu.Item>
                                    <Menu.Item as={Link} onClick={this.handleItemClick} to="">
                                        우리 회사
                                    </Menu.Item>
                                    <Menu.Item as={Link} onClick={this.handleItemClick} to="">
                                        우리 조직
                                    </Menu.Item>
                                    <Menu.Item as={Link} onClick={this.handleItemClick} to="">
                                        팔로워/팔로잉
                                    </Menu.Item>
                                    <div className='playlist-all-right'>
                                        <ClearInputBox />
                                        <div className='list-toggle'>
                                            <Button icon className={'type-card'+(this.state.boardType==='card'?' is-active':'')} onClick={this.handleTypeCard}><span className='blind'>카드형으로 보기</span></Button>
                                            <Button icon className={'type-list'+(this.state.boardType==='list'?' is-active':'')} onClick={this.handleTypeList}><span className='blind'>목록형으로 보기</span></Button>
                                        </div>
                                    </div>
                                </Menu>
                                <div className='playlist-view-tabpanel'>
                                    <div className="list-top">
                                        <div className="list-top-left">
                                            <div>총 <strong>24개</strong>의 Playlist가 있습니다.</div>
                                        </div>
                                        <div className="list-top-right">
                                            <CommentsSort />
                                        </div>
                                    </div>

                                    { this.state.boardType==='card' ? <CardGroup /> : <ListGroup /> }
                                    
                                    <div className="list-more">
                                        <Button icon className="moreview">
                                            <Icon className="moreview"/>list more
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <PlaylistAllTop />
                        </div>
                    </div>
                </Segment>
            </section>
        )
    }
}
export default PlaylistListAll;