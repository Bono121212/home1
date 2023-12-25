import React, { Component } from "react";
import { Button, Comment, Popup } from "semantic-ui-react";
import CommentImg04 from "../../../../../images/all/profile-110-px-sample-4.png";
import SetIcon from "../../../../../images/all/commu-btn-menu.png";

class CommunityMainCard01 extends Component {
  state = {};
  handleClick = () =>
    this.setState((prevState) => ({ active: !prevState.active }));

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  closeNotification = () => this.setState({ noticeOpen: false });

  render() {
    return (
      <div className="comment-area community-main-card commu-sub-card">
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
                  <span className="like">좋아요{' '}<strong>379</strong></span>
                  <span className="comt">댓글수{' '}<strong>80</strong></span>
                </div>
                {/* <Button>+ View more</Button> */}
              </Comment.Text>
              <Comment.Actions>
                <Popup
                  className="balloon-pop myCumu_btn commu_bubble_popup"
                  trigger={
                    <div className="right top sub-menu">
                      <Button icon className="img-icon ui user">
                        <img src={SetIcon} alt="" />
                        <span className="blind">북마크</span>
                      </Button>
                    </div>
                  }
                  position="bottom right"
                  on="click"
                >
                  <Popup.Content>
                    <ul>
                      <li className="community-profile">
                        <a href="/mypage/my-badge-list">
                          <i className="balloon icon popupUrl" />
                          <span>URL 복사</span>
                        </a>
                      </li>
                      <li>
                        <a href="/mypage/my-badge-list">
                          <i className="balloon icon popupBook" />
                          <span>북마크 추가</span>
                        </a>
                      </li>
                    </ul>
                  </Popup.Content>
                </Popup>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
          <div className="card-bottom">
            <h3 className="ellipsis cmt_tit">
              <span className="ico_feed board">게시물</span>
              <a href={()=>false}>숏폼 플랫폼인 Quibi 서비스가 론칭되었다</a>
            </h3>
            {/* summary 삭제 */}
            {/*<div>
              <p className="summary">
                SK그룹은 내년 1월 그룹 싱크탱크인 SK경영경제연구소와 기업문화
                교육기관인 SK아카데미 등 역량개발 조직을 통합한 SUNI를 공식
                출범시킬 예정이라고 18일 밝혔다. 최태원 SK 회장은 "급속한
                경영환경 변화에 따라 SK그룹은 내년 1월 그룹 싱크탱크인
                SK경영경제연구소와 기업문화 교육기관인 SK아카데미 등 역량개발
                조직을 통합한 SUNI를 공식 출범시킬 예정이라고 18일 밝혔다.
                최태원 SK 회장은 "급속한 경영환경 변화에 따라
              </p>
            </div> */}

            <div className="text-right">
              <button class="ui icon button right more-bttn">
                <i aria-hidden="true" class="drop_down icon"></i>
              </button>
              {/*토글시 버튼 변경*/}
              {/* <button class="ui icon button right more-bttn">
                <i aria-hidden="true" class="drop_down up icon"></i>
              </button> */}
            </div>
          </div>
        </Comment.Group>
      </div>
    );
  }
}

export default CommunityMainCard01;
