import React from "react";
import { Comment } from "semantic-ui-react";
import profile from "../../../../../images/all/profile-110-06.png";
// import manager from "../../../../../images/all/icon-community-manager02.png";

const ContentsArea = (props) => {
  console.log(props);
  return (
    <div className="member-card profile-box">
      <Comment className="df">
        <Comment.Author as="a">
          <div class="ui profile inline">
            <div class="pic s80">
              <img src={profile} alt="프로필사진 임시이미지" class="ui image" />
            </div>
          </div>
        </Comment.Author>
        <Comment.Content>
          <span className="lms-nick">hyoshin</span>
          <span className="card-follow">Unfollow</span>
          <Comment.Metadata className="profile-box-mate01">
            <span>게시물</span>
            <span>379</span>
            <span>댓글</span>
            <span>40,908</span>
          </Comment.Metadata>
          <Comment.Metadata className="profile-box-mate02">
            <span className="date">2020.09.02</span>
          </Comment.Metadata>
        </Comment.Content>
      </Comment>
    </div>
  );
};

export default ContentsArea;
