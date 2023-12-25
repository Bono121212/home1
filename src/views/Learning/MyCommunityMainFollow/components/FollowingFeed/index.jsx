import React from "react";
import { Comment, Popup, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import profile38 from "../../../../../images/all/profile-38-px.svg";
import profile38_2 from "../../../../../images/all/profile-06@2x.png";
import btnMenu from "../../../../../images/all/btn-menu.svg";   

export default function FollowingFeed () {
    return(
        <div className="community-main-contants">
        {/* _컨텐츠 영역 */}
          <div className="sub-info-box">
              <div className="community-main-contants">
                  <div className="comment-area community-main-card commu-sub-card">
                      <Comment.Group className="base">
                          <Comment>
                              <Comment.Avatar src={profile38} alt="profile"/>
                              <Comment.Content>
                                  <Comment.Author>
                                      <Link to="/">
                                          Community Name
                                      </Link>
                                  </Comment.Author>
                                  <Comment.Text>
                                      <div className="ellipsis">
                                          <span className="id">profileId</span>
                                          <span className="date">2시간 전</span>
                                          <span className="like">좋아요 <strong>3</strong></span>
                                          <span className="comt">댓글수 <strong>5</strong></span>
                                      </div>
                                  </Comment.Text>
                                  <Comment.Actions>
                                      <Popup 
                                          className="balloon-pop myCumu_btn"
                                          trigger={
                                              <div className="right top sub-menu">
                                                  <Button icon className="img-icon">
                                                      <img src={btnMenu} alt="북마크"/>
                                                      <span className="blind">북마크</span>
                                                  </Button>
                                              </div>
                                          }
                                          position="bottom right"
                                          on="click"
                                          content={
                                              <div className="content">
                                                  <ul>
                                                      <li className="community-profile">
                                                          <Link to="/">
                                                              <Icon className="ballon popupUrl"/>
                                                              <span>URL 복사</span>
                                                          </Link>
                                                      </li>
                                                      <li>
                                                          <Link to="/">
                                                              <Icon className="ballon popupBook"/>
                                                              {/* <Icon className="ballon popupBookRemove"/> */}
                                                              <span>북마크</span>
                                                          </Link>
                                                      </li>
                                                  </ul>
                                              </div>
                                          }
                                      />
                                  </Comment.Actions>
                              </Comment.Content>
                          </Comment>
                          <div className="card-bottom">
                              <div className="card-header-line">
                                  <h3 className="ellipsis cmt_tit">
                                      <span className="ico_feed board">게시물</span>
                                      <Link to="/">게시물 제목이 들어가는 자리입니다.</Link>
                                  </h3>
                                  <div className="text-right">
                                      <Button icon className="right more-bttn">
                                          <Icon className="drop_down up"/>
                                      </Button>
                                  </div>
                                  <div className="ql-snow">
                                      <div className="ql-editor" style={{marginTop:".5rem", minHeight:"1.5rem"}}>
                                          <p>게시글 내용이 들어감</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </Comment.Group>
                  </div>
              </div>
          </div>

          <div className="sub-info-box">
              <div className="community-main-contants">
                  <div className="comment-area community-main-card commu-sub-card">
                      <Comment.Group className="base">
                          <Comment>
                              <Comment.Avatar src={profile38_2} alt="profile"/>
                              <Comment.Content>
                                  <Comment.Author>
                                      <Link to="/">
                                          Community Name
                                      </Link>
                                  </Comment.Author>
                                  <Comment.Text>
                                      <div className="ellipsis">
                                          <span className="id">profileId</span>
                                          <span className="date">2022.05.31</span>
                                          <span className="like">좋아요 <strong>3</strong></span>
                                          <span className="comt">댓글수 <strong>5</strong></span>
                                      </div>
                                  </Comment.Text>
                                  <Comment.Actions>
                                      <Popup 
                                          className="balloon-pop myCumu_btn"
                                          trigger={
                                              <div className="right top sub-menu">
                                                  <Button icon className="img-icon">
                                                      <img src={btnMenu} alt="북마크"/>
                                                      <span className="blind">북마크</span>
                                                  </Button>
                                              </div>
                                          }
                                          position="bottom right"
                                          on="click"
                                          content={
                                              <div className="content">
                                                  <ul>
                                                      <li className="community-profile">
                                                          <Link to="/">
                                                              <Icon className="ballon popupUrl"/>
                                                              <span>URL 복사</span>
                                                          </Link>
                                                      </li>
                                                      <li>
                                                          <Link to="/">
                                                              <Icon className="ballon popupBook"/>
                                                              {/* <Icon className="ballon popupBookRemove"/> */}
                                                              <span>북마크</span>
                                                          </Link>
                                                      </li>
                                                  </ul>
                                              </div>
                                          }
                                      />
                                  </Comment.Actions>
                              </Comment.Content>
                          </Comment>
                          <div className="card-bottom">
                              <div className="card-header-line">
                                  <h3 className="ellipsis cmt_tit">
                                      <span className="ico_feed board">게시물</span>
                                      <Link to="/">게시물 제목이 들어가는 자리입니다.</Link>
                                  </h3>
                                  <div className="text-right">
                                      <Button icon className="right more-bttn">
                                          <Icon className="drop_down"/>
                                      </Button>
                                  </div>
                              </div>
                          </div>
                      </Comment.Group>
                  </div>
              </div>
          </div>
          <div className="more-comments">
            <Button icon className="left moreview"><Icon className="moreview"/> list more</Button>
          </div>
        </div>
    )
}