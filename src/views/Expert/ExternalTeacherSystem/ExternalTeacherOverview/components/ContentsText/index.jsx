import React, { Component } from "react";
import {
  Icon,
  Label,
  List,
} from "semantic-ui-react";

class ContentsText extends Component {
  render() {
    return (
      <>
        <div className="ov-paragraph fn-parents">
          <div class="section-head te-overview">
            <h3 className="title-style">
              <Label className="onlytext bold size24">
                <Icon className="category te-overview" />
                <span>{/* Sub Category */}관련 Category</span>
              </Label>
            </h3>
          </div>

          <List bulleted>
            <List.Item>
              <div className="title wd222">AI</div>
              <div className="detail">
                AI/DT Literacy
              </div>
            </List.Item>
          </List>
        </div>

        <div className="ov-paragraph">
          <List>
            <List.Item>
              <div className="title">
                <h3 className="title-style">
                  <Label className="onlytext bold size24">
                    <Icon className="goal te-overview" />
                    <span>{/* Goal */}학습목표</span>
                  </Label>
                </h3>
              </div>
              <div className="detail">최신 기술을 접목하여 차별화된 고객 경험을 제공하는 기업의 성공 사례를 통해 Digital기반 고객 경험 디자인의 기본 개념을 이해한다</div>
            </List.Item>
            <List.Item>
              <div className="title">
                <h3 className="title-style">
                  <Label className="onlytext bold size24">
                    <Icon className="target te-overview" />
                    <span>{/* Target */}대상</span>
                  </Label>
                </h3>
              </div>
              <div className="detail">전 구성원</div>
            </List.Item>
            <List.Item>
              <div className="title">
                <h3 className="title-style">
                  <Label className="onlytext bold size24">
                    <Icon className="host te-overview" />
                    <span>{/* Host */}교육기관 출처</span>
                  </Label>
                </h3>
              </div>
              <div className="detail">mySUNI</div>
            </List.Item>
          </List>
        </div>
      </>
    );
  }
}

export default ContentsText;
