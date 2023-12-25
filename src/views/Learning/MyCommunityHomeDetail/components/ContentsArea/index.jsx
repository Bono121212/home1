import React, { Component, createRef } from "react";
import { Segment } from "semantic-ui-react";
import LnbMenu from "../../components/LnbMenu";
// import CommunityCard01 from "../../components/CommunityCard01";
// import CommunityCard02 from "../../components/CommunityCard02";
// import CommunityCard03 from "../../components/CommunityCard03";
// import NewBoard from "../../components/NewBoard";
import Banner from "../../../../../images/all/bg-ttl-sample-02.png";
import out from "../../../../../images/all/icon-out-24-px.png";
import profile from "../../../../../images/all/profile-110-px-sample-2.png";

class ContentsArea extends Component {
  contextRef = createRef();
  state = { activeItem: "MyCommunity" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div ref={this.contextRef}>
        <Segment className="full">
          <div className="course-detail-center community-containter">
            <LnbMenu />

            <div className="community-home-contants">
              {/* 배너 */}
              <div className="community-banner-type1">
                <img src={Banner} alt="" />
                <div className="community-banner-inner">
                  <div className="community-banner-title">
                    Deep Learning Community
                  </div>
                  <div className="community-banner-copy">
                    과정 플랫폼은 여러분들이 동기 구성원들과 서로 소통하고
                    배우며 성장할 수 있는 공간입니다 적극적으로 참여하여 동기
                    구성원들과 함께 의미 있고, 소중한 경험을 쌓으시기를 바랍니다
                    카페 소개 및 다양한 메세지 등을 넣을 수 있어요. 배경이미지
                    가로사이즈 고정, 세로 사이즈 가변입니다
                  </div>
                </div>
              </div>

              <div className="my-commu-table">
                <table>
                  <tbody>
                    <tr>
                      <th>커뮤니티명</th>
                      <td>Deep Learning</td>
                    </tr>
                    <tr>
                      <th>커뮤니티 설명</th>
                      <td>
                        인공지능에 대한 뉴스와 토론을 나눌 수 있는 공간입니다.
                        <br />
                        관심이 있는 모든 구성원은 가입을 환영합니다!
                      </td>
                    </tr>
                    <tr>
                      <th>관리자 정보</th>
                      <td>
                        <div className="profile home-detail-profile">
                          <div className="pic">
                            <img src={profile} alt="" />
                          </div>
                          <span className="crown">김정보</span>
                        </div>
                        <div className="profile home-detail-profile">
                          <div className="pic">
                            <img src={profile} alt="" />
                          </div>
                          <span>김정보</span>
                        </div>
                        <div className="profile home-detail-profile pro-mt30">
                          <div className="pic">
                            <img src={profile} alt="" />
                          </div>
                          <span>김정보</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>개설 일자</th>
                      <td>2021-02-14</td>
                    </tr>
                  </tbody>
                </table>
                <button type="button" className="ui button sece_btn">
                <img src={out} alt="" />
                  <span>탈퇴하기</span>
                </button>
              </div>
            </div>
          </div>
        </Segment>
      </div>
    );
  }
}

export default ContentsArea;
