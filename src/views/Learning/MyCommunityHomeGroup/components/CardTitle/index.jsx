import React from "react";
//import cardClose from "../../../../../images/all/btn-card-close.png";
import manager from "../../../../../images/all/icon-community-manager02.png";
const CardTitle = (props) => {

  return (
    <div className="card-group">
      <div className="card-group-list">
        <h3>1분과 그룹</h3>
        <div class="card-group-span">
          <img src={manager} className="community-manager" alt="" />
          <span>nickname</span>
          <span>멤버</span>
          <span>83</span>
          <button className={props.cardOpenFlag ? "community-btn-open" : "community-btn-close"}><span>열기닫기</span></button>
        </div>
      </div>
    </div>
  );
};

export default CardTitle;
