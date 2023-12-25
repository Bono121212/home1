import React from "react";
import CubeDetailSec from "../../../_Components/CubeDetailSec";
import TestRadio01 from "../TestRadio01";
import ContentsCheckbox01 from "../ContentsCheckbox01";
import TestRadio03 from "../TestRadio03";
import TestRadio04 from "../TestRadio04";
import TextareaBox01 from "../TextareaBox01";
import ClearInputBox from "../ClearInputBox";
import ClearInputBox02 from "../ClearInputBox02";

const CubeInfoDetail = () => {
	return (
		<CubeDetailSec className="cube-sec cube-survey-sec">
			<div className="survey-header">
				<h1 className="survey-header-left">
					Data로 생각하는 인재되기 (16가지 역량)
				</h1>
				{/* <div className="survey-header-right"> */}
					{/* complete - 진행완료 , submit - 진행전, proceeding - 진행중 */}
					{/* <button class="ui button free submit p18">과제제출</button> */}
					{/* <button class="ui button free proceeding p18">미이수</button> */}
					{/* <button class="ui button free complete p18">참여완료</button> */}
				{/* </div> */}
				<div className="test-text">
					<div className="test-text-box">
						<span>이수기준</span>
						<span>7점</span>
					</div>
					<div className="test-text-box">
						<span>총점</span>
						<span>10점</span>
					</div>
				</div>
			</div>

			{/* 맞았을 때 correct 클래스 추가 */}
			<div className="course-radio-survey">
				<p>
					<span>1</span>두려움을 느끼게 될 때 생기는 일이라 하기 어려운
					것은? (10점)
				</p>
				<TestRadio01 />
			</div>
			{/* 틀렸을 때 wrong 클래스 추가 */}
			<div className="course-radio-survey">
				<p>
					<span>2</span>
					<span className="copy">
						편도체가 기능을 상실하면 어떠한 일이 벌어지는지 모두 고르세요. (10점)
					</span>
				</p>
				<ContentsCheckbox01 />
			</div>
			<div className="course-radio-survey survey-radio-img">
				<p>
					<span>3</span>
					<span className="copy">아래의 그림을 보고 누락된 형태를 선택하세요. (10점)</span>
				</p>
				<img src="https://image.mysuni.sk.com/suni-asset/public/images/all/img.png" alt="" />
				<TestRadio03 />
			</div>
			<div className="course-radio-survey survey-text">
				<p>
					<span>4</span>다음 중 실시 설계 시 배관이 기계로부터 받아야
					하는 Information 은 무엇인가요? (10점)
				</p>

				<ClearInputBox />
			</div>

			<div className="course-radio-survey course-pop survey-radio-img">
				<p>
					<span>5</span>마음근력훈련은 어느장소에서 하는 것이 가장
					효과적인가요? (10점)
				</p>
				<TestRadio04 />
			</div>

			<div className="course-radio-survey survey-text">
				<p>
					<span>6</span>단답형 Input Case (10점)
				</p>

				{/* .right-top-count (우측 상단 카운팅) 추가 */}
				<ClearInputBox02 />
			</div>

			<div className="course-radio-survey survey-text">
				<p>
					<span>7</span>서술형 Textarea Case (10점)
				</p>

				{/* .right-top-count (우측 상단 카운팅) 추가 */}
				<TextareaBox01 />
			</div>

			<div class="survey-preview">
				<button class="ui button fix line">저장</button>
				<button class="ui button fix bg">제출</button>
			</div>
		</CubeDetailSec>
	);
};

export default CubeInfoDetail;
