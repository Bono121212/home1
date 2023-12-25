import React from "react";
import { Link } from "react-router-dom";
import { Icon, Button } from "semantic-ui-react";
// import NotSupported from "../../../../../images/all/btn-download.svg";

const BlendedSectionDocument = () => {
	return (
		<div className="blended blended-document">
			{/* Contents Header */}
			<div className="contents-header-v2">
				<div className="title-area">
					<div className="header">
						<h2>차세대 인터넷 웹 3.0 개념 총정리</h2>
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

			{/* Documents Area */}
			<div className="documents-area">
				{/* Documents Viewer */}
				<div className="documents-viewer">
					<div className="pdf-header">
						<i className="list24 icon"></i>
						<span className="pdf-header-title"><strong>2</strong> 개의 교육 자료가 있습니다.</span>
						<div className="pdf-header-select on">
							<Link className="pdf-select-text">
								전략 Intermediate 과정
								<i className="icon drop32-down"></i>
								<i className="icon drop32-up"></i>
							</Link>
							<div className="pdf-header-drop">
								<Link>전략 Intermediate 과정</Link>
								<Link>전략과 SV</Link>
							</div>
						</div>
					</div>

					{/*document load 참고용 제거*/}
					{/*</Document>*/}
					<div style={{"height":"634px"}}>
						{/* Document 영역 */}
					</div>
					{/* <div className="pdf-not-supported">
						<span className="not-supported-copy">Viewer에서 지원하지 않는 문서입니다.<br />문서를 다운로드하셔야 학습을 이어 하실 수 있습니다.</span>
						<Link className="btn-not-supported"><img src={NotSupported} alt="" /></Link>
					</div> */}

					<div className="pdf-control disable">
						<div className="pagination">
							<Link className="pdf-prev">이전</Link>
							<span className="num">1/40</span>
							<Link className="pdf-next">이후</Link>
						</div>
						<Link className="pdf-down on"><i aria-hidden="true" className="icon down-white24"></i></Link>
						<div className="pdf-bar"><span className="pdf-gauge" /></div>
					</div>

					{/* 학습 시작하기 */}
					{/* 활성화 토글클래스 - is_visible */}
					<div className="document-start is_visible">
						<div>
							<h3 className="title">학습 시작하기</h3>
							<p className="explain">
								아래 버튼을 클릭한 후, 학습을 시작해보세요.
							</p>
							<Button className="btn-learn">
								<Icon className="learn_play" />
								<span>학습하기</span>
							</Button>
						</div>
					</div>
					{/* //학습 시작하기 */}
				</div>
				{/* // Documents Viewer */}


			</div>
			{/* // Documents Area */}
		</div>
	);
};

export default BlendedSectionDocument;
