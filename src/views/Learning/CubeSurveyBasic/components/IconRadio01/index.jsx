import React, { Component } from 'react';
import { Radio } from 'semantic-ui-react';


class IconRadio01 extends Component {

    state = { value: "value01", text : '어떤 점이 특별히 좋았나요? 자세한 학습 후기를 남겨주세요.' };
    handleChange = (e, { value }) => {
        if(value === "value01" || value ==="value02" ){
            this.setState({value,text:'어떤 점이 특별히 좋았나요? 자세한 학습 후기를 남겨주세요.'})
        }else{
            this.setState({value,text:'어떤 점을 개선하면 좋을까요? 개선 포인트를 남겨주세요.'})
        }
    };
    render (){
        const {text } = this.state;
        return(
            <div className="survey-core core1">
                <div className="core-radiogroup">
                    <Radio className="iconRadio radio05"
                        label='전혀 아니다'
                        name='radioGroup01'
                        value="value05"
                        checked={this.state.value === "value05"}
                        onChange={this.handleChange}
                    />
                    <Radio className="iconRadio radio04"
                        label='아니다'
                        name='radioGroup01'
                        value="value04"
                        checked={this.state.value === "value04"}
                        onChange={this.handleChange}
                    />
                    <Radio className="iconRadio radio03"
                        label='보통이다'
                        name='radioGroup01'
                        value="value03"
                        checked={this.state.value === "value03"}
                        onChange={this.handleChange}
                    />
                    <Radio className="iconRadio radio02"
                        label='그렇다'
                        name='radioGroup01'
                        value="value02"
                        checked={this.state.value === "value02"}
                        onChange={this.handleChange}
                    />
                    <Radio className="iconRadio radio01"
                        label='매우 그렇다​'
                        name='radioGroup01'
                        value="value01"
                        checked={this.state.value === "value01"}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="rev-edit">
                    <div className="edit-wrapper"><textarea rows="3" placeholder={text} /></div>
                    <div className="rev-info">
                        <span>입력해주신 내용은 과정 평가 리뷰로 활용될 수 있습니다.​</span>
                        <div className="cnt"><strong>0</strong> / 200</div>
                    </div>
                </div>
                {/* <div className="rev-noti">
                    <Icon className='error16'/><span>해당 문항은 필수 항목 입니다.</span>
                </div> */}
            </div>

        )

    }
}

export default IconRadio01;
