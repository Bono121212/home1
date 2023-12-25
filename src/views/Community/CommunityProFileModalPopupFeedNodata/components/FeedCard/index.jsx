import React, { Component } from "react";
import { Accordion, Button, Comment } from "semantic-ui-react";
import CommentImg04 from "../../../../../images/all/profile-110-px-sample-4.png";


class FeedCard extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex });
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {

    const { activeIndex } = this.state

    return (
      <div className="feed-list-area feed-wrapper">
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
                  <span className="line id">조세호님</span>{/* line 클래스가 있어야 오른 쪽에 구분 라인생김 */}
                  <span className="line date">39분 전</span>
                  <span className="line like">좋아요{' '}<strong>379</strong></span>
                  <span className="line comt">댓글수{' '}<strong>80</strong></span>
                </div>
              </Comment.Text>
            </Comment.Content>
          </Comment>
          <div className="feed-card">
            <Accordion>
              <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={this.handleClick}
                className="more-bttn feed-tit"
              >
                <span className="ico_feed board">게시물</span>
                <a href={()=>false}>숏폼 플랫폼인 Quibi 서비스가 론칭되었다 게시물 제목이 긴 경우에는 어떻게 되는 지 한번 알아보자</a>
                <span className="ico_feed file">첨부파일</span>
                <i aria-hidden="true" class="dropdown icon"></i>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <div>
                  <p className="summary">
                    {`두산에서 애자일 코치로 활약 중인 신원님을 모시고 Meetup을 진행하였고,
                    외부 공개가 불가능한 세션이어서 SK코치님들끼리만 모여서 진행했습니다.
                    소개 가능한 부분만 제가 요약 정리해서 아래와 같이 올려봅니다. (이정도는 공개해도 괜찮지 싶습니다. )
                    1. 애자일 온라인 레슨
                    - 애자일 코치도 제품을 만드는 PO 컨셉으로 온라인 과정을 애자일로 개발해보는 경험을 해봄
                    2. 임원회의 개선 : 리더들의 일하는 방식의 변화 모범 사례를 만들자
                    - 임원회의 세션 : 스프린트 적용. Jira 적용
                    - 프로토타입형 : 피드백 반영 후 워터풀로 진행
                    (애자일 인셉션 > MURAL 익숙해짐 > 사용자 스토리 설명 > PO 대상 워크샵 > 1:1 코칭 > UX 워크샵 > 특화기능 도출 등)`}
                  </p>
                </div>
              </Accordion.Content>
            </Accordion>
          </div>
        </Comment.Group>
        <Comment.Group className="base">
          {/*comment : 2줄이상 말줄임, 대댓글*/}
          <Comment>
            <Comment.Avatar src={CommentImg04} />
            <Comment.Content>
              <Comment.Author as="a">
                반도체 4차산업 OLED 제약의료바이오 자동화장비설계의 모든 것
              </Comment.Author>
              <Comment.Text>
                <div className="ellipsis">
                  <span className="line id">조세호님</span>
                  <span className="line date">1시간 전</span>
                  <span className="like">{' '}<strong></strong></span>
                  <span className="comt">{' '}<strong></strong></span>
                </div>
              </Comment.Text>
            </Comment.Content>
          </Comment>
          <div className="feed-card">
            <Accordion>
              <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={this.handleClick}
                className="more-bttn feed-tit"
              >
                <span className="ico_feed message">게시물</span>
                <Link>왜 다시 딥 러닝일까요? 자유로운 의견을 남겨주세요.</Link>
                <span className="ico_feed file blind">첨부파일</span>
                <i aria-hidden="true" class="dropdown icon"></i>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                <div>
                  <p className="summary">
                    {`두산에서 애자일 코치로 활약 중인 신원님을 모시고 Meetup을 진행하였고,
                    외부 공개가 불가능한 세션이어서 SK코치님들끼리만 모여서 진행했습니다.
                    소개 가능한 부분만 제가 요약 정리해서 아래와 같이 올려봅니다. (이정도는 공개해도 괜찮지 싶습니다. )
                    1. 애자일 온라인 레슨
                    - 애자일 코치도 제품을 만드는 PO 컨셉으로 온라인 과정을 애자일로 개발해보는 경험을 해봄
                    2. 임원회의 개선 : 리더들의 일하는 방식의 변화 모범 사례를 만들자
                    - 임원회의 세션 : 스프린트 적용. Jira 적용
                    - 프로토타입형 : 피드백 반영 후 워터풀로 진행
                    1. 애자일 온라인 레슨
                    - 애자일 코치도 제품을 만드는 PO 컨셉으로 온라인 과정을 애자일로 개발해보는 경험을 해봄
                    2. 임원회의 개선 : 리더들의 일하는 방식의 변화 모범 사례를 만들자
                    - 임원회의 세션 : 스프린트 적용. Jira 적용
                    - 프로토타입형 : 피드백 반영 후 워터풀로 진행
                    1. 애자일 온라인 레슨
                    - 애자일 코치도 제품을 만드는 PO 컨셉으로 온라인 과정을 애자일로 개발해보는 경험을 해봄
                    2. 임원회의 개선 : 리더들의 일하는 방식의 변화 모범 사례를 만들자
                    - 임원회의 세션 : 스프린트 적용. Jira 적용
                    - 프로토타입형 : 피드백 반영 후 워터풀로 진행
                    1. 애자일 온라인 레슨
                    - 애자일 코치도 제품을 만드는 PO 컨셉으로 온라인 과정을 애자일로 개발해보는 경험을 해봄
                    2. 임원회의 개선 : 리더들의 일하는 방식의 변화 모범 사례를 만들자
                    - 임원회의 세션 : 스프린트 적용. Jira 적용
                    - 프로토타입형 : 피드백 반영 후 워터풀로 진행
                    1. 애자일 온라인 레슨
                    - 애자일 코치도 제품을 만드는 PO 컨셉으로 온라인 과정을 애자일로 개발해보는 경험을 해봄
                    2. 임원회의 개선 : 리더들의 일하는 방식의 변화 모범 사례를 만들자
                    - 임원회의 세션 : 스프린트 적용. Jira 적용
                    - 프로토타입형 : 피드백 반영 후 워터풀로 진행
                    (애자일 인셉션 > MURAL 익숙해짐 > 사용자 스토리 설명 > PO 대상 워크샵 > 1:1 코칭 > UX 워크샵 > 특화기능 도출 등)`}
                  </p>
                </div>
              </Accordion.Content>
            </Accordion>
          </div>
        </Comment.Group>
        <Comment.Group className="base">
          {/*comment : 2줄이상 말줄임, 대댓글*/}
          <Comment>
            <Comment.Avatar src={CommentImg04} />
            <Comment.Content>
              <Comment.Author as="a">
                마음근력 키우기
              </Comment.Author>
              <Comment.Text>
                <div className="ellipsis">
                  <span className="line id">조세호님</span>
                  <span className="line date">1일 전</span>
                  <span className="like">{' '}<strong></strong></span>
                  <span className="comt">{' '}<strong></strong></span>
                </div>
              </Comment.Text>
            </Comment.Content>
          </Comment>
          <div className="feed-card">
            <Accordion>
              <Accordion.Title
                active={activeIndex === 2}
                index={2}
                onClick={this.handleClick}
                className="more-bttn feed-tit"
              >
                <span className="ico_feed message">게시물</span>
                <a href={()=>false}>애플의 황이석 교수의 Financial Acumen 스트리밍 서비스</a>
                <span className="ico_feed file blind">첨부파일</span>
                <i aria-hidden="true" class="dropdown icon"></i>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
                <div>
                  <p className="summary">
                    {`두산에서 애자일 코치로 활약 중인 신원님을 모시고 Meetup을 진행하였고,
                    외부 공개가 불가능한 세션이어서 SK코치님들끼리만 모여서 진행했습니다.
                    소개 가능한 부분만 제가 요약 정리해서 아래와 같이 올려봅니다. (이정도는 공개해도 괜찮지 싶습니다. )
                    1. 애자일 온라인 레슨
                    - 애자일 코치도 제품을 만드는 PO 컨셉으로 온라인 과정을 애자일로 개발해보는 경험을 해봄
                    2. 임원회의 개선 : 리더들의 일하는 방식의 변화 모범 사례를 만들자
                    - 임원회의 세션 : 스프린트 적용. Jira 적용
                    - 프로토타입형 : 피드백 반영 후 워터풀로 진행
                    1. 애자일 온라인 레슨
                    - 애자일 코치도 제품을 만드는 PO 컨셉으로 온라인 과정을 애자일로 개발해보는 경험을 해봄
                    2. 임원회의 개선 : 리더들의 일하는 방식의 변화 모범 사례를 만들자
                    - 임원회의 세션 : 스프린트 적용. Jira 적용
                    - 프로토타입형 : 피드백 반영 후 워터풀로 진행
                    1. 애자일 온라인 레슨
                    - 애자일 코치도 제품을 만드는 PO 컨셉으로 온라인 과정을 애자일로 개발해보는 경험을 해봄
                    2. 임원회의 개선 : 리더들의 일하는 방식의 변화 모범 사례를 만들자
                    - 임원회의 세션 : 스프린트 적용. Jira 적용
                    - 프로토타입형 : 피드백 반영 후 워터풀로 진행
                    1. 애자일 온라인 레슨
                    - 애자일 코치도 제품을 만드는 PO 컨셉으로 온라인 과정을 애자일로 개발해보는 경험을 해봄
                    2. 임원회의 개선 : 리더들의 일하는 방식의 변화 모범 사례를 만들자
                    - 임원회의 세션 : 스프린트 적용. Jira 적용
                    - 프로토타입형 : 피드백 반영 후 워터풀로 진행
                    1. 애자일 온라인 레슨
                    - 애자일 코치도 제품을 만드는 PO 컨셉으로 온라인 과정을 애자일로 개발해보는 경험을 해봄
                    2. 임원회의 개선 : 리더들의 일하는 방식의 변화 모범 사례를 만들자
                    - 임원회의 세션 : 스프린트 적용. Jira 적용
                    - 프로토타입형 : 피드백 반영 후 워터풀로 진행
                    (애자일 인셉션 > MURAL 익숙해짐 > 사용자 스토리 설명 > PO 대상 워크샵 > 1:1 코칭 > UX 워크샵 > 특화기능 도출 등)`}
                  </p>
                </div>
              </Accordion.Content>
            </Accordion>
          </div>
        </Comment.Group>
      </div>
    );
  }
}

export default FeedCard;
