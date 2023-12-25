import React, { Component } from "react";
import { List, Radio } from "semantic-ui-react";

class SelectRadio01 extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <List>
        <List.Item>
          <Radio
            className="base"
            label="스티브 잡스의 PT와 같은 핵심만 간결한 기획서"
            name="radioGroup"
            value="radio01"
            checked={this.state.value === "radio01"}
            onChange={this.handleChange}
            defaultChecked
          />
        </List.Item>
        <List.Item>
          <Radio
            className="base"
            label="발표 내용을 친절한 디자인으로 멋지게 정리한 기획서"
            name="radioGroup"
            value="radio02"
            checked={this.state.value === "radio02"}
            onChange={this.handleChange}
          />
        </List.Item>
        <List.Item>
          <Radio
            className="base"
            label="정리가 잘 된 기획서를 벤치마크 적용한 기획서"
            name="radioGroup"
            value="radio03"
            checked={this.state.value === "radio03"}
            onChange={this.handleChange}
          />
        </List.Item>
        <List.Item>
          <Radio
            className="base"
            label="문서의 의도를 논리적으로 정리한 기획서"
            name="radioGroup"
            value="radio04"
            checked={this.state.value === "radio04"}
            onChange={this.handleChange}
          />
        </List.Item>
      </List>
    );
  }
}

export default SelectRadio01;
