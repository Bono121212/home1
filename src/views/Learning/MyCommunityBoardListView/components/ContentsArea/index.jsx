import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import LnbMenu from "../LnbMenu";
import Surveyheader from "../Surveyheader";
import CardBelt from "../CardBelt";


class ContentsArea extends Component {
  render() {
    return (
        <Segment className="full">
          <div className="course-detail-center community-containter list-view">
            <LnbMenu />
            <div className="community-home-contants">
              {/* Header */}
              <div className="course-info-header">
                <Surveyheader />
              </div>

              <div className="card-slide-wrapper">
                <ul>
                  <li className="belt-wrapper">
                    <div className="belt-title">
                      <span>첫번째 게시글 Title이 들어갑니다.</span>
                    </div>
                    <div className="card-slide-list">
                      <CardBelt />
                    </div>
                  </li>
                  <li className="belt-wrapper">
                    <div className="belt-title">
                      <span>두번째 게시글 Title이 들어갑니다.</span>
                    </div>
                    <div className="card-slide-list">
                      <CardBelt />
                    </div>
                  </li>
                  <li className="belt-wrapper">
                    <div className="belt-title">
                      <span>세번째 게시글 Title이 들어갑니다.</span>
                    </div>
                    <div className="card-slide-list">
                      <CardBelt />
                    </div>
                  </li>
                </ul>
              </div>
              

            </div>
          </div>
        </Segment>
    );
  }
}

export default ContentsArea;
