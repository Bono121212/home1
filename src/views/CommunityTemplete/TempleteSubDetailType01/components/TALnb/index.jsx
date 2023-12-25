import React, { Component } from "react";
import { List, Icon, Button, Accordion } from "semantic-ui-react";
import { Link } from "react-router-dom";

class TALnb extends Component {
    state = { activeIndex: 1 }
    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        return (
            <div className="ta_lnb_area">
                <List as="ul" className="ta_lnb">
                    <List.Item as="li"><Link to="/" className="list_item"><Icon className="i_board"/><span className="ellipsis">공지사항</span></Link></List.Item>
                    <List.Item as="li"><Link to="/" className="list_item"><Icon className="i_board"/><span className="ellipsis">딥 러닝의 역사</span></Link></List.Item>
                    <List.Item as="li">
                        <Accordion>
                            <Accordion.Title
                                active={activeIndex === 0}
                                index={0}
                                onClick={this.handleClick}
                            >
                                <span className="list_item"><Icon className="i_board"/><span className="ellipsis">딥 러닝의 중요성</span></span>
                                <Button className="b_toggle"><Icon /></Button>  
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 0}>
                                <List as="ul" className="ta_lnb_sub">
                                    <List.Item as="li"><Link to="/"><Icon className="i_board"/><span className="ellipsis">알고리즘</span></Link> </List.Item>
                                    <List.Item as="li" className="active"><Link to="/"><Icon className="i_download"/><span className="ellipsis">알고리즘</span></Link> </List.Item>
                                    <List.Item as="li"><Link to="/"><Icon className="i_survey"/><span className="ellipsis">알고리즘</span></Link> </List.Item>
                                    <List.Item as="li"><Link to="/"><Icon className="i_link"/><span className="ellipsis">알고리즘</span></Link> </List.Item>
                                    <List.Item as="li"><Link to="/"><Icon className="i_html"/><span className="ellipsis">알고리즘</span></Link></List.Item>
                                    <List.Item as="li"><Link to="/"><Icon className="i_discussion"/><span className="ellipsis">알고리즘</span></Link></List.Item>
                                </List>                     
                            </Accordion.Content>
                        </Accordion>
                    </List.Item>
                    <List.Item as="li">
                        <Accordion>
                            <Accordion.Title
                                active={activeIndex === 0}
                                index={1}
                                onClick={this.handleClick}
                            >
                                <span className="list_item"><Icon className="i_board"/><span className="ellipsis">딥 러닝의 중요성</span></span>
                                <Button className="b_toggle"><Icon /></Button>  
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 1}>
                                <List as="ul" className="ta_lnb_sub">
                                    <List.Item as="li"className="active"><Link to="/"><Icon className="i_board"/><span className="ellipsis">알고리즘</span></Link> </List.Item>
                                    <List.Item as="li" ><Link to="/"><Icon className="i_download"/><span className="ellipsis">알고리즘</span></Link> </List.Item>
                                    <List.Item as="li"><Link to="/"><Icon className="i_survey"/><span className="ellipsis">알고리즘</span></Link> </List.Item>
                                    <List.Item as="li"><Link to="/"><Icon className="i_link"/><span className="ellipsis">알고리즘</span></Link> </List.Item>
                                    <List.Item as="li"><Link to="/"><Icon className="i_html"/><span className="ellipsis">알고리즘</span></Link></List.Item>
                                    <List.Item as="li"><Link to="/"><Icon className="i_discussion"/><span className="ellipsis">알고리즘</span></Link></List.Item>
                                </List>                     
                            </Accordion.Content>
                        </Accordion>
                    </List.Item>
                </List>
            </div>
        );
    }
}

export default TALnb;
