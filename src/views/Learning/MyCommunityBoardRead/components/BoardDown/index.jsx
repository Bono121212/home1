import React, { Component } from "react";
//import file from "../../../../../images/all/icon-community-file-copy-2.png";
//import down from "../../../../../images/all/icon-down-type-4-24-px.png";

class BoardDown extends Component {
  render() {
    return (
      <div className="community-board-down">
        <div class="board-down-title">
          {/*<p>
            {" "}
            <img src={file} alt="" />
            첨부파일
          </p>*/}
          {/*<div className="board-down-title-right">
            <button class="ui icon button left post delete">
              <i aria-hidden="true" class="icon check icon"></i>선택 다운로드
            </button>
            <button class="ui icon button left post list2">
              <img src={down} alt="" />
              전체 다운로드
            </button>
          </div>*/}
        </div>

        {/*<div className="down">
          <Checkbox
            className="base"
            label="mySUNI 프로그램북_New format_20년 3분기.pdf"
            name="radioGroup"
            value=""
            defaultChecked
          />
          <Icon className="icon-down-type4" />
        </div>*/}
        {/*<div className="down">
          <Checkbox
            className="base"
            label="인프라_스트리밍_20200920.pdf"
            name="radioGroup"
            value=""
          />
          <Icon className="icon-down-type4" />
        </div>*/}

          <div className="ov-paragraph download-area task-read-down">
              <div className="detail">
                  <div className="file-down-wrap">
                      <div className="down">
                          <span>첨부파일 :</span>
                          <a href={()=>false}>
                              <span>Mobile_App_UI_UX_GUI_Design_Tutorials.pptx</span>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default BoardDown;
