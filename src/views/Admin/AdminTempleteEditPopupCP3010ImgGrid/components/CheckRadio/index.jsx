import React, {Component, createRef} from 'react'
import { Radio } from 'semantic-ui-react'

class CheckRadio extends Component {
    state = {value: 'typeSlide'}

    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <>
                <Radio
                    label='슬라이드형'
                    name='typeImg'
                    value='typeSlide'
                    checked={this.state.value === 'typeSlide'}
                    onChange={this.handleChange}
                />
                <Radio
                    label='그리드'
                    name='typeImg'
                    value='typeGrid'
                    checked={this.state.value === 'typeGrid'}
                    onChange={this.handleChange}
                />
            </>
        )
    }
}


export default CheckRadio
