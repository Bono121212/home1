import React, {Component} from 'react'
import {
    Radio
} from 'semantic-ui-react';
// import classNames from 'classnames';

class CommentsSort extends Component {
    state = {
        value: 'radio01'
    }

    handleChange = (e, {value}) => this.setState({value})

    render() {
        //
        // const { isOnFilter, onClickFilter } = this.props;

        return (
            <div className="comments-sort">
                <Radio
                    className='base'
                    label='최신순'
                    name='radioGroup'
                    value='radio01'
                    checked={this.state.value === 'radio01'}
                    onChange={this.handleChange}
                    defaultChecked
                />
                <Radio
                    className='base'
                    label='인기순'
                    name='radioGroup'
                    value='radio02'
                    checked={this.state.value === 'radio02'}
                    onChange={this.handleChange}
                />
                <Radio
                    className='base'
                    label='별점순'
                    name='radioGroup'
                    value='radio03'
                    checked={this.state.value === 'radio03'}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}


export default CommentsSort
