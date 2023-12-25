import React, {Component} from 'react'
import { Icon, Button } from 'semantic-ui-react'

class ActionButtons extends Component {
    render() {
        return (
            <div className="actions top">
                <Button icon className='left post return'>
                    <Icon name='return'/> 반려
                </Button>
                <Button icon className='left post approval'>
                    <Icon name='approval'/> 승인
                </Button>

                <span className="excel-wrap">
                    <Button icon className='left post excel-down'>
                        <Icon name='excel-down'/> 엑셀 다운로드
                    </Button>
                </span>
            </div>
        )
    }
}

export default ActionButtons
