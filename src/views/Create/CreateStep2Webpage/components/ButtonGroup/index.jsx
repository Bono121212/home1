import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'

class ActionButtons extends Component {
    render() {
        return (
            <>
                {/* Create 버튼 클릭으로 상세 진입 시 */}
                <div className="buttons">
                    <Button className="fix line">Cancel</Button>
                    <Button className="fix line">Save</Button>
                    <Button className="fix line">Previous</Button>
                    <Button className="fix bg">Shared</Button>
                </div>
                {/* Create 버튼 클릭으로 상세 진입 시 */}
                {/* List 영역에서 저장 상태인 View page > Modify 버튼 클릭 후 항목 상세 진입 시 */}

                <div className="buttons">
                    <Button className="fix line">Delete</Button>
                    <Button className="fix line">Cancel</Button>
                    <Button className="fix line">Save</Button>
                    <Button className="fix line">Previous</Button>
                    <Button className=" fix bg">Next</Button>
                </div>

                {/* // List 영역에서 저장 상태인 View page > Modify 버튼 클릭 후 항목 상세 진입 시 */}
            </>
        )
    }
}


export default ActionButtons
