import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Contentsheader from "../Contentsheader";
// import TestRadio01 from "../TestRadio01";



const CubeInfoDetail = () => {
  return (
    <div className="course-info-detail responsive-course">
      <div className="course-detail-center">
        <Link className="btn-wide"><span>펼치기</span></Link>
        <div className="main-wrap">
          <div className="scrolling-area area2 ">
            <div className="ui segment full test-complete">
              {/* Header */}
              <div className="course-info-header">
                <Contentsheader />
              </div>
              <div className="course-info-ing">
                <h1>Data로 생각하는 인재되기 (16가지 역량)</h1>
                <h2>
                ‘Data로 생각하는 인재되기’ 강의를 수강하는 구성원들의 <br />
                학습 이해도 확인을 위해 테스트를 진행합니다. <br />
                이해한 내용을 바탕으로 시험에 응시해주세요.
                </h2>
                <h3>문항개수</h3>
                <p>
                  총 <strong>10문항</strong>
                </p>
                <h3>응시횟수</h3>
                <p>
                  <strong>2회</strong>
                </p>
                <h3>이수조건</h3>
                <p>
                  합격기준 <strong>80점</strong>
                  <span>/</span>
                  총점 <strong>100점</strong>
                </p>
              </div>
            </div>
            <div class="course-info-bottom">
              <span className=''>
                Test PASS 조건에 도달하지 못하여 <strong>2회 이상</strong> 재응시 할 경우
              </span>
              <span>
                다음날 Test 응시가 가능합니다.
              </span>
              <p>
              Test 정보를 확인했으면,  <strong>응시하기</strong> 버튼을 통해 Test에 응시해보세요!<br/>
              Test를 재응시 할 경우 문항이 랜덤 출제됩니다.
              </p>
              <Button className="fix bg">응시하기</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CubeInfoDetail;
