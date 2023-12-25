import React from "react";
const ContentsArea = () => {
  return (
    <div className="survey-header">
      <div className="survey-header-left">
          과정 공통설문
      </div>
      <div className="survey-header-right">
        {/* complete - 진행완료 , submit - 진행전, proceeding - 진행중 */}
        {/* <button class="ui button free submit p18">과제제출</button> */}
        <button class="ui button free proceeding p18">미이수</button>
        {/* <button class="ui button free complete p18">참여완료</button> */}
      </div>
        <div className="test-text">
            <div className="test-text-box">
                <span>합격점</span>
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

export default ContentsArea;
