import React, {Component} from 'react'
import { Radio } from 'semantic-ui-react'

class CheckRadio extends Component {
    state = {value: 'typeYoutube'}

    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <>
                <Radio
                    label='게시글 선택'
                    name='typeRadio'
                    value='typePost'
                    checked={this.state.value === 'typePost'}
                    onChange={this.handleChange}
                />
                <Radio
                    label='Youtube 링크'
                    name='typeRadio'
                    value='typeYoutube'
                    checked={this.state.value === 'typeYoutube'}
                    onChange={this.handleChange}
                />
            </>
        )
    }
}


export default CheckRadio
