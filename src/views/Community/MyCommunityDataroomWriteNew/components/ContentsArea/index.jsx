import React, { Component, createRef } from "react";
import { Segment, Form, Icon } from "semantic-ui-react";
import LnbMenu from "../LnbMenu";
import Surveyheader from "../Surveyheader";
import Editor from "../Editor";
import AttachFileUpload from "../AttachFileUpload";
import BoardWriteRadio from "../BoardWriteRadio";

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
                <div className="form-contants">
                  <Form>
                    <Form.Field>
                    
                      <div className="ui right-top-count input">
                        <span className="count">
                          <span className="now">0</span>/
                          <span className="max">100</span>
                        </span>
                        <input
                          type="text"
                          placeholder="제목을 입력해 주세요. (최대 입력 글자 수 확인 필요)"
                        />
                        <Icon className="clear link" />
                        <span className="validation">
                          You can enter up to 100 characters.
                        </span>
                      </div>
                    </Form.Field>

                    <Form.Field>
                      <label>본문</label>
                      <div className="ui editor-wrap">
                        <Editor />
                      </div>
                    </Form.Field>

                    <Form.Field>
                      <label>파일첨부</label>
                      <div className="report-attach">
                        <AttachFileUpload />
                      </div>
                    </Form.Field>
                    <Form.Field>
                      {/* 공개, 비공개 */}
                      <BoardWriteRadio />
                      
                    </Form.Field>
                  </Form>
                  
                  {/* Bottom */}
                  <div class="survey-preview">
                    <button class="ui button fix bg">등록</button>
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
