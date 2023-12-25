import React, {Component} from 'react'
import {
    Icon, Button, Form
} from 'semantic-ui-react'
import AccordionChannelList from "../AccordionChannelList";


class ContentsArea extends Component {
    state = {
        hidden: false,
    }
    handleChange = (e, {value}) => this.setState({value})

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));

    }

    render() {
        return (
            <Form>
                <h3 className="title-filter">관심분야 선택</h3>
                <div className="filter-wrap">
                    <div className="column">
                        <div className="f-tit">Category</div>
                        <div className="f-list">
                            <div className="scrolling channel-change">
                                <AccordionChannelList />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="f-tit">Selected <span className="counter"><span
                            className="now">0</span> / 80</span>
                        </div>
                        <div className="f-list">
                            <div className="scrolling">
                                <div className="selected">
                                    <Button className="del type2">AI</Button>
                                    <Button className="del type2">Random String</Button>
                                    <Button className="del type2">Random String Random String</Button>
                                    <Button className="del type2">AAAAAAAAAAAAAAAAAA</Button>
                                    <Button className="del type2">short</Button>
                                    <Button className="del type2">short</Button>
                                    <Button className="del type2">short</Button>
                                    <Button className="del type2">AI</Button>
                                    <Button className="del type2">Random String</Button>
                                    <Button className="del type2">Random String Random String</Button>
                                    <Button className="del type2">AAAAAAAAAAAAAAAAAA</Button>
                                    <Button className="del type2">machine learning</Button>
                                    <Button className="del type2">short</Button>
                                    <Button className="del type2">short</Button>
                                    <Button className="del type2">AI</Button>
                                    <Button className="del type2">Random String</Button>
                                    <Button className="del type2">Random String Random String</Button>
                                    <Button className="del type2">AAAAAAAAAAAAAAAAAA</Button>
                                    <Button className="del type2">short</Button>
                                    <Button className="del type2">short</Button>
                                    <Button className="del type2">short</Button>
                                    <Button className="del type2">AI</Button>
                                    <Button className="del type2">Random String</Button>
                                    <Button className="del type2">Random String Random String</Button>
                                    <Button className="del type2">AAAAAAAAAAAAAAAAAA</Button>
                                    <Button className="del type2">machine learning</Button>
                                    <Button className="del type2">short</Button>
                                    <Button className="del type2">short</Button>
                                    <Button className="del type2">AI</Button>
                                    <Button className="del type2">Random String</Button>
                                    <Button className="del type2">Random String Random String</Button>
                                    <Button className="del type2">AAAAAAAAAAAAAAAAAA</Button>
                                    <Button className="del type2">short</Button>
                                    <Button className="del type2">short</Button>
                                    <Button className="del type2">short</Button>
                                    <Button className="del type2">AI</Button>
                                    <Button className="del type2">Random String</Button>
                                    <Button className="del type2">Random String Random String</Button>
                                    <Button className="del type2">AAAAAAAAAAAAAAAAAA</Button>
                                    <Button className="del type2">machine learning</Button>
                                    <Button className="del type2">short</Button>
                                    <Button className="del type2">short</Button>
                                    <Button className="del type2">AI</Button>
                                    <Button className="del type2">Random String</Button>
                                    <Button className="del type2">Random String Random String</Button>
                                    <Button className="del type2">AAAAAAAAAAAAAAAAAA</Button>
                                    <Button className="del type2">short</Button>
                                    <Button className="del type2">short</Button>
                                    <Button className="del type2">short</Button>
                                    <Button className="del type2">AI</Button>
                                    <Button className="del type2">Random String</Button>
                                    <Button className="del type2">Random String Random String</Button>
                                    <Button className="del type2">AAAAAAAAAAAAAAAAAA</Button>
                                    <Button className="del type2">machine learning</Button>
                                    <Button className="del type2">short</Button>
                                    <Button className="del type2">short</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button className='clear'><Icon className='reset'/><span className="blind">reset</span></Button>
                </div>
                <div className="select-error">
                    <Icon className='error16'/><span className="blind">error</span>
                    <span>
                            관심 분야를 3개 이상 선택해주세요.
                        </span>
                </div>
                <div className="button-area">
                    <Button className='fix bg'>다음</Button>
                </div>
            </Form>
        )
    }
}


export default ContentsArea
