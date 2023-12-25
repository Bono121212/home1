import React from "react";
import { Comment } from "semantic-ui-react";
import CommentImg04 from "../../../../../images/all/profile-110-px-sample-4.png";

const Surveyheader = () => {
  return (
    <div className="survey-header margin-none border-none pt0">
      <div className="survey-header-left">
      왜 다시 딥 러닝일까요? 자유로운 의견을 남겨주세요.
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
    </div>
  );
};

export default Surveyheader;
