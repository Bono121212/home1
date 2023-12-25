import React, {Component} from 'react'
import {
    Button, Accordion, Icon, Modal, Checkbox,
} from 'semantic-ui-react'

class SubCategoryChoiceModal extends Component {
    state = {modalOpen: false}

    handleOpen = () => this.setState({modalOpen: true})

    handleClose = () => this.setState({modalOpen: false})

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
            <Modal trigger={<Button icon className="left post delete" onClick={this.handleOpen}>채널 선택</Button>}
                   className='base w1000' open={this.state.modalOpen}
                   onClose={this.handleClose}>
                <Modal.Header className='res'>
                    Sub Category Choice
                    <span className="sub f12">Please select a category</span>
                </Modal.Header>
                <Modal.Content>
                    <div className="channel-change">
                        <div className="table-css">
                            <div className="row head">
                                <div className="cell v-middle">
                                    <span className="text01">Channel list</span>
                                </div>
                                <div className="cell v-middle">
                                    <span className="text01">Selected</span>
                                    <span className="count">
                                        <span className="text01">0</span>
                                        {/*<span className="text01 add">7</span>*/}
                                        <span className="text02"> / 80</span>
                                    </span>
                                    <div className="right">
                                        <button className="clear">
                                            <Icon className='reset'/><span className="blind">reset</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="cell vtop">
                                    <div className="select-area">
                                        <div className="scrolling-60vh">
                                            {/* .search-empty */}
                                            {/*
                                                <div className="search-empty">
                                                <Icon className='rocket50'/>
                                                    <div>검색된 Channel이 없습니다.</div>
                                                </div>
                                                */}
                                            {/* // .search-empty */}
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
                                                            <Checkbox label='AI 공통' className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox label='AI 공통' className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox label='AI 공통' className='base'/>
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
                                                            <Checkbox label='DT 공통' className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox label='DT 공통' className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox label='DT 공통' className='base'/>
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
                                                            <Checkbox label='행복 공통' className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox label='행복 공통' className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox label='행복 공통' className='base'/>
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
                                                            <Checkbox label='SV 공통' className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox label='SV 공통' className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox label='SV 공통' className='base'/>
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
                                                            <Checkbox label='혁신디자인 공통' className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox label='혁신디자인 공통' className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox label='혁신디자인 공통' className='base'/>
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
                                                            <Checkbox label='Global 공통' className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox label='Global 공통' className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox label='Global 공통' className='base'/>
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
                                                            <Checkbox label='Leadership 공통' className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox label='Leadership 공통' className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox label='Leadership 공통' className='base'/>
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
                                                            <Checkbox label='Management 공통' className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox label='Management 공통' className='base'/>
                                                        </li>
                                                        <li>
                                                            <Checkbox label='Management 공통' className='base'/>
                                                        </li>
                                                    </ul>
                                                </Accordion.Content>
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                                <div className="cell vtop">
                                    <div className="select-area">
                                        <div className="scrolling-60vh">
                                            {/* .select-empty */}
                                            {/*<div className="select-empty">*/}
                                            {/*    Not Selected*/}
                                            {/*</div>*/}
                                            {/* // .select-empty */}
                                            {/* .select-item */}

                                            <div className="select-item">
                                                {/*<Button className="del">AI 공통 1 (이것만 검색되라)</Button>*/}
                                                {/*<Button className="del">AI 공통 1 (이것만 검색되라)</Button>*/}
                                            </div>
                                            {/* // .select-item */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Content>
                <Modal.Actions className="actions">
                    <Button className='w190 pop d' onClick={this.handleClose}>Cancel</Button>
                    <Button className='w190 pop p' onClick={this.handleClose}>Confirm</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default SubCategoryChoiceModal;
