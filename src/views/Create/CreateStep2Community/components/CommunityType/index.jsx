import React, {Component} from 'react'
import {
    Radio
} from 'semantic-ui-react'

class CommunityType extends Component {
    state = {}

    handleChange = (e, {value}) => this.setState({value})

    render() {

        return (
            <div className="column">
                <label className="necessary">커뮤니티 구분</label>
                <Radio
                    className='base'
                    label='오픈형'
                    name='radioGroup'
                    value='value01'
                    onChange={this.handleChange}
                    defaultChecked
                    disabled
                />
                <Radio
                    className='base'
                    label='폐쇄형'
                    name='radioGroup'
                    value='value02'
                    onChange={this.handleChange}
                    disabled
                />
            </div>
        )
    }
}

export default CommunityType
