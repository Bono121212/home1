import React, {Component} from 'react'
import { Icon, Button } from 'semantic-ui-react'

class ActionButtons extends Component {
    render() {
        return (
            <div className="actions top">
                <Button icon className='left post delete'>
                    <Icon className='del24'/>Delete
                </Button>

                {/*0514 엑셀다운로드 추가*/}
                <span className="excel-wrap">
                    <Button icon className='left post excel-down'>
                        <Icon className='excel-down'/> 엑셀 다운로드
                    </Button>
                </span>
            </div>
        )
    }
}

export default ActionButtons
