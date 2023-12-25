import React, {Component} from 'react'
import { Radio } from 'semantic-ui-react'

class CheckRadio2 extends Component {
    state = {value: 'typeShow'}

    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <>
                <Radio
                    label='표시'
                    name='typeSee'
                    value='typeShow'
                    checked={this.state.value === 'typeShow'}
                    onChange={this.handleChange}
                />
                <Radio
                    label='표시하지 않음'
                    name='typeSee'
                    value='typeNoshow'
                    checked={this.state.value === 'typeNoshow'}
                    onChange={this.handleChange}
                />
            </>
        )
    }
}


export default CheckRadio2
