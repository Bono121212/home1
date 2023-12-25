import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

const PostCard = (props) => {
	return (
		<div className={classNames("post-card", {"is-mypost":(props.myPost === "true")})}>
			{(props.pin === "true") && <span className="pin"><span className="blind">핀고정</span></span>}
			<div className="card-header">
				<button type="button" className="avata-area">
					<img src="http://placeimg.com/640/480/nature" alt="Profile Avata" />
				</button>
				<div className="prf-area">
					<p className="prf-name">
						<strong className="name">{props.name}</strong>
						{(props.myPost === "true") && <em className="mypost">나의 글</em>}
					</p>
					<p className="prf-company">
						{props.company}
					</p>
				</div>
			</div>
			<div className="card-body">
				<div className="title-area">
					<p className="title">
						<Link>
							{(props.file === "true") && <span className="file"><span className="blind">첨부파일</span></span>}
							{(props.secret === "true") && <i className="ui icon secret"><span className="blind">비공개</span></i>}
							{props.title}
						</Link>
					</p>
				</div>
				<div className="info-area">
					<span className="date">2022.09.29</span>
					<div className="info-list">
						<span className="info-item info-view">11</span>
						<span className="info-item info-comment">21</span>
						<span className="info-item info-like">0</span>
					</div>
				</div>
			</div>
		</div>
	);
}
export default PostCard;
