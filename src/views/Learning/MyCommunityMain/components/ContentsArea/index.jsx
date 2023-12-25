import React, { Component, createRef } from "react";
import { Segment, Sticky, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import LnbMenu from "../LnbMenu";
//import CommunityMainCard01 from "../../components/CommunityMainCard01";
import CommunityMainCard01Sub from "../../components/CommunityMainCard01_sub";
import CommunityMainCard02Sub from "../../components/CommunityMainCard02_sub";
//import CommunityMainCard02 from "../../components/CommunityMainCard02";
// import CommunityMainCard03 from "../../components/CommunityMainCard03";
//import CommunityMainCard04 from "../../components/CommunityMainCard04";
import CommunityMainCard05 from "../../components/CommunityMainCard05";

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
            <div className="course-detail-center community-containter">
                <LnbMenu tabName={this.props.tabName} nodata={this.props.nodata} />
                {/* <div className="community-main-contants">
                <div className="sub-info-box">
                    <CommunityMainCard01 />
                </div>
                <div className="sub-info-box">
                    <CommunityMainCard02 />
                </div>
                <div className="sub-info-box">
                    <CommunityMainCard03 />
                </div>
                <div className="sub-info-box">
                    <CommunityMainCard04 />
                </div>
                <div className="more-comments">
                    <Button icon className="left moreview">
                    <Icon className="moreview" /> list more
                    </Button>
                </div>
                </div> */}

                <div className="community-main-contants">
                    <div className="sub-info-box">
                        <CommunityMainCard05 />
                    </div>
                    <div className="sub-info-box">
                        <CommunityMainCard02Sub />
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
