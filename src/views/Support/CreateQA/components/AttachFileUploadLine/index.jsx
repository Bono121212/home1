import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {
    Dropdown,
} from 'semantic-ui-react'

class AttachFileUploadLine extends Component {

    render() {
        return (
            <>
                {/* 파일 박스 */}
                <div className="line-attach width-sm">
                    <div className="attach-inner">

                        {/* 파일박스 Depot 시작 */}
                        <div>
                            <div className="content-scroll">
                                <div className="ui basic vertical segment">
                                    <div className="ui small header text-grey">
                                        <div className="fl-right">
                                            <div className="icon-file-upload"><label
                                                htmlFor="app-icon-upload1"><span
                                                className="ui text blue"><i
                                                className="material-icons">add</i></span><span
                                                className="sr-only">업로드</span>
                                                <Dropdown text="text">
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item text='로컬 PC에서 업로드'/>
                                                        {/*<Dropdown.Item text='Open...' />*/}
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                {/*<div role="listbox" aria-expanded="false"*/}
                                                {/*     className="ui dropdown" tabIndex="0"><input*/}
                                                {/*    id="app-icon-upload1"/><i aria-hidden="true"*/}
                                                {/*                             className="dropdown icon"></i>*/}
                                                {/*    <div className="menu transition left">*/}
                                                {/*        <div role="option" className="item"><span*/}
                                                {/*            className="text">로컬 PC에서 업로드</span></div>*/}
                                                {/*    </div></div>*/}
                                            </label></div>
                                        </div>
                                        <i className="material-icons">attach_file</i> 첨부파일
                                    </div>
                                    <div className="ui segment side-segment-list">
                                        <div role="list" className="ui middle aligned list">
                                            <div role="listitem" className="item">
                                                <div className="right floated content">
                                                    <span className="sub-info">23.8KB</span>
                                                    <Link><i className="material-icons">close</i></Link>
                                                </div>
                                                <div className="content">
                                                    <a href="/api/depot/depotFile/flow/download/2s-2"
                                                       download="">
                                                                    <span className="file-type alternate">
                                                                    <i aria-hidden="true"
                                                                       className="file alternate icon"></i>
                                                                    </span>
                                                        2019-09-09 08.47.01.jpg</a>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                            <input hidden="" type="file"/>
                        </div>
                        {/* 파일박스 Depot 끝 */}
                    </div>
                </div>
            </>
        )
    }
}


export default AttachFileUploadLine
