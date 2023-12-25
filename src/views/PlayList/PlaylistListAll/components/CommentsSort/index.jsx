import React, {Component} from 'react'
import {Form, Radio} from 'semantic-ui-react'

class CommentsSort extends Component {
    state = {value: 'radio01'}

    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <div className="comments-sort">
                <Form className="comments-sort">
                    <Form.Group inline>
                        <Form.Field>
                            <Radio
                                className='base'
                                label='최신순'
                                name='radioGroup'
                                value='radio01'
                                checked={this.state.value === 'radio01'}
                                onChange={this.handleChange}
                                defaultChecked
                            />
                        </Form.Field>
                        <Form.Field>
                            <Radio
                                className='base'
                                label='좋아요순'
                                name='radioGroup'
                                value='radio02'
                                checked={this.state.value === 'radio02'}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Radio
                                className='base'
                                label='담아간순'
                                name='radioGroup'
                                value='radio03'
                                checked={this.state.value === 'radio03'}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Radio
                                className='base'
                                label='나의 Playlist'
                                name='radioGroup'
                                value='radio04'
                                checked={this.state.value === 'radio04'}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                    </Form.Group>
                </Form>
                {/*<Radio*/}
                    {/*className='base'*/}
                    {/*label='별점순'*/}
                    {/*name='radioGroup'*/}
                    {/*value='radio03'*/}
                    {/*checked={this.state.value === 'radio03'}*/}
                    {/*onChange={this.handleChange}*/}
                {/*/>*/}
                {/* <Button className="btn-filter-blue">
                    <span>Filter(05)</span>
                </Button> */}
            </div>
        )
    }
}


export default CommentsSort
