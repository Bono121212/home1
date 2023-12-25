import React from "react";
import ConditionsDescWrap from "../ConditionsDescWrap";
import ConditionsNotice from "../ConditionsNotice";

const ConditionsDetailPost = (props) => {
	return (
		<div className="conditions-detail-wrap type-post">
			<div className="course-header">
				{ (props.conditionType === "static")
					? <p className="conditions-guide">본 과정은 조건 수행 시 수동으로 이수 처리됩니다.</p>
					: <p className="conditions-guide">본 과정은 조건 수행 시 자동으로 이수 처리됩니다.</p>
				}
				{/* {(!props.nodata) && } */}
				<div className="post-state">
					{/* 수동이수인 경우 숨김 */}
					{props.conditionType !== "static" &&
					<div className="label-area">
						<div className="label-item label-list">
							<strong className="tit">게시글</strong>
							<span className="count">0건</span>/<span className="total">{(!props.nodata) ? "3" : "0" }건</span>
						</div>
						<div className="split"></div>
						<div className="label-item label-reply">
							<strong className="tit">댓글</strong>
							<span className="count">0건</span>/<span className="total">{(!props.nodata) ? "3" : "0" }건</span>
						</div>
					</div>
					}

					{/* 단독큐브 제외하고 노출함 */}
					{!props.single &&
						<div className="btn-area">
							<button type="button" className="ui button btn-task">게시글 작성하기</button>
						</div>
					}
				</div>
			</div>
			<div className="course-body">
				{/* 이수조건이 있는 경우 */}
				{(props.conditionData !== "none") &&
					<div className="conditions-guide-desc">
						<p>필요한 모든 과목을 학습하였을 경우, 담당자가 최종 확인 후 이수 처리해 드릴 예정입니다.</p>
					</div>
				}
				<ConditionsDescWrap />
				<ConditionsNotice />
			</div>
        </div>
	);
}
export default ConditionsDetailPost;
