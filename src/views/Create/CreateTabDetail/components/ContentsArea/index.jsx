import React, {Component} from 'react'
import { Segment, Form, Icon, Radio, Select, Image, Button, Input, TextArea, Grid } from 'semantic-ui-react'

import ButtonGroup from "../ButtonGroup";
import ClearInputBox from "../ClearInputBox";
import InputBox from "../InputBox";
import Editor from "../../../../Editor";
import RegisteredTeacherList from "../RegisteredTeacherList";

/* const selectOptions01 = [
    {key: 'val01', value: 'val01', text: '전체'},
    {key: 'val02', value: 'val02', text: 'AI'},
    {key: 'val03', value: 'val03', text: 'DT'},
    {key: 'val04', value: 'val04', text: '행복'},
    {key: 'val05', value: 'val05', text: 'SV'},
    {key: 'val06', value: 'val06', text: '혁신디자인'},
    {key: 'val07', value: 'val07', text: 'Global'},
    {key: 'val08', value: 'val08', text: 'Leadership'},
    {key: 'val09', value: 'val09', text: 'Management'},
    {key: 'val10', value: 'val10', text: '반도체'},
    {key: 'val11', value: 'val11', text: 'SK아카데미'}
];
 */
const selectOptions02 = [
    {key: 'val01', value: 'val01', text: 'mySUNI'},
    {key: 'val02', value: 'val02', text: '본인회사'}
];

const selectOptions03 = [
    {key: 'val01', value: 'val01', text: '1분'},
    {key: 'val02', value: 'val02', text: '2분'},
    {key: 'val03', value: 'val03', text: '3분'},
    {key: 'val04', value: 'val04', text: '4분'},
];

const selectOptions04 = [
    {key: 'val01', value: 'val01', text: 'SK C&C'}
];

class ContentsArea extends Component {
    state = {
        publicScope: true,
        learningMaterials: ''
    }

    handleChange = (e, {value}) => this.setState({ publicScope : true })

    onChangeLearningMaterials = (e, {value}) => this.setState({ learningMaterials: value })


    render() {
        const { publicScope, learningMaterials } = this.state

        return (
            <Segment className='full'>
                <div className="apl-form-wrap create">
                    <Form>
                        <div className="section-tit">
                            <span className="text1">생성정보</span>
                        </div>
                        <div className="create-detail">
                            <dl>
                                <dt>생성자 및 일자</dt>
                                <dd>
                                    <span>홍길동</span>
                                    <span className="l">2020.05.29 23:59</span>
                                </dd>
                            </dl>
                            <dl>
                                <dt>승인자 및 처리일자</dt>
                                <dd>
                                    <span>김써니</span>
                                    <span className="l">2020.05.29 23:59</span>
                                </dd>
                            </dl>
                            <dl>
                                <dt>처리상태</dt>
                                <dd>
                                    <span>승인 요청</span>
                                </dd>
                            </dl>
                        </div>
                        <hr className="dividing" />


                        <div className="section-tit">
                            <span className="text1">기본정보 및 노출정보</span>
                        </div>

                        <Form.Field>
                            <label className="necessary">강좌명</label>
                            <ClearInputBox
                                placeholder="강좌명을 입력해주세요.(최대 100자 입력 가능)"
                            />
                        </Form.Field>

                        <Form.Field>
                            <label className="necessary">공개범위</label>
                            <div className='select-box'>
                                <Select placeholder='선택해주세요.' className='dropdown selection w302'
                                    options={selectOptions02}
                                    onChange={this.handleChange}
                                    value={selectOptions02[1].value}
                                />
                            </div>
                        </Form.Field>

                        <Form.Field>
                            <label className="necessary">College &gt; Channel</label>
                            <div className="gray-txt">공개범위를 선택해주세요.</div>
                            { publicScope &&
                                <div className='select-box'>
                                    <Select
                                        placeholder='College 선택'
                                        className='dropdown selection w302'
                                        options={selectOptions04}
                                        value={selectOptions04[0].value}
                                        disabled
                                    />
                                    <Select placeholder='Channel 선택' className='dropdown selection w302'/>
                                </div>
                            }
                        </Form.Field>

                        <Form.Field>
                            <Grid className="create create2">
                                <Grid.Column width={3}>
                                    <label>교육형태</label>
                                </Grid.Column>
                                <Grid.Column width={13}>
                                    <div className="text1">Video</div>
                                </Grid.Column>
                            </Grid>
                        </Form.Field>

                        <Form.Field>
                            <label>Tag 정보 </label>
                            <InputBox placeholder="Tag와 Tag는 쉼표(“,”)로 구분하여, 최대 10개까지 입력하실 수 있습니다."/>
                        </Form.Field>

                        <Form.Field>
                            <Grid className="create create2">
                                <Grid.Column>
                                    <label>icon</label>
                                </Grid.Column>
                                <Grid.Column>
                                    <div className="icon">
                                        <Image src="/images/all/group-26-copy-7.svg" alt="Learning Icon" />
                                    </div>
                                </Grid.Column>
                            </Grid>
                            {/*<IconSelect/>*/}
                        </Form.Field>

                        <hr className="dividing"/>
                        <div className="section-tit">
                            <span className="text1">교육정보 및 부가정보</span>
                        </div>

                        <Form.Field>
                            <label className="necessary">교육목표</label>
                            <div className="ui right-top-count input">
                                <span className="count"><span className="now">0</span>/<span className="max">500</span></span>
                                <TextArea
                                    placeholder='등록하는 강좌에 대한 교육목표를 입력해주세요. (최대 500자 입력 가능)'
                                    value='인증 시험. IBM Cloud Pak for Applications 솔루션 아키텍트는 IBM Cloud Pak for Applications를 사용하여 아키텍처를 설계, 계획 및 작성할 수 있는 사람을 만드는데 목표가 있습니다.'
                                />
                            </div>
                        </Form.Field>

                        <Form.Field>
                            <label className="necessary">교육대상</label>
                            <div className="ui right-top-count input">
                                <span className="count"><span className="now">0</span>/<span className="max">500</span></span>
                                <TextArea
                                    placeholder='등록하는 강좌에 대한 교육대상을 입력해주세요. (최대 500자 입력 가능)'
                                    value='IBM Professional 인증 프로그램은 전문성을 입증하기 위해 신임 정보를 획득 할 수있는 기능을 제공합니다.'
                                />
                            </div>
                        </Form.Field>

                        <Form.Field>
                            <label className="necessary">교육내용</label>
                            <div className="ui editor-wrap">
                                <Editor/>
                            </div>
                        </Form.Field>

                        <Form.Field>
                            <label className="necessary">교육시간</label>
                            <div className="select-box">
                                <Select placeholder='선택해주세요.' className='dropdown selection w302'
                                    options={selectOptions03}
                                    value={selectOptions03[3].value}
                                />
                            </div>
                        </Form.Field>

                        <Form.Field>
                            <Grid className='create create2'>
                                <Grid.Column width={3}>
                                    <label>교육기간/출처</label>
                                </Grid.Column>
                                <Grid.Column width={13}>
                                    <div className="text1">구성원</div>
                                </Grid.Column>
                            </Grid>
                        </Form.Field>

                        <Form.Field>
                            <Grid className='create create2'>
                                <Grid.Column width={3}>
                                    <label className="necessary">강사정보</label>
                                </Grid.Column>
                                <Grid.Column width={13}>
                                    <Button icon className='left post delete'>강사등록</Button>
                                </Grid.Column>
                            </Grid>
                            {/*등록된 강사 목록*/}
                            <RegisteredTeacherList/>

                        </Form.Field>

                        <Form.Field>
                            <label className="necessary">교육자료</label>
                            <Radio
                                label={'영상 업로드'}
                                className='base'
                                name='learning-file'
                                value='val01'
                                defaultChecked
                                onChange={this.onChangeLearningMaterials}
                                checked={this.state.learningMaterials === 'val01'}
                            />
                            <Radio
                                label={'제작영상 업로드'}
                                className='base'
                                name='learning-file'
                                value='val02'
                                onChange={this.onChangeLearningMaterials}
                                checked={this.state.learningMaterials === 'val02'}

                            />
                            <Radio
                                label={'영상링크'}
                                className='base'
                                name='learning-file'
                                value='val03'
                                onChange={this.onChangeLearningMaterials}
                                checked={this.state.learningMaterials === 'val03'}
                            />

                            { learningMaterials === 'val03' ?
                                <div className="ui form">
                                    <div className="ui right-top-count input write">
                                        <Input type="text" value="https://mysuni.sk.com"/>
                                        <Icon className="clear link"/>
                                    </div>
                                </div>
                                :
                                <>
                                    <div className="ui form">
                                        <div className="ui input file write">
                                            <input type="text" placeholder="영상을 업로드해주세요." value="Education UX/UX class_1.avi" readOnly />
                                            <Icon className="clear link"/>
                                            <label htmlFor="hidden-new-file" className="ui button">파일찾기</label>
                                            <input type="file" id="hidden-new-file" />
                                        </div>
                                    </div>
                                    <div className="info-text">
                                        <Icon className="info16"><span className="blind">information</span></Icon>
                                        교육자료로 제공될 파일을 동록하실 수 있습니다. / 최대 000 Byte 용량의 파일을 등록하실 수 있습니다. / 참고자료는 다수의 파일을 등록할 수 있습니다.
                                    </div>
                                </>
                            }
                        </Form.Field>

                        <Form.Field>
                            <label>참고자료</label>

                            {/*파일박스 Depot*/}
                            <div className="round-wrap2">
                                <div className="top text">
                                    <ul>
                                        <li>
                                            <span>Education UX/UI class_1.pptx</span>
                                            <button><Icon className="clear"/></button>
                                        </li>
                                        <li>
                                            <span>Education UX/UI class_1.pptx</span>
                                            <button><Icon className="clear"/></button>
                                        </li>
                                        <li>
                                            <span>Education UX/UI class_1.pptx</span>
                                            <button><Icon className="clear"/></button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bottom">
                                        <span className="text1">
                                            <Icon className='info16'>
                                                <span className="blind">information</span>
                                            </Icon>
                                            DOC,PDF,EXL 파일을 등록하실 수 있습니다. / 최대 000 Byte 용량의 파일을 등록하실 수 있습니다. / 참고자료는 다수의 파일을 등록할 수 있습니다.
                                        </span>
                                    <div className="right-btn">
                                        <div className="ui input file2">
                                            <label htmlFor="hidden-new-file2" className="ui button">파일찾기</label>
                                            <input type="file" id="hidden-new-file2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form.Field>

                        <Form.Field>
                            <label className="necessary">학습카드 공개여부</label>
                            <Radio
                                label={'공개'}
                                className={'base'}
                                name={'public-learning'}
                                checked
                            />
                            <Radio
                                label={'비공개'}
                                className={'base'}
                                name={'public-learning'}/>
                        </Form.Field>

                        <ButtonGroup/>
                    </Form>
                </div>
            </Segment>
        )
    }
}


export default ContentsArea
