import React from "react";
import Contentsheader from "../Contentsheader";
import ContentsheaderSide from "../ContentsheaderSide";
import { Button, Icon } from "semantic-ui-react";
import PhotoCommentNew from "../PhotoCommentNew";
import CommentContents from "../CommentContents";
import TestRadio01 from '../TestRadio01';
import { Link } from "react-router-dom";

const CubeInfoDetail = () => {
  return (
    <div className="course-info-detail responsive-course">
      <div className="course-detail-center">
        <Link className="btn-wide">
          <span>펼치기</span>n
        </Link>
        <div className="main-wrap">
          <div className="scrolling-area area2 ">
            <div className="ui segment full">
              {/* Header */}
              <div className="course-info-header">
                <Contentsheader />
                <ContentsheaderSide />
              </div>
              {/* <PlayerContainer /> */}
              {/*sticky .lms-fixed*/}
              <div className="lms-sticky-menu">
                <div className="lms-fixed-inner">
                  <a href="#lms-overview" className="lms-overview">
                    Overview
                  </a>
                  <a href="#lms-transcript" className="">
                    Transcript
                  </a>
                  <a href="#lms-comment" className="lms-comment lms-act">
                    <i className="lms-comment-icon"></i>Comment
                    <span className="count">+12</span>
                  </a>
                </div>
              </div>
              <div className="contents comment">
                {/* 2021-12 추후삭제 */}
                {/* <div className="comment-star-rating">
                  <div className="table-css">
                    <div className="row">
                      <div className="cell vtop">
                        <div className="ws">
                          <Rating defaultRating={3} maxRating={5} disabled className='rating-num'/>
                          <span className="c">5(5명)</span>
                        </div>
                      </div>
                      <div className="cell vtop">
                        <div className="ws">
                          <span className="dash"></span>
                          <span className="t">The score I gave </span>
                          <Rating defaultRating={3} maxRating={5} disabled className='rating-num line'/>
                          <button className="ui button orange-arrow"><i aria-hidden="true" className="icon post"></i>Register</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* 2021-12 댓글영역 new ver1 */}
                <PhotoCommentNew />

                {/* commentSort */}
                <TestRadio01 />

                <CommentContents />

                <div className="more-comments">
                  <Button className="icon left moreview">
                      <Icon className="moreview" /> more comments (15)
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CubeInfoDetail;
