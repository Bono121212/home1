import React, { Component, createRef } from "react";
import { Segment, Sticky, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import PicProfileDefault from "../../../../../images/all/pic_profile_default.png"
import ContentsMoreView from "../ContentsMoreView"
class ContentsArea extends Component {
  contextRef = createRef();
  state = { activeItem: "bookmark" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div ref={this.contextRef}>
        <Sticky context={this.contextRef} className="tab-menu offset0">
          <div className="cont-inner">
            <Menu className="sku">
              <Menu.Item
                name="Profile"
                active={activeItem === "Profile"}
                onClick={this.handleItemClick}
                as={Link}
                to=""
              >
                Profile
              </Menu.Item>
              <Menu.Item
                name="Feed"
                active={activeItem === "Feed"}
                onClick={this.handleItemClick}
                as={Link}
                to=""
              >
                Feed
              </Menu.Item>
              <Menu.Item
                name="MyCommunity"
                active={activeItem === "MyCommunity"}
                onClick={this.handleItemClick}
                as={Link}
                to=""
              >
                My Community
              </Menu.Item>
              <Menu.Item
                name="북마크"
                active={activeItem === "bookmark"}
                onClick={this.handleItemClick}
                as={Link}
                to=""
              >
                북마크
              </Menu.Item>
            </Menu>
          </div>
        </Sticky>

        <Segment className="full">
          <div className="course-detail-center community-containter">
            <div className="community-main-contants">

              {/*List item | board type*/}
              <div className="sub-info-box">
                <div className="comment-area community-main-card">
                  <div className="ui comments base">
                    <div className="comment">
                      <div className="avatar">
                        <img src={PicProfileDefault} alt="프로필 사진" />
                      </div>
                      <div className="content">
                        <a href={()=>false} className="author">자동차의 핵심은 인공지능 (커뮤니티명)</a>
                        <div className="text">
                          <div className="ellipsis">
                            <span className="id">tmddnjs78</span>
                            <span className="date">39분 전</span>
                          </div>
                        </div>
                        <div className="actions">
                          <div className="right top">
                            <button className="ui icon button img-icon">
                              <i aria-hidden="true" className="icon remove3"></i>
                              <span className="blind">휴지통</span>
                            </button>
                            <button className="ui icon button img-icon">
                              <i aria-hidden="true" className="icon share2"></i>
                              <span className="blind">공유</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-bottom">
                      <h3><span className="ico_feed board">게시물</span>숏폼 플랫폼인 Quibi 서비스가 론칭되었다</h3>
                      <p className="summary">SK그룹이 구성원들의 딥체인지 역량을 키워나갈 교육·연구 통합 플랫폼인 'SUNI’를 출범시킨다. 국내기업 최고 수준의 교육·연구 전문조직을 운영해야 구성원들이 4차 산업혁명 등 급변하는 경영환경에 선제적으로 대응할 수 있는 역량을 갖추게 돼 결국 딥체인지가 가능하다는 최태원 회장의 경영방침에 따른 것이다.</p>
                      <div className="text-right">
                        <button className="ui icon button right btn-blue btn-more">more<i aria-hidden="true" className="icon more2"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*List item | message type*/}
              <div className="sub-info-box">
                <div className="comment-area community-main-card">
                  <div className="ui comments base">
                    <div className="comment">
                      <div className="avatar">
                        <img src={PicProfileDefault} alt="프로필 사진" />
                      </div>
                      <div className="content">
                        <a href={()=>false} className="author">자동차의 핵심은 인공지능 (커뮤니티명)</a>
                        <div className="text">
                          <div className="ellipsis">
                            <span className="id">tmddnjs78</span>
                            <span className="date">39분 전</span>
                          </div>
                        </div>
                        <div className="actions">
                          <div className="right top">
                            <button className="ui icon button img-icon">
                              <i aria-hidden="true" className="icon remove3"></i>
                              <span className="blind">휴지통</span>
                            </button>
                            <button className="ui icon button img-icon">
                              <i aria-hidden="true" className="icon share2"></i>
                              <span className="blind">공유</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-bottom">
                      <h3><span className="ico_feed message">메세지</span>왜 다시 딥 러닝일까요? 자유로운 의견을 남겨주세요.</h3>
                      <p>서로 다른 관점을 가진 전문가의 의견을 듣는다는 입장에서는 좋은 강의였다고 생각합니다만 두 분의 접점이 있었다면 더 좋았을 것 같다는 생각이 듭니다. 좋은 강의 고맙습니다.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/*List item | attach type*/}
              <div className="sub-info-box">
                <div className="comment-area community-main-card">
                  <div className="ui comments base">
                    <div className="comment">
                      <div className="avatar">
                        <img src={PicProfileDefault} alt="프로필 사진" />
                      </div>
                      <div className="content">
                        <a href={()=>false} className="author">자동차의 핵심은 인공지능 (커뮤니티명)</a>
                        <div className="text">
                          <div className="ellipsis">
                            <span className="id">tmddnjs78</span>
                            <span className="date">39분 전</span>
                          </div>
                        </div>
                        <div className="actions">
                          <div className="right top">
                            <button className="ui icon button img-icon">
                              <i aria-hidden="true" className="icon remove3"></i>
                              <span className="blind">휴지통</span>
                            </button>
                            <button className="ui icon button img-icon">
                              <i aria-hidden="true" className="icon share2"></i>
                              <span className="blind">공유</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-bottom">
                      <h3><span className="ico_feed attach">게시물</span>숏폼 플랫폼인 Quibi 서비스가 론칭되었다</h3>
                      <p>SK그룹은 내년 1월 그룹 싱크탱크인 SK경영경제연구소와 기업문화 교육기관인 SK아카데미 등 역량개발 조직을 통합한 SUNI를 공식 출범시킬 예정이라고 18일 밝혔다. 최태원 SK 회장은 "급속한 경영환경 변화에 따라 Human…</p>
                      <p className="attach_list">
                        <a href={()=>false}>mySUNI 프로그램북_New format_20년 3분기.pdf</a>
                        <a href={()=>false}>한 한방에 이해하는 반도체.pdf</a>
                      </p>
                      <div className="text-right">
                        <button className="ui icon button right btn-blue btn-more">more<i aria-hidden="true" className="icon more2"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <ContentsMoreView />
          </div>
        </Segment>
      </div>
    );
  }
}

export default ContentsArea;
