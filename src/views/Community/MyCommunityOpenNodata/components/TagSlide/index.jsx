import React, { Component } from "react";
import { Icon, Button } from "semantic-ui-react";

class TagSlide extends Component {
  render() {
    return (
      <div className="community-slide-wrap">
        <Button className="community-slide-prev">
          {/* 활성시 on */}
          <Icon className="prev-off" />
        </Button>
        <div className="community-slide-content">
          <div className="community-slide-inner">
            <label htmlFor="check1" className="check-type1">
              <input type="checkbox" id="check1"  />
              <span className="check-type1-text">전체 <span>+10</span></span>
            </label>
            <label htmlFor="check1" className="check-type1">
              <input type="checkbox" id="check1" checked/>
              <span className="check-type1-text">즐겨찾기 <span></span></span>
            </label>
            <label htmlFor="check1" className="check-type1">
              <input type="checkbox" id="check1" />
              <span className="check-type1-text">주제명</span>
            </label>
            <label htmlFor="check1" className="check-type1">
              <input type="checkbox" id="check1" />
              <span className="check-type1-text">리더십</span>
            </label>
            <label htmlFor="check1" className="check-type1">
              <input type="checkbox" id="check1" />
              <span className="check-type1-text">여행</span>
            </label>
            <label htmlFor="check1" className="check-type1">
              <input type="checkbox" id="check1" />
              <span className="check-type1-text">스포츠/레저</span>
            </label>
            <label htmlFor="check1" className="check-type1">
              <input type="checkbox" id="check1" />
              <span className="check-type1-text">취미생활</span>
            </label>
            <label htmlFor="check1" className="check-type1">
              <input type="checkbox" id="check1" />
              <span className="check-type1-text">마케팅</span>
            </label>
            <label htmlFor="check1" className="check-type1">
              <input type="checkbox" id="check1" />
              <span className="check-type1-text">건강/다이어트</span>
            </label>
            <label htmlFor="check1" className="check-type1">
              <input type="checkbox" id="check1" />
              <span className="check-type1-text">에너지솔루션</span>
            </label>
            <label htmlFor="check1" className="check-type1">
              <input type="checkbox" id="check1" />
              <span className="check-type1-text">직장탐구생활</span>
            </label>
            <label htmlFor="check1" className="check-type1">
              <input type="checkbox" id="check1" />
              <span className="check-type1-text">SK아카데미</span>
            </label>
          </div>
        </div>
        <Button className="community-slide-next">
          {/* 비활성시 off */}
          <Icon className="next-on" />
        </Button>
      </div>
    );
  }
}

export default TagSlide;
