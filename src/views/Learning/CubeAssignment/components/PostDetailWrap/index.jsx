import React, { useState } from "react";
import PostDesc from "../PostDesc";

const PostDetailWrap = (props) => {
	const [like, setLike] = useState(true);

	return (
		<div className="post-detail-sec">
			<div className="post-header">
				<div className="prf-area">
					<span className="prf">
						<img src="https://image.mysuni.sk.com/suni-asset/public/images/all/pic_profile_default.png" alt="Profile Avata" />
					</span>
					{(props.myPost === "true") && <em className="mypost">나의 글</em>}
					<strong className="name">김써니</strong>
					<span className="company">SK 주식회사 C&amp;C</span>
				</div>
				<div className="title-area">
					<h2 className="post-title">
						{(props.pin === "true") && <span className="pin"><span className="blind">핀고정</span></span>}
						{(props.secret === "true") && <i className="ui icon secret"><span className="blind">비공개</span></i>}
						<strong>소비자 구매의사결정 과정 및 전략적 시사점 학습</strong>
						{(props.file === "true") && <span className="file"><span className="blind">첨부파일</span></span>}
					</h2>
				</div>
				<div className="info-area">
					<div className="info-left">
						<span className="date">2022.11.04</span>
						<span className="split"></span>
						<span className="count">조회 2,320</span>
					</div>
					<div className="info-right">
						<button type="button" className="btn-info pin">Pin 해제</button>
						<button type="button" className="btn-info edit">Edit</button>
						<button type="button" className="btn-info delete">Delete</button>
						<button type="button" className="btn-info list">List</button>
					</div>
				</div>
			</div>
			<div className="post-body">
				<PostDesc />

				<div className="define-sec">
					<h3 className="define-title">첨부파일</h3>
					<div className="define-down">
						<div className="define-inner">
							<div className="item">
								<button type="button" className="btn-down">TTC Digital플랫폼 특강 - 발표자료 1부.pdf</button>
							</div>
							<div className="item">
								<button type="button" className="btn-down">TTC Digital플랫폼 특강 - 발표자료 2부_별첨자료 포함.pdf</button>
							</div>
							<div className="item">
								<button type="button" className="btn-down">TTC Digital플랫폼 특강 - 발표자료 2부_별첨자료 포함 이름이 길어서 내려감.pptx</button>
							</div>
						</div>
					</div>
				</div>

				<div className="info-area">
					<div className="info-left">
						<button type="button" className={"btn-like"+(like === true ? " is-active":"")} onClick={()=>{setLike(!like)}}>
							<span className="blind">좋아요 수:</span>1,002
						</button>
						<span className="split"></span>
						<span className="comment"><span className="blind">코멘트 수:</span>109</span>
					</div>
					<div className="info-right">
						<button type="button" className="btn-info pin">Pin 해제</button>
						<button type="button" className="btn-info edit">Edit</button>
						<button type="button" className="btn-info delete">Delete</button>
						<button type="button" className="btn-info list">List</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default PostDetailWrap;
