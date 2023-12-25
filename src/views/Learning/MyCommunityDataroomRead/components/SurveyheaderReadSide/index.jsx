import React from "react";
import CommentImg04 from "../../../../../images/all/profile-110-px-sample-4.png";

const SurveyheaderReadSide = () => {
  return (
    <div className="survey-read-side mb0">
      <div className="title-area read-header-left">
        <div class="text-list">
          <img src={CommentImg04} alt="" />
          <span>nickname</span>
        </div>
        <div class="text-list">
          <span>2020.09.26</span>
        </div>
        <div class="text-list">
          <span class="header-span-first">조회수</span>
          <span>379</span>
        </div>
      </div>
      <div className="right-area">
        <div className="ui onlytext">
          <button class="ui icon button postset edit2">
            <i aria-hidden="true" class="icon edit2"></i>Edit
          </button>
          <button class="ui icon button postset delete">
            <i aria-hidden="true" class="icon delete"></i>Delete
          </button>
          <button class="ui icon button postset list2">
            <i aria-hidden="true" class="icon list2"></i>List
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyheaderReadSide;
