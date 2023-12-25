import React from "react";
import {
  Icon,
  Label
} from "semantic-ui-react";

const ContentsArea = () => {
  return (
    <div className="contents-header">
      <div className="title-area">
        <Label color="mpurple">반도체</Label>
        <div className="header">
        2. [반도체 클라쓰] Keyword로 알아보는 반도체의 품격 2
        </div>
        <div className="header-deatil">
          <div className="item">
            <Label className="bold onlytext">
              <Icon className="inter" />
              <span>Intermediate</span>
            </Label>
            <Label className="bold onlytext">
              <Icon className="time2" />
              <span>38m</span>
            </Label>
            <Label className="bold onlytext">
            <span className="header-span-first">강사</span>
              <span>홍성수</span>
            </Label>
            <Label className="bold onlytext">
              <span className="header-span-first">이수</span>
              <span>99,999</span>
              <span>명</span>
            </Label>
            <Label className="bold onlytext">
              <span className="header-span-first">담당</span>
              <span>엄유미</span>
            </Label>
            <button class="ui icon button left post-s">
              <Icon className="ask" />
                문의하기
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ContentsArea;
