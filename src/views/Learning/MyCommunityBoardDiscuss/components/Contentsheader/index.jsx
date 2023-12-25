import React from "react";
import { Comment } from "semantic-ui-react";
import CommentImg04 from "../../../../../images/all/profile-110-px-sample-4.png";

const Contentsheader = () => {
  return (
    <div className="survey-header survey-debate-header">
      <div className="survey-header-left debate-header-sub">
        반도체 산업의 시작과 역사에 대해 개인 의견을 남겨주세요
      </div>
      <div className="comment-area course-comment">
        <div className="ui comments sub-debate">
          <Comment>
            <Comment.Avatar src={CommentImg04} />
            <Comment.Content>
              <Comment.Author as="a">송중기</Comment.Author>
              <Comment.Metadata>
                <span className="heartText">2020.09.26</span>
              </Comment.Metadata>
            </Comment.Content>
          </Comment>
        </div>
      </div>
    </div>
  );
};

export default Contentsheader;
