import React, { Component, createRef } from "react";
import { Segment, Button, Icon } from "semantic-ui-react";
import LnbMenu from "../LnbMenu";
import Surveyheader from "../../components/Surveyheader";
import PhotoComment from "../../components/PhotoComment";
import TestRadio01 from "../../components/TestRadio01";
import CommentContents from "../../components/CommentContents";

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
              {/* Header */}
              <div className="course-info-header">
                <Surveyheader />
              </div>

              <div className="community-contants">
                {/* 코멘트 창 */}
                <PhotoComment />

                {/* Newest , Oldest */}
                <div className="course-radio">
                  <TestRadio01 />
                </div>

                {/* 게시판 리스트 */}
                <CommentContents />

                {/* more comments */}
                <div className="more-comments">
                  <Button icon className="left moreview">
                    <Icon className="moreview" /> more comments (15)
                  </Button>
                </div>

              </div>
            </div>
          </div>
        </Segment>
      </div>
    );
  }
}

export default ContentsArea;
