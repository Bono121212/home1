import React from "react";
import Contentsheader from "../Contentsheader";
import TestRadio01 from "../TestRadio01";
import TestRadio03 from "../TestRadio03";
import TestRadio04 from "../TestRadio04";
import ContentsCheckbox01 from "../ContentsCheckbox01";
import Calendar from "../Calendar";
// import { Radio, Form, Icon } from "semantic-ui-react";
import testImg from "../../../../../images/all/img.png"
import CourseTable from "../CourseTable";
import ClearInputBox from "../ClearInputBox";
import { Link } from "react-router-dom";



const CubeInfoDetail = () => {
  return (
    <div className="course-info-detail responsive-course">
      <div className="course-detail-center">
        <Link className="btn-wide"><span>펼치기</span></Link>
        <div className="main-wrap">
          <div className="scrolling-area area2 ">
            <div className="ui segment full">
              {/* Header */}
              <div className="course-info-header">
                <Contentsheader />

              </div>

              <div className="course-radio-survey">
                <p>
                  <span>1</span>두려움을 느끼게 될 때 생기는 일이라 하기 어려운
                  것은? (10점)
                </p>
                <TestRadio01 />
              </div>
              <div className="course-radio-survey">
                <p>
                  <span>2</span>편도체가 기능을 상실하면 어떠한 일이 벌어지는지
                  모두 고르세요. (10점)
                </p>
                <ContentsCheckbox01 />
              </div>
              <div className="course-radio-survey correct">
                <p>
                  <span>1</span>두려움을 느끼게 될 때 생기는 일이라 하기 어려운
                  것은? (10점)
                </p>
                <TestRadio01 />
              </div>
              {/* 틀렸을 때 wrong 클래스 추가 */}
              <div className="course-radio-survey survey-radio-img">
                <p>
                  <span>3</span>
                  <span className="copy">아래의 그림을 보고 아래의 그림을 보고 아래의 그림을 보고 아래의 그림을 보고 아래의 그림을 보고 아래의 그림을 보고 아래의 그림을 보고 아래의 그림을 보고 아래의 그림을 보고 아래의 그림을 보고{`\n`}누락된 형태를 선택하세요.{`\n`}
                    (10점)</span>
                </p>
                <img src={testImg} alt="" />
                <TestRadio03 />
              </div>
              <div className="course-radio-survey survey-text">
                <p>
                  <span>4</span>다음 중 실시 설계 시 배관이 기계로부터 받아야
                  하는 Information 은 무엇인가요? (10점)
                </p>
                 {/* .right-top-count (우측 상단 카운팅) 추가 */}
                 <ClearInputBox />
              </div>
              <div className="course-radio-survey survey-radio-img">
                <p>
                  <span>5</span>마음근력훈련은 어느장소에서 하는 것이 가장
                  효과적인가요? (10점)
                </p>
                <TestRadio04 />
              </div>
              <div className="course-radio-survey">
                <p>
                  <span>6</span>본 과정의 학습 내용은 개인적으로나 업무에
                  적용가능 한가요? (10점)
                </p>
                <div className="preview">
                  <div
                      className="lms-toggle init"
                      style={{ position: "relative", top: "0" }}
                  >
                    {/*처음 로딩시 className="lms-switch init"*/}
                    {/*클릭이후  className="lms-switch"*/}
                    <label htmlFor="sld2" className="lms-switch init">
                      <input type="checkbox" id="sld2" />
                      <span className="slider"></span>
                      <span className="lms-radio-text"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="course-radio-survey">
                <p>
                  <span>7</span>본 과정을 통한 만족도를 선택해 주세요. (10점)
                </p>
                <CourseTable />
              </div>
              <div className="course-radio-survey">
                <p>
                  <span>8</span>생년월일을 선택해 주세요.
                </p>
                <Calendar />
              </div>
            </div>
            <div class="survey-preview">
              {/* <button class="ui button fix line">저장</button> */}
              <button class="ui button fix bg">제출</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CubeInfoDetail;
