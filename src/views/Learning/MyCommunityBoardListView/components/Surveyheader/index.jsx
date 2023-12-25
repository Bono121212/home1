import React from "react";
import TableTitle from '../TableTitle';

const ContentsArea = () => {
  return (
    <div className="survey-header">
      <div className="survey-header-left">
        [딥러닝 기초] 1. 신경망, 경사하강, 역전파
      </div>
      {/* 테이블 제목, 검색 */}
      <TableTitle />
    </div>
  );
};

export default ContentsArea;
