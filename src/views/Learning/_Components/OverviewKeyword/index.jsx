import React, { Component } from "react";
import CubeDetailSecCol from "../CubeDetailSecCol";

class OverviewKeyword extends Component {
	render() {
		return (
			<CubeDetailSecCol className="ov-keyword-sec" id="lms-keyword">
				<div className="detail-sec-head">
					<h2 className="detail-sec-title">키워드 톺아보기</h2>
				</div>
				<div className="detail-sec-body">
					{/* 키워드 톺아보기 */}
					<div className="ov-keyword">
						<span className="ui label tag">AI</span>
						<span className="ui label tag">Database</span>
						<span className="ui label tag">Design</span>
						<span className="ui label tag">Project Managing</span>
						<span className="ui label tag">Project Managing</span>
						<span className="ui label tag">AI</span>
						<span className="ui label tag">AI</span>
						<span className="ui label tag">AI</span>
						<span className="ui label tag">Database</span>
						<span className="ui label tag">Design</span>
						<span className="ui label tag">Project Managing</span>
						<span className="ui label tag">Project Managing</span>
						<span className="ui label tag">AI</span>
						<span className="ui label tag">AI</span>
					</div>
					{/* //키워드 톺아보기 */}
				</div>
			</CubeDetailSecCol>
		);
	}
}

export default OverviewKeyword;
