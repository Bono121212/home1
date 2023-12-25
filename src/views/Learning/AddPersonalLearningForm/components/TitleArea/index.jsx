import React, {Component} from 'react'

class TitleArea extends Component {
    render() {
        return (
            <div className="add-personal-learning">
                <div className="add-personal-learning-wrap">
                    <div className="apl-tit">Add Personal Learning</div>
                    <div className="apl-notice">
                        ‘mySUNI / 각 사 교육’ 외 개인적으로 학습하였을 경우,<br/>
                        승인권자의 확인 후 학습시간으로 등록 할 수 있습니다.
                    </div>
                </div>
            </div>
        )
    }
}


export default TitleArea
