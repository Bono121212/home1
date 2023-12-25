import React, { Component } from "react";
import { Icon, Button, Comment, Dimmer } from "semantic-ui-react";
import CommentForm from "../CommentForm";
import CommentFormThumb from "../CommentFormThumb";
import CommentImg01 from "../../../images/all/pic_profile_default.png";
import CommentImg02 from "../../../images/all/pic_profile_default.png";
import CommentImg03 from "../../../images/all/pic_profile_default.png";
import CommentImg04 from "../../../images/all/pic_profile_default.png";
// import IconDelete from "../../../../../../images/all/icon-noti-48-px.svg"
import heartIcon from "../../../images/all/btn-community-like-on-16-px.png";
import heartIconOff from "../../../images/all/btn-community-like-off-16-px.png";
import badgePin from "../../../images/all/icon-24-px-list-pin-red.svg";
import tmpImg from "../../../images/all/b-sample.png";

class CommentContents extends Component {
    state = { isVisible: false };
    handleChange = (e, { value }) => this.setState({ value });

    render() {
        return (
            <Comment.Group className="base-v2">

                {/* 자신댓글 - 댓글없음 */}
                <Comment className="my-comment">
                    <Comment.Avatar src={CommentImg01} />
                    <Comment.Content>
                        <Comment.Author as="a">
                            <span className='pin-on'><img src={badgePin} alt="" /></span>
							<i className='ui icon secret'><span className="blind">비공개</span></i>
							<span className='mypost'>나의 글</span>
							일이삼사오육칠팔구십일이삼사오육칠팔구십
                        </Comment.Author>
                        <Comment.Metadata>
                            <span className="split"></span>
                            <span className="date">2021.12.06</span>
                        </Comment.Metadata>
                        <Comment.Text>
                            <div>
                                <span>모든 방면에서 최고의 강의!!</span>
                            </div>
                        </Comment.Text>
                        <Comment.Actions>
                            <Comment.Metadata>
                                <img src={heartIconOff} alt="" /> <span className="heartText">0</span>
                            </Comment.Metadata>
                            <span className="split"></span>
                            <Button className="postset pinset">Pin 해제</Button>
                            <span className="split"></span>
                            <Button className="postset edit2">수정</Button>
                            <span className="split"></span>
                            <Button className="postset delete">삭제</Button>
                            <span className="split"></span>
                            <Button className="cmt active">댓글<span className="count">4</span></Button>
                        </Comment.Actions>
                    </Comment.Content>
                    <Comment.Group>
                        <Comment>
                            <Comment.Avatar src={CommentImg04} />
                            <Comment.Content>
                                <Comment.Author as="a">
                                    <span className='pin-off'><img src={badgePin} alt="" /></span>아이린
                                </Comment.Author>
                                <Comment.Metadata>
                                    <span className="split"></span>
                                    <span className="date">2021.12.06</span>
                                </Comment.Metadata>
                                <Comment.Text>
                                    <div>
                                        {/* <span className="tag">@김수현</span> */}
                                        <span>좋은 내용 감사합니다. 앞으로도 좋은내용 부탁드립니다.</span>
                                    </div>
                                </Comment.Text>
                                <Comment.Actions>
                                    <Comment.Metadata>
                                        <img src={heartIconOff} alt="" /> <span className="heartText">0</span>
                                    </Comment.Metadata>
                                </Comment.Actions>
                            </Comment.Content>
                        </Comment>
                    </Comment.Group>
                </Comment>
                {/* //자신댓글 - 댓글없음 */}

                {/* 타인댓글 - 기본상태, 댓글있음, 댓글펼힘 */}
                <Comment>
                    <Comment.Avatar src={CommentImg02} />
                    <Comment.Content>
                        <Comment.Author as="a">
                            <span className='pin-off'><img src={badgePin} alt="" /></span>
							<i className='ui icon secret'><span className="blind">비공개</span></i>
							김수현
                        </Comment.Author>
                        <Comment.Metadata>
                            <span className="split"></span>
                            <span className="date">2021.12.06</span>
                        </Comment.Metadata>
                        <Comment.Text>
                            <div>
                                <span>모든 방면에서 최고의 강의!! 최고의 학습 중 하나였습니다. 실습을 수행하고 개념을 이해하는데 매우 간단하고 쉽습니다. 내용은 기본 내용이지만 용어를 기억하는 데 도움이 됩니다. 유연하고 강력한 클라우드 개발 환경에서 탁월한 경험을 갖춘 Complete Course입니다. 모든 방면에서 최고의 강의!! 최고의 학습 중 하나였습니다.</span>
                            </div>
                        </Comment.Text>
                        <Comment.Actions>
                            <Comment.Metadata>
                                <img src={heartIcon} alt="" /> <span className="heartText">4,289</span>
                            </Comment.Metadata>
                            <span className="split"></span>
                            <Button className="cmt active">댓글<span className="count">4</span></Button>
                        </Comment.Actions>
                        <CommentForm />
                    </Comment.Content>
                    <Comment.Group>
                        <Comment>
                            <Comment.Avatar src={CommentImg01} />
                            <Comment.Content>
                                <Comment.Author as="a">
                                    <span className='pin-off'><img src={badgePin} alt="" /></span>
									<span className='mypost'>나의 글</span>
									이승기
                                </Comment.Author>
                                <Comment.Metadata>
                                    <span className="split"></span>
                                    <span className="date">2021.12.06</span>
                                </Comment.Metadata>
                                <Comment.Text>
                                    <div>
                                        {/* <span className="tag">@김수현</span> */}
                                        <span>난이도 높은 과제나 실습으로 실력을 단기간에 끌어올리고 싶다면 강사님이 운영하는 POCU 교육 사이트에 등록을 해보길 바랍니다. </span>
                                    </div>
                                    <div className='uploaded-img'>
                                        <img src={tmpImg} alt="" />
                                        <Button icon className="img-icon zoom"><Icon className="zoom2" /><span className="blind">확대1</span></Button>
                                    </div>
                                </Comment.Text>
                                <Comment.Actions>
                                    <Comment.Metadata>
                                        <img src={heartIconOff} alt="" /> <span className="heartText">0</span>
                                    </Comment.Metadata>
                                    <span className="split"></span>
                                    <Button className="postset edit2">수정</Button>
                                    <span className="split"></span>
                                    <Button className="postset delete">삭제</Button>
                                </Comment.Actions>
                            </Comment.Content>
                        </Comment>
                    </Comment.Group>
                    <Comment.Group>
                        <Comment>
                            <Comment.Avatar src={CommentImg04} />
                            <Comment.Content>
                                <Comment.Author as="a">
                                    <span className='pin-off'><img src={badgePin} alt="" /></span>송중기
                                </Comment.Author>
                                <Comment.Metadata>
                                    <span className="split"></span>
                                    <span className="date">2021.12.06</span>
                                </Comment.Metadata>
                                <Comment.Text>
                                    <div>
                                        {/* <span className="tag">@김수현</span> */}
                                        <span>좋은 내용 감사합니다</span>
                                    </div>
                                </Comment.Text>
                                <Comment.Actions>
                                    <Comment.Metadata>
                                        <img src={heartIconOff} alt="" /> <span className="heartText">0</span>
                                    </Comment.Metadata>
                                </Comment.Actions>
                            </Comment.Content>
                        </Comment>
                    </Comment.Group>
                    {/* 2021-12 현재운영에는 삭제된 댓글은 표시안됨 */}
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
                            <Comment.Avatar src={CommentImg04} />
                            <Comment.Content>
                                <Comment.Author as="a">
                                    <span className='pin-off'><img src={badgePin} alt="" /></span>아이린
                                </Comment.Author>
                                <Comment.Metadata>
                                    <span className="split"></span>
                                    <span className="date">2021.12.06</span>
                                </Comment.Metadata>
                                <Comment.Text>
                                    <div>
                                        {/* <span className="tag">@김수현</span> */}
                                        <span>좋은 내용 감사합니다. 앞으로도 좋은내용 부탁드립니다.</span>
                                    </div>
                                </Comment.Text>
                                <Comment.Actions>
                                    <Comment.Metadata>
                                        <img src={heartIconOff} alt="" /> <span className="heartText">0</span>
                                    </Comment.Metadata>
                                </Comment.Actions>
                            </Comment.Content>
                        </Comment>
                    </Comment.Group>
                </Comment>
                {/* 타인댓글 - 기본상태, 댓글있음, 댓글펼힘 */}

                {/* 타인댓글 - 기본상태, 댓글있음, 댓글접힘 */}
                <Comment>
                    <Comment.Avatar src={CommentImg02} />
                    <Comment.Content>
                        <Comment.Author as="a">
                            <span className='pin-off'><img src={badgePin} alt="" /></span>김수현
                        </Comment.Author>
                        <Comment.Metadata>
                            <span className="split"></span>
                            <span className="date">2021.12.06</span>
                        </Comment.Metadata>
                        <Comment.Text>
                            <div>
                                <span>모든 방면에서 최고의 강의!! 최고의 학습 중 하나였습니다. 실습을 수행하고 개념을 이해하는데 매우 간단하고 쉽습니다. 내용은 기본 내용이지만 용어를 기억하는 데 도움이 됩니다. 유연하고 강력한 클라우드 개발 환경에서 탁월한 경험을 갖춘 Complete Course입니다. 모든 방면에서 최고의 강의!! 최고의 학습 중 하나였습니다.</span>
                            </div>
                        </Comment.Text>

                        <Comment.Actions>
                            <Comment.Metadata>
                                <img src={heartIcon} alt="" /> <span className="heartText">4,289</span>
                            </Comment.Metadata>
                            <span className="split"></span>
                            <Button className="cmt">댓글<span className="count">0</span></Button>
                        </Comment.Actions>

                        {/* <CommentForm/> */}
                    </Comment.Content>
                </Comment>
                {/* 타인댓글 - 기본상태, 댓글있음, 댓글접힘 */}

                {/* 타인댓글 - 댓글상태, 댓글없음 */}
                <Comment>
                    <Comment.Avatar src={CommentImg03} />
                    <Comment.Content>
                        <Comment.Author as="a">
                            <span className='pin-off'><img src={badgePin} alt="" /></span>서지혜
                        </Comment.Author>
                        <Comment.Metadata>
                            <span className="split"></span>
                            <span className="date">2021.12.06</span>
                        </Comment.Metadata>
                        <Comment.Text>
                            <div>
                                <span>모든 방면에서 최고의 강의!!</span>
                            </div>
                            <div className='uploaded-img'>
                                <img src={tmpImg} alt="" />
                                <Button icon className="img-icon zoom"><Icon className="zoom2" /><span className="blind">확대1</span></Button>
                            </div>
                        </Comment.Text>

                        <Comment.Actions>
                            <Comment.Metadata>
                                <img src={heartIcon} alt="" /> <span className="heartText">4,289</span>
                            </Comment.Metadata>
                            <span className="split"></span>
                            <Button className='postset pincet'>Pin 고정</Button>
                            <span className="split"></span>
                            <Button className="cmt active">댓글<span className="count">4</span></Button>
                        </Comment.Actions>

                        {/* 대댓글 - 이미지 첨부한 경우 */}
                        <CommentFormThumb />
                    </Comment.Content>
                </Comment>
                {/* //타인댓글 - 댓글상태, 댓글없음 */}

                {/* 이미지 크게보기 */}
                <div className="photo_viewer">
                    <button type="button" className="btn ico close"><span className="blind">닫기</span></button>
                    <img src={tmpImg} alt="" className="img" />
                </div>
                <Dimmer page className="dimmer-zoom"></Dimmer>
                {/* //이미지 크게보기 */}
            </Comment.Group>
        );
    }
}

export default CommentContents;
