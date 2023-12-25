import React, {Component, createRef} from "react";
import {Segment, Sticky, Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";
import "../../style.css"
import ContentsMoreView from "../../../CommunityMyProfileFeed/components/ContentsMoreView";
import OpenCard01 from "../../../../Learning/MyCommunityOpen/components/OpenCard01";
import OpenCard02 from "../../../../Learning/MyCommunityOpen/components/OpenCard02";
import OpenCard03 from "../../../../Learning/MyCommunityOpen/components/OpenCard03";
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
                <div className="community-open-contants">
                  <OpenCard01 />
                  <OpenCard02 />
                  <OpenCard03 />
                  <OpenCard01 />
                  <OpenCard01 />
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
