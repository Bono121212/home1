import React, { Component } from "react";
import { List, Icon, Label } from "semantic-ui-react";

class OverviewContents extends Component {
  

  render() {
    
    return (
      <div className="badge-detail">
        {/* 교육내용 (필수) */}
        <div className="class-guide-txt fn-parents ql-snow">
          <div className="text ql-editor">
            <p>
              UI/UX의 세계로 들어가도 어디서부터 시작해야 할지 모르겠나요?
              <br />
              UI/UX의 세계로 들어가도 어디서부터 시작해야 할지 모르겠나요?
              <br />
              이 과정을 통해 당신은 당신의 CV에 UX 디자이너를 추가하고 당신의
              새로운 기술에 대한 보수를 받기 시작할 수 있을 것입니다.
              <br />
              안녕하세요. 내 이름은 홍길동이며, Adobe Certified 강사입니다.
              어도비 XD를 효율적이고 포괄적으로 배울 수 있도록 도와주러 이
              강좌를 개설하였습니다. XD는 업계 전문가들이 고품질의 기능성 모형을
              생산하기 위해 사용하는 환상적인 디자인 도구입니다. 본 코스를 통해
              실용적이고 효과적인 UX(User Experience) 및 UI(User Interface)
              설계를 제작할 수 있습니다.
            </p>
          </div>
        </div>

        <div className="ov-paragraph fn-parents intro">
          <div className="section-head">
            <h3 className="title-style">
              <Label className="onlytext bold size24">
                <Icon className="category" />
                <span>{/* Sub Category */}관련 Category</span>
              </Label>
            </h3>
          </div>
          <List bulleted>
            <List.Item>
              <div className="title">AI</div>
              <div className="detail">
                AI Biz Essential / AI Tech Biginner / Language AI / AI Tech
                Advanced / Speech AI
              </div>
            </List.Item>
          </List>
        </div>
        {/* 태그 */}
        <div className="ov-paragraph fn-parents">
          <List>
            <List.Item>
              <div className="title">
                <h3 className="title-style">
                  <Label className="onlytext bold size24">
                    <Icon className="tag2" />
                    <span>{/* Tag */}태그</span>
                  </Label>
                </h3>
              </div>
              <div className="detail">
                <span className="ui label tag">AI</span>
                <span className="ui label tag">Database</span>
                <span className="ui label tag">Design</span>
                <span className="ui label tag">Project Managing</span>
                <span className="ui label tag">Project Managing</span>
                <span className="ui label tag">AI</span>
                <span className="ui label tag">AI</span>
                <span className="ui label tag">AI</span>
                <span className="ui label tag">Database</span>
                <span className="ui label tag">Design</span>
                <span className="ui label tag">Project Managing</span>
                <span className="ui label tag">Project Managing</span>
                <span className="ui label tag">AI</span>
                <span className="ui label tag">AI</span>
              </div>
            </List.Item>
          </List>
        </div>
      </div>
    );
  }
}

export default OverviewContents;
