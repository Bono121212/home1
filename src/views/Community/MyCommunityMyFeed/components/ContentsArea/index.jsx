import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky, Icon, Button, Menu, Card,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
// import CommunityList01 from "../CommunityList01";
// import CommunityList02 from "../CommunityList02";
// import CommunityList03 from "../CommunityList03";
// import CommunityList04 from "../CommunityList04";
// import CommunityList05 from "../CommunityList05";

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'MyFeed'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner">
                        <Menu className='sku'>
                            <Menu.Item
                                name='MyCommunity'
                                active={activeItem === 'MyCommunity'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                My Community
                            </Menu.Item>
                            <Menu.Item
                                name='MyCreatedCommunity'
                                active={activeItem === 'MyCreatedCommunity'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                My Created Community<span className="count">+1</span>
                            </Menu.Item>
                            <Menu.Item
                                name='MyFeed'
                                active={activeItem === 'MyFeed'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                My Feed<span className="count">+20</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>
                <Segment className='full'>
                    <div className="top-guide-title size-type2">
                        <div className="list-number">총 <strong>20개</strong>의 새로운 알림이 있습니다.</div>
                    </div>

                    <div className="community-accordion">

                        <Card className='community-item'>
                            <div className="title">
                                <div className="commu-list-item">
                                    {/*썸네일*/}
                                    <div className="thumbnail">
                                        <div>
                                            <Icon className="thumb60-1"/>
                                        </div>
                                    </div>
                                    {/*//썸네일*/}
                                    <div className="title-area">
                                        <div className="learning">“Adobe XD UI UX Design”</div>
                                        <div className="header ellipsis">
                                            <Link to={'/community/community-detail-comment'}>
                                                학습에서 회원님이 남긴 댓글에 <em>2</em>개의 댓글이 달렸습니다.
                                            </Link>
                                        </div>
                                        <div className="deatil">
                                            <span>2020.01.10</span>
                                            <span>Adobe XD UI UX Design</span>
                                        </div>
                                    </div>
                                    <div className="icon-area">
                                        <Button><Icon className='card-delete32'/></Button>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className='community-item'>
                            <div className="title">
                                <div className="commu-list-item">
                                    {/*썸네일*/}
                                    <div className="thumbnail">
                                        <div>
                                            <Icon className="thumb60-2"/>
                                        </div>
                                    </div>
                                    {/*//썸네일*/}
                                    <div className="title-area">
                                        <div className="learning">“디자인은 무엇인가”</div>
                                        <div className="header ellipsis">
                                            <Link to={'/community/community-detail-comment'}>
                                                게시글에 <em>응답글</em>이 등록되었습니다.
                                            </Link>
                                        </div>
                                        <div className="deatil">
                                            <span>2020.01.10</span>
                                            <span>Design Community</span>
                                        </div>
                                    </div>
                                    <div className="icon-area">
                                        <Button><Icon className='card-delete32'/></Button>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className='community-item'>
                            <div className="title">
                                <div className="commu-list-item">
                                    {/*썸네일*/}
                                    <div className="thumbnail">
                                        <div>
                                            <Icon className="thumb60-3"/>
                                        </div>
                                    </div>
                                    {/*//썸네일*/}
                                    <div className="title-area">
                                        <div className="learning">“디자인은 무엇인가”</div>
                                        <div className="header ellipsis">
                                            <Link to={'/community/community-detail-comment'}>
                                                게시글에서 회원님이 남긴 댓글에 <em>99+</em>개의 댓글이 달렸습니다.
                                            </Link>
                                        </div>
                                        <div className="deatil">
                                            <span>2020.01.10</span>
                                            <span>Design Community</span>
                                        </div>
                                    </div>
                                    <div className="icon-area">
                                        <Button><Icon className='card-delete32'/></Button>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className='community-item'>
                            <div className="title">
                                <div className="commu-list-item">
                                    {/*썸네일*/}
                                    <div className="thumbnail">
                                        <div>
                                            <Icon className="thumb60-4"/>
                                        </div>
                                    </div>
                                    {/*//썸네일*/}
                                    <div className="title-area">
                                        <div className="learning">“Adobe XD UI UX Design”</div>
                                        <div className="header ellipsis">
                                            <Link to={'/community/community-detail-comment'}>
                                                학습에서 회원님이 남긴 댓글에 <em>2</em>개의 댓글이 달렸습니다.
                                            </Link>
                                        </div>
                                        <div className="deatil">
                                            <span>2020.01.10</span>
                                            <span>Adobe XD UI UX Design</span>
                                        </div>
                                    </div>
                                    <div className="icon-area">
                                        <Button><Icon className='card-delete32'/></Button>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className='community-item'>
                            <div className="title">
                                <div className="commu-list-item">
                                    {/*썸네일*/}
                                    <div className="thumbnail">
                                        <div>
                                            <Icon className="thumb60-2"/>
                                        </div>
                                    </div>
                                    {/*//썸네일*/}
                                    <div className="title-area">
                                        <div className="learning">“디자인은 무엇인가”</div>
                                        <div className="header ellipsis">
                                            <Link to={'/community/community-detail-comment'}>
                                                게시글에 <em>2</em>개의 댓글이 달렸습니다.
                                            </Link>
                                        </div>
                                        <div className="deatil">
                                            <span>2020.01.10</span>
                                            <span>Design Community</span>
                                        </div>
                                    </div>
                                    <div className="icon-area">
                                        <Button><Icon className='card-delete32'/></Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className="more-comments">
                        <Button icon className="left moreview">
                            <Icon className='moreview'/>list more
                        </Button>
                    </div>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
