import React from "react";
import CubeDetailSec from "../CubeDetailSec";
import CubeDetailSecCol from "../CubeDetailSecCol";

const OverviewDownloadKeyword = (props) => {
	return (
        <>
            {/* 둘 중 하나라도 존재해야 노출 */}
            {(props.download === "true" || props.keyward === "true") &&
                <CubeDetailSec className="groups">
                    {props.download === "true" &&
                        <CubeDetailSecCol className="ov-down-sec" id="lms-down">
                            <div className="detail-sec-head">
                                <h2 className="detail-sec-title">학습에 도움이 되는 참고자료</h2>
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
                    }
                    {props.keyword === "true" &&
                        <CubeDetailSecCol className="ov-keyword-sec" id="lms-keyword">
                            <div className="detail-sec-head">
                                <h2 className="detail-sec-title">키워드 톺아보기</h2>
                            </div>
                            <div className="detail-sec-body">
                                {/* 키워드 톺아보기 */}
                                <div className="ov-keyword">
                                    <button type="button" className="ui label tag">AI</button>
                                    <button type="button" className="ui label tag">Database</button>
                                    <button type="button" className="ui label tag">Design</button>
                                    <button type="button" className="ui label tag">Project Managing</button>
                                    <button type="button" className="ui label tag">Project Managing</button>
                                    <button type="button" className="ui label tag">AI</button>
                                    <button type="button" className="ui label tag">AI</button>
                                    <button type="button" className="ui label tag">AI</button>
                                    <button type="button" className="ui label tag">Database</button>
                                    <button type="button" className="ui label tag">Design</button>
                                    <button type="button" className="ui label tag">Project Managing</button>
                                    <button type="button" className="ui label tag">Project Managing</button>
                                    <button type="button" className="ui label tag">AI</button>
                                    <button type="button" className="ui label tag">AI</button>
                                </div>
                                {/* //키워드 톺아보기 */}
                            </div>
                        </CubeDetailSecCol>
                    }
                </CubeDetailSec>
            }
        </>
	);
}
export default OverviewDownloadKeyword;
