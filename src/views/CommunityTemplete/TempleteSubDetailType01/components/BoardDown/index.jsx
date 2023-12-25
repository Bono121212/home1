import React, { Component } from "react";
import { Icon, Checkbox } from "semantic-ui-react";
import file from "../../../../../images/all/icon-community-file-copy-2.png";

class BoardDown extends Component {
  render() {
    return (
      <div className="temp-board-down">
        <div class="board-down-title">
          <p>
            {" "}
            <img src={file} alt="" />
            <strong>첨부파일</strong>
          </p>
          <div className="board-down-title-right">
            <button class="ui icon button left post delete">
              <i aria-hidden="true" class="icon check"></i>선택 다운로드
            </button>
            <button class="ui icon button left post list2">
              <i aria-hidden="true" className="icon fileAll" />전체 다운로드
            </button>
          </div>
        </div>

        <div className="down">
          <Checkbox
            className="base"
            label="mySUNI 프로그램북_New format_20년 3분기.pdf"
            name="radioGroup"
            value=""
            defaultChecked
          />
          <Icon className="icon-down-type4" />
        </div>
        <div className="down">
          <Checkbox
            className="base"
            label="인프라_스트리밍_20200920.pdf"
            name="radioGroup"
            value=""
          />
          <Icon className="icon-down-type4" />
        </div>
      </div>
    );
  }
}

export default BoardDown;
