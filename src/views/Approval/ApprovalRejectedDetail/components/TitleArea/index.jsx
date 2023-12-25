import React, {Component, createRef} from 'react'

class TitleArea extends Component {
    contextRef = createRef()

    render() {
        return (
            <div className="add-personal-learning">
                <div className="add-personal-learning-wrap">
                    <div className="apl-tit">교육 승인 결과</div>
                    <div className="apl-notice">
                        요청된 결제에 대해 처리된 결과를 확인하실 수 있습니다.
                    </div>
                </div>
            </div>
        )
    }
}

export default TitleArea
