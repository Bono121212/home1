import React, { Component, createRef } from "react";
import { Segment, Icon, Form } from "semantic-ui-react";
import LnbMenu from "../../components/LnbMenu";
import Surveyheader from "../../components/Surveyheader";
import ContentsRadio01 from "../../components/ContentsRadio01";
import ContentsRadio02 from "../../components/ContentsRadio02";

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

              {/* 1번 */}
              <div className="course-radio-survey">
                <p>
                  <span>1</span>
                  <span className="copy">본 과정을 다른 구성원에게도 추천하고 싶으신가요?</span>
                </p>
                <ContentsRadio01 />
              </div>

              {/* 2번 */}
              <div className="course-radio-survey">
                <p>
                  <span>2</span>
                  <span className="copy">본 과정을 통해 학습 내용을 명확하게 이해할 수 있었나요?</span>
                </p>
                <ContentsRadio02 />
              </div>

              {/* 3번 */}
              <div className="course-radio-survey">
                <p>
                  <span>3</span><span className="copy">본 과정에서 만족스러운 부분과 개선 사항을
                                    적어주세요.</span>
                </p>
                <div className="course-survey-list">
                  <Form>
                    <Form.Field>
                      <div className="ui right-top-count input">
                        <span className="count">
                          <span className="now">0</span>/
                          <span className="max">100</span>
                        </span>
                        <input
                          type="text"
                          placeholder="답변을 입력해주세요. (최대 입력 글자 수 확인 필요)"
                        />
                        <Icon className="clear link" />
                        <span className="validation">
                          You can enter up to 100 characters.
                        </span>
                      </div>
                    </Form.Field>
                  </Form>
                </div>
              </div>

              {/* Bottom */}
              <div class="survey-preview">
                <button class="ui button fix bg">참여</button>
              </div>
            </div>
          </div>
        </Segment>
      </div>
    );
  }
}

export default ContentsArea;
