import React, { Component } from "react";
import { Icon, Button, Comment } from "semantic-ui-react";
import CommentImg03 from "../../../../../images/all/profile-110-px-sample-3.png";

class CommunityMainCard02 extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="comment-area community-main-card">
        {/* comments */}
        <Comment.Group className="base">
          {/*comment : 2줄이상 말줄임, 대댓글*/}
          <Comment>
            <Comment.Avatar src={CommentImg03} />
            <Comment.Content>
              <Comment.Author as="a">반도체 4차산업 OLED 제약의료바이오 자동화장비설계의 모든 것</Comment.Author>
              <Comment.Text>
                <div className="ellipsis">
                <span className="id">hyoshin</span>
                <span className="date">1시간 전</span>
                </div>
                {/* <Button>+ View more</Button> */}
              </Comment.Text>
              <Comment.Actions>
                <div className="right top">
                  <Button icon className="img-icon">
                    <Icon className="bookmark2" />
                    <span className="blind">북마크</span>
                  </Button>
                  <Button icon className="img-icon">
                    <Icon className="share2" />
                    <span className="blind">공유</span>
                  </Button>
                </div>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
          <div className="card-bottom">
            <h3><span className="ico_feed message">메세지</span>왜 다시 딥 러닝일까요? 자유로운 의견을 남겨주세요.</h3>
            <div>
              <p className="summary">서로 다른 관점을 가진 전문가의 의견을 듣는다는 입장에서는 좋은 강의였다고 생각합니다만 두 분의 접점이 있었다면 더 좋았을 것 같다는 생각이 듭니다. 좋은 강의 고맙습니다.</p>
            </div>
          </div>
        </Comment.Group>
      </div>
    );
  }
}

export default CommunityMainCard02;
