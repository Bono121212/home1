import React, { Component, createRef } from "react";
import { Segment, Sticky, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import OpenCard01 from "../OpenCard01";
import OpenCard02 from "../OpenCard02";
import OpenCard03 from "../OpenCard03";
import OpenCard04 from "../OpenCard04";
import OpenCard05 from "../OpenCard05";
import OpenCard06 from "../OpenCard06";
import OpenCard07 from "../OpenCard07";

import TestRadio01 from "../TestRadio01";
import TitleArea from "../TitleArea";
import TagSlide from "../TagSlide";
import ListMoreView from "../ListMoreView";

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
                    {/* 태그 슬라이드 */}
                    <TagSlide />

                    {/* 라디오 , 카드 */}
                    <TestRadio01 />

                    {/* 커뮤니티 리스트 */}
                    <div className="course-detail-center community_containter">
                        <div className="community_open_contants">
                            <OpenCard01 />
                            <OpenCard02 />
                            <OpenCard03 />
                            <OpenCard04 />
                            <OpenCard07 />
                            <OpenCard05 />
                            <OpenCard06 />
                        </div>
                    </div>

                    {/* 더보기 */}
                    <ListMoreView/>

                </Segment>
            </div>
        );
    }
}

export default ContentsArea;