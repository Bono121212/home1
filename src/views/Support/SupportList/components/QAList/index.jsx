import React from 'react'
import {Segment, Label} from 'semantic-ui-react'

const QAList = () => (
    <div>
        <Segment>
            <Label basic color='blue'>학습문의 </Label>
            테스트를 다시 하고 싶습니다. 방법이 있을까요?
            <div className="fl-right">
                <span>2020.01.15</span> | <span>답변 대기</span>
            </div>
        </Segment>
        <Segment>
            <Label basic color='blue'>학습문의 </Label>
            테스트를 다시 하고 싶습니다. 방법이 있을까요?
            <div className="fl-right">
                <span>2020.01.15</span> | <span>답변 완료</span>
            </div>
        </Segment>
    </div>

)

export default QAList
