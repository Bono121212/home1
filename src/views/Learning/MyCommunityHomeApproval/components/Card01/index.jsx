import React from "react";
import { Comment } from "semantic-ui-react";
// import profile from "../../../../../images/all/profile-110-06.png";
import BoardWriteCheckbox from "../../components/BoardWriteCheckbox";
import Profile56Px from "../../../../../images/all/profile-110-px-sample-6.png";

const Card01 = () => {
  return (
    <div className="member-card approval">
      <Comment>
        <BoardWriteCheckbox />
        <div class="ui profile">
          <div class="pic s80">
            <img
              src={Profile56Px}
              alt="프로필사진 임시이미지"
              class="ui image"
            />
          </div>
        </div>
        <Comment.Content>
          <Comment.Author as="a">
            <h3>hyoshin</h3>
          </Comment.Author>
        </Comment.Content>
      </Comment>
    </div>
  );
};

export default Card01;
