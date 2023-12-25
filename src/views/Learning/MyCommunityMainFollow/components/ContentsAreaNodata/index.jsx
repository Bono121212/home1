import React, { Component, createRef } from "react";
import { Segment, Sticky, Menu, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
//import FollowingList from "../FollwingList";
//import FollowingFeed from "../FollowingFeed";

class ContentsAreaNodata extends Component {
  contextRef = createRef();
  state = { activeItem: "FollowingFeed" };

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
                      name="openCommunity"
                      active={activeItem === "openCommunity"}
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
            {/* nodata */}
            <div className="no-cont-wrap">
              <Icon className="no-contents80"/>
              <span className="blind">콘텐츠 없음</span>
              <div className="text lms-color-type1">
                팔로잉한 사람의 피드가 없습니다.
              </div>
              <div className="sub-text">
                새로운 사람을 팔로우하고<br/>최신 피드를 여기에서 확인하세요.
              </div>
              <Link to="/">
                <Button className="right btn-blue3">
                  Open Community 바로가기{` `}​<Icon className="morelink" />
                </Button>
              </Link>
            </div>

            {/* Following */}
            {/* <div className="course-detail-center community-containter">
              <FollowingFeed />
              <FollowingList />
            </div> */}
          </Segment>
      </div>
    );
  }
}

export default ContentsAreaNodata;
