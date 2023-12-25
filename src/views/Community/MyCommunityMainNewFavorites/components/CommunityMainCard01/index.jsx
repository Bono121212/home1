import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon, Button, Comment } from "semantic-ui-react";
import CommentImg04 from "../../../../../images/all/profile-110-px-sample-4.png";

class CommunityMainCard01 extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="comment-area community-main-card">
        {/* comments */}
        <Comment.Group className="base">
          {/*comment : 2줄이상 말줄임, 대댓글*/}
          <Comment>
            <Comment.Avatar src={CommentImg04} />
            <Comment.Content>
              <Comment.Author as="a">
                자동차의 핵심은 인공지능 (커뮤니티명)
              </Comment.Author>
              <Comment.Text>
                <div className="ellipsis">
                  <span className="id">tmddnjs78</span>
                  <span className="date">39분 전</span>
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
            <h3>
              <span className="ico_feed board">게시물</span>
              <Link>숏폼 플랫폼인 Quibi 서비스가 론칭되었다</Link>
            </h3>
            <div>
              <p className="summary">
                SK그룹은 내년 1월 그룹 싱크탱크인 SK경영경제연구소와 기업문화
                교육기관인 SK아카데미 등 역량개발 조직을 통합한 SUNI를 공식
                출범시킬 예정이라고 18일 밝혔다. 최태원 SK 회장은 "급속한 경영환경
                변화에 따라 SK그룹은 내년 1월 그룹 싱크탱크인 SK경영경제연구소와 기업문화
                교육기관인 SK아카데미 등 역량개발 조직을 통합한 SUNI를 공식
                출범시킬 예정이라고 18일 밝혔다. 최태원 SK 회장은 "급속한 경영환경
                변화에 따라
              </p>
            </div>
            {/*eidtor*/}
            <div className="ql-snow">
              <div className="ql-editor">
                SK그룹은 내년 1월 그룹 싱크탱크인 SK경영경제연구소와 기업문화
                교육기관인 SK아카데미 등 역량개발 조직을 통합한 SUNI를 공식
                출범시킬 예정이라고 18일 밝혔다. 최태원 SK 회장은 "급속한 경영환경
                변화에 따라 SK그룹은 내년 1월 그룹 싱크탱크인 SK경영경제연구소와 기업문화
                교육기관인 SK아카데미 등 역량개발 조직을 통합한 SUNI를 공식
                출범시킬 예정이라고 18일 밝혔다. 최태원 SK 회장은 "급속한 경영환경
                변화에 따라
              </div>
            </div>
            <div className="text-right">
              <button class="ui icon button right btn-blue btn-more">
                more<i aria-hidden="true" class="icon more2"></i>
              </button>
              {/* 토글시 버튼 변경*/}
              <button className="ui icon button right btn-blue fn-more-toggle">
                hide <i aria-hidden="true" className="icon hide2"></i>
              </button>
            </div>
          </div>
        </Comment.Group>
      </div>
    );
  }

}


export default CommunityMainCard01;
