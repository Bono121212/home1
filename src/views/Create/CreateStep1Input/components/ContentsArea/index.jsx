import React, {Component} from 'react'
import {
    Segment, Form, Icon, Radio, Select, Step, Image, Checkbox, Button
} from 'semantic-ui-react'

import ButtonGroup from "../ButtonGroup";
import MainCategoryModal from "../MainCategoryModal";
import IconSelect from "../IconSelect";
import SubCategoryChoiceModal from "../SubCategoryChoiceModal";
import ClearInputBox from "../ClearInputBox";
import { Link } from 'react-router-dom';

const selectOptions01 = [
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

class ContentsArea extends Component {
    state = {}

    handleChange = (e, {value}) => this.setState({value})

    render() {
        // const {activeIndex} = this.state

        return (
            <Segment className='full'>
                <div className="apl-form-wrap create">
                    <Form>
                        <div className="section-tit">
                            <span className="text1">기본정보</span>
                            <div className="right-step">
                                <Step.Group className='number-step'>
                                    <Step active>
                                        <Step.Content>
                                            <span className="number"><span className="blind">1</span></span>
                                            <Step.Title>기본정보 및 노출정보</Step.Title>
                                        </Step.Content>
                                    </Step>
                                    <Step>
                                        <Step.Content>
                                            <span className="number"><span className="blind">2</span></span>
                                            <Step.Title>교육정보 및 부가정보</Step.Title>
                                        </Step.Content>
                                    </Step>
                                </Step.Group>
                            </div>
                        </div>

                        <Form.Field>
                            <label className="necessary">강좌명</label>
                            <ClearInputBox/>
                        </Form.Field>

                        <Form.Field>
                            <label className="necessary">채널선택</label>
                            <div>
                                <div className="table-css type5">
                                    <div className="row">
                                        <div className="cell v-middle">
                                            <span className="text1">메인 채널</span>
                                            <MainCategoryModal/>
                                        </div>
                                        <div className="cell v-middle">
                                            <span className="text1">메인채널을 선택해주세요.</span>
                                            {/*
                                            <span className="texr2">AI > AI Fundamental</span>
                                            */}
                                        </div>
                                    </div>
                                </div>
                                <div className="table-css type5">
                                    <div className="row">
                                        <div className="cell v-middle">
                                            <span className="text1">서브 채널</span>
                                            <SubCategoryChoiceModal/>
                                        </div>
                                        <div className="cell v-middle">
                                            <span className="text1">서브채널을 선택해주세요.</span>
                                            {/*
                                            <span className="text2">AI > AI Biz. Implemetation, AI Tech Essential, Computer Vison AI</span>
                                            <span className="text2">DT > DT Basics, Data Analytics, Data Analytics, Cloud Developing, Cloud Engineering</span>
                                            <span className="text2">Global Collage > 국제정세, Global 사업개발전문가, 지역 전문가</span>
                                            <span className="text2">Management > HR , 전략, Biz. Development</span>
                                            */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form.Field>

                        <Form.Field>
                            <label className="necessary">교육형태</label>
                            <div className="select-box">
                                <Select placeholder='선택해주세요' className='dropdown selection'
                                        options={selectOptions01}/>
                            </div>
                        </Form.Field>

                        <hr className="dividing"/>
                        <div className="section-tit">
                            <span className="text1">노출 정보</span>
                        </div>

                        {/*<Form.Field>*/}
                        {/*    <label className="necessary">아이콘 선택</label>*/}
                        {/*    <div className="select-box">*/}
                        {/*        <Select placeholder='선택해주세요' className='dropdown selection'*/}
                        {/*                options={selectOptions01}/>*/}
                        {/*    </div>*/}
                        {/*</Form.Field>*/}

                        <Form.Field>
                            <label className="necessary">아이콘 선택</label>
                            <IconSelect/>

                            {/*<div className="round-wrap filebox-icon">*/}
                            {/*    <div className="filter">*/}
                            {/*        <Select placeholder='분류를 선택해주세요' className='ui small-border dropdown'*/}
                            {/*                defaultValue={selectOptions01[0].value}*/}
                            {/*                options={selectOptions01}/>*/}
                            {/*    </div>*/}


                            {/*    <div className="h220">*/}
                            {/*        <div className="depot-image-box">*/}
                            {/*            <div className="ui attached segment">*/}
                            {/*                <header><h5>sk Icon</h5><span className="fl-right"></span></header>*/}
                            {/*                <div className="preview-list">*/}
                            {/*                    <div role="list" className="ui horizontal list">*/}
                            {/*                        <a role="listitem"*/}
                            {/*                           className="item">*/}
                            {/*                            <div className="content">*/}
                            {/*                                <Image src='/images/all/thumb-card-60-px.jpg'*/}
                            {/*                                       className="ui image preview"*/}
                            {/*                                       width="60px" height="60px"/>*/}
                            {/*                            </div>*/}
                            {/*                        </Link>*/}
                            {/*                        <a role="listitem" className="item">*/}
                            {/*                            <div className="content">*/}
                            {/*                                <Image src='/images/all/thumb-card-60-px.jpg'*/}
                            {/*                                       className="ui image preview"*/}
                            {/*                                       width="80px" height="80px"/>*/}
                            {/*                                <i aria-hidden="true"*/}
                            {/*                                   className="teal check circle outline huge icon"></i>*/}
                            {/*                            </div>*/}
                            {/*                        </Link>*/}
                            {/*                        <a role="listitem" className="item">*/}
                            {/*                            <div className="content">*/}
                            {/*                                <Image src='/images/all/thumb-card-60-px.jpg'*/}
                            {/*                                       className="ui image preview"*/}
                            {/*                                       width="100px" height="100px"/>*/}
                            {/*                            </div>*/}
                            {/*                        </Link>*/}
                            {/*                        <a role="listitem" className="item">*/}
                            {/*                            <div className="content">*/}
                            {/*                                <Image src='/images/all/thumb-card-60-px.jpg'*/}
                            {/*                                       className="ui image preview"*/}
                            {/*                                       width="100px" height="100px"/>*/}
                            {/*                            </div>*/}
                            {/*                        </Link>*/}
                            {/*                        <a role="listitem" className="item">*/}
                            {/*                            <div className="content">*/}
                            {/*                                <Image src='/images/all/thumb-card-60-px.jpg'*/}
                            {/*                                       className="ui image preview"*/}
                            {/*                                       width="100px" height="100px"/>*/}
                            {/*                            </div>*/}
                            {/*                        </Link>*/}
                            {/*                        <a role="listitem" className="item">*/}
                            {/*                            <div className="content">*/}
                            {/*                                <Image src='/images/all/thumb-card-60-px.jpg'*/}
                            {/*                                       className="ui image preview"*/}
                            {/*                                       width="100px" height="100px"/>*/}
                            {/*                            </div>*/}
                            {/*                        </Link>*/}
                            {/*                        <Link role="listitem" className="item active">*/}
                            {/*                            <div className="content">*/}
                            {/*                                <Image src='/images/all/thumb-card-60-px.jpg'*/}
                            {/*                                       className="ui image preview"*/}
                            {/*                                       width="100px" height="100px"/>*/}
                            {/*                                <div className="ui checked fitted radio checkbox">*/}
                            {/*                                    <input*/}
                            {/*                                        className="hidden" readOnly="" tabIndex="0"*/}
                            {/*                                        type="radio"*/}
                            {/*                                        value="" checked=""/><label></label>*/}
                            {/*                                </div>*/}
                            {/*                            </div>*/}
                            {/*                        </Link>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}


                            <div className="round-wrap filebox-icon">
                                <div className="filter">
                                    <Select placeholder='선택하세요' className='ui small-border dropdown'
                                            // defaultValue={selectOptions01[0].value}
                                            options={selectOptions01}/>
                                </div>
                                <div className="h220">
                                    <div className="ui attached segment">
                                        <header><h5>SK Icon</h5></header>
                                        <div className="preview-list">
                                            <div role="list" className="ui horizontal list">
                                                <Link role="listitem" className="item active">
                                                    <div className="content">
                                                        <Image src='/images/all/thumb-card-60-px.jpg'
                                                               className="ui image preview"/>
                                                        <div className="ui checked fitted radio checkbox">
                                                            <input
                                                                className="hidden" readOnly="" tabIndex="0" type="radio"
                                                                value="" checked=""/><label></label>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link role="listitem" className="item active">
                                                    <div className="content">
                                                        <Image src='/images/all/thumb-card-60-px.jpg'
                                                               className="ui image preview"/>
                                                        <div className="ui fitted radio checkbox">
                                                            <input className="hidden"
                                                                   readOnly=""
                                                                   tabIndex="0"
                                                                   type="radio"
                                                                   value=""/>
                                                            <label></label>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link role="listitem" className="item active">
                                                    <div className="content">
                                                        <Image src='/images/all/thumb-card-60-px.jpg'
                                                               className="ui image preview"/>
                                                        <div className="ui fitted radio checkbox">
                                                            <input className="hidden"
                                                                   readOnly=""
                                                                   tabIndex="0"
                                                                   type="radio"
                                                                   value=""/>
                                                            <label></label>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link role="listitem" className="item active">
                                                    <div className="content">
                                                        <Image src='/images/all/thumb-card-60-px.jpg'
                                                               className="ui image preview"/>
                                                        <div className="ui fitted radio checkbox">
                                                            <input className="hidden"
                                                                   readOnly=""
                                                                   tabIndex="0"
                                                                   type="radio"
                                                                   value=""/>
                                                            <label></label>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link role="listitem" className="item active">
                                                    <div className="content">
                                                        <Image src='/images/all/thumb-card-60-px.jpg'
                                                               className="ui image preview"/>
                                                        <div className="ui fitted radio checkbox">
                                                            <input className="hidden"
                                                                   readOnly=""
                                                                   tabIndex="0"
                                                                   type="radio"
                                                                   value=""/>
                                                            <label></label>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link role="listitem" className="item active">
                                                    <div className="content">
                                                        <Image src='/images/all/thumb-card-60-px.jpg'
                                                               className="ui image preview"/>
                                                        <div className="ui fitted radio checkbox">
                                                            <input className="hidden"
                                                                   readOnly=""
                                                                   tabIndex="0"
                                                                   type="radio"
                                                                   value=""/>
                                                            <label></label>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link role="listitem" className="item active">
                                                    <div className="content">
                                                        <Image src='/images/all/thumb-card-60-px.jpg'
                                                               className="ui image preview"/>
                                                        <div className="ui fitted radio checkbox">
                                                            <input className="hidden"
                                                                   readOnly=""
                                                                   tabIndex="0"
                                                                   type="radio"
                                                                   value=""/>
                                                            <label></label>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link role="listitem" className="item active">
                                                    <div className="content">
                                                        <Image src='/images/all/thumb-card-60-px.jpg'
                                                               className="ui image preview"/>
                                                        <div className="ui fitted radio checkbox">
                                                            <input className="hidden"
                                                                   readOnly=""
                                                                   tabIndex="0"
                                                                   type="radio"
                                                                   value=""/>
                                                            <label></label>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link role="listitem" className="item active">
                                                    <div className="content">
                                                        <Image src='/images/all/thumb-card-60-px.jpg'
                                                               className="ui image preview"/>
                                                        <div className="ui fitted radio checkbox">
                                                            <input className="hidden"
                                                                   readOnly=""
                                                                   tabIndex="0"
                                                                   type="radio"
                                                                   value=""/>
                                                            <label></label>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link role="listitem" className="item active">
                                                    <div className="content">
                                                        <Image src='/images/all/thumb-card-60-px.jpg'
                                                               className="ui image preview"/>
                                                        <div className="ui fitted radio checkbox">
                                                            <input className="hidden"
                                                                   readOnly=""
                                                                   tabIndex="0"
                                                                   type="radio"
                                                                   value=""/>
                                                            <label></label>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link role="listitem" className="item active">
                                                    <div className="content">
                                                        <Image src='/images/all/thumb-card-60-px.jpg'
                                                               className="ui image preview"/>
                                                        <div className="ui fitted radio checkbox">
                                                            <input className="hidden"
                                                                   readOnly=""
                                                                   tabIndex="0"
                                                                   type="radio"
                                                                   value=""/>
                                                            <label></label>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link role="listitem" className="item active">
                                                    <div className="content">
                                                        <Image src='/images/all/thumb-card-60-px.jpg'
                                                               className="ui image preview"/>
                                                        <div className="ui fitted radio checkbox">
                                                            <input className="hidden"
                                                                   readOnly=""
                                                                   tabIndex="0"
                                                                   type="radio"
                                                                   value=""/>
                                                            <label></label>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link role="listitem" className="item active">
                                                    <div className="content">
                                                        <Image src='/images/all/thumb-card-60-px.jpg'
                                                               className="ui image preview"/>
                                                        <div className="ui fitted radio checkbox">
                                                            <input className="hidden"
                                                                   readOnly=""
                                                                   tabIndex="0"
                                                                   type="radio"
                                                                   value=""/>
                                                            <label></label>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="round-wrap">
                                <div className="filter">
                                    <Select placeholder='분류를 선택해주세요' className='ui small-border dropdown'
                                            defaultValue={selectOptions01[0].value}
                                            options={selectOptions01}/>
                                </div>
                                <div className="h220">
                                    <ul>
                                        <li>
                                            <Radio
                                                className='v-icon'
                                                label={
                                                    <label>
                                                        <Image src='/images/all/thumb-card-60-px.jpg'/>
                                                    </label>
                                                }
                                                name='icons'
                                                value='value01'
                                                checked={this.state.value === 'value01'}
                                                onChange={this.handleChange}
                                                defaultChecked
                                            />
                                        </li>
                                        <li>
                                            <Radio
                                                className='v-icon'
                                                label={
                                                    <label>
                                                        <Image src='/images/all/thumb-card-60-px.jpg'/>
                                                    </label>
                                                }
                                                name='icons'
                                                value='value02'
                                                checked={this.state.value === 'value02'}
                                                onChange={this.handleChange}
                                            />
                                        </li>
                                        <li>
                                            <Radio
                                                className='v-icon'
                                                label={
                                                    <label>
                                                        <Image src='/images/all/thumb-card-60-px.jpg'/>
                                                    </label>
                                                }
                                                name='icons'
                                                value='value03'
                                                checked={this.state.value === 'value03'}
                                                onChange={this.handleChange}
                                            />
                                        </li>
                                        <li>
                                            <Radio
                                                className='v-icon'
                                                label={
                                                    <label>
                                                        <Image src='/images/all/thumb-card-60-px.jpg'/>
                                                    </label>
                                                }
                                                name='icons'
                                                value='value04'
                                                checked={this.state.value === 'value04'}
                                                onChange={this.handleChange}
                                            />
                                        </li>
                                        <li>
                                            <Radio
                                                className='v-icon'
                                                label={
                                                    <label>
                                                        <Image src='/images/all/thumb-card-60-px.jpg'/>
                                                    </label>
                                                }
                                                name='icons'
                                                value='value05'
                                                checked={this.state.value === 'value05'}
                                                onChange={this.handleChange}
                                            />
                                        </li>
                                        <li>
                                            <Radio
                                                className='v-icon'
                                                label={
                                                    <label>
                                                        <Image src='/images/all/thumb-card-60-px.jpg'/>
                                                    </label>
                                                }
                                                name='icons'
                                                value='value06'
                                                checked={this.state.value === 'value06'}
                                                onChange={this.handleChange}
                                            />
                                        </li>
                                        <li>
                                            <Radio
                                                className='v-icon'
                                                label={
                                                    <label>
                                                        <Image src='/images/all/thumb-card-60-px.jpg'/>
                                                    </label>
                                                }
                                                name='icons'
                                                value='value07'
                                                checked={this.state.value === 'value07'}
                                                onChange={this.handleChange}
                                            />
                                        </li>
                                        <li>
                                            <Radio
                                                className='v-icon'
                                                label={
                                                    <label>
                                                        <Image src='/images/all/thumb-card-60-px.jpg'/>
                                                    </label>
                                                }
                                                name='icons'
                                                value='value08'
                                                checked={this.state.value === 'value08'}
                                                onChange={this.handleChange}
                                            />
                                        </li>
                                        <li>
                                            <Radio
                                                className='v-icon'
                                                label={
                                                    <label>
                                                        <Image src='/images/all/thumb-card-60-px.jpg'/>
                                                    </label>
                                                }
                                                name='icons'
                                                value='value09'
                                                checked={this.state.value === 'value09'}
                                                onChange={this.handleChange}
                                            />
                                        </li>
                                        <li>
                                            <Radio
                                                className='v-icon'
                                                label={
                                                    <label>
                                                        <Image src='/images/all/thumb-card-60-px.jpg'/>
                                                    </label>
                                                }
                                                name='icons'
                                                value='value10'
                                                checked={this.state.value === 'value10'}
                                                onChange={this.handleChange}
                                            />
                                        </li>
                                        <li>
                                            <Radio
                                                className='v-icon'
                                                label={
                                                    <label>
                                                        <Image src='/images/all/thumb-card-60-px.jpg'/>
                                                    </label>
                                                }
                                                name='icons'
                                                value='value11'
                                                checked={this.state.value === 'value11'}
                                                onChange={this.handleChange}
                                            />
                                        </li>
                                        <li>
                                            <Radio
                                                className='v-icon'
                                                label={
                                                    <label>
                                                        <Image src='/images/all/thumb-card-60-px.jpg'/>
                                                    </label>
                                                }
                                                name='icons'
                                                value='value12'
                                                checked={this.state.value === 'value12'}
                                                onChange={this.handleChange}
                                            />
                                        </li>
                                        <li>
                                            <Radio
                                                className='v-icon'
                                                label={
                                                    <label>
                                                        <Image src='/images/all/thumb-card-60-px.jpg'/>
                                                    </label>
                                                }
                                                name='icons'
                                                value='value13'
                                                checked={this.state.value === 'value13'}
                                                onChange={this.handleChange}
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="round-wrap2">
                                <div className="top img">
                                    {/* 직접등록후, 등록전에는 비어있으면됨 */}
                                    <Image src='/images/all/thumb-card-60-px.jpg'/>
                                    <Button><Icon className='clear'/><span className="blind">delete</span></Button>
                                    {/* // 직접등록후, 등록전에는 비어있으면됨 */}
                                </div>
                                <div className="bottom">
                                    <span className="text1">
                                        <Icon className='info16'/>
                                        <span className="blind">infomation</span>
                                        JPG, PNG 파일을 등록하실 수 있습니다. / 최대 000 Byte 용량의 파일을 등록하실 수 있습니다. / Icon의 경우 60x60px의 사이즈를 추천합니다.
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
                            <label className="necessary">관계사 공개 범위 설정</label>
                            <div className="round-wrap">
                                <div className="filter">
                                    <Checkbox className='black' label='전체'/>
                                </div>
                                <div className="h112">
                                    <ul>
                                        <li>
                                            <Checkbox className='base' label='관계사명' defaultChecked/>
                                        </li>
                                        <li>
                                            <Checkbox className='base' label='관계사명관계사명관계사명관계사명'/>
                                        </li>
                                        <li>
                                            <Checkbox className='base' label='관계사명'/>
                                        </li>
                                        <li>
                                            <Checkbox className='base' label='관계사명'/>
                                        </li>
                                        <li>
                                            <Checkbox className='base' label='관계사명' defaultChecked/>
                                        </li>
                                        <li>
                                            <Checkbox className='base' label='관계사명'/>
                                        </li>
                                        <li>
                                            <Checkbox className='base' label='관계사명'/>
                                        </li>
                                        <li>
                                            <Checkbox className='base' label='관계사명'/>
                                        </li>
                                        <li>
                                            <Checkbox className='base' label='관계사명' defaultChecked/>
                                        </li>
                                        <li>
                                            <Checkbox className='base' label='관계사명'/>
                                        </li>
                                        <li>
                                            <Checkbox className='base' label='관계사명' defaultChecked/>
                                        </li>
                                        <li>
                                            <Checkbox className='base' label='관계사명'/>
                                        </li>
                                        <li>
                                            <Checkbox className='base' label='관계사명'/>
                                        </li>
                                        <li>
                                            <Checkbox className='base' label='관계사명'/>
                                        </li>
                                        <li>
                                            <Checkbox className='base' label='관계사명' defaultChecked/>
                                        </li>
                                        <li>
                                            <Checkbox className='base' label='관계사명'/>
                                        </li>
                                        <li>
                                            <Checkbox className='base' label='관계사명' defaultChecked/>
                                        </li>
                                        <li>
                                            <Checkbox className='base' label='관계사명'/>
                                        </li>
                                        <li>
                                            <Checkbox className='base' label='관계사명'/>
                                        </li>
                                        <li>
                                            <Checkbox className='base' label='관계사명'/>
                                        </li>
                                        <li>
                                            <Checkbox className='base' label='관계사명' defaultChecked/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Form.Field>

                        <Form.Field>
                            <label>Tag 정보 </label>
                            <div className="ui h48 input">
                                <input type="text" name=""
                                       placeholder="Tag와 Tag는 쉼표(“,”)로 구분하며, 최대 10개까지 입력하실 수 있습니다."/>
                            </div>
                        </Form.Field>

                        <ButtonGroup/>
                    </Form>
                </div>
            </Segment>
        )
    }
}


export default ContentsArea
