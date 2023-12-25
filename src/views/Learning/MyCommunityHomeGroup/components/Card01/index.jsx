import React from "react";
import { Comment } from "semantic-ui-react";
import profile from "../../../../../images/all/profile-110-06.png";
import manager from "../../../../../images/all/icon-community-manager02.png";

const ContentsArea = (props) => {
  return (
    <div className="member-card">
      <Comment>
        <Comment.Avatar src={profile} />
        <Comment.Content>
          <Comment.Author as="a">
            <img src={manager} style={props.managerFlag ? {display: "inline"} : {display: "none"}} alt="" />
            <span className="lms-nick">한한한한한한한한한한한한한한한한한한한한</span>
            <span className="card-follow">Unfollow</span>
          </Comment.Author>
          <Comment.Metadata>
            <span>게시물</span>
            <span>379</span>
            <span>댓글</span>
            <span>40,908</span>
          </Comment.Metadata>
          <Comment.Metadata>
            <span className="date">2020.09.02</span>
          </Comment.Metadata>
        </Comment.Content>
      </Comment>
    </div>
  );
};

export default ContentsArea;
