import React, {Component} from 'react';
import {Icon} from "semantic-ui-react";
import classNames from "classnames";
import { Link } from 'react-router-dom';

class CourseList02 extends Component {

    state = {
        active: false
    }

    onClickToggle = () => this.setState({active: !this.state.active})

    render() {

        const { active } = this.state;

        return (

            <div className={classNames('course-box', 'type2', {'open': active})}>
                <div className='bar'>
                    <div className='tit'>
                        <span className='ellipsis'>2. 시장경제의 주인공 포노 사피엔스</span>
                    </div>
                    <div className='num'><span>01개 강의 구성</span></div>
                    {/*<div className='toggle-btn'>*/}
                        {/*<Button icon className='img-icon fn-more-toggle' onClick={this.onClickToggle}>*/}
                            {/*<Icon className={ active ? 'arrow-up s24' : 'arrow-down s24' }/>*/}
                            {/*<span className='blind'>{ active ? 'close' : 'open'}</span>*/}
                        {/*</Button>*/}
                    {/*</div>*/}
                </div>
                <div className='detail'>
                    <ul className='step1'>
                        <li>
                            <div className='tit'>
                                <span className='ellipsis'>2.1 Digital Platform 인류 삶의 근간이 되다.</span>
                            </div>
                            <div className='right'>
                                <span>Video</span>
                                <span>2h 50m</span>
                                <Link className='btn-play black'>
                                    <span className='text'>학습하기</span>
                                    <Icon className='play-black24'/>
                                </Link>
                            </div>
                        </li>
                        <li className='step2'>
                            <div className='tit trs'>
                                <Icon className='icon-report24'/>
                                <span>Report</span>
                            </div>
                            <div className='right'>
                                <Link className='btn-play black'>
                                    <span className='text'>과제제출</span>
                                    <Icon className='play-black24'/>
                                </Link>
                            </div>
                        </li>
                        <li className='step2'>
                            <div className='tit trs'>
                                <Icon className='icon-test24'/>
                                <span>Test</span>
                            </div>
                            <div className='right'>
                                <Link className='btn-play black'>
                                    <span className='text'>Test</span>
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

export default CourseList02;