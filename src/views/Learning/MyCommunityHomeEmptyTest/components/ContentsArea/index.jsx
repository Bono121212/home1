import React, { Component, createRef } from "react";
import { Segment } from "semantic-ui-react";
import LnbMenu from "../../components/LnbMenu";
//import Banner from "../../../../../images/all/bg-ttl-sample-02@3x.png";
import Contentsheader from "../Contentsheader";
import TestFail from "../../../../../images/all/icon-test-fail.png";

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
              <div className="course-info-detail responsive-course">
                <div className="course-detail-center">                                                                                                                                                                        
                  <div className="main-wrap">
                    <div className="scrolling-area">
                      <div className="test-complete">
                        {/* Header */}
                        <div className="course-info-header">
                          <Contentsheader />
                        </div>
                        <div className="course-info-ing">
                          <img src={TestFail} alt="" />
                          <h1 className="test_fail">50점</h1>
                          <h2>Test 이수조건을 통과하지 못했습니다.</h2>
                          <h3>이수조건</h3>
                          <p>
                            합격점 <strong>80점</strong>
                            <span>/</span>
                            총점 <strong>100점</strong>
                          </p>
                        </div>
                      </div>
                      <div className="course-info-bottom">
                        <p>
                          <strong>재응시</strong> 버튼을 통해 다시 Test를
                          풀어보세요!
                        </p>
                        <button className="ui button free submit p18">
                          재응시
                        </button>
                      </div>
                    </div>
                  </div>
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
