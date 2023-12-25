import React, { Component } from "react";
import { Icon, Button, Comment } from "semantic-ui-react";
import CommentImg01 from "../../../../../images/all/profile-110-px-sample-1.png";
import CommentImg02 from "../../../../../images/all/profile-110-px-sample-2.png";
import CommentImg03 from "../../../../../images/all/profile-110-px-sample-3.png";
import CommentImg04 from "../../../../../images/all/profile-110-px-sample-4.png";
import heartIcon from "../../../../../images/all/btn-community-like-on-16-px.png";
import heartIconOff from "../../../../../images/all/btn-community-like-off-16-px.png";

class CommentContents extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="comment-area course-comment">
        {/* comments */}
        <Comment.Group className="base shadow_0">
          {/*comment : 2줄이상 말줄임, 대댓글*/}
          <Comment>
            <Comment.Avatar src={CommentImg04} />
            <Comment.Content>
              <Comment.Author as="a">송중기</Comment.Author>
              <Comment.Metadata>
                <img src={heartIcon} alt="" /> <span class="heartText">4,289</span>
              </Comment.Metadata>
              <Comment.Metadata>
                <span className="date">11분 전</span>
              </Comment.Metadata>
              <Comment.Text>
                <div className="ellipsis">
                  <span>
                    이거 진짜 안들으면 후회합니다. 최고의 강사가 귀에 쏙쏙
                    들어오게 강의하네요.{" "}
                  </span>
                </div>
                {/* <Button>+ View more</Button> */}
              </Comment.Text>
              <Comment.Actions>
                <div className="right top">
                  <Button icon className="left postset edit2">
                    <Icon className="edit2" />
                    수정
                  </Button>
                  <Button icon className="left postset delete">
                    <Icon name="delete" />
                    삭제
                  </Button>
                </div>
                <Button className="cmt">View Replies</Button>
                <span className="count">9</span>
              </Comment.Actions>
            </Comment.Content>

          </Comment>

          <Comment>
            <Comment.Avatar src={CommentImg03} />
            <Comment.Content>
              <Comment.Author as="a">서지혜</Comment.Author>
              <Comment.Metadata>
                <img src={heartIcon} alt="" /> <span class="heartText">36</span>
              </Comment.Metadata>
              <Comment.Metadata>
                <span className="date">2일 전</span>
              </Comment.Metadata>
              <Comment.Text>
                <div className="ellipsis">
                  <span>모든 방면에서 최고의 강의!!</span>
                </div>
              </Comment.Text>
              <Comment.Actions>
                <div className="right top">
                  <Button icon className="left postset reply2">
                    <Icon className="reply2" />
                    댓글
                  </Button>
                </div>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Comment>
            <Comment.Avatar src={CommentImg02} />
            <Comment.Content>
              <Comment.Author as="a">김수현</Comment.Author>
              <Comment.Metadata>
                <img src={heartIconOff} alt="" /> <span class="heartText">3</span>{" "}
              </Comment.Metadata>
              <Comment.Metadata>
                <span className="date">2일 전</span>
              </Comment.Metadata>
              <Comment.Text>
                <div className="ellipsis">
                  <span>모든 방면에서 최고의 강의!!  최고의 학습 중 하나였습니다. 실습을 수행하고 개념을 이해하는데 매우 간단하고 쉽습니다. 내용은 기본 내용이지만 용어를 기억하는 데 도움이됩니다. 유연하고 강력한 클라우드 개발 환경에서 탁월한 경험을 갖춘 Complete Course입니다. 모든 방면에서 최고의 강의!!  최고의 학습 중 하나였습니다. </span>
                </div>
              </Comment.Text>
              <Comment.Actions>
                <div className="right top">
                  <Button icon className="left postset reply2">
                    <Icon className="reply2" />
                    댓글
                  </Button>
                </div>
                <Button className="cmt">View Replies</Button>
                <span className="count">2</span>
              </Comment.Actions>
            </Comment.Content>
            <Comment.Group>
              <Comment>
                <Comment.Avatar  src={CommentImg01} />
                <Comment.Content>
                  <Comment.Author as="a">이승기</Comment.Author>
                  <Comment.Metadata>
                <img src={heartIconOff} alt="" /> <span class="heartText">0</span>{" "}
              </Comment.Metadata>
                  <Comment.Metadata>
                    <span className="date">10분 전</span>
                  </Comment.Metadata>
                  <Comment.Text>
                    <div>
                      <span className="tag">@김수현</span>
                      <span>
                          난이도 높은 과제나 실습으로 실력을 단기간에 끌어올리고 싶다면 강사님이 운영하는 POCU 교육 사이트에 등록을 해보길 바랍니다.
                      </span>
                    </div>
                  </Comment.Text>
                  <Comment.Actions>
                    <div className="right top">
                      <Button icon className="left postset edit2">
                        <Icon name="edit2" />
                        수정
                      </Button>
                      <Button icon className="left postset delete">
                        <Icon name="delete" />
                        삭제
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
                  <Comment.Author as="a">송중기</Comment.Author>
                  <Comment.Metadata>
                <img src={heartIcon} alt="" /> <span class="heartText">0</span>{" "}
              </Comment.Metadata>
                  <Comment.Metadata>
                    <span className="date">28분 전</span>
                  </Comment.Metadata>
                  <Comment.Text>
                    <div>
                      <span className="tag">@김수현</span>
                      <span>
                          좋은 내용 감사합니다
                      </span>
                    </div>
                  </Comment.Text>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          </Comment>

        </Comment.Group>
      </div>
    );
  }
}

export default CommentContents;
