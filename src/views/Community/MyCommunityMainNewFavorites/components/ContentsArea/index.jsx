import React, { Component, createRef } from "react";
import { Segment, Sticky, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import LnbMenu from "../LnbMenu";
//import CommunityMainCard01 from "../CommunityMainCard01";
import CommunityMainCard01Sub from "../CommunityMainCard01_sub";
import CommunityMainCard02Sub from "../CommunityMainCard02_sub";
//import CommunityMainCard02 from "../CommunityMainCard02";
import CommunityMainCard03 from "../CommunityMainCard03";
//import CommunityMainCard04 from "../CommunityMainCard04";

class ContentsArea extends Component {
  contextRef = createRef();
  state = { activeItem: "MyCommunity" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div ref={this.contextRef}>
        <Sticky context={this.contextRef} className="tab-menu offset0">
          <div className="cont-inner">
            <Menu className="sku">
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
                name="MyCreatedCommunity"
                active={activeItem === "MyCreatedCommunity"}
                onClick={this.handleItemClick}
                as={Link}
                to=""
              >
                Community List
              </Menu.Item>
              <Menu.Item
                name="MyFeed"
                active={activeItem === "MyFeed"}
                onClick={this.handleItemClick}
                as={Link}
                to=""
              >
                My Feed
              </Menu.Item>
              <Menu.Item
                name="MyFeed"
                active={activeItem === "FollowingFeed"}
                onClick={this.handleItemClick}
                as={Link}
                to=""
              >
                Following Feed
              </Menu.Item>
              <Menu.Item
                name="MyFeed"
                active={activeItem === "Bookmark"}
                onClick={this.handleItemClick}
                as={Link}
                to=""
              >
                Bookmark
              </Menu.Item>
            </Menu>
          </div>
        </Sticky>

        {/* 컨텐츠 영역 */}
        <Segment className="full">
          <div className="course-detail-center community-containter">
            <LnbMenu />

            <div className="community-main-contants">
              <div className="sub-info-box">
                <CommunityMainCard01Sub />
              </div>
              <div className="sub-info-box">
                <CommunityMainCard02Sub />
              </div>
              <div className="sub-info-box">
                <CommunityMainCard03 />
              </div>
              <div className="sub-info-box">
                <CommunityMainCard01Sub />
              </div>
              <div className="sub-info-box">
                <CommunityMainCard03 />
              </div>
              <div className="sub-info-box">
                <CommunityMainCard03 />
              </div>
              <div className="sub-info-box">
                <CommunityMainCard01Sub />
              </div>
              <div className="sub-info-box">
                <CommunityMainCard01Sub />
              </div>
              <div className="sub-info-box">
                <CommunityMainCard01Sub />
              </div>

            </div>
          </div>
        </Segment>
      </div>
    );
  }
}

export default ContentsArea;
