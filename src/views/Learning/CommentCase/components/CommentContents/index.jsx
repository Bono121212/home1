import React, {Component} from 'react'
import { Image, Icon, Button, Comment } from 'semantic-ui-react'
import CommentsSort from "../CommentsSort";
import TextComment from '../../../../TextComment'
import TextCommentButtons from "../../../../TextCommentButtons";

class CommentContents extends Component {
    state = {}
    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <>
                <TextComment/>

                <CommentsSort/>

                <Comment.Group className='base'>
                    {/*comment : 2줄이상 말줄임, 대댓글*/}
                    <Comment>
                        <Comment.Avatar src='/images/all/profile-56-px.png'/>
                        <Comment.Content>
                            <Comment.Author as='a'>김연아</Comment.Author>
                            <Comment.Metadata>
                                <span className="date">2019.10.23</span>
                            </Comment.Metadata>
                            <Comment.Text>
                                <div className="ellipsis">
                                    {/* .expend // */}
                                    <span className="tag">@강하늘</span>
                                    <span>이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. text width 640px text width 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. text width 640px text width 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. text width 640px text width 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. text width 640px text width 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. text width 640px text width 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요.</span>
                                </div>
                                <Button>+ View more</Button>
                            </Comment.Text>
                            <Comment.Actions>
                                <div className="right top">
                                    <Button icon className='left postset edit2'><Icon className='edit2'/>Edit</Button>
                                    <Button icon className='left postset delete'><Icon
                                        className='delete'/>Delete</Button>
                                    <Button icon className='left postset reply2'><Icon
                                        className='reply2'/>Reply</Button>
                                </div>
                                <Button className="cmt">View Replies</Button>
                                <span className="count">3</span>
                            </Comment.Actions>
                        </Comment.Content>
                        {/* collapsed 추가시 덧글(display:none 상태) */}
                        <Comment.Group className='collapsed'>
                            <Comment>
                                <Comment.Avatar src='/images/all/icon-noti-48-px.png'/>
                                <Comment.Content>
                                    <span className="empty">삭제된 댓글입니다.</span>
                                </Comment.Content>
                            </Comment>
                            <Comment>
                                <Comment.Avatar src='/images/all/icon-noti-48-px.png'/>
                                <Comment.Content>
                                    <span className="empty">삭제된 댓글입니다.</span>
                                </Comment.Content>
                            </Comment>
                            <Comment>
                                <Comment.Avatar src='/images/all/icon-noti-48-px.png'/>
                                <Comment.Content>
                                    <span className="empty">삭제된 댓글입니다.</span>
                                </Comment.Content>
                            </Comment>
                        </Comment.Group>
                    </Comment>
                    {/* .comment : 2줄이상 노출, 대댓글 */}
                    <Comment>
                        <Comment.Avatar src='/images/all/profile-56-px.png'/>
                        <Comment.Content>
                            <Comment.Author as='a'>김연아</Comment.Author>
                            <Comment.Metadata>
                                <span className="date">2019.10.23</span>
                            </Comment.Metadata>
                            <Comment.Text>
                                <div className="ellipsis">
                                    {/* .expend // */}
                                    <span>
                                        이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. text width 640px text width 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. text width 640px text width 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. text width 640px text width 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. text width 640px text width 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. text width 640px text width 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요.</span>
                                </div>
                                <Button>+ View more</Button>
                            </Comment.Text>
                            <Comment.Actions>
                                <div className="right top">
                                    <Button icon className='left postset edit2'><Icon className='edit2'/>Edit</Button>
                                    <Button icon className='left postset delete'><Icon
                                        className='delete'/>Delete</Button>
                                    <Button icon className='left postset reply2'><Icon
                                        className='reply2'/>Reply</Button>
                                </div>
                                <Button className="cmt">View Replies</Button>
                                <span className="count">3</span>
                            </Comment.Actions>
                        </Comment.Content>
                        {/* collapsed 추가시 덧글(display:none 상태) */}
                        <Comment.Group className='collapsed'>
                            <Comment>
                                <Comment.Avatar src='/images/all/icon-noti-48-px.png'/>
                                <Comment.Content>
                                    <span className="empty">삭제된 댓글입니다.</span>
                                </Comment.Content>
                            </Comment>
                            <Comment>
                                <Comment.Avatar src='/images/all/icon-noti-48-px.png'/>
                                <Comment.Content>
                                    <span className="empty">삭제된 댓글입니다.</span>
                                </Comment.Content>
                            </Comment>
                            <Comment>
                                <Comment.Avatar src='/images/all/icon-noti-48-px.png'/>
                                <Comment.Content>
                                    <span className="empty">삭제된 댓글입니다.</span>
                                </Comment.Content>
                            </Comment>
                        </Comment.Group>
                    </Comment>
                    {/* comment : 삭제된 댓글 */}
                    <Comment>
                        <span className="avatar">
                            <Icon className='avatar56'/>
                            <span className='blind'>avatar</span>
                        </span>
                        <Comment.Content>
                            <span className="empty h56">삭제된 댓글입니다.</span>
                        </Comment.Content>
                    </Comment>
                    <Comment>
                        <span className="avatar">
                            <Icon className='avatar56'/>
                            <span className='blind'>avatar</span>
                        </span>
                        <Comment.Content>
                            <span className="empty h56">삭제된 댓글입니다.</span>
                            <Comment.Actions>
                                <div className="right top">
                                    <Button icon className='left postset edit2'><Icon className='edit2'/>Edit</Button>
                                    <Button icon className='left postset delete'><Icon
                                        className='delete'/>Delete</Button>
                                    <Button icon className='left postset reply2'><Icon
                                        className='reply2'/>Reply</Button>
                                </div>
                                <Button className="cmt">View Replies</Button>
                                <span className="count">3</span>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>

                    {/* comment : 댓글 확장 */}
                    <Comment>
                        <Comment.Avatar src='/images/all/profile-56-px.png'/>
                        <Comment.Content>
                            <Comment.Author as='a'>김연아</Comment.Author>
                            <Comment.Metadata>
                                <span className="date">2019.10.23</span>
                            </Comment.Metadata>
                            <Comment.Text>
                                <div className="ellipsis">
                                    {/* .expend // */}
                                    <span>이거 진짜 안들으면 후회합니다.</span>
                                </div>
                            </Comment.Text>
                            <Comment.Actions>
                                <div className="right top">
                                    <Button icon className='left postset edit2'><Icon className='edit2'/>Edit</Button>
                                    <Button icon className='left postset delete'><Icon
                                        className='delete'/>Delete</Button>
                                    <Button icon className='left postset reply2'><Icon
                                        className='reply2'/>Reply</Button>
                                </div>
                                <Button className="cmt">View Replies</Button>
                                <span className="count">2</span>
                            </Comment.Actions>
                        </Comment.Content>

                        <Comment.Group>
                            <Comment>
                                <Comment.Avatar src='/images/all/profile-56-px.png'/>
                                <Comment.Content>
                                    <Comment.Author as='a'>김연아</Comment.Author>
                                    <Comment.Metadata>
                                        <span className="date">2019.10.23</span>
                                    </Comment.Metadata>
                                    <Comment.Text>
                                        <div>
                                            <span className="tag">@강다니엘</span>
                                            <span>대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.대댓글은 말줌임이 없습니다.</span>
                                        </div>
                                    </Comment.Text>
                                    <Comment.Actions>
                                        <div className="right top">
                                            <Button icon className='left postset edit2'><Icon
                                                name='edit2'/>Edit</Button>
                                            <Button icon className='left postset delete'><Icon
                                                name='delete'/>Delete</Button>
                                        </div>
                                    </Comment.Actions>
                                </Comment.Content>
                            </Comment>
                        </Comment.Group>
                        <Comment.Group>
                            <Comment>
                                <Comment.Avatar src='/images/all/icon-noti-48-px.png'/>
                                <Comment.Content>
                                    <span className="empty h56">삭제된 댓글입니다.</span>
                                </Comment.Content>
                            </Comment>
                        </Comment.Group>
                        <Comment.Group>
                            <Comment>
                                <Comment.Avatar src='/images/all/profile-48-px.png'/>
                                <Comment.Content>
                                    <Comment.Author as='a'>김연아</Comment.Author>
                                    <Comment.Metadata>
                                        <span className="date">2019.10.23</span>
                                    </Comment.Metadata>
                                    <Comment.Text>
                                        <div>
                                            <span className="tag">@강다니엘</span>
                                            <span>대댓글은 말줌임이 없습니다.</span>
                                        </div>
                                    </Comment.Text>
                                </Comment.Content>
                            </Comment>
                        </Comment.Group>
                    </Comment>
                    {/* comment : 본인 댓글 수정 */}
                    <Comment>
                        <Comment.Avatar src='/images/all/profile-56-px.png'/>
                        <Comment.Content>
                            <Comment.Author as='a'>김연아</Comment.Author>
                            <Comment.Metadata>
                                <span className="date">2019.10.23</span>
                            </Comment.Metadata>
                            <Comment.Text>
                                {/*<div>*/}
                                {/*    <span className="tag">@강다니엘</span>*/}
                                {/*    <span>대댓글은 말줌임이 없습니다.</span>*/}
                                {/*</div>*/}
                            </Comment.Text>
                            <Comment.Actions>
                                <div className="right top">
                                    <Button icon className='left postset edit2 active'><Icon
                                        className='edit2'/>Edit</Button>
                                    <Button icon className='left postset delete'><Icon
                                        className='delete'/>Delete</Button>
                                    <Button icon className='left postset reply2'><Icon
                                        className='reply2'/>Reply</Button>
                                </div>
                            </Comment.Actions>
                            <TextCommentButtons/>
                        </Comment.Content>
                    </Comment>
                    <Comment>
                        <span className="avatar"><Image src='/images/all/profile-56-px.png'/></span>
                        <Comment.Content>
                            <Comment.Author as='a'>김연아</Comment.Author>
                            <Comment.Metadata>
                                <span className="date">2019.10.23</span>
                            </Comment.Metadata>
                            <Comment.Text>
                                <div className="ellipsis">
                                    {/* expend */}
                                    <span className="tag">@강하늘</span>
                                    <span>이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. text width 640px text width 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. text width 640px text width 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. text width 640px text width 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. text width 640px text width 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요. text width 640px text width 이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙 들어오게 강의하네요.</span>
                                </div>
                                <Button>+ View more</Button>
                            </Comment.Text>
                            <Comment.Actions>
                                <div className="right top">
                                    <Button icon className='left postset edit2'><Icon className='edit2'/>Edit</Button>
                                    <Button icon className='left postset delete'><Icon
                                        className='delete'/>Delete</Button>
                                    <Button icon className='left postset reply2'><Icon
                                        className='reply2'/>Reply</Button>
                                </div>
                            </Comment.Actions>
                        </Comment.Content>
                        {/* comments */}
                        <Comment.Group>
                            <Comment>
                                <Comment.Avatar src='/images/all/profile-48-px.png'/>
                                <Comment.Content>
                                    <Comment.Author as='a'>김연아</Comment.Author>
                                    <Comment.Metadata>
                                        <span className="date">2019.10.23</span>
                                    </Comment.Metadata>
                                    <Comment.Text>
                                        <div>
                                            <span className="tag">@강다니엘</span>
                                            <span>이전 작성 대댓글</span>
                                        </div>
                                    </Comment.Text>
                                </Comment.Content>
                            </Comment>
                        </Comment.Group>
                        {/* comments */}
                        <Comment.Group>
                            <Comment>
                                <Comment.Avatar src='/images/all/profile-48-px.png'/>
                                <Comment.Content>
                                    <Comment.Author as='a'>김연아</Comment.Author>
                                    <Comment.Metadata>
                                        <span className="date">2019.10.23</span>
                                    </Comment.Metadata>
                                    <Comment.Actions>
                                        <div className="right top">
                                            <Button icon className='left active postset edit2'><Icon className='edit2'/>Edit</Button>
                                            <Button icon className='left postset delete'><Icon
                                                name='delete'/>Delete</Button>
                                        </div>
                                    </Comment.Actions>
                                    <TextCommentButtons/>
                                </Comment.Content>
                            </Comment>
                        </Comment.Group>
                        {/* .comments */}
                        <Comment.Group>
                            <Comment>
                                <Comment.Avatar src='/images/all/profile-48-px.png'/>
                                <Comment.Content>
                                    <Comment.Author as='a'>김연아</Comment.Author>
                                    <Comment.Metadata>
                                        <span className="date">2019.10.23</span>
                                    </Comment.Metadata>
                                    <Comment.Text>
                                        <div>
                                            <span className="tag">@강다니엘</span>
                                            <span>이전 작성 대댓글</span>
                                        </div>
                                    </Comment.Text>
                                </Comment.Content>
                            </Comment>
                        </Comment.Group>
                        {/* more */}
                        <div className="more">
                            <Button>more replies(<span className="count">15</span>)</Button>
                        </div>
                    </Comment>
                </Comment.Group>
            </>
        )
    }
}


export default CommentContents
