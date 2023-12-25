import React, {Component, createRef} from 'react'
import {
    Image, Label, Icon, Button, Dropdown
} from 'semantic-ui-react'
import classNames from "classnames";


class ChannelOfInterest extends Component {
    state = {
        active: false
    };

    render() {
        const {active} = this.state;
        return (
            <div className="channel-of-interest">
                <div className="table-css type2">
                    <div className="row">
                        <div className="cell vtop">
                            <div className="tit-set">관심 Channel(32)
                                <Button icon className='img-icon'>
                                    <Icon className='setting17'/>
                                    <span className='blind'>setting</span>
                                </Button>
                            </div>
                        </div>
                        <div className="cell vtop">
                            <div className={active ? "item-wrap active" : "item-wrap"} onClick={this.handleChange}>
                                <div className="belt">
                                    <Label className='channel'>AI</Label>
                                    <Label className='channel'>Design</Label>
                                    <Label className='channel'>Database</Label>
                                    <Label className='channel'>Project Managing</Label>
                                    <Label className='channel'>디자인 방법론</Label>
                                    <Label className='channel'>Engineering</Label>
                                    <Label className='channel'>Production Data Analysis</Label>
                                    <Label className='channel'>DT Basics</Label>
                                    <Label className='channel'>Value</Label>
                                    <Label className='channel'>Mindfulness</Label>
                                    <Label className='channel'>AI</Label>
                                    <Label className='channel'>Design</Label>
                                    <Label className='channel'>Database</Label>
                                    <Label className='channel'>Project Managing</Label>
                                    <Label className='channel'>디자인 방법론</Label>
                                    <Label className='channel'>Engineering</Label>
                                    <Label className='channel'>Production Data Analysis</Label>
                                    <Label className='channel'>DT Basics</Label>
                                    <Label className='channel'>Value</Label>
                                    <Label className='channel'>Mindfulness</Label>
                                </div>
                            </div>
                        </div>
                        <div className="cell vtop">
                            <div className={classNames({
                                'toggle-btn': true,
                                active: active,
                            })}
                                 onClick={() => this.setState({active: !this.state.active})}
                            >
                                <Button icon className="img-icon">
                                    <Icon className='sum-open'/>
                                    <span className="blind">open</span>
                                </Button>
                                <Button icon className="img-icon">
                                    <Icon className='sum-close'/>
                                    <span className="blind">close</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ChannelOfInterest
