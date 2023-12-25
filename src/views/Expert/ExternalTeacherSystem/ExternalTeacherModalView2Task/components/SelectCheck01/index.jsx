import React, {Component} from 'react'
import { Checkbox, List } from 'semantic-ui-react'

class SelectCheck01 extends Component {
    state = {}

    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
                <List>
                    <List.Item>
                        <Checkbox className='base' label='멧돼지가 덤벼들어도 두려워하지 않게된다'/>
                    </List.Item>
                    <List.Item>
                        <Checkbox className='base' label='만족 지연의 능력이 약화된다'/>
                    </List.Item>
                    <List.Item>
                        <Checkbox className='base' label='숫자를 거꾸로 세는 능력이 저하된다'/>
                    </List.Item>
                    <List.Item>
                        <Checkbox className='base' label='사물을 분류하고 개념화하는 능력이 저하된다'/>
                    </List.Item>
                </List>
        )
    }
}


export default SelectCheck01
