import React, {Component} from 'react'
import { List, Radio } from 'semantic-ui-react'

class SelectRadio01 extends Component {
    state = {}

    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <List>
                <List.Item>
                    <Radio
                        className='base'
                        label='존 폰 노이만 (Jon von Neumann)'
                        name='radioGroup'
                        value='radio01'
                        checked={this.state.value === 'radio01'}
                        onChange={this.handleChange}
                        defaultChecked
                    />
                </List.Item>
                <List.Item>
                    <Radio
                        className='base'
                        label='허버트 사이먼 (Herbert Simon)'
                        name='radioGroup'
                        value='radio02'
                        checked={this.state.value === 'radio02'}
                        onChange={this.handleChange}
                    />
                </List.Item>
                <List.Item>
                    <Radio
                        className='base'
                        label='앨런 튜링 (Alan Turing)'
                        name='radioGroup'
                        value='radio03'
                        checked={this.state.value === 'radio03'}
                        onChange={this.handleChange}
                    />
                </List.Item>
                <List.Item>
                    <Radio
                        className='base'
                        label='존 매카시 (John McCarthy)'
                        name='radioGroup'
                        value='radio04'
                        checked={this.state.value === 'radio04'}
                        onChange={this.handleChange}
                    />
                </List.Item>
            </List>
        )
    }
}


export default SelectRadio01
