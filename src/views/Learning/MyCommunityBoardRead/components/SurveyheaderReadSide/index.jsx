import React from "react";
import heartIcon from "../../../../../images/all/btn-community-like-on-16-px.png";
import CommentImg04 from "../../../../../images/all/icon-community-comment.png";

const ContentsArea = () => {
  return (
    <div className="survey-read-side">
      <div className="title-area board-read-header">
        <div class="ui label onlytext">
          <span>2020.09.02</span>
        </div>
        <div class="ui label onlytext">
          <span class="header-span-first">조회수</span>
          <span>379</span>
        </div>
        <div class="ui label onlytext">
          <span class="header-span-first">
            <img src={CommentImg04} alt="" />
          </span>
          <span>80</span>
        </div>
      </div>
      <div className="right-area">
        <div className="ui onlytext">
          <img src={heartIcon} alt="" /> <span class="heartText">4,289</span>
        </div>
        <div className="ui onlytext">
          <button class="ui icon button postset edit2">
            <i aria-hidden="true" class="icon edit2"></i>Edit
          </button>
          <button class="ui icon button postset delete">
            <i aria-hidden="true" class="icon delete"></i>Delete
          </button>
          <button class="ui icon button left postset commu-list16">
            <i aria-hidden="true" class="icon commu-list16"></i>List
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentsArea;
