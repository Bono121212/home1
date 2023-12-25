import React, {Component} from 'react';
import {Icon} from "semantic-ui-react";
import classNames from 'classnames';
import { Link } from 'react-router-dom';

class CourseList01 extends Component {

    state = {
        active : false
    }

    onClickToggle = () => this.setState({ active : !this.state.active })

    render() {

        const { active } = this.state;

        return (
            <div className={classNames('course-box', 'type2', { 'open' : active })}>
                <div className='bar'>
                    <div className='tit'>
                        <span className='ellipsis'>1. Digital Transformation의 본질 : 신인류의 등장</span>
                    </div>
                    <div className='num'><span>04개 강의 구성</span></div>
                    
                    {/*<div className='toggle-btn' onClick={this.onClickToggle}>*/}
                        {/*<Button icon className='img-icon fn-more-toggle'>*/}
                            {/*<Icon className={ active ? 'arrow-up s24' : 'arrow-down s24'}/>*/}
                            {/*<span className='blind'>{ active ? 'close' : 'open' }</span>*/}
                        {/*</Button>*/}
                    {/*</div>*/}
                </div>
                <div className='detail'>
                    <ul className='step1'>
                        <li>
                            <div className='tit'>
                                <span className='ellipsis'>1.1. Digital Platform 인류 삶의 근간이 되다.</span>
                            </div>
                            <div className='right'>
                                <span>Video</span>
                                <span>13m</span>
                                <Link className='btn-play orange'>
                                    <span className='text'>학습중(23%)</span>
                                    <span className='pie-wrapper progress-23'>
                                        <span className='pie'>
                                            <span className='left-side'></span>
                                            <span className='right-side'></span>
                                        </span>
                                        <div className='shadow'></div>
                                    </span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className='tit'>
                                <span className='ellipsis'>1.2. Digital Platform 인류 삶의 근간이 되다. Digital Platform 인류 삶의 근간이 되다.</span>
                            </div>
                            <div className='right'>
                                <span>Video</span>
                                <span>13m</span>
                                <Link className='btn-play orange'>
                                    <span className='text'>학습중(90%)</span>
                                    <span className='pie-wrapper progress-90'>
                                            <span className='pie'>
                                                <span className='left-side'></span>
                                                <span className='right-side'></span>
                                            </span>
                                            <div className='shadow'></div>
                                        </span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className='tit'>
                                <span className='ellipsis'>1.3. Digital Transformation이 만든 소비자 권력시대</span>
                            </div>
                            <div className='right'>
                                <span>Video</span>
                                <span>13m</span>
                                <Link className='btn-play orange'>
                                    <span className='text'>학습중(5%)</span>
                                    <span className='pie-wrapper progress-5'>
                                            <span className='pie'>
                                                <span className='left-side'></span>
                                                <span className='right-side'></span>
                                            </span>
                                            <div className='shadow'></div>
                                        </span>
                                </Link>
                            </div>
                        </li>
                        <li className='step2'>
                            <div className='tit trs'>
                                <Icon className='icon-test24'/>
                                <span>Test</span>
                            </div>
                            <div className='right'>
                                <Link to='#' className='btn-play black'>
                                    <span className='text'>Test</span>
                                    <Icon className='play-black24'/>
                                </Link>
                            </div>
                        </li>
                        <li className='step2'>
                            <div className='tit trs'>
                                <Icon className='icon-survey24'/>
                                <span>Survey</span>
                            </div>
                            <div className='right'>
                                <Link to='#' className='btn-play black'>
                                    <span className='text'>설문하기</span>
                                    <Icon className='play-black24'/>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className='tit'>
                                <span className='ellipsis'>1.4. 신인류,Digital Platform에 살고 팬덤으로 소비한다</span>
                            </div>
                            <div className='right'>
                                <span>Video</span>
                                <span>13m</span>
                                <Link className='btn-play black'>
                                    <span className='text'>학습하기</span>
                                    <Icon className='play-black24'/>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default CourseList01;