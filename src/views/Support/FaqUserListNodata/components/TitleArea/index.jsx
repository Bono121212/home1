import React, {Component, createRef} from 'react'
import {
    Icon
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
                            <div className="title">FAQ</div>
                            <div className="text">mySUNI에 대한 자주 찾는 질문들을 확인하실 수 있습니다.</div>
                        </div>
                    </div>

                    {/* tip-area가 아닌 tit-right-area로 변경 */ }
                    <div className="tit-right-area">
                        <div className="inner">
                            <span>고객센터</span>
                            <div>
                                <p>평일 09:00 ~ 18:00 (주말 &amp; 공휴일 제외)</p>
                                <span><Icon className='support-tel'/>02)6323-9002</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default TitleArea
