import React from "react";
import { Link } from "react-router-dom";
import Contentsheader from "../Contentsheader";
import ContentsheaderSide from "../ContentsheaderSide";
import PreCourseContents from "../PreCourseContents";
import OverviewContents from "../OverviewContents";
import ContentsFeedback from "../ContentsFeedback";
import ContentsTeacher from "../ContentsTeacher";
import ContentsRelation from "../ContentsRelation";
import ContentsRelationBadge from "../ContentsRelationBadge";

const CourseInfoDetail = () => {
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
              {/* 선수과정 */}
              <div className="ov-paragraph course-area">
                <PreCourseContents />
              </div>
              <div className="lms-sticky-menu">
                <div className="lms-fixed-inner">
                  <Link to="#lms-overview" className="lms-act">
                    Overview
                  </Link>
                  <Link className="">
                    Review
                  </Link>
                  <Link className="">
                    강사정보
                  </Link>
                  <Link className="">
                    관련 Badge
                  </Link>
                  <Link className="">
                    관련과정
                  </Link>
                  {/* 2021-12 여러 개의 Cube로 생성된 학습카드 Overview경우 comment삭제 */}
                  {/* <a href="#lms-comment" className="">
                    <i className="lms-comment-icon"></i>Comment
                    <span className="count">+12</span>
                  </a> */}
                </div>
              </div>

              {/* Overview영역 */}
              <OverviewContents />

              {/* FEEDBACK 영역 */}
              <ContentsFeedback />

              {/* 강사영역 */}
              <ContentsTeacher />

              {/* 관련badge */}
              <ContentsRelationBadge/>

              {/* 관련 과정/배지 영역 */}
              <ContentsRelation />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfoDetail;
