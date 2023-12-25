import React, {Component} from 'react'
import {
    Icon,
    Accordion,
    Checkbox
} from 'semantic-ui-react'

class AccordionChannelList extends Component {
    state = {}

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
            <>
                {/* .search-empty */}
                {/*
                                                <div class="search-empty">
                                                    <i class="icon rocket50"></i>
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
            </>
        )
    }
}

export default AccordionChannelList;
