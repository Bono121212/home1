import React from "react";
import SurveyheaderReadSide from "../../components/SurveyheaderReadSide";

const Surveyheader = () => {
  return (
    <div className="survey-header pt0">
      <div className="survey-header-left">
        딥러닝 동향과 관련된 자료 모음입니다.
        <SurveyheaderReadSide />
      </div>
    </div>
  );
};

export default Surveyheader;
