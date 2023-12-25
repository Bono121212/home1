import React from "react";
import {Icon } from 'semantic-ui-react';

const Contentsheader = () => {
  return (
    <div className="survey-header">
      {/* 2021-12 icon이 나오는 경우 survey-header-left test_ing width50에서 "width50"을 제거해주세요*/}
      <div className="survey-header-left test_ing"><Icon className="testHeader02"/>Survey</div>
      <div className="survey-header-right">
        
      </div>      
    </div>
  );
};

export default Contentsheader;
