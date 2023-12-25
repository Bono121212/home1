import React, {Component} from 'react'
import { Checkbox, List } from 'semantic-ui-react'

class SelectCheck01 extends Component {
    state = {}

    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
                <List>
                    <List.Item>
                        <Checkbox className='base' label='존 폰 노이만 (Jon von Neumann)'/>
                    </List.Item>
                    <List.Item>
                        <Checkbox className='base' label='허버트 사이먼 (Herbert Simon)'/>
                    </List.Item>
                    <List.Item>
                        <Checkbox className='base' label='앨런 튜링 (Alan Turing)'/>
                    </List.Item>
                    <List.Item>
                        <Checkbox className='base' label='존 매카시 (John McCarthy)'/>
                    </List.Item>
                </List>
        )
    }
}


export default SelectCheck01
