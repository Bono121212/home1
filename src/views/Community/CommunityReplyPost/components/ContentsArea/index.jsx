import React, { Component } from "react";
import { Segment, Form, Icon } from "semantic-ui-react";

import ButtonGroup from "../ButtonGroup";
import Editor from "../../../../Editor";
// import ActionButtons from "../ButtonGroup";

class ContentsArea extends Component {
  render() {
    return (
      <Segment className="full">
        <div className="apl-form-wrap community">
          <Form>
            <Form.Field>
              <label>제목</label>
              <div class="textarea-test-box">
                <p>여기는 P태그</p>
              </div>
            </Form.Field>
            <Form.Field>
              <label>본문</label>
              <div className="ui editor-wrap">
                <Editor />
              </div>
            </Form.Field>
            <Form.Field>
              <label>첨부파일</label>
              <div className="ui form">
                <div className="ui w624 input file">
                  <input
                    type="text"
                    readOnly
                    placeholder="파일을 업로드 가능합니다."
                  />
                  <Icon className="clear link" />
                  <label htmlFor="hidden-new-file" className="ui button">
                    파일찾기
                  </label>
                  <input type="file" id="hidden-new-file" />
                </div>
              </div>
            </Form.Field>
            <ButtonGroup />
          </Form>
        </div>
      </Segment>
    );
  }
}

export default ContentsArea;
