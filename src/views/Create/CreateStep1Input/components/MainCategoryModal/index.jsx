import React, {Component} from 'react'
import {
    Button, Accordion, Icon, Modal, Radio,
} from 'semantic-ui-react'

class MainCategoryModal extends Component {
    state = { modalOpen: false }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    handleClick = (e, titleProps) => {
        const {index} = titleProps
        const {activeIndex} = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({activeIndex: newIndex})
    }

    handleChange = (e, {value}) => this.setState({value})

    render() {
        const {activeIndex} = this.state
        return (
            <Modal trigger={<Button icon className="left post delete" onClick={this.handleOpen}>채널 선택</Button>} className='base w560'
                   open={this.state.modalOpen}
                   onClose={this.handleClose}>
                <Modal.Header className='res'>
                    메인채널 선택
                    <span className="sub f12">Please select a category</span>
                </Modal.Header>
                <Modal.Content>
                    <div className="channel-change">
                        <div className="table-css">
                            <div className="row head">
                                <div className="cell v-middle">
                                    <span className="text01">Channel list</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="cell vtop">
                                    <div className="select-area">
                                        <div className="scrolling-60vh">
                                            <Accordion className='channel'>
                                                <Accordion.Title
                                                    active={activeIndex === 0}
                                                    index={0}
                                                    onClick={this.handleClick}
                                                >
                                                    <span className="name purple">AI</span>
                                                    <Icon/>
                                                </Accordion.Title>
                                                <Accordion.Content active={activeIndex === 0}>
                                                    <ul>
                                                        <li>
                                                            <Radio
                                                                className='base'
                                                                label='AI 공통'
                                                                name='radioGroup'
                                                                value='value01-1'
                                                                checked={this.state.value === 'value01-1'}
                                                                onChange={this.handleChange}
                                                            />
                                                        </li>
                                                        <li>
                                                            <Radio
                                                                className='base'
                                                                label='AI 공통'
                                                                name='radioGroup'
                                                                value='value01-2'
                                                                checked={this.state.value === 'value01-2'}
                                                                onChange={this.handleChange}
                                                            />
                                                        </li>
                                                        <li>
                                                            <Radio
                                                                className='base'
                                                                label='AI 공통'
                                                                name='radioGroup'
                                                                value='value01-3'
                                                                checked={this.state.value === 'value01-3'}
                                                                onChange={this.handleChange}
                                                            />
                                                        </li>
                                                    </ul>
                                                </Accordion.Content>

                                                <Accordion.Title
                                                    active={activeIndex === 1}
                                                    index={1}
                                                    onClick={this.handleClick}
                                                >
                                                    <span className="name violet">DT</span>
                                                    <Icon/>
                                                </Accordion.Title>
                                                <Accordion.Content active={activeIndex === 1}>
                                                    <ul>
                                                        <li>
                                                            <Radio
                                                                className='base'
                                                                label='DT 공통'
                                                                name='radioGroup'
                                                                value='value02-1'
                                                                checked={this.state.value === 'value02-1'}
                                                                onChange={this.handleChange}
                                                            />
                                                        </li>
                                                        <li>
                                                            <Radio
                                                                className='base'
                                                                label='DT 공통'
                                                                name='radioGroup'
                                                                value='value02-2'
                                                                checked={this.state.value === 'value02-2'}
                                                                onChange={this.handleChange}
                                                            />
                                                        </li>
                                                        <li>
                                                            <Radio
                                                                className='base'
                                                                label='DT 공통'
                                                                name='radioGroup'
                                                                value='value02-3'
                                                                checked={this.state.value === 'value02-3'}
                                                                onChange={this.handleChange}
                                                            />
                                                        </li>
                                                    </ul>
                                                </Accordion.Content>

                                                <Accordion.Title
                                                    active={activeIndex === 2}
                                                    index={2}
                                                    onClick={this.handleClick}
                                                >
                                                    <span className="name yellow">행복</span>
                                                    <Icon/>
                                                </Accordion.Title>
                                                <Accordion.Content active={activeIndex === 2}>
                                                    <ul>
                                                        <li>
                                                            <Radio
                                                                className='base'
                                                                label='행복 공통'
                                                                name='radioGroup'
                                                                value='value03-1'
                                                                checked={this.state.value === 'value03-1'}
                                                                onChange={this.handleChange}
                                                            />
                                                        </li>
                                                        <li>
                                                            <Radio
                                                                className='base'
                                                                label='행복 공통'
                                                                name='radioGroup'
                                                                value='value03-2'
                                                                checked={this.state.value === 'value03-2'}
                                                                onChange={this.handleChange}
                                                            />
                                                        </li>
                                                        <li>
                                                            <Radio
                                                                className='base'
                                                                label='행복 공통'
                                                                name='radioGroup'
                                                                value='value03-3'
                                                                checked={this.state.value === 'value03-3'}
                                                                onChange={this.handleChange}
                                                            />
                                                        </li>
                                                    </ul>
                                                </Accordion.Content>

                                                <Accordion.Title
                                                    active={activeIndex === 3}
                                                    index={3}
                                                    onClick={this.handleClick}
                                                >
                                                    <span className="name orange">SV</span>
                                                    <Icon/>
                                                </Accordion.Title>
                                                <Accordion.Content active={activeIndex === 3}>
                                                    <ul>
                                                        <li>
                                                            <Radio
                                                                className='base'
                                                                label='SV 공통'
                                                                name='radioGroup'
                                                                value='value04-1'
                                                                checked={this.state.value === 'value04-1'}
                                                                onChange={this.handleChange}
                                                            />
                                                        </li>
                                                        <li>
                                                            <Radio
                                                                className='base'
                                                                label='SV 공통'
                                                                name='radioGroup'
                                                                value='value04-2'
                                                                checked={this.state.value === 'value04-2'}
                                                                onChange={this.handleChange}
                                                            />
                                                        </li>
                                                        <li>
                                                            <Radio
                                                                className='base'
                                                                label='SV 공통'
                                                                name='radioGroup'
                                                                value='value04-3'
                                                                checked={this.state.value === 'value04-3'}
                                                                onChange={this.handleChange}
                                                            />
                                                        </li>
                                                    </ul>
                                                </Accordion.Content>

                                                <Accordion.Title
                                                    active={activeIndex === 4}
                                                    index={4}
                                                    onClick={this.handleClick}
                                                >
                                                    <span className="name red">혁신디자인</span>
                                                    <Icon/>
                                                </Accordion.Title>
                                                <Accordion.Content active={activeIndex === 4}>
                                                    <ul>
                                                        <li>
                                                            <Radio
                                                                className='base'
                                                                label='혁신디자인 공통'
                                                                name='radioGroup'
                                                                value='value05-1'
                                                                checked={this.state.value === 'value05-1'}
                                                                onChange={this.handleChange}
                                                            />
                                                        </li>
                                                        <li>
                                                            <Radio
                                                                className='base'
                                                                label='혁신디자인 공통'
                                                                name='radioGroup'
                                                                value='value05-2'
                                                                checked={this.state.value === 'value05-2'}
                                                                onChange={this.handleChange}
                                                            />
                                                        </li>
                                                        <li>
                                                            <Radio
                                                                className='base'
                                                                label='혁신디자인 공통'
                                                                name='radioGroup'
                                                                value='value05-3'
                                                                checked={this.state.value === 'value05-3'}
                                                                onChange={this.handleChange}
                                                            />
                                                        </li>
                                                    </ul>
                                                </Accordion.Content>

                                                <Accordion.Title
                                                    active={activeIndex === 5}
                                                    index={5}
                                                    onClick={this.handleClick}
                                                >
                                                    <span className="name green">Global</span>
                                                    <Icon/>
                                                </Accordion.Title>
                                                <Accordion.Content active={activeIndex === 5}>
                                                    <ul>
                                                        <li>
                                                            <Radio
                                                                className='base'
                                                                label='Global 공통'
                                                                name='radioGroup'
                                                                value='value06-1'
                                                                checked={this.state.value === 'value06-1'}
                                                                onChange={this.handleChange}
                                                            />
                                                        </li>
                                                        <li>
                                                            <Radio
                                                                className='base'
                                                                label='Global 공통'
                                                                name='radioGroup'
                                                                value='value06-2'
                                                                checked={this.state.value === 'value06-2'}
                                                                onChange={this.handleChange}
                                                            />
                                                        </li>
                                                        <li>
                                                            <Radio
                                                                className='base'
                                                                label='Global 공통'
                                                                name='radioGroup'
                                                                value='value06-3'
                                                                checked={this.state.value === 'value06-3'}
                                                                onChange={this.handleChange}
                                                            />
                                                        </li>
                                                    </ul>
                                                </Accordion.Content>

                                                <Accordion.Title
                                                    active={activeIndex === 5}
                                                    index={5}
                                                    onClick={this.handleClick}
                                                >
                                                    <span className="name blue">Leadership</span>
                                                    <Icon/>
                                                </Accordion.Title>
                                                <Accordion.Content active={activeIndex === 5}>
                                                    <ul>
                                                        <li>
                                                            <Radio
                                                                className='base'
                                                                label='Leadership 공통'
                                                                name='radioGroup'
                                                                value='value07-1'
                                                                checked={this.state.value === 'value07-1'}
                                                                onChange={this.handleChange}
                                                            />
                                                        </li>
                                                        <li>
                                                            <Radio
                                                                className='base'
                                                                label='Leadership 공통'
                                                                name='radioGroup'
                                                                value='value07-2'
                                                                checked={this.state.value === 'value07-2'}
                                                                onChange={this.handleChange}
                                                            />
                                                        </li>
                                                        <li>
                                                            <Radio
                                                                className='base'
                                                                label='Leadership 공통'
                                                                name='radioGroup'
                                                                value='value07-3'
                                                                checked={this.state.value === 'value07-3'}
                                                                onChange={this.handleChange}
                                                            />
                                                        </li>
                                                    </ul>
                                                </Accordion.Content>

                                                <Accordion.Title
                                                    active={activeIndex === 6}
                                                    index={6}
                                                    onClick={this.handleClick}
                                                >
                                                    <span className="name teal">Management</span>
                                                    <Icon/>
                                                </Accordion.Title>
                                                <Accordion.Content active={activeIndex === 6}>
                                                    <ul>
                                                        <li>
                                                            <Radio
                                                                className='base'
                                                                label='Management 공통'
                                                                name='radioGroup'
                                                                value='value08-1'
                                                                checked={this.state.value === 'value08-1'}
                                                                onChange={this.handleChange}
                                                            />
                                                        </li>
                                                        <li>
                                                            <Radio
                                                                className='base'
                                                                label='Management 공통'
                                                                name='radioGroup'
                                                                value='value08-2'
                                                                checked={this.state.value === 'value08-2'}
                                                                onChange={this.handleChange}
                                                            />
                                                        </li>
                                                        <li>
                                                            <Radio
                                                                className='base'
                                                                label='Management 공통'
                                                                name='radioGroup'
                                                                value='value08-3'
                                                                checked={this.state.value === 'value08-3'}
                                                                onChange={this.handleChange}
                                                            />
                                                        </li>
                                                    </ul>
                                                </Accordion.Content>
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Content>
                <Modal.Actions className="actions">
                    <Button className='w190 pop d' onClick={this.handleClose}>Cancel</Button>
                    <Button className='w190 pop p' onClick={this.handleClose}>OK</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default MainCategoryModal;
