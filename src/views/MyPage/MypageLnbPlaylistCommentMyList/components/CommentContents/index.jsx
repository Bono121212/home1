import React, { Component } from "react";
import { Icon, Button, Comment } from "semantic-ui-react";
import CommentImg01 from "../../../../../images/all/profile-110-px-sample-1.png";
import CommentImg02 from "../../../../../images/all/profile-110-px-sample-2.png";
import CommentImg03 from "../../../../../images/all/profile-110-px-sample-3.png";
import CommentImg04 from "../../../../../images/all/profile-110-px-sample-4.png";
//import IconDelete from "../../../../../images/all/icon-noti-48-px.svg"
import PhotoCommentReplyNew from "../PhotoCommentReplyNew";
import PhotoCommentReplyThumb from "../PhotoCommentReplyThumb";
import heartIcon from "../../../../../images/all/btn-community-like-on-16-px.png";
import heartIconOff from "../../../../../images/all/btn-community-like-off-16-px.png";
import badgePin from "../../../../../images/all/icon-24-px-list-pin-red.svg"
import tmpImg from '../../../../../images/all/b-sample.png';

class CommentContents extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
        return (
            <Comment.Group className="base">
                {/* 2021-12 커뮤니티 템플릿 댓글참고 !*/}
                <Comment>
                    <Comment.Avatar src={CommentImg03} />
                    <Comment.Content>
                        <Comment.Author as="a">
                            <span className='pin-on'><img src={badgePin} alt="" /></span>서지혜
                        </Comment.Author>

                        <Comment.Metadata>
                            <img src={heartIcon} alt="" /> <span className="heartText">4,289</span>
                        </Comment.Metadata>
                        <Comment.Metadata>
                            <span className="date">2021.12.06</span>
                        </Comment.Metadata>
                        <Comment.Text>
                            <div>
                                <span>모든 방면에서 최고의 강의!!</span>
                            </div>
                            <div className='add-pic'>
                                <img src={tmpImg} alt="" />
                                {/* <Button icon className="img-icon zoom"><Icon className="zoom2"/><span className="blind">확대1</span></Button> */}
                            </div>
                        </Comment.Text>

                        {/************ 2021-12 대댓글 위치변경됨!!! *************/}
                        <PhotoCommentReplyThumb/>

                        <Comment.Actions>
                            <div className="right top">
                                <Button className="icon left postset edit2"><Icon className="edit2"/>Edit</Button>
                                <Button className="icon left postset delete"><Icon className="delete"/>Delete</Button>
                                <Button className="icon left postset reply2 active"><Icon className="reply2"/>Reply</Button>
                            </div>
                        </Comment.Actions>

                    </Comment.Content>
                </Comment>
                <Comment>
                    <Comment.Avatar src={CommentImg03} />
                    <Comment.Content>
                        <Comment.Author as="a">
                            <span className='pin-off'><img src={badgePin} alt="" /></span>서지혜
                        </Comment.Author>

                        <Comment.Metadata>
                            <img src={heartIconOff} alt="" /> <span className="heartText">0</span>
                        </Comment.Metadata>
                        <Comment.Metadata>
                            <span className="date">2021.12.06</span>
                        </Comment.Metadata>
                        <Comment.Text>
                            <div>
                                <span>모든 방면에서 최고의 강의!!</span>
                            </div>
                        </Comment.Text>

                        {/************ 2021-12 대댓글 위치변경됨!!! *************/}
                        {/* <PhotoCommentReplyThumb/>  */}

                        <Comment.Actions>
                            <div className="right top">
                                <Button className="icon left postset edit2"><Icon className="edit2"/>Edit</Button>
                                <Button className="icon left postset delete"><Icon className="delete"/>Delete</Button>
                                <Button className="icon left postset reply2"><Icon className="reply2"/>Reply</Button>
                            </div>
                        </Comment.Actions>

                    </Comment.Content>
                </Comment>

                <Comment>
                    <Comment.Avatar src={CommentImg02} />
                    <Comment.Content>
                        <Comment.Author as="a">
                            <span className='pin-off'><img src={badgePin} alt="" /></span>김수현
                        </Comment.Author>

                        <Comment.Metadata>
                            <img src={heartIcon} alt="" /> <span className="heartText">4,289</span>
                        </Comment.Metadata>
                        <Comment.Metadata>
                            <span className="date">2021.12.06</span>
                        </Comment.Metadata>
                        <Comment.Text>
                            <div>
                                <span>{`모든 방면에서 최고의 강의!! 🙇🏻&zwj;♀️ 최고의 학습 중 하나였습니다. 실습을 수행하고 개념을 이해하는데 매우 간단하고 쉽습니다. 내용은 기본 내용이지만 용어를 기억하는 데 도움이 됩니다. 유연하고 강력한 클라우드 개발 환경에서 탁월한 경험을 갖춘 Complete Course입니다. 모든 방면에서 최고의 강의!! 최고의 학습 중 하나였습니다.`}</span>
                            </div>
                        </Comment.Text>

                        {/************ 2021-12 대댓글 위치변경됨 *************/}
                        <PhotoCommentReplyNew/>


                        <Comment.Actions>
                            <div className="right top">
                                <Button className="icon left postset reply2 active"><Icon className="reply2"/>Reply</Button>
                            </div>
                            <Button className="cmt">View Replies</Button>
                            <span className="count">4</span>
                        </Comment.Actions>
                    </Comment.Content>
                    <Comment.Group>
                        <Comment>
                            <Comment.Avatar  src={CommentImg01} />
                            <Comment.Content>
                                <Comment.Author as="a">
                                    <span className='pin-off'><img src={badgePin} alt="" /></span>이승기
                                </Comment.Author>

                                <Comment.Metadata>
                                    <img src={heartIconOff} alt="" /> <span className="heartText">0</span>
                                </Comment.Metadata>
                                <Comment.Metadata>
                                    <span className="date">2021.12.06</span>
                                </Comment.Metadata>
                                <Comment.Text>
                                    <div>
                                        <span className="tag">@김수현</span>
                                        <span>난이도 높은 과제나 실습으로 실력을 단기간에 끌어올리고 싶다면 강사님이 운영하는 POCU 교육 사이트에 등록을 해보길 바랍니다. </span>
                                    </div>
                                    <div className='add-pic'>
                                        <img src={tmpImg} alt="" />
                                        {/* <Button icon className="img-icon zoom"><Icon className="zoom2"/><span className="blind">확대1</span></Button> */}
                                    </div>
                                </Comment.Text>
                                <Comment.Actions>
                                    <div className="right top">
                                        <Button className="icon postset edit2">
                                            <Icon className="edit2" />
                                            Edit
                                        </Button>
                                        <Button className="icon postset delete">
                                            <Icon className="delete" />
                                            Delete
                                        </Button>
                                    </div>
                                </Comment.Actions>
                            </Comment.Content>
                        </Comment>
                    </Comment.Group>
                    <Comment.Group>
                        <Comment>
                            <Comment.Avatar  src={CommentImg04} />
                            <Comment.Content>
                                <Comment.Author as="a">
                                    <span className='pin-off'><img src={badgePin} alt="" /></span>송중기
                                </Comment.Author>

                                <Comment.Metadata>
                                    <img src={heartIconOff} alt="" /> <span className="heartText">1</span>
                                </Comment.Metadata>
                                <Comment.Metadata>
                                    <span className="date">2021.12.06</span>
                                </Comment.Metadata>
                                <Comment.Text>
                                    <div>
                                        <span className="tag">@김수현</span>
                                        <span>좋은 내용 감사합니다</span>
                                    </div>
                                </Comment.Text>
                            </Comment.Content>
                        </Comment>
                    </Comment.Group>
                    {/* 2021-12  현재 운영에서는 삭제된 댓글 표시안함 */}
                    {/* <Comment.Group>
                        <Comment>
                            <Comment.Avatar src={IconDelete}/>
                            <Comment.Content>
                                <span className="empty">삭제된 댓글입니다.</span>
                            </Comment.Content>
                        </Comment>
                    </Comment.Group> */}
                    <Comment.Group>
                        <Comment>
                            <Comment.Avatar  src={CommentImg04} />
                            <Comment.Content>
                                <Comment.Author as="a">
                                    <span className='pin-off'><img src={badgePin} alt="" /></span>아이린
                                </Comment.Author>


                                <Comment.Metadata>
                                    <img src={heartIconOff} alt="" /> <span className="heartText">2</span>
                                </Comment.Metadata>
                                <Comment.Metadata>
                                    <span className="date">2021.12.06</span>
                                </Comment.Metadata>
                                <Comment.Text>
                                    <div>
                                        <span className="tag">@김수현</span>
                                        <span>좋은 내용 감사합니다. 앞으로도 좋은내용 부탁드립니다.</span>
                                    </div>
                                </Comment.Text>
                            </Comment.Content>
                        </Comment>
                    </Comment.Group>
                </Comment>
            </Comment.Group>
        );
    }
}

export default CommentContents;
