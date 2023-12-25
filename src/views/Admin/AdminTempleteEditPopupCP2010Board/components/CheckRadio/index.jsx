import React, {Component} from 'react'
import { Radio } from 'semantic-ui-react'

class CheckRadio extends Component {
    state = {value: 'typeTxt'}

    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <>
                <Radio
                    label='텍스트형'
                    name='typeImg'
                    value='typeTxt'
                    checked={this.state.value === 'typeTxt'}
                    onChange={this.handleChange}
                    />
                <Radio
                    label='이미지+텍스트형'
                    name='typeImg'
                    value='typeImgTxt'
                    checked={this.state.value === 'typeImgTxt'}
                    onChange={this.handleChange}
                />
            </>
        )
    }
}


export default CheckRadio
