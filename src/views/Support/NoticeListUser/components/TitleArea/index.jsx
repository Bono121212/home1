import React, {Component, createRef} from 'react'
import {
    Label, Icon
} from 'semantic-ui-react'

class TitleArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'Comment'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        // const {activeItem} = this.state
        return (
            <div className="main-info-area">
                <div className="support-info">
                    <div className="title-area">
                        <div className="line-wrap">
                            <div className="title">Support</div>
                            <div className="text">mySUNI에 대한 궁금증을 풀어드립니다.<br/>고객센터<span
                                className="dash"/><Icon className='supporttel16'/><span className="blind">support tel</span>02-6323-9002
                            </div>
                        </div>
                    </div>
                    <div className="tip-area">
                        <Label className='onlytext'>
                            <Icon className='tip16'/><span>유용한 도움말</span>
                        </Label>
                        <div className="q-list">
                            <a href='/support/faq-view-user' target="_blank"><span className="ellipsis">동영상 재생이 잘 되지 않습니다. 어떡해야 하나요? Text영역 510px 이상일 경우말줄임표시</span></a>
                            <a href='/support/faq-view-user' target="_blank"><span className="ellipsis">결제 환불 방법을 알려주세요.</span></a>
                            <a href='/support/faq-view-user' target="_blank"><span className="ellipsis">동영상 재생이 잘 되지 않습니다. 어떡해야 하나요? Text영역 510px 이상일 경우말줄임표시</span></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default TitleArea
