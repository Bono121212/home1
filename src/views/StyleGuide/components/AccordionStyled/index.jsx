import React, { Component } from 'react'
import {Accordion, Checkbox, Icon, List} from 'semantic-ui-react'

export default class AccordionStyled extends Component {
    state = {  }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        return (
            <Accordion fluid className='channel'>
                <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                >
                    <span className="name b1">AI</span>
                    <Icon className='icon'/>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <List>
                        <List.Item>
                            <Checkbox label='AI 공통' className='base'/>
                        </List.Item>
                        <List.Item>
                            <Checkbox label='AI 공통' className='base'/>
                        </List.Item>
                        <List.Item>
                            <Checkbox label='AI 공통' className='base'/>
                        </List.Item>
                    </List>
                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex === 1}
                    index={1}
                    onClick={this.handleClick}
                >
                    <span className="name b2">Management</span>
                    <Icon className='icon'/>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                    <List>
                        <List.Item>
                            <Checkbox label='AI 공통' className='base'/>
                        </List.Item>
                        <List.Item>
                            <Checkbox label='AI 공통' className='base'/>
                        </List.Item>
                        <List.Item>
                            <Checkbox label='AI 공통' className='base'/>
                        </List.Item>
                    </List>
                </Accordion.Content>
            </Accordion>
        )
    }
}
