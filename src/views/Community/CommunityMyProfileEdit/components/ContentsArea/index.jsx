import React, { Component, createRef } from "react";
import { Segment, Sticky, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

class ContentsArea extends Component {
  contextRef = createRef();
  state = { activeItem: "Profile" };

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
              <table className="ui fixed table vertical celled">
                <tbody>
                <tr>
                  <th scope="row" className="three wide">이름</th>
                  <td>송중기</td>
                </tr>
                <tr>
                  <th scope="row">관계사</th>
                  <td>SK C&C</td>
                </tr>
                <tr>
                  <th scope="row">닉네임</th>
                  <td>
                    <div className="ui input write profile">
                      <input type="text" placeholder="닉네임을 입력해주세요." value="nickname"/>
                      <i aria-hidden="true" className="icon clear link"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">취미</th>
                  <td>
                    <div className="ui input write profile">
                      <input type="text" placeholder="취미를 입력해주세요." value=""/>
                      <i aria-hidden="true" className="icon clear link"></i>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div className="buttons">
              <button type="button" className="ui button fix bg">완료</button>
            </div>
          </div>
        </Segment>
      </div>
    );
  }
}

export default ContentsArea;
