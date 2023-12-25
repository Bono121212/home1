import React, {Component, createRef} from "react";
import {Segment, Sticky, Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

class ContentsArea extends Component {
  contextRef = createRef();
  state = {activeItem: "Profile"};

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
                name="Community"
                active={activeItem === "Community"}
                onClick={this.handleItemClick}
                as={Link}
                to=""
              >
                Community
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
                  <td>서지혜</td>
                </tr>
                <tr>
                  <th scope="row">관계사</th>
                  <td>SK C&C</td>
                </tr>
                <tr>
                  <th scope="row">닉네임</th>
                  <td>nickname</td>
                </tr>
                <tr>
                  <th scope="row">취미</th>
                  <td>음악감상</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Segment>
      </div>
    );
  }
}

export default ContentsArea;
