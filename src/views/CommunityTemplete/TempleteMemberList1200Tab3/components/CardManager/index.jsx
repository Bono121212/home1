import React from "react";
import { Comment, Button } from "semantic-ui-react";
import profile from "../../../../../images/all/profile-110-px-sample-6.png";


const CardManager = () => {
    return (
        <div className="member-card profile-box type1">
            <Comment>
                <Comment.Author as="a"> 
                    <Comment.Avatar src={profile} alt="프로필사진 임시이미지" />
                </Comment.Author>

                <Comment.Content>
                    <Comment.Author>
                        {/* 
                        메인매니저 : manager
                        부매니저 : co_manager */}
                        <Button className="lms-nick manager">hyoshin</Button>
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

export default CardManager;

