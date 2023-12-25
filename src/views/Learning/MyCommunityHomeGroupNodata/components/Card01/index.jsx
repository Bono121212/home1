import React from "react";
import { Comment } from "semantic-ui-react";
import profile from "../../../../../images/all/profile-110-06.png";
import BoardWriteCheckbox from "../BoardWriteCheckbox";

const Card01 = () => {
  return (
    <div className="member-card approval">
        <Comment>
          <BoardWriteCheckbox />
            <Comment.Avatar src={profile} />
            <Comment.Content>
              <Comment.Author as="a"><h3>hyoshin</h3>
              </Comment.Author>
            </Comment.Content>
          </Comment>
        </div>
  );
};

export default Card01;
