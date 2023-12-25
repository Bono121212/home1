import React from "react";
import { Link } from "react-router-dom";
import { Icon, Checkbox } from "semantic-ui-react";
import DiscussImg from "../../../../../images/all/icon-community-discussion.png"
import MaskImg from "../../../../../images/all/icon-community-discussion2.png"
import file from "../../../../../images/all/icon-community-file-copy-2.png";
import down from "../../../../../images/all/icon-down-type-4-24-px.png";
import IconUrl from "../../../../../images/all/icon-url.png";
// import CommentImg04 from "../../../../../images/all/profile-110-px-sample-4.png";

const Surveyheader = () => {
  return (
    <div className="survey-header margin-none border-none pt0">
      <div className="discuss-wrap">
          <div className="discuss-box">
            <img src={DiscussImg} alt="" />
            <h2>COVID19가 바꾼 우리의 삶은?</h2>
            <span className="peo-opinion">전체 의견 <strong>638</strong></span>
            <span><strong className="peo-date">2020.09.26</strong></span>
          </div>
          <div className="discuss-box2">
            <img src={MaskImg} className="discuss-main-img" alt="" />
            <div className="discuss-text-wrap">
              <p className="discuss-text-belt belt2">
                2019년 지구상에 새로 등장한 신종 바이러스 감염병인 코로나19는 세계 많은 국가에 서 1년째 대유행을 하고 있다.
                코로나19는 21세기 들어 가장 많은 인명 피해를 주고 있는 감염병이란 타이틀을 이미 거머쥐었다. 지금도 정치, 경제,
                사회, 문화, 보건의료, 과학기술 등 많은 분야를 이전과 다른 모습으로 바꿔놓고 있는 중이다. 따라서 코로나19가 바꾸었거나
                바꾸고 있는 우리 사회의 다양 한 모습을 살펴보고 또 앞으로 어디까지 어떻게 바꿀지를 분석하는 것은 인류의 지속가능성을
                위해 매우 중요한 과제라고 할 수 있다. 코로나 사태와 관련, 코로나 사태가 시작되었던 1월 말 당시의 예상 및 결과를 Review해보고,
                향후 사태 지속 시 사회가 어떤 모습으로 변할지에 대해 답변하면서 평소에 생각하지 못했던 부분까지 생각의 영역을 확장해봅니다.
              </p>
              <button class="ui icon button right btn-blue">
                more
                <i aria-hidden="true" class="icon icon morelink more2"></i>
              </button>
            </div>
            <div className="community-board-down discuss2">
              <div className="board-down-title href">
                  <p>
                    {" "}
                    <img src={IconUrl} alt="" />
                    관련 URL
                  </p>
                  <Link to="#">코로나19 100일째 전 세계 확진자 150만명… (2020-04-09 한국경제)</Link>
                  <Link to="#">센트럴 파크에 들어선 야전병원… 뉴욕은 지금 전쟁터 (2020-03-31 한국일보)</Link>
                  <Link to="#">헤지펀드 배부 코로나 충력, 경제공황으로 이어질수도 (2020-04-10 중앙일보)</Link>
              </div>
            </div>


            {/* 첨부파일 */}
            <div className="community-board-down discuss2">
              <div class="board-down-title">
                <p>
                  {" "}
                  <img src={file} alt="" />
                관련 자료
                </p>
                <div className="board-down-title-right">
                  <button class="ui icon button left post delete discuss">
                    <i aria-hidden="true" class="icon check icon"></i>선택 다운로드
                </button>
                  <button class="ui icon button left post list2 discuss">
                    <img src={down} alt="" />
                  전체 다운로드
                </button>
                </div>
              </div>

              <div className="down">
                <Checkbox
                  className="base"
                  label="변화의 시작 - 코로나19 이후의 삶.pdf"
                  name="radioGroup"
                  value=""
                  defaultChecked
                />
                <Icon className="icon-down-type4" />
              </div>
              <div className="down">
                <Checkbox
                  className="base"
                  label="포스트 코로나 - 코로나19 이후,우리의 일상은.pdf"
                  name="radioGroup"
                  value=""
                />
                <Icon className="icon-down-type4" />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Surveyheader;
