import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon, Button, Comment } from "semantic-ui-react";
import CommentImg02 from "../../../../../images/all/profile-110-px-sample-2.png";

class CommunityMainCard03 extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="comment-area community-main-card">
        {/* comments */}
        <Comment.Group className="base">
          {/*comment : 2줄이상 말줄임, 대댓글*/}
          <Comment>
            <Comment.Avatar src={CommentImg02} />
            <Comment.Content>
              <Comment.Author as="a">마음근력 키우기</Comment.Author>
              <Comment.Text>
                <div className="ellipsis">
                  <span className="id">mms9800</span>
                  <span className="date">1일 전</span>
                  <span className="like">좋아요{' '}<strong>379</strong></span>
                  <span className="comt">댓글수{' '}<strong>80</strong></span>
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
            <h3><span className="ico_feed board">게시물</span>애플의 황이석 교수의 Financial Acumen 스트리밍 서비스</h3>
            <div>
              <p>Human Capital(인적 자본)에 대한 과감한 투자가 절실한 시점"이라며 "구성원들은 SUNI를 통해 미래역량을 기르고 축적하게 될 것이며, 이것이 곧 구성원들의 지속적인 성장과 행복을 위한 변화의 첫걸음이 될 것"이라고 말했다. </p>
            </div>
            <p className="attach_list">
              <Link to="">mySUNI 프로그램북_New format_20년 3분기.pdf</Link>
              <Link to="">한 한방에 이해하는 반도체.pdf</Link>
            </p>
            <div className="text-right">
              <button className="ui icon button right btn-blue btn-more">
                more<i aria-hidden="true" className="icon more2"></i>
              </button>
            </div>
          </div>
        </Comment.Group>
      </div>
    );
  }
}

export default CommunityMainCard03;
