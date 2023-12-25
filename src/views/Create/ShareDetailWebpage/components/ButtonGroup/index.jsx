import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'

class ActionButtons extends Component {
    render() {
        return (
            <>
                {/* List 영역에서 저장 상태인 항목 view page 진입 시 */}
                <div className="buttons editor">
                    <Button className="fix line">Delete</Button>
                    <Button className="fix line">List</Button>
                    <Button className="fix line">Modify</Button>
                    <Button className="fix bg">Shared</Button>
                </div>

                <br/>
                {/* // List 영역에서 저장 상태인 항목 view page 진입 시 */}
                {/* List 영역에서 승인 대기상태인 항목 view page 진입 시 */}

                <div className="buttons editor">
                    <Button className="fix bg">List</Button>
                </div>

                <br/>
                {/* // List 영역에서 승인 대기상태인 항목 view page 진입 시 */}
                {/* List 영역에서 승인 완료 상태 항목 view page 진입 시 */}
                <div className="buttons editor">
                    <Button className="fix line">List</Button>
                    <Button className="fix bg">Modify</Button>
                </div>

            </>
        )
    }
}


export default ActionButtons
