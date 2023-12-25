import React, { Component } from "react";
import {
  Radio
} from "semantic-ui-react";

class CommentSort extends Component {
  state = { value: "value01" };
  handleChange = (e, { value }) => this.setState({ value });

  render() {

    return (
		<div className="comments-sort-wrap">
			{/* <div className="comments-sort-count">
				<span className="tit">전체 의견</span><em className="count">71</em>
			</div> */}
			<div className="comments-sort">
				<Radio
				className="base"
				label="최신순"
				name="radioGroup"
				value="value01"
				checked={this.state.value === "value01"}
				onChange={this.handleChange}
				/>
				<Radio
				className="base"
				label="좋아요순"
				name="radioGroup"
				value="value02"
				checked={this.state.value === "value02"}
				onChange={this.handleChange}
				/>
				<Radio
				className="base"
				label="나의글"
				name="radioGroup"
				value="value03"
				checked={this.state.value === "value03"}
				onChange={this.handleChange}
				/>
			</div>
		</div>
    );
  }
}

export default CommentSort;
