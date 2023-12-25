import React from "react";
import ContentsheaderSide from "../ContentsheaderSide"

const Surveyheader = () => {
  return (
    <div className="survey-header pt0">
      <div className="survey-header-left">선호도 조사</div>
      <div className="survey-header-right">
        <button class="ui button free complete">참여완료</button>
      </div>
      <ContentsheaderSide />
    </div>
  );
};

export default Surveyheader;
