import React from "react";
import CubeDetailSec from "../CubeDetailSec";

const OverviewCourseraDescription = () => {
	return (
		<CubeDetailSec className="ov-desc-sec" id="lms-desc">
			<div className="cube-description">
				<div className="ql-snow">
					<div className="ql-editor">
						<p>
							<img src="https://mysuni.sk.com/suni-asset/overview/20210715/60f01c41d4ece2000116247a.png" alt="" />
						</p>
						<br />
						<p>
							<strong>Syllabus (<a href={()=>false}>https://www.coursera.org/learn/machine-learning?#syllabus</a>)</strong>
						</p>
						<ol>
							<li>Introduction</li>
							<li>Linear Regression with One Variable</li>
							<li>Linear Algebra Review</li>
							<li>Linear Regression with Multiple Variables</li>
							<li>Octave/Matlab Tutorial</li>
							<li>Logistic Regression</li>
							<li>Regularization</li>
							<li>Neural Networks: Representation</li>
							<li>And more...</li>
						</ol>
					</div>
				</div>
			</div>
		</CubeDetailSec>
	);
}
export default OverviewCourseraDescription;
