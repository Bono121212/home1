import React, {Component, createRef} from 'react'

class TitleArea extends Component {
    contextRef = createRef()

    render() {
        return (
            <div className="add-personal-learning">
                <div className="add-personal-learning-wrap">
                    <div className="apl-tit">개인학습</div>
                    <div className="apl-notice">
                        구성원이 입력한 개인학습 정보에 대해 확인하실 수 있습니다.<br/>입력된 내용을 잘 확인해주세요.
                    </div>
                </div>
            </div>
        )
    }
}

export default TitleArea
