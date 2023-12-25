import React, {Component, createRef} from "react";
import {Segment, Sticky, Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";
import "../../style.css"
import ContentsMoreView from "../../../CommunityMyProfileFeed/components/ContentsMoreView";
class ContentsArea extends Component {
  contextRef = createRef();
  state = {activeItem: "MyCommunity"};

  handleItemClick = (e, {name}) => this.setState({activeItem: name});

  render() {
    const {activeItem} = this.state;
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
              <div className="community-list-wrap mycomu_fi">
                <table className="ui table fixed">
                  <colgroup>
                    <col width="700px"/>
                    <col width="130px"/>
                    <col width="130px"/>
                    <col width="130px"/>
                    <col width="130px"/>
                  </colgroup>
                  <thead>
                  <tr>
                    <th scope="col">커뮤니티명</th>
                    <th scope="col">관리자</th>
                    <th scope="col">멤버</th>
                    <th scope="col">가입일자</th>
                    <th scope="col">관리</th>
                  </tr>
                  </thead>
                  <tbody>
                    
                  <tr>
                    <td className="title ellipsis">
                      <span className="label">리더쉽</span>
                      에너지 솔루션에 대한 모든 것
                    </td>
                    <td><span className="manager">nickname</span></td>
                    <td>3,670</td>
                    <td>2020.09.21</td>
                    <td>
                      <button type="button" className="manage_btn">관리하기</button>
                    </td>
                  </tr>

                  <tr>
                    <td className="title ellipsis">
                      <span className="label">취미생활</span>
                      딥 러닝과 머신 러닝의 차이
                    </td>
                    <td><span>EBBLE</span></td>
                    <td>56</td>
                    <td>2020.09.21</td>
                    <td>
                      <button type="button" className="sece_btn">탈퇴하기</button>
                    </td>
                  </tr>

                  <tr>
                    <td className="title ellipsis"><span className="label">커뮤니티주제</span>반도체 4차산업 OLED 제약의료바이오 자동화장비설계의 모든 것</td>
                    <td><span>tmddnjs78</span></td>
                    <td>10,789</td>
                    <td>2020.09.21</td>
                    <td>
                      <button type="button" className="sece_btn">탈퇴하기</button>
                    </td>
                  </tr>

                  <tr>
                    <td className="title ellipsis">
                      <span className="label">행복</span>
                      마음근력 키우기
                    </td>
                    <td><span>captain</span></td>
                    <td>999</td>
                    <td>2020.09.09</td>
                    <td>
                      <button type="button" className="sece_btn">탈퇴하기</button>
                    </td>
                  </tr>

                  <tr>
                    <td className="title ellipsis">에너지 거래의 현재와 미래</td>
                    <td><span className="manager">nickname</span></td>
                    <td>50,005</td>
                    <td>2020.08.28</td>
                    <td>
                      <button type="button" className="manage_btn">관리하기</button>
                    </td>
                  </tr>

                  <tr>
                    <td className="title ellipsis">
                      <span className="label">취미생활</span>
                      데이터 혁신이 답이다
                    </td>
                    <td><span>chang</span></td>
                    <td>3</td>
                    <td>2020.08.25</td>
                    <td>
                      <button type="button" className="sece_btn">탈퇴하기</button>
                    </td>
                  </tr>

                  <tr>
                    <td className="title ellipsis">자동차의 핵심은 인공지능</td>
                    <td><span>EBBLE</span></td>
                    <td>700</td>
                    <td>2020.08.21</td>
                    <td>
                      <button type="button" className="sece_btn">탈퇴하기</button>
                    </td>
                  </tr>

                  <tr>
                    <td className="title ellipsis">
                      <span className="label">리더십</span>
                      에너지 솔루션에 대한 모든 것
                    </td>
                    <td><span className="manager">nickname</span></td>
                    <td>50</td>
                    <td>2020.09.21</td>
                    <td>
                      <button type="button" className="manage_btn">관리하기</button>
                    </td>
                  </tr>

                  <tr>
                    <td className="title ellipsis">
                      <span className="label">직장탐구생활</span>
                      딥 러닝과 머신 러닝의 차이
                    </td>
                    <td><span>EBBLE</span></td>
                    <td>56</td>
                    <td>2020.09.21</td>
                    <td>
                      <button type="button" className="sece_btn">탈퇴하기</button>
                    </td>
                  </tr>

                  <tr>
                    <td className="title ellipsis">
                      <span className="label">커뮤니티주제</span>
                      반도체 4차산업 OLED 제약의료바이오 자동화장비설계의 모든 것
                    </td>
                    <td><span>tmddnjs78</span></td>
                    <td>10,789</td>
                    <td>2020.09.21</td>
                    <td>
                      <button type="button" className="sece_btn">탈퇴하기</button>
                    </td>
                  </tr>

                  </tbody>
                </table>
              </div>
              <ContentsMoreView />
            </div>
          </div>
        </Segment>
      </div>
    );
  }
}

export default ContentsArea;
