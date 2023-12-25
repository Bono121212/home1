import React, {Component} from 'react'
import {
    Form, Icon, Radio
} from 'semantic-ui-react'
import classNames from "classnames";
import { Link } from 'react-router-dom';

// const selectOptions01 = [
//     {key: 'AI', value: 'AI', text: 'AI'},
//     {key: 'DT', value: 'DT', text: 'DT'},
//     {key: '행복', value: '행복', text: '행복'},
//     {key: 'SV', value: 'SV', text: 'SV'},
//     {key: '혁신디자인', value: '혁신디자인', text: '혁신디자인'},
//     {key: 'Global', value: 'Global', text: 'Global'},
//     {key: 'Leadership', value: 'Leadership', text: 'Leadership'},
//     {key: 'Management', value: 'Management', text: 'Management'},
// ];

class EducationalMaterialsRadio extends Component {

    state = {value: 'value01', focus: false, write : ''};


    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <Form.Field>
                <label className="necessary">교육자료</label>
                <Radio
                    className='base'
                    label='영상 가져오기'
                    value='value01'
                    checked={this.state.value === 'value01'}
                    onChange={this.handleChange}
                />
                <Radio
                    className='base'
                    label='제작영상 가져오기'
                    value='value02'
                    checked={this.state.value === 'value02'}
                    onChange={this.handleChange}
                />
                <Radio
                    className='base'
                    label='영상링크'
                    value='value03'
                    checked={this.state.value === 'value03'}
                    onChange={this.handleChange}
                />

                <div className="ui form">
                    <div className={classNames('ui input file', { focus: this.state.focus, write: this.state.write })}>
                        <input type="text" readOnly placeholder="영상을 업로드해주세요."
                               value={this.state.write}
                               onClick={() => this.setState({ focus: true })} onBlur={() => this.setState({ focus: false})}
                               onChange={(e) => this.setState({ write: e.target.value })}
                        />
                        <Icon className="clear link" onClick={() => this.setState({ write: '' })} />
                        <label htmlFor="hidden-new-file" className="ui button">파일찾기</label>
                        <input type="file" id="hidden-new-file"/>
                    </div>
                    <div className="info-text"><Icon className='info16'/>
                        <span className="blind">infomation</span>
                        교육자료로 제공될 파일을 등록하실 수 있습니다. / 최대 10Mbyte 용량의 파일을 등록하실 수 있습니다.
                    </div>
                </div>

                {/*  내부 영상 업로드 */}

                <div className="round-wrap file-drop-wrap">
                    {/*<div className="filter"><span>폴더</span>*/}
                    {/*    <Select placeholder='분류를 선택해주세요' className='ui small-border dropdown'*/}
                    {/*            defaultValue={selectOptions01[0].value}*/}
                    {/*            options={selectOptions01}/>*/}
                    {/*</div>*/}
                    <div className="file-drop" id="drop">
                        <p className="">
                            <Icon className="upload"/>여기로 파일을 올려주세요.
                        </p>
                        <div className="thumbnails" id="thumbnails">
                            <div className="thumb">
                                <span>세션명</span>
                                <input type="text" name="sessionNames" value="" placeholder="세션명"/>
                                <p className="file_name"><span>파일명</span> reivew.mp4 </p>
                                <Link className="close" data-idx="0"><span className='blind'>삭제</span></Link>
                                <progress value="0" max="100"/>
                            </div>
                        </div>
                        <div className="bottom">
                            <input type="button" className="btn btn-default" id="btnSubmit"
                                   value="업로드"/>
                        </div>
                    </div>
                </div>

            </Form.Field>
        )
    }
}


export default EducationalMaterialsRadio
