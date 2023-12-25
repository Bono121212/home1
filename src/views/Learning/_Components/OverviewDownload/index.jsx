import React from "react";
import CubeDetailSecCol from "../CubeDetailSecCol";

const OverviewDownload = () => {
    return (
        <CubeDetailSecCol className="ov-down-sec" id="lms-down">
            <div className="detail-sec-head">
                <h2 className="detail-sec-title">참고자료</h2>
            </div>
            <div className="detail-sec-body">
                {/* 참고자료 */}
                <div className="ov-down">
                    <div className="item">
                        <button type="button" className="btn-down">TTC Digital플랫폼 특강 - 발표자료 1부.pdf</button>
                    </div>
                    <div className="item">
                        <button type="button" className="btn-down">TTC Digital플랫폼 특강 - 발표자료 2부_별첨자료 포함.pdf</button>
                    </div>
                    <div className="item">
                        <button type="button" className="btn-down">Mobile_App_UI_UX_GUI_Design_Tutorials.pptx</button>
                    </div>
                </div>
                {/* //참고자료 */}
            </div>
        </CubeDetailSecCol>
    );
}
export default OverviewDownload;