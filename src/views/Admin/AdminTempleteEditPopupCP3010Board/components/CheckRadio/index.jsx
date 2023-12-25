import React, {Component} from 'react'
import { Radio } from 'semantic-ui-react'

class CheckRadio extends Component {
    state = {value: 'typeBoard'}

    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <>
                <Radio
                    label='게시판 선택'
                    name='typeRadio'
                    value='typeBoard'
                    checked={this.state.value === 'typeBoard'}
                    onChange={this.handleChange}
                />
                <Radio
                    label='게시글 선택'
                    name='typeRadio'
                    value='typePost'
                    checked={this.state.value === 'typePost'}
                    onChange={this.handleChange}
                />
                <Radio
                    label='커뮤니티 최신글'
                    name='typeRadio'
                    value='typeComm'
                    checked={this.state.value === 'typeComm'}
                    onChange={this.handleChange}
                />
                <Radio
                    label='최신 공지사항'
                    name='typeRadio'
                    value='typeNew'
                    checked={this.state.value === 'typeNew'}
                    onChange={this.handleChange}
                />
            </>
        )
    }
}


export default CheckRadio
