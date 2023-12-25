import React from "react";
import { Link } from "react-router-dom";
import CubeDetailSec from "../../../_Components/CubeDetailSec";
import CubeDetailSecCol from "../../../_Components/CubeDetailSecCol";


const TalkOverview = () => {
    return(
        <>
        <CubeDetailSec className="detail-sec ov-desc-sec ov-talk-sec" id="lms-desc">
            <div className="cube-description">
                <div className="ql-snow">
                    <div className="ql-editor">
                        <p>
                            편하게 말씀해주시되, 본 게시판은 공개 게시판으로 개인정보를 기입하지 않도록 부탁드립니다.<br/>
                            욕설도 자제해주세요. 감사합니다.
                        </p>
                    </div>
                </div>
            </div>
        </CubeDetailSec>

        <CubeDetailSec>
            <CubeDetailSecCol className="ov-url-sec" id="lms-url">
                <div className="detail-sec-head">
                    <h2 className="detail-sec-title">관련 URL</h2>
                </div>
                <div className="detail-sec-body">
                    <div className="ov-url">
                        <Link to="/" className='url-item'>https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=talk</Link>
                        <Link to="/" className='url-item'>관리자가 올려준 URL</Link>
                    </div>
                </div>
            </CubeDetailSecCol>
        </CubeDetailSec>
        <CubeDetailSec>
            <CubeDetailSecCol className="ov-down-sec" id="lms-down">
                <div className="detail-sec-head">
                    <h2 className="detail-sec-title">관련 자료</h2>
                </div>
                <div className="detail-sec-body">
                    {/* 관련자료 */}
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
                    {/* //관련자료 */}
                </div>

            </CubeDetailSecCol>
        </CubeDetailSec>

        </>
    )
}

export default TalkOverview;