import React from "react";
import { Image } from "semantic-ui-react";
import ImportantBtn from '../../../../../images/all/survey-important.png';
import CubeDetailSec from "../../../_Components/CubeDetailSec";
import IconRadio01 from '../IconRadio01';
import IconRadio02 from '../IconRadio02';
import IconRadio03 from '../IconRadio03';
import ClearInputBox02 from '../ClearInputBox02';
import TextRadio01 from '../TextRadio01';
import CountRadio01 from "../CountRadio01";
import CountRadio02 from "../CountRadio02";
import ProjectItem from "../ProjectItem";
const CubeInfoDetail = () => {
	return (
		<CubeDetailSec className="cube-sec cube-survey-sec">
			<div className="survey-header">
				<h1 className="survey-header-left">
					[마케팅 Essential ②] B2B2C 마케팅 101
				</h1>
			</div>
			<div className="course-radio-survey icon-radio">
				<p>
					<span>1.</span>
					<span>
						이 과정은 다른 사람에게도 추천하고 싶다.
						<span className="importantBtn"><Image src={ImportantBtn} alt='important' className="impt-icon" /></span>
					</span>
				</p>
				<IconRadio01 />
			</div>
			<div className="course-radio-survey icon-radio">
				<p>
					<span>2.</span>
					<span>
						이 과정을 통해 새롭게 알게 되거나 느낀 것이 있다.
						<span className="importantBtn"><Image src={ImportantBtn} alt='important' className="impt-icon" /></span>
					</span>
				</p>
				<IconRadio02 />
			</div>
			<hr className="course-line-survey" />
			<div className="course-radio-survey icon-radio">
				<p>
					<span>3.</span>
					<span>
						이 과정의 내용은 업무나 일상에서 활용 가능하다.
						<span className="importantBtn"><Image src={ImportantBtn} alt='important' className="impt-icon" /></span>
					</span>
				</p>
				<IconRadio03 />
			</div>
			<hr className="course-line-survey" />
			<div className="course-radio-survey survey-text">
				<p>
					<span>4</span>
					<span>
						중 실시 설계 시 배관이 기계로부터 받아야 하는 Information 은 무엇인가요? (10점)
						<span className="importantBtn"><Image src={ImportantBtn} alt='important' className="impt-icon" /></span>
					</span>
				</p>
				<ClearInputBox02 />
			</div>
			<hr className="course-line-survey" />
			<div className="course-radio-survey">
				<p>
					<span>5</span>
					<span>
						두려움을 느끼게 될 때 생기는 일이라 하기 어려운 것은? (10점)
					</span>
				</p>
				<TextRadio01 />
			</div>
			<div className="course-radio-survey">
				<p>
					<span>6</span>
					<span>
						해당 설문이 도움이 되었다고 생각하시나요?
						<span className="importantBtn"><Image src={ImportantBtn} alt='important' className="impt-icon" /></span>
					</span>
				</p>
				<CountRadio01 />
			</div>
			<div className="course-radio-survey">
				<p>
					<span>7</span>
					<span>
						해당 설문이 도움이 되었다고 생각하시나요?
						<span className="importantBtn"><Image src={ImportantBtn} alt='important' className="impt-icon" /></span>
					</span>
				</p>
				<CountRadio02 />
			</div>
			<div className="course-radio-survey">
				<p>
					<span>8</span>
					<span>
						귀하의 Data분석 또는 AI Project 관련 경험을 기입해주세요.
						<span className="importantBtn"><Image src={ImportantBtn} alt='important' className="impt-icon" /></span>
					</span>
				</p>
				<ProjectItem />
			</div>
			<div className="course-radio-survey">
				<p>
					<span>9</span>
					<span>
						귀하의 Data분석 또는 AI Project 관련 경험을 기입해주세요.
						<span className="importantBtn"><Image src={ImportantBtn} alt='important' className="impt-icon" /></span>
					</span>
				</p>
				<ProjectItem example />
			</div>
			<div className="survey-preview">
				<button className="ui button fix line">저장</button>
				<button className="ui button fix bg">제출</button>
			</div>
		</CubeDetailSec>
	);
};
export default CubeInfoDetail;
