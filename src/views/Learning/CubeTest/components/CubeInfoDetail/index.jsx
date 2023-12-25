import React from "react";

import {
  Form,
  Icon
} from "semantic-ui-react";
import Surveyheader from "../Surveyheader";
import ContentsRadio01 from "../ContentsRadio01";
import ContentsRadio02 from "../ContentsRadio02";
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
                <Surveyheader />
              </div>

              {/* 1번 */}
              <div className="course-radio-survey">
                <p>
                  <span>1</span>본 과정을 다른 구성원에게도 추천하고 싶으신가요?
                </p>
                <ContentsRadio01 />
              </div>

              {/* 2번 */}
              <div className="course-radio-survey">
                <p>
                  <span>2</span>본 과정을 통해 학습 내용을 명확하게 이해할 수
                  있었나요?
                </p>
                <ContentsRadio02 />
              </div>

              {/* 3번 */}
              <div className="course-radio-survey">
                <p>
                  <span>3</span>본 과정에서 만족스러운 부분과 개선 사항을
                  적어주세요.
                </p>
                <div className="course-survey-list">
                  <Form>
                    <Form.Field>
                      <div className="ui right-top-count input">
                        <span className="count">
                          <span className="now">0</span>/
                          <span className="max">100</span>
                        </span>
                        <input
                          type="text"
                          placeholder="답변을 입력해주세요. (최대 입력 글자 수 확인 필요)"
                        />
                        <Icon className="clear link" />
                        <span className="validation">
                          You can enter up to 100 characters.
                        </span>
                      </div>
                    </Form.Field>
                  </Form>
                </div>
              </div>
            </div>

            <div class="survey-preview">
              <button class="ui button fix line">저장</button>
              <button class="ui button fix bg">제출</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CubeInfoDetail;
