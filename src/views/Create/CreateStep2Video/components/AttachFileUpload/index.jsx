import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {
    Icon, Dropdown,
} from 'semantic-ui-react'

// import ButtonGroup from "../ButtonGroup";
// import EducationalMaterialsRadio from "../EducationalMaterialsRadio";
// import LearningCardDisclosureRadio from "../LearningCardDisclosureRadio";
// import MainCategoryModal from "../MainCategoryModal";
// import SubCategoryChoiceModal from "../SubCategoryChoiceModal";
// import Editor from "../../../../Editor";
// import ClearInputBox from "../ClearInputBox";

// const selectOptions01 = [
//     {key: 'val01', value: 'val01', text: 'Basic'},
//     {key: 'val02', value: 'val02', text: 'Intermediate'},
//     {key: 'val03', value: 'val03', text: 'Advanced'},
//     {key: 'val04', value: 'val04', text: 'Export'},
// ];
// const selectOptions02 = [
//     {key: 'val01', value: 'val01', text: '교육기관1'},
//     {key: 'val02', value: 'val02', text: '교육기관2'},
//     {key: 'val03', value: 'val03', text: '교육기관3'},
//     {key: 'val04', value: 'val04', text: '교육기관4'},
//     {key: 'val05', value: 'val05', text: '직접입력'},
// ];

class AttachFileUpload extends Component {

    render() {
        return (
            <>
                {/* 파일 박스 */}
                <div className="lg-attach">
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

                        {/* 값이 없을경우 */}
                        {/*<p className='placeholder-txt'>파일을 업로드 해주세요</p>*/}

                        {/* 하단 파일 참고 안내 메세지 */}
                        <div className="bottom">
                                        <span className="text1"><Icon className='info16'/>
                                        <span className="blind">information</span>
                                            DOC, PPT, PDF, XLS 파일을 등록하실 수 있습니다. / 최대 10Mbyte 용량의 파일을 등록하실 수 있습니다. / 참고자료는 다수의 파일을 등록할 수 있습니다.</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default AttachFileUpload
