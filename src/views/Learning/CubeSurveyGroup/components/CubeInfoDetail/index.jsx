import React from "react";
import { Image } from "semantic-ui-react";
import ImportantBtn from '../../../../../images/all/survey-important.png';
import ClearInputBox02 from "../../../CubeSurveyBasic/components/ClearInputBox02";
import CountRadio03 from "../../../CubeSurveyBasic/components/CountRadio03";
import CountRadio04 from "../../../CubeSurveyBasic/components/CountRadio04";
import IconRadio01 from "../../../CubeSurveyBasic/components/IconRadio01";
import IconRadio03 from "../../../CubeSurveyBasic/components/IconRadio02";
import IconRadio02 from "../../../CubeSurveyBasic/components/IconRadio03";
import ImageZoom from "../../../CubeSurveyBasic/components/ImageZoom";
import ProjectItem from "../../../CubeSurveyBasic/components/ProjectItem";
import TextRadio01 from "../../../CubeSurveyBasic/components/TextRadio01";
import CubeDetailSec from "../../../_Components/CubeDetailSec";
const CubeInfoDetail = () => {
	return (
		<CubeDetailSec className="cube-sec cube-survey-sec">
			<div className="survey-header">
				<h1 className="survey-header-left">
					[마케팅 Essential ②] B2B2C 마케팅 101
				</h1>
			</div>
			<div className="course-title-survey">
				<h2 className="title">1번부터 2번까지는 이번 학습과정을 학습하기 전과 후를 비교하는 질문입니다.</h2>
				<p className="explain">
					아무쪼록 학습을 하며 느낀 솔직한 답변 항목에 체크를 부탁드립니다. <br />
					체크해 주신 내용은 추후 테스트 문항 구성에 도움이 됩니다.
				</p>
				<ImageZoom src="http://placeimg.com/1500/600/nature" />
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

			<div className="course-title-survey">
				<h2 className="title">4번부터 5번까지는 학습과정 자체에 대한 항목들입니다.</h2>
			</div>
			<div className="course-radio-survey survey-text">
				<p>
					<span>4</span>
					<span>
						중 실시 설계 시 배관이 기계로부터 받아야 하는 Information 은 무엇인가요? (10점)
						<span className="importantBtn"><Image src={ImportantBtn} alt='important' className="impt-icon" /></span>
					</span>
				</p>
				<TextRadio01 />
			</div>
			<hr className="course-line-survey" />
			<div className="course-radio-survey">
				<p>
					<span>5</span>
					<span>
						두려움을 느끼게 될 때 생기는 일이라 하기 어려운 것은?
					</span>
				</p>
				<ImageZoom src="http://placeimg.com/1500/600/nature" />
				<ClearInputBox02 />
			</div>
			<div className="course-radio-survey">
				<p>
					<span>6</span>
					<span>
						해당 설문이 도움이 되었다고 생각하시나요?
						<span className="importantBtn"><Image src={ImportantBtn} alt='important' className="impt-icon" /></span>
					</span>
				</p>
				<ImageZoom src="http://placeimg.com/400/200/nature" />
				<CountRadio03 />
			</div>
			<div className="course-radio-survey has-line">
				<p>
					<span>7</span>
					<span>
						해당 설문이 도움이 되었다고 생각하시나요?
						<span className="importantBtn"><Image src={ImportantBtn} alt='important' className="impt-icon" /></span>
					</span>
				</p>
				<CountRadio04 />
			</div>

			<div className="course-title-survey">
				<p className="explain">
					아래 설문 문항을 읽고 <br /> 해당되는 기간을 입력해주세요.
				</p>
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
