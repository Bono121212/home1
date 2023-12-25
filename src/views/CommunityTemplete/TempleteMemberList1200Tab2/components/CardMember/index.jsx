import React from "react";
import { Comment, Image, Button } from "semantic-ui-react";
import profile from "../../../../../images/all/profile-110-px-sample-2.png";



const CardMember = (props) => {
    return (
        <div className="member-card profile-box type1">
            <Comment className="">
                <Comment.Author as="a"> 
                    <Comment.Avatar src={profile} alt="프로필사진 임시이미지" />
                </Comment.Author>

                <Comment.Content>
                    <Comment.Author>
                        <Button className="lms-nick">김수현입니다</Button>
                        <Button className="follow"><span className="card-follow">Unfollow</span></Button>
                    </Comment.Author>
                    
                    <Comment.Metadata className="profile-box-mate01">
                        <span>게시물</span>
                        <span>379</span>
                        <span>댓글</span>
                        <span>40,908</span>
                        <span>방문</span>
                        <span>100,000</span>
                    </Comment.Metadata>

                    <Comment.Metadata className="profile-box-mate02">
                        <span className="date">2020.09.02</span>
                    </Comment.Metadata>
                </Comment.Content>
            </Comment>
        </div>
    );
};

export default CardMember;

