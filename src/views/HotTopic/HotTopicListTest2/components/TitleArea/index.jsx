import React, { Component } from 'react'
import { Label, Icon } from 'semantic-ui-react'
import classNames from 'classnames';


export default class TitleArea extends Component {
    state = { likeChecked : false }

    likeCheck = () => {
        this.setState({ likeChecked : !this.state.likeChecked })
    }

    render() {
        const { likeChecked } = this.state;

        return(
            <div className="topic-title">
                <div className="page-title-wrap">
                    <div className=" txt-box">
                        <div className="page-tit">신규사업 준비에 도움될 만한 과정모음</div>
                        <div className="sub-txt">기존의 전통적 신사업 전략과는 다른 신사업 전략인 [린스타트업] 프로세스의 전반적인 개념에 대해 살펴봅니다.</div>
                    </div>
                    <div className="icon-area icon-box">
                        <div className="f-left">
                            <Label className="onlytext"><Icon className="coreses"/><span>총 <strong>11개</strong> 학습카드</span></Label>
                            <Label className="onlytext"><Icon className='time2'/><span>84h 30m</span></Label>
                        </div>
                        <div className="f-rgiht">
                            <Label as="button" className={classNames('onlytext', { 'on' : likeChecked })} onClick={this.likeCheck}><Icon className="like2"/><span>4,289</span></Label>
                            <Label as="button" className="onlytext"><Icon className="share-comm line"/><span>공유하기</span></Label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}