import React, {Component} from 'react'
import { Radio } from 'semantic-ui-react'

class RectIcon extends Component {
    state = {value: 'radio01'};

    handleChange = (e, {value}) => this.setState({value});

    render() {
        return (
            <ul className="college-list">
                <li>
                    <Radio
                        className='rect-icon'
                        label='AI'
                        name='radioGroup'
                        value='radio01'
                        checked={this.state.value === 'radio01'}
                        onChange={this.handleChange}
                    />
                </li>
                <li>
                    <Radio
                        className='rect-icon'
                        label='DT'
                        name='radioGroup'
                        value='radio02'
                        checked={this.state.value === 'radio02'}
                        onChange={this.handleChange}
                    />
                </li>
                <li>
                    <Radio
                        className='rect-icon'
                        label='행복'
                        name='radioGroup'
                        value='radio03'
                        checked={this.state.value === 'radio03'}
                        onChange={this.handleChange}
                    />
                </li>
                <li>
                    <Radio
                        className='rect-icon'
                        label='SV'
                        name='radioGroup'
                        value='radio04'
                        checked={this.state.value === 'radio04'}
                        onChange={this.handleChange}
                    />
                </li>
                <li>
                    <Radio
                        className='rect-icon'
                        label='혁신디자인'
                        name='radioGroup'
                        value='radio05'
                        checked={this.state.value === 'radio05'}
                        onChange={this.handleChange}
                    />
                </li>
                <li>
                    <Radio
                        className='rect-icon'
                        label='Global'
                        name='radioGroup'
                        value='radio06'
                        checked={this.state.value === 'radio06'}
                        onChange={this.handleChange}
                    />
                </li>
                <li>
                    <Radio
                        className='rect-icon'
                        label='Leadership'
                        name='radioGroup'
                        value='radio07'
                        checked={this.state.value === 'radio07'}
                        onChange={this.handleChange}
                    />
                </li>
                <li>
                    <Radio
                        className='rect-icon'
                        label='Management'
                        name='radioGroup'
                        value='radio08'
                        checked={this.state.value === 'radio08'}
                        onChange={this.handleChange}
                    />
                </li>
            </ul>
        )
    }
}


export default RectIcon
