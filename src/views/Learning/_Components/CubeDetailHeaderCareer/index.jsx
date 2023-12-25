import React, { useState } from "react";
import { Button, Icon, Label } from "semantic-ui-react";
import AddPlayListPopup from "../../../PlayList/PlayListPopup/AddPlayListPopup";
import SkillTag from "../../../../components/SkillTag";

const CubeDetailHeader = (props) => {
	const [popup, setPopup] = useState();
	const Open = () => {setPopup(true);}

	const [bookmark, setBookmark] = useState(false);
    const BookmarkToggle = (e) => {
        setBookmark(!bookmark);
    }

	const [alim, setAlim] = useState(false);
    const AlimToggle = (e) => {
        setAlim(!alim);
    }

	const handleOpenNote = () => {
		window.open("/suni-asset/public/design-pub/REACT/#/sample/note-sample-popup","Note Sample", "width=420, height=530, resizable=0, right=30")
	}

	return (
		<div className="cube-detail-header">
			{props.backgroundImage &&
				<div className="underlay">
					<div className="underlay-image"><img src={props.backgroundImage} alt="" /></div>
					<div className="underlay-color" style={{backgroundColor: props.backgroundColor}}></div>
				</div>
			}
			<div className="inner">
				<div className="contents-header-v2">
					<div className="title-area">
						<div className="title">
							<h1>
								{props.title}
							</h1>
						</div>
						<div className="header-deatil-v2">
							<div className="left-area">
								<Label className="text"><em>{props.type}</em></Label>
								<Label className="text"><em>{props.time}</em></Label>
								<Label className="text"><em>{props.value}</em></Label>
								<Label className="text"><span className="bold">담당자</span><em>{props.name}</em></Label>
							</div>
						</div>
						{/* 2023-10 태그 항목 추가 */}
						<div className="skill-area">
							<div className="tit">Skill</div>
							<SkillTag styleClass='no-graph' />
						</div>
					</div>
					<div className="right-area">
						<div className="header-link">
							{ props.hasAlim === "true" &&
								<Button className={"btn-link" + (alim? ' on': ' off')} onClick={AlimToggle}>
									<Icon className="alim"></Icon>
									<span className="blind">라이브알림</span>
								</Button>
							}
							{ props.hasBookmark === "true" &&
								<Button className={"btn-link" + (bookmark? ' on': ' off')} onClick={BookmarkToggle}>
									<Icon className="bookmark"></Icon>
									<span className="blind">찜하기</span>
								</Button>
							}
							{ props.hasPlaylist === "true" &&
								<Button className="btn-link" onClick={Open}>
									<Icon className="playlist"></Icon>
									<span className="blind">플레이리스트</span>
								</Button>
							}
							{ props.hasNote === "true" &&
								<Button
									onClick={()=> handleOpenNote() }
									className="btn-link">
									<Icon className="note"></Icon>
									<span className="blind">학습노트</span>
								</Button>
							}
							{ props.hasShare === "true" &&
								<Button className="btn-link">
									<Icon className="share"></Icon>
									<span className="blind">공유하기</span>
								</Button>
							}
						</div>
						{props.children}
						{popup && <AddPlayListPopup/>}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CubeDetailHeader;
