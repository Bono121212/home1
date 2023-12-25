import React, { Component } from "react";
import { Popup, Button, Comment } from "semantic-ui-react";
import CommentImg03 from "../../../../../images/all/profile-110-px-sample-3.png";
import SetIcon from "../../../../../images/all/commu-btn-menu.png";
import { Link } from "react-router-dom";

class CommunityMainCard05 extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div className="comment-area community-main-card commu-sub-card">
        {/* comments */}
        <Comment.Group className="base">
          {/*comment : 2줄이상 말줄임, 대댓글*/}
          <Comment>
          <Comment.Avatar src={CommentImg03} />
            <Comment.Content>
              <Comment.Author as="a">
              반도체 4차산업 OLED 제약의료바이오 자동화장비설계의 모든 것
              </Comment.Author>
              <Comment.Text>
                <div className="ellipsis">
                  <span className="id">hyoshin</span>
                  <span className="date">1시간 전</span>
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
                          <i className="balloon icon popupBookRemove" />
                          <span>북마크 제거</span>
                        </a>
                      </li>
                    </ul>
                  </Popup.Content>
                </Popup>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
          <div className="card-bottom">
            <div className="card-header-line">
              <h3 className="ellipsis cmt_tit">
              <span className="ico_feed board">메세지</span>
                <Link>왜 다시 딥 러닝일까요? 자유로운 의견을 남겨주세요.</Link>
              </h3>
              <div className="text-right">
                <button class="ui icon button right more-bttn">
                  <i aria-hidden="true" class="drop_down up icon"></i>
                </button>
                {/*토글시 버튼 변경*/}
                {/* <button class="ui icon button right more-bttn">
                  <i aria-hidden="true" class="drop_down up icon"></i>
                </button> */}
              </div>
            </div>
            {/*eidtor*/}
            <div className="ql-snow">
              <div class="ql-editor">
                <p>mySUNI &lt;처음 만나는 애자일&gt; 장은지 대표의 신간이 나와서 소개 드립니다.</p>
                <p><strong><u>이머징 리더십 인터벤션즈 장은지 대표, “리셋하고 리드하라”</u></strong></p>
                <p>아래 글은 mySUNI &lt;Why 애자일&gt; 조승빈 코치께서 쓰신 서평입니다.</p>
                <p>(원문 출처: <a href="https://congruentagile.com/2021/05/21/reset-lead" target="_blank" rel="noopener noreferrer">https://congruentagile.com/2021/05/21/reset-lead</a> )</p><p><br/></p><p>저는 애자일의 개념을 처음 접하는 분들께 (특히, 비 소프트웨어 개발 분야에 계신 분들께) 두 권의 책을 추천해왔습니다. 그 중 하나는 스티븐 데닝의 “애자일, 민첩하고 유연한 조직의 비밀”이고, 다른 하나는 켄트 벡의 “익스트림 프로그래밍”이지요. 제가 이렇게 두 권을 추천해 온 것은, 데닝의 책은 우리에게 애자일이 필요한 이유는 무엇인지를 인식하고 여러 가지 사례로 그 개념을 올바르게 이해하는 데 좋은 책이고, 벡의 책을 통해서는 애자일을 내 업무에 날마다 어떻게 적용할 수 있는지에 대한 원형을 엿볼 수 있기 때문이었습니다.</p><p><br/></p><p>얼마 전에 스티븐 데닝의 책을 대신할 만한 좋은 책이 나왔습니다. 해외 이야기가 아니라 국내 사례를 풍부하게 소개하고 있기 때문에 훨씬 더 쉽게 공감할 수 있습니다. 글로 어렵지 않게 술술 읽히더라고요. 바로 이머징 리더십 인터벤션즈의 장은지 대표님이 쓰신 “리셋하고 리드하라”입니다. 책을 입수하자마자 처음부터 끝까지 단숨에 읽었습니다. 이 글을 보시는 분들께도 꼭 한 번 읽어보시라고 추천드리고 싶네요. 감상평을 대신해서 몇몇 인상적인 문구와 거기에 대한 개인적인 의견을 적어 보겠습니다.</p><p><br/></p>
              </div>
            </div>
          </div>
        </Comment.Group>
      </div>
    );
  }
}

export default CommunityMainCard05;
