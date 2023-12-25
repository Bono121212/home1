import React, {Component} from 'react'
import { List, Radio } from 'semantic-ui-react'

class SelectRadio02 extends Component {
    state = {}

    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <List>
                <List.Item>
                    <Radio
                        className='base'
                        label='객관식1'
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
                        label='객관식2'
                        name='radioGroup'
                        value='radio02'
                        checked={this.state.value === 'radio02'}
                        onChange={this.handleChange}
                    />
                </List.Item>
                <List.Item>
                    <Radio
                        className='base'
                        label='객관식3'
                        name='radioGroup'
                        value='radio03'
                        checked={this.state.value === 'radio03'}
                        onChange={this.handleChange}
                    />
                </List.Item>
                <List.Item>
                    <Radio
                        className='base'
                        label='객관식4'
                        name='radioGroup'
                        value='radio04'
                        checked={this.state.value === 'radio04'}
                        onChange={this.handleChange}
                    />
                </List.Item>
                <List.Item>
                    <Radio
                        className='base'
                        label='객관식5'
                        name='radioGroup'
                        value='radio05'
                        checked={this.state.value === 'radio05'}
                        onChange={this.handleChange}
                    />
                </List.Item>
            </List>
        )
    }
}


export default SelectRadio02
