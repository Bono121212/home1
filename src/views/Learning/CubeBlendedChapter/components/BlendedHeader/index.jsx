import React, { useState } from "react";
import { Button, Icon, Label } from "semantic-ui-react";

const BlendedHeader = () => {
	const [bookmark, setBookmark] = useState(false);
    const BookmarkToggle = (e) => {
        setBookmark(!bookmark);
    }
	return (
		<>
			<div className="contents-header-v2">
				<div className="title-area">
					<div className="header">
						<h1>반도체 클라쓰 - Keyword로 알아보는 반도체의 품격</h1>
					</div>
					<div className="explain">
						<p>
							본 Collection 강의는 여러 개의 강의를 한 화면에서 제공하는 과정입니다. <br />
							화면 이동없이 간편하게 학습해보세요! 하단의 게이지를 채워야 학습 이수처리가 됩니다.
						</p>
					</div>
				</div>
				<div className="right-area">
					<div className="header-link">
						<Button className={"btn-link" + (bookmark? ' on': ' off')} onClick={BookmarkToggle}>
							<Icon className="bookmark"></Icon>
							<span className="blind">찜한과정</span>
						</Button>
						<Button className="btn-link">
							<Icon className="share"></Icon>
							<span className="blind">공유하기</span>
						</Button>
					</div>
				</div>
			</div>
			<div className="contents-step-v2">
				<div className="header-deatil-v2">
					<Label className="text">
						<span className="step-count">
							<span className="count">6</span>
							<span className="split">/</span>
							<span className="total">8</span>
						</span>
						<em>학습완료</em>
					</Label>
					<Label className="text">
						<em>1h 38m</em>
					</Label>
				</div>
				<div className="step-bar">
					{/* width: calc((100%/total)*count) */}
					<div className="step-bar-active" style={{"width":"calc((100%/12)*9)"}}>
						<span className="blind">25%</span>
					</div>
					{/* 스텝 개수만큼 생성 */}
					<i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
				</div>
			</div>
		</>
	);
};

export default BlendedHeader;
