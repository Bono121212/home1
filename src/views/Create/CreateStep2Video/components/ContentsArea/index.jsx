import React, {Component} from 'react'
import {
    Segment, Form, Icon, Select, Step, Grid
} from 'semantic-ui-react'

import ButtonGroup from "../ButtonGroup";
import EducationalMaterialsRadio from "../EducationalMaterialsRadio";
import LearningCardDisclosureRadio from "../LearningCardDisclosureRadio";
//import MainCategoryModal from "../MainCategoryModal";
//import SubCategoryChoiceModal from "../SubCategoryChoiceModal";
import Editor from "../../../../Editor";
import ClearInputBox from "../ClearInputBox";
import AttachFileUpload from "../AttachFileUpload";

const selectOptions01 = [
    {key: 'val01', value: 'val01', text: 'Basic'},
    {key: 'val02', value: 'val02', text: 'Intermediate'},
    {key: 'val03', value: 'val03', text: 'Advanced'},
    {key: 'val04', value: 'val04', text: 'Export'},
];
const selectOptions02 = [
    {key: 'val01', value: 'val01', text: '교육기관1'},
    {key: 'val02', value: 'val02', text: '교육기관2'},
    {key: 'val03', value: 'val03', text: '교육기관3'},
    {key: 'val04', value: 'val04', text: '교육기관4'},
    {key: 'val05', value: 'val05', text: '직접입력'},
];

class ContentsArea extends Component {

    render() {
        return (
            <Segment className='full'>
                <div className="apl-form-wrap create">
                    <Form>
                        <div className="section-tit">
                            <span className="text1">교육정보</span>
                            <div className="right-step">
                                <Step.Group className='number-step'>
                                    <Step completed>
                                        <Step.Content>
                                            <span className="number"><span className="blind">1</span></span>
                                            <Step.Title>기본정보 및 노출정보</Step.Title>
                                        </Step.Content>
                                    </Step>
                                    <Step active>
                                        <Step.Content>
                                            <span className="number"><span className="blind">2</span></span>
                                            <Step.Title>교육정보 및 부가정보</Step.Title>
                                        </Step.Content>
                                    </Step>
                                </Step.Group>
                            </div>
                        </div>

                        <Form.Field>
                            <label className="necessary">교육목표</label>
                            <div className="ui form">
                                <div className="ui right-top-count input">
                                    {/* .error // */}
                                    <span className="count"><span className="now">0</span>/<span
                                        className="max">500</span></span>
                                    <textarea placeholder="교육 목표를 입력해주세요. (최대 500자 입력 가능)"/>
                                    <span className="validation">You can enter up to 500 characters.</span>
                                </div>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <label className="necessary">교육대상</label>
                            <div className="ui right-top-count input">
                                {/* .error // */}
                                <span className="count"><span className="now">0</span>/<span
                                    className="max">500</span></span>
                                <textarea placeholder="교육 대상을 입력해주세요. (최대 500자 입력가능)"/>
                                <span className="validation">You can enter up to 500 characters.</span>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <label className="necessary">교육내용</label>
                            <div className="ui editor-wrap">
                                <Editor/>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <label>이수조건</label>
                            <div className="ui right-top-count input">
                                {/* .error // */}
                                <span className="count"><span className="now">0</span>/<span
                                    className="max">1000</span></span>
                                <textarea placeholder="이수조건을 입력해주세요."/>
                                <span className="validation">You can enter up to 1000 characters.</span>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <label>기타안내</label>
                            <div className="ui editor-wrap">
                                <Editor/>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <div className="ui grid create">
                                <div className="column">
                                    <label className="necessary">교육시간</label>
                                    <ClearInputBox/>
                                    <ClearInputBox/>
                                </div>
                                <div className="column">
                                    <label>난이도</label>
                                    <Select placeholder='선택해주세요' className='dropdown'
                                            options={selectOptions01}/>
                                </div>
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <label className="necessary">교육기관 / 출처</label>
                            <Grid className='create'>
                                <Grid.Column>
                                    <Select placeholder='선택해주세요' className='w100'
                                            options={selectOptions02}/>
                                </Grid.Column>
                                <Grid.Column>
                                    <div className="ui h48 input">
                                        <input type="text" name="" placeholder="직접입력 선택 시 활성화 됩니다." readOnly/>
                                        <Icon className='clear link'/>
                                    </div>
                                </Grid.Column>
                            </Grid>
                        </Form.Field>

                        <hr className="dividing"/>

                        <div className="section-tit">
                            <span className="text1">부가정보</span>
                        </div>
                        <EducationalMaterialsRadio/>
                        <Form.Field>
                            <label>참고자료</label>


                            {/* 파일박스 작업 전 */}
                            {/*<div className='sm-attach-file'>*/}
                            {/*    <div>*/}
                            {/*        <div className="content-scroll">*/}
                            {/*            <Segment basic vertical>*/}
                            {/*                <Header size="small" className="text-grey">*/}
                            {/*                    <div className="fl-right">*/}
                            {/*                        <div className="icon-file-upload">*/}
                            {/*                            <label htmlFor="app-icon-upload1">*/}
                            {/*                                <span className="ui text blue">*/}
                            {/*                                    <i className="material-icons">add</i></span>*/}
                            {/*                                <span className="sr-only">업로드</span>*/}
                            {/*                                <Dropdown role="listbox" aria-expanded="false" className="ui dropdown" tabIndex="0">*/}
                            {/*                                    <input id="app-icon-upload1"/>*/}
                            {/*                                    <i aria-hidden="true"*/}
                            {/*                                       className="dropdown icon"/>*/}
                            {/*                                    <div className="menu transition left">*/}
                            {/*                                        <div role="option" className="item">*/}
                            {/*                                            <span className="text">로컬 PC에서 업로드</span>*/}
                            {/*                                        </div>*/}
                            {/*                                    </div>*/}
                            {/*                                </Dropdown>*/}
                            {/*                            </label>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                    <i className="material-icons">attach_file</i> 첨부파일*/}
                            {/*                </Header>*/}
                            {/*                <segment className="side-segment-list">*/}
                            {/*                    <div role="list" className="ui middle aligned list">*/}

                            {/*                    </div>*/}
                            {/*                </segment>*/}
                            {/*            </Segment>*/}
                            {/*        </div>*/}
                            {/*        <input hidden="" type="file"/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}


                            {/* 파일 박스 */}
                            <AttachFileUpload/>

                            {/* 기존 퍼블리싱 */}
                            {/*<div className="round-wrap2">*/}
                            {/*    <div className="top text">*/}
                            {/*        <ul>*/}
                            {/*            <li><span className="empty">파일을 업로드해주세요.</span></li>*/}
                            {/*        </ul>*/}

                            {/*        /!* 파일 업로드시 *!/*/}
                            {/*        /!*<ul>*!/*/}
                            {/*        /!*    <li><span>Education UX/UI class_1.pptx</span>*!/*/}
                            {/*        /!*        <button><i className="clear icon"><span className="blind">delete</span></i>*!/*/}
                            {/*        /!*        </button>*!/*/}
                            {/*        /!*    </li>*!/*/}
                            {/*        /!*    <li><span>Education UX/UI class_1.pptx</span>*!/*/}
                            {/*        /!*        <button><i className="clear icon"><span className="blind">delete</span></i>*!/*/}
                            {/*        /!*        </button>*!/*/}
                            {/*        /!*    </li>*!/*/}
                            {/*        /!*    <li><span>Education UX/UI class_1.pptx</span>*!/*/}
                            {/*        /!*        <button><i className="clear icon"><span className="blind">delete</span></i>*!/*/}
                            {/*        /!*        </button>*!/*/}
                            {/*        /!*    </li>*!/*/}
                            {/*        /!*</ul>*!/*/}
                            {/*    </div>*/}
                            {/*    <div className="bottom">*/}
                            {/*        <span className="text1"><Icon className='info16'/>*/}
                            {/*        <span className="blind">infomation</span>*/}
                            {/*            DOC, PPT, PDF, XLS 파일을 등록하실 수 있습니다. / 최대 000 Byte 용량의 파일을 등록하실 수 있습니다. / 참고자료는 다수의 파일을 등록할 수 있습니다.</span>*/}
                            {/*        <div className="right-btn">*/}
                            {/*            <div className="ui input file2">*/}
                            {/*                <label htmlFor="hidden-new-file" className="ui button">파일찾기</label>*/}
                            {/*                <input type="file" id="hidden-new-file2"/>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </Form.Field>
                        <LearningCardDisclosureRadio/>
                        <ButtonGroup/>
                    </Form>
                </div>
            </Segment>
        )
    }
}


export default ContentsArea
