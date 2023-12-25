import React, {Component} from 'react'
import {
    Button,
    Modal
} from 'semantic-ui-react'
// import AccordionChannelList from '../AccordionChannelList'
// import ClearInputBox from "../ClearInputBox";
import classNames from "classnames";

class FilterModal extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});

    handleChange = (e, {value}) => this.setState({value});

    render() {
        const {open, size, active} = this.state;

        return (
            <Modal size={size} open={open} onClose={this.close} className='base w1000'>

                <Modal.Header>
                    List Filter
                </Modal.Header>
                <Modal.Content>
                    <div className="filter-wrap">
                        <div className="column">
                            <div className="f-tit">College</div>
                            <div className="f-list">
                                <div className="scrolling">
                                    <div className="college">
                                        <Button className={classNames({
                                            'toggle': true,
                                            'toggle3': true,
                                            active: active,
                                        })}
                                                onClick={() => this.setState({active: !this.state.active})}>
                                            AI (4)
                                        </Button>
                                        <Button className={classNames({
                                            'toggle': true,
                                            'toggle3': true,
                                            // active: active,
                                        })}
                                            // onClick={() => this.setState({active: !this.state.active})}
                                        >
                                            DT (0)
                                        </Button>
                                        <Button className={classNames({
                                            'toggle': true,
                                            'toggle3': true,
                                            // active: active,
                                        })}
                                            // onClick={() => this.setState({active: !this.state.active})}
                                        >
                                            행복 (0)
                                        </Button>
                                        <Button className={classNames({
                                            'toggle': true,
                                            'toggle3': true,
                                            // active: active,
                                        })}
                                            // onClick={() => this.setState({active: !this.state.active})}
                                        >
                                            SV (0)
                                        </Button>
                                        <Button className={classNames({
                                            'toggle': true,
                                            'toggle3': true,
                                            // active: active,
                                        })}
                                            // onClick={() => this.setState({active: !this.state.active})}
                                        >
                                            혁신디자인 (0)
                                        </Button>
                                        <Button className={classNames({
                                            'toggle': true,
                                            'toggle3': true,
                                            // active: active,
                                        })}
                                            // onClick={() => this.setState({active: !this.state.active})}
                                        >
                                            Global (0)
                                        </Button>
                                        <Button className={classNames({
                                            'toggle': true,
                                            'toggle3': true,
                                            // active: active,
                                        })}
                                            // onClick={() => this.setState({active: !this.state.active})}
                                        >
                                            Leadership (0)
                                        </Button>
                                        <Button className={classNames({
                                            'toggle': true,
                                            'toggle3': true,
                                            // active: active,
                                        })}
                                            // onClick={() => this.setState({active: !this.state.active})}
                                        >
                                            Management (0)
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="f-tit">Channel</div>
                            <div className="f-list">
                                <div className="scrolling">
                                    <div className="channel">
                                        <ul>
                                            <li>
                                                <div className="ui base checkbox">
                                                    <input type="checkbox" className="hidden" tabIndex="0"/>
                                                    <label>AI 공통 <span>(30)</span></label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ui base checkbox">
                                                    <input type="checkbox" className="hidden" tabIndex="0"/>
                                                    <label>AI Biz Essential <span>(30)</span></label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ui base checkbox">
                                                    <input type="checkbox" className="hidden" tabIndex="0"/>
                                                    <label>AI Biz 활용(job) <span>(20)</span></label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ui base checkbox">
                                                    <input type="checkbox" className="hidden" tabIndex="0"/>
                                                    <label>AI Biz 활용(Industry) <span>(8)</span></label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ui base checkbox">
                                                    <input type="checkbox" className="hidden" tabIndex="0"/>
                                                    <label>AI Biz 활용(Industry) <span>(0)</span></label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="f-tit">Selected <span className="counter"><span className="now">0</span> / 80</span>
                            </div>
                            <div className="f-list">
                                <div className="scrolling">
                                    <div className="selected">
                                        {/* 선택 전 */}
                                        <div className="empty">Not Selected</div>

                                        {/* 선택 후 */}
                                        {/*<Button className="del">AI</Button>*/}
                                        {/*<Button className="del">machine learning</Button>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="clear">
                            <i className="icon reset"><span className="blind">reset</span></i>
                        </button>
                    </div>
                </Modal.Content>
                <Modal.Actions className="actions">
                    <Button className='w190 pop d' onClick={this.close}>Cancel</Button>
                    <Button className='w190 pop p' onClick={this.close}>Filter</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default FilterModal;
