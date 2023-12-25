import React, {Component, createRef} from 'react'
// import {
//     Image, Label, Icon, Rating
// } from 'semantic-ui-react'

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
                            <div className="title">문의 관리</div>
                            <div className="text">문의에 대한 답변을 등록하실 수 있습니다.</div>
                        </div>
                    </div>

                    {/* tip-area가 아닌 tit-right-area로 변경 */ }
                    <div className="tit-right-area">
                    </div>
                </div>
            </div>
        )
    }
}


export default TitleArea
