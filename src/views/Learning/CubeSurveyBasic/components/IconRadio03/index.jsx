import React, { Component } from 'react';
import { Radio } from 'semantic-ui-react';


class IconRadio02 extends Component {

    state = { value: "value02" };
    handleChange = (e, { value }) => this.setState({ value });
    render (){
        return(
            <div className="survey-core">
                <div className="core-radiogroup">
                    <Radio className="iconRadio radio05"
                        label='전혀 아니다'
                        name='radioGroup02'
                        value="value05"
                        checked={this.state.value === "value05"}
                        onChange={this.handleChange}
                    />
                    <Radio className="iconRadio radio04"
                        label='아니다'
                        name='radioGroup02'
                        value="value04"
                        checked={this.state.value === "value04"}
                        onChange={this.handleChange}
                    />
                    <Radio className="iconRadio radio03"
                        label='보통이다'
                        name='radioGroup02'
                        value="value03"
                        checked={this.state.value === "value03"}
                        onChange={this.handleChange}
                    />
                    <Radio className="iconRadio radio02"
                        label='그렇다'
                        name='radioGroup02'
                        value="value02"
                        checked={this.state.value === "value02"}
                        onChange={this.handleChange}
                    />
                    <Radio className="iconRadio radio01"
                        label='매우 그렇다​'
                        name='radioGroup02'
                        value="value01"
                        checked={this.state.value === "value01"}
                        onChange={this.handleChange}
                    />
                </div>
            </div>

        )

    }
}

export default IconRadio02;
