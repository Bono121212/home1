import React, { Component, createRef } from "react";
import {Segment, Sticky, Menu, Icon, Button} from "semantic-ui-react";
import { Link } from "react-router-dom";
import TitleArea from "../TitleArea";


class ContentsArea extends Component {
  contextRef = createRef();
  state = { activeItem: "openCommunity" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div ref={this.contextRef}>
        <TitleArea />
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
                Follow
              </Menu.Item>
            </Menu>
          </div>
        </Sticky>

        {/* 컨텐츠 영역 */}
        <Segment className='full'>
          <div className="no-cont-wrap">
            <Icon className='no-contents80'/><span className="blind">콘텐츠 없음</span>
            <div className="text lms-color-type1">현재 가입된 커뮤니티가 없습니다.</div>
            <div className="sub-text">다양한 분야로 만들어진 Open Community에서<br />
              관심 있는 커뮤니티를 찾아 Social Learning을 할 수 있습니다.</div>
            <Button icon className="right btn-blue2">
              Open Community 바로가기<Icon className="morelink"/>
            </Button>
          </div>
        </Segment>
      </div>
    );
  }
}

export default ContentsArea;
