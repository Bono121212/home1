import React from "react";
import { Image } from "semantic-ui-react";
import ImportantBtn from '../../../../../images/all/survey-important.png';
import CubeDetailSec from "../../../_Components/CubeDetailSec";
import IconRadio01 from '../IconRadio01';
import IconRadio02 from '../IconRadio02';
import IconRadio03 from '../IconRadio03';
const CubeInfoDetail = () => {
	return (
		<CubeDetailSec className="cube-sec cube-survey-sec">
			<div className="survey-header">
				<h1 className="survey-header-left">
					공통설문
				</h1>
			</div>
			<div className="course-radio-survey icon-radio">
				<p>
					<span>1.</span>
					<span>이 과정은 다른 사람에게도 추천하고 싶다.
						<span className="importantBtn"><Image src={ImportantBtn} alt='important' className="impt-icon" /></span>
					</span>
				</p>
				<IconRadio01 />
			</div>
			<div className="course-radio-survey icon-radio">
				<p>
					<span>2.</span>
					<span>이 과정을 통해 새롭게 알게 되거나 느낀 것이 있다.
						<span className="importantBtn"><Image src={ImportantBtn} alt='important' className="impt-icon" /></span>
					</span>
				</p>
				<IconRadio02 />
			</div>
			<div className="course-radio-survey icon-radio">
				<p>
					<span>3.</span>
					<span>이 과정의 내용은 업무나 일상에서 활용 가능하다.
						<span className="importantBtn"><Image src={ImportantBtn} alt='important' className="impt-icon" /></span>
					</span>
				</p>
				<IconRadio03 />
			</div>
			<div className="survey-preview">
				<button className="ui button fix line">저장</button>
				<button className="ui button fix bg">제출</button>
			</div>
		</CubeDetailSec>
	);
};
export default CubeInfoDetail;
