import React from "react";

const Contentsheader = () => {
  return (
    <div className="survey-header">
      <div className="survey-header-left">발전기본설계의 이해_배관</div>
      <div className="survey-header-right">
        {/* <button class="ui button free submit p18">검수중</button> */}
      </div>
      <div className="test-text">
        <div className="test-text-box">
          <span>합격기준</span>
          <span>80점</span>
        </div>
        <div className="test-text-box">
          <span>총점</span>
          <span>100점</span>
        </div>
      </div>
    </div>
  );
};

export default Contentsheader;
