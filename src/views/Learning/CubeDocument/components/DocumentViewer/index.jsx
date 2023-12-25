import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import VideoOverlay from '../../../CubeVideo/components/VideoOverlay';
import CubeDetailSec from '../../../_Components/CubeDetailSec';
const DocumentViewer = (props) => {
    return (
        <CubeDetailSec className="cube-sec">
            {
                props.title ? 
                <>
					<div className="detail-sec-head type-cube-info">
						<h2 className="detail-sec-title">웹 3.0, 커뮤니티 크리에이터의 시대가 온다.</h2>
						<div className="detail-sec-info">
							<span className="ui label text">Document</span>
							<span className="ui label text">1h 40m</span>
							{/* 학습중일때 primary*/}
							<span className="ui label text primary">학습중</span>
						</div>
					</div>
                    <div className='sec-body'>
                    {/* document viewer */}
                        <div className="documents-viewer">
                            <div className="pdf-header">
                                <i className="list24 icon"></i>
                                <span className="pdf-header-title"><strong>2</strong> 개의 교육 자료가 있습니다.</span>
                                <div className="pdf-header-select on">
                                    <Link className="pdf-select-text">
                                        전략 Intermediate 과정
                                        <i className="icon drop32-down"></i>
                                        <i className="icon drop32-up"></i>
                                    </Link>
                                    <div className="pdf-header-drop">
                                        <Link>전략 Intermediate 과정</Link>
                                        <Link>전략과 SV</Link>
                                    </div>
                                </div>
                            </div>

                            {/*document load 참고용 제거*/}
                            {/*</Document>*/}
                            <div className="pdf-not-supported">
                                <span className="not-supported-copy">Viewer에서 지원하지 않는 문서입니다.<br />문서를 다운로드하셔야 학습을 이어 하실 수 있습니다.</span>
                                <Link className="btn-not-supported"><img src="https://image.mysuni.sk.com/suni-asset/public/images/all/btn-download.svg" alt="" /></Link>
                            </div>

                            <VideoOverlay />

                            <div className="pdf-control disable">
                                {/* s : zoom 추가 */}
                                <div className="doc_zoom">
                                    <Button icon className="btn_zoom minus"><span className="blind">zoom in</span></Button>
                                    <div className="zoom_num">
                                        <span>100%</span>
                                    </div>
                                    <Button icon className="btn_zoom plus"><span className="blind">zoom out</span></Button>
                                </div>
                                {/* e : zoom 추가 */}
                                <div className="pagination">
                                    <Link className="pdf-prev">이전</Link>
                                    <span className="num">1/40</span>
                                    <Link className="pdf-next">이후</Link>
                                </div>
                                <Link className="pdf-down on"><i aria-hidden="true" className="icon down-white24"></i></Link>
                                <div className="pdf-down-drop">
                                    <Link>전략_Intermediate_과정.ppt</Link>
                                    <Link>전략_Intermediate_과정.ppt</Link>
                                </div>
                                <div className="pdf-bar"><span className="pdf-gauge" /></div>
                            </div>
                        </div>

                    </div>

                </> : 
                <>
                    {/* document viewer */}
                    <div className="documents-viewer">
                        <div className="pdf-header">
                            <i className="list24 icon"></i>
                            <span className="pdf-header-title"><strong>2</strong> 개의 교육 자료가 있습니다.</span>
                            <div className="pdf-header-select on">
                                <Link className="pdf-select-text">
                                    전략 Intermediate 과정
                                    <i className="icon drop32-down"></i>
                                    <i className="icon drop32-up"></i>
                                </Link>
                                <div className="pdf-header-drop">
                                    <Link>전략 Intermediate 과정</Link>
                                    <Link>전략과 SV</Link>
                                </div>
                            </div>
                        </div>

                        {/*document load 참고용 제거*/}
                        {/*</Document>*/}
                        <div className="pdf-not-supported">
                            <span className="not-supported-copy">Viewer에서 지원하지 않는 문서입니다.<br />문서를 다운로드하셔야 학습을 이어 하실 수 있습니다.</span>
                            <Link className="btn-not-supported"><img src="https://image.mysuni.sk.com/suni-asset/public/images/all/btn-download.svg" alt="" /></Link>
                        </div>

                        <VideoOverlay />

                        <div className="pdf-control disable">
                            {/* s : zoom 추가 */}
                            <div className="doc_zoom">
                                <Button icon className="btn_zoom minus"><span className="blind">zoom in</span></Button>
                                <div className="zoom_num">
                                    <span>100%</span>
                                </div>
                                <Button icon className="btn_zoom plus"><span className="blind">zoom out</span></Button>
                            </div>
                            {/* e : zoom 추가 */}
                            <div className="pagination">
                                <Link className="pdf-prev">이전</Link>
                                <span className="num">1/40</span>
                                <Link className="pdf-next">이후</Link>
                            </div>
                            <Link className="pdf-down on"><i aria-hidden="true" className="icon down-white24"></i></Link>
                            <div className="pdf-down-drop">
                                <Link>전략_Intermediate_과정.ppt</Link>
                                <Link>전략_Intermediate_과정.ppt</Link>
                            </div>
                            <div className="pdf-bar"><span className="pdf-gauge" /></div>
                        </div>
                    </div>
                </>
            }
        </CubeDetailSec>
    )
}
export default DocumentViewer