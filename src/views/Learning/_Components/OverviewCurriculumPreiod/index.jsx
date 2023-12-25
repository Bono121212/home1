import React from "react";
import CubeDetailSec from "../CubeDetailSec";

const OverviewCurriculumPreiod = () => {
    return (
        <CubeDetailSec className="ov-curriculum-sec" id="lms-curriculum">
            {/* 수강신청 과정안내 */}
            <div className="ov-curriculum">
                <div className="title-area">
                    <h3 className="title">수강신청 과정안내</h3>
                    <div className="explain">
                        <p>해당 과정은 수강신청을 통해 학습이 가능한 과정입니다. 과정 정보와 차수 정보를 확인하고 수강 신청 후 학습하시기 바랍니다.</p>
                    </div>
                </div>
                <div className="define-area">
                    <div className="define">
                        <strong>3차수 신청기간</strong>
                        <span>2022.10.17 ~ 2022.10.21</span>
                    </div>
                </div>
            </div>
            {/* //수강신청 과정안내 */}
        </CubeDetailSec>
    );
}
export default OverviewCurriculumPreiod;
