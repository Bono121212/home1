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
                        <div className="sub-txt" style={{whiteSpace: "pre-wrap"}}>
                            <strong>일을 잘 한다는 것</strong>은 무엇일까요? <strong>일잘러들만의 깨알 같은 영업 비밀(?)을 담은 콘텐츠</strong>를 엄선했습니다.
                        </div>
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