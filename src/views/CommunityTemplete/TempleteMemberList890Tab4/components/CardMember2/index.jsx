import React from "react";
import { Comment, Image, Checkbox } from "semantic-ui-react";
import profile from "../../../../../images/all/profile-110-06.png";



const CardMember2 = (props) => {
  console.log(props);
  return (
    <div className="member-card profile-box type2">
      <Comment className="">
        <Comment.Actions>
          <Checkbox label=""/>
        </Comment.Actions>
        <Comment.Author as="a">
          <div class="ui profile inline">
            <div class="pic s80">
              <Image src={profile} alt="프로필사진 임시이미지" />
            </div>
          </div>
        </Comment.Author>
        <Comment.Content>
          <span className="lms-nick">hyoshin</span>
        </Comment.Content>
      </Comment>
    </div>
  );
};

export default CardMember2;

