import React, {Component, createRef} from 'react'

class TitleArea extends Component {
    contextRef = createRef()

    render() {
        return (
            <div className="add-personal-learning">
                <div className="add-personal-learning-wrap">
                    <div className="apl-tit">교육 승인 요청</div>
                    <div className="apl-notice">
                        구성원이 수강신청한 과정에 대해 승인/반려 처리 할 수 있습니다.
                    </div>
                </div>
            </div>
        )
    }
}

export default TitleArea
