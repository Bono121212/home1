import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'

class ActionButtons extends Component {
    render() {
        return (
            <>
                <div className="buttons">
                    <Button className="fix line">목록</Button>

                    {/*삭제버튼은 modify 버튼 클릭 후 항목 상세 진입시에만 노출*/}
                    <Button className="fix line">삭제</Button>
                    <Button className="fix line">임시저장</Button>
                    <Button className=" fix bg">승인요청</Button>
                </div>
            </>
        )
    }
}


export default ActionButtons
