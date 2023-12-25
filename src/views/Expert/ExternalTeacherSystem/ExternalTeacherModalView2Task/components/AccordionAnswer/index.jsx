import React, {Component} from 'react'
import {
    Icon,
    Accordion
} from 'semantic-ui-react'


class AccordionAnswer extends Component {
    state = { activeIndex: 1 };
    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state;

        return (
            <div className="view_answer">
                <Accordion>
                    <Accordion.Title
                        active={activeIndex === 0}
                        index={0}
                        onClick={this.handleClick}
                    >
                    <span>
                        <Icon className="i_down"/>
                    </span>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <dl>
                            <dt>정답</dt>
                            <dd>2,4번</dd>
                        </dl>
                        <dl>
                            <dt>해설</dt>
                            <dd>해설 입니다.해설 입니다.해설 입니다.해설 입니다.해설 입니다.해설 입니다.해설 입니다.해설 입니다.해설 입니다.해설 입니다.해설 입니다.해설 입니다.해설 입니다.</dd>
                        </dl>
                    </Accordion.Content>
                </Accordion>
            </div>

        )
    }
}

export default AccordionAnswer;
