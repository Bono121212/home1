import React from "react";
const InfoStat = () => {
	return (
		<div className="box info-stat">
			<div className="box-head">
				<h3 className="box-title">이수조건</h3>
			</div>
			<div className="box-body">
				<div className="stat-item">
					<span className="stat-label">
						<i aria-hidden="true" className="icon stat-comment"></i>
						<strong className="tit">My Comment</strong>
					</span>
					<span className="stat-count">
						<em className="count">12건</em>
						<span className="split">/</span>
						<span className="total">10건</span>
					</span>
				</div>
				<div className="stat-item">
					<span className="stat-label">
						<i aria-hidden="true" className="icon stat-comment-reply"></i>
						<strong className="tit">My Comment Reply</strong>
					</span>
					<span className="stat-count">
						<em className="count">2건</em>
						<span className="split">/</span>
						<span className="total">5건</span>
					</span>
				</div>
			</div>
		</div>
	);
};
export default InfoStat;
