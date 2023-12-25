import React from "react";
import { Link } from "react-router-dom";
import { Icon, Button } from "semantic-ui-react";

const BlendedSectionWebpage = () => {
	return (
		<>
			<div className="blended blended-webpage">
				{/* Contents Header */}
				<div className="contents-header-v2">
					<div className="title-area">
						<div className="header">
							<h2>메타버스&middot;웹3.0 시대의 새로운 고객 경험</h2>
							{/* 학습전 l-step0, 학습중 l-step1~10, 학습완료 complete (10% 단위) */}
							<span class="label-state-cube l-step8"><span>cube 학습중</span></span>
						</div>
					</div>
					<div className="right-area">
						<div className="header-link">
							<Button className="btn-link">
								<Icon className="ask"></Icon>
								<span className="blind">학습노트</span>
							</Button>
						</div>
					</div>
				</div>
				{/* // Contents Header */}

				{/* Webpage Area */}
				<div className="webpage-area">
					<div className="embedded-wrap">
						{/* Embedded Sample - https://stg.mysuni.sk.com/suni-main/lecture/card/CARD-13xb/cube/CUBE-hju/view/WebPage */}
						<div class="embedded iframe-area" style={{"height": "780px"}}>
							<iframe src="https://www.skacademy.com/lsa/cont_root/dt_card/15.asp?p=mR52GLZYWt0k0vt8DwII5ynpOK41mxDPh5BQYoIdDfTQTxO0IkakT3+rUboJX4mJ/1FnuXEkI+hVkT8ApEnrdA==" allowfullscreen="" title={` `}></iframe>
						</div>
						{/* // Embedded */}
					</div>
				</div>
				{/* // Webpage Area */}
			</div>

			<div className="blended blended-webpage">
				{/* Contents Header */}
				<div className="contents-header-v2">
					<div className="title-area">
						<div className="header">
							<h2>교육에 참여하며 수익을 나누는 웹 3.0시대의 교육</h2>
							{/* 학습전 l-step0, 학습중 l-step1~10, 학습완료 complete (10% 단위) */}
							<span class="label-state-cube l-step0"><span>cube 학습전</span></span>
						</div>
					</div>
					<div className="right-area">
						<div className="header-link">
							<Button className="btn-link">
								<Icon className="ask"></Icon>
								<span className="blind">학습노트</span>
							</Button>
						</div>
					</div>
				</div>
				{/* // Contents Header */}

				{/* Webpage Area */}
				<div className="learning-link-area">
					<Link to="/" className="learning-link">
						<div className="link-thumb">
							<img src={`https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/webpage_default_img.png`} alt="" />
						</div>
						<div className="link-detail">
							<p className="link-title"><strong>Gloria Chan Packer: Work is not your family</strong></p>
							<p className="link-desc"><span>3줄 들어갑니다. 3줄 들어갑니다 3줄들어갑니다 3줄들어갑니다.You may need to hear this (if you haven't already): your job is not your family. While you can develop meaningful relationships with your colleagues, calling work your family can actually breed burnout and be detrimental to your mental and emotional health. Mental wellness...</span></p>
							<p className="link-adr"><span>https://miro.com</span></p>{/* 메인 도메인만 표시 */}
						</div>
						<div className="link-util">
							<Icon className="pureleft_off"><span className="blind">link이동</span></Icon>
						</div>
					</Link>
				</div>
				{/* // Webpage Area */}
			</div>

			<div className="blended blended-webpage">
				{/* Contents Header */}
				<div className="contents-header-v2">
					<div className="title-area">
						<div className="header">
							<h2>교육에 참여하며 수익을 나누는 웹 3.0시대의 교육</h2>
							{/* 학습전 l-step0, 학습중 l-step1~10, 학습완료 complete (10% 단위) */}
							<span class="label-state-cube complete"><span>cube 학습전</span></span>
						</div>
					</div>
					<div className="right-area">
						<div className="header-link">
							<Button className="btn-link">
								<Icon className="ask"></Icon>
								<span className="blind">학습노트</span>
							</Button>
						</div>
					</div>
				</div>
				{/* // Contents Header */}

				{/* Webpage Area */}
				<div className="learning-link-area">
					<Link to="/" className="learning-link">
						<div className="link-thumb">
							<img src={`https://image.mysuni.sk.com/suni-asset/public/images/all/cube-v2/webpage_default_img.png`} alt="" />
						</div>
						<div className="link-detail">
							<p className="link-title"><strong>Gloria Chan Packer: Work is not your family</strong></p>
							<p className="link-desc"><span>3줄 들어갑니다. 3줄 들어갑니다 3줄들어갑니다 3줄들어갑니다.You may need to hear this (if you haven't already): your job is not your family. While you can develop meaningful relationships with your colleagues, calling work your family can actually breed burnout and be detrimental to your mental and emotional health. Mental wellness...</span></p>
							<p className="link-adr"><span>https://miro.com</span></p>{/* 메인 도메인만 표시 */}
						</div>
						<div className="link-util">
							<Icon className="pureleft_off"><span className="blind">link이동</span></Icon>
						</div>
					</Link>
					{/* 학습 시작하기 */}
					{/* 활성화 토글클래스 - is_visible */}
					<div className="webpage-start is_visible">
						<div>
							<Button className="btn-learn">
								<Icon className="learn_comp" />
								<span>학습완료</span>
							</Button>
						</div>
					</div>
					{/* //학습 시작하기 */}
				</div>
				{/* // Webpage Area */}
			</div>

		</>
	);
};

export default BlendedSectionWebpage;
