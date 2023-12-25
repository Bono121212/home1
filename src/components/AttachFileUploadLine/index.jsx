import React from 'react';

const AttachFileUploadLine = () => {
    return (
        <div className="lg-attach">
            <div className="attach-inner">
                <div className='ui segment' style={{ border: '0.1rem', padding: 0 }}>
                    <div className="ui inverted dimmer">
                        <div className="content">
                            <div className="ui medium text loader">Waiting</div>
                        </div>
                    </div>
                    <div className="content-scroll">
                        <div className="ui basic vertical segment">
                            <div className="ui small header text-grey">
                                <div className="fl-right">
                                    <div className="icon-file-upload">
                                        <label for="app-icon-uploadfileBox1"><span className="ui text blue"><i className="material-icons">add</i></span><span className="sr-only"></span><input type="file" id="app-icon-uploadfileBox1" /></label>
                                    </div>
                                </div>
                                <i className="material-icons">attach_file</i> 첨부파일
                            </div>
                            <div className="ui segment side-segment-list">
                                <div role="list" className="ui middle aligned list">
                                    {/* 첨부된 아이템 1 */}
                                    <div role="listitem" className="item">
                                        <div className="right floated content">
                                            <span className="sub-info">100KB</span>
                                            <a href='./' rel="noopener noreferrer"><i className="material-icons">close</i></a>
                                        </div>
                                        <div className="content">
                                            <a href='./' rel="noopener noreferrer" download="">
                                                <span className="file-type alternate"><i aria-hidden="true" className="file alternate icon"></i></span>img-280-px-thumbnail-live-wait.png
                                            </a>
                                        </div>
                                    </div>
                                    {/* 첨부된 아이템 2 */}
                                    <div role="listitem" className="item">
                                        <div className="right floated content">
                                            <span className="sub-info">100KB</span>
                                            <a href='./' rel="noopener noreferrer"><i className="material-icons">close</i></a>
                                        </div>
                                        <div className="content">
                                            <a href='./' rel="noopener noreferrer" download="">
                                                <span className="file-type alternate"><i aria-hidden="true" className="file alternate icon"></i></span>img-280-px-thumbnail-live-wait.png
                                            </a>
                                        </div>
                                    </div>
                                    {/* 첨부된 아이템 3 */}
                                    <div role="listitem" className="item">
                                        <div className="right floated content">
                                            <span className="sub-info">100KB</span>
                                            <a href='./' rel="noopener noreferrer"><i className="material-icons">close</i></a>
                                        </div>
                                        <div className="content">
                                            <a href='./' rel="noopener noreferrer" download="">
                                                <span className="file-type alternate"><i aria-hidden="true" className="file alternate icon"></i></span>img-280-px-thumbnail-live-wait.png
                                            </a>
                                        </div>
                                    </div>
                                    {/* 첨부된 아이템 4 */}
                                    <div role="listitem" className="item">
                                        <div className="right floated content">
                                            <span className="sub-info">100KB</span>
                                            <a href='./' rel="noopener noreferrer"><i className="material-icons">close</i></a>
                                        </div>
                                        <div className="content">
                                            <a href='./' rel="noopener noreferrer" download="">
                                                <span className="file-type alternate"><i aria-hidden="true" className="file alternate icon"></i></span>img-280-px-thumbnail-live-wait.png
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 23-03-06 첨부파일안내 문구변경 */}
                <div className="bottom">jpg, jpeg, png, mp4, xlsx, xls, ppt, pptx, pdf, doc, docx, hwp, csv, zip의 확장자로 50MB 이하의 파일을 등록하실 수 있습니다.</div>
            </div>
        </div>

    )
}
export default AttachFileUploadLine
