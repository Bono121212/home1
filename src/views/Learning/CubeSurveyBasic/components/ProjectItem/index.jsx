import React from "react";
import { Image, Input } from "semantic-ui-react";
import DatePickerMonth from "../../../../../components/DatePickerMonth";

const ProjectItem = (props) => {
	return (
		<div className="survey-project-wrap">
			{props.example &&
				<div className="survey-example">
					<Image src="https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/img_survey_example01.png" alt="작성예시" />
				</div>
			}
			<div className="survey-project-group">
				{/* 제목그룹 */}
				<div className="survey-project-head">
					<div className="survey-project-col col-date">
						<strong className="survey-project-tit">시작</strong>
					</div>
					<div className="survey-project-col col-split"></div>
					<div className="survey-project-col col-date">
						<strong className="survey-project-tit">종료</strong>
					</div>
					<div className="survey-project-col col-value">
						<strong className="survey-project-tit">전체 기간</strong>
					</div>
					<div className="survey-project-col col-cont">
						<strong className="survey-project-tit">내용</strong>
					</div>
				</div>
				{/* 서식그룹 */}
				<div className="survey-project-item">
					<div className="survey-project-col col-date">
						<DatePickerMonth dataYear={2023} dataMonth={2} dataStrMonth="02" />
					</div>
					<div className="survey-project-col col-split">~</div>
					<div className="survey-project-col col-date">
						<DatePickerMonth dataYear={2023} dataMonth={3} dataStrMonth="03" />
					</div>
					<div className="survey-project-col col-value">
						<span className="survey-project-val">1개월</span>
					</div>
					<div className="survey-project-col col-cont">
						<Input placeholder="내용을 입력해주세요." value="3-1. CEO Ready 보고서" />
					</div>
					<div className="survey-project-col col-del">
						<button className="btn-del" disabled>삭제</button>
					</div>
				</div>
				<div className="survey-project-item">
					<div className="survey-project-col col-date">
						<DatePickerMonth dataYear={2023} dataMonth={2} dataStrMonth="02" />
					</div>
					<div className="survey-project-col col-split">~</div>
					<div className="survey-project-col col-date">
						<DatePickerMonth dataYear={2023} dataMonth={3} dataStrMonth="03" />
					</div>
					<div className="survey-project-col col-value">
						<span className="survey-project-val">1개월</span>
					</div>
					<div className="survey-project-col col-cont">
						<Input placeholder="내용을 입력해주세요." />
					</div>
					<div className="survey-project-col col-del">
						<button className="btn-del">삭제</button>
					</div>
				</div>
			</div>
			<div className="survey-project-add">
				<button className="btn-add">추가하기</button>
			</div>
		</div>
	);
}

export default ProjectItem;
