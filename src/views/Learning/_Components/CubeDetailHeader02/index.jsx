import classNames from "classnames";
import React, { useState } from "react";
import { Button, Icon, Label } from "semantic-ui-react";
import AddPlayListPopup from "../../../PlayList/PlayListPopup/AddPlayListPopup";

const CubeDetailHeader02 = (props) => {
	const [popup, setPopup] = useState();
	const Open = () => {setPopup(true);}

	const [bookmark, setBookmark] = useState(false);
    const BookmarkToggle = (e) => {
        setBookmark(!bookmark);
    }
	const handleOpenNote = () => {
		window.open("/suni-asset/public/design-pub/REACT/#/sample/note-sample-popup","Note Sample", "width=420, height=530, resizable=0, right=30")
	}

	return (
		<div className="cube-detail-header">
			<div className="inner">
				<div className="contents-header-v2">
					<div className="title-area">
						<div className="title">
							<h1>{props.title}</h1>
						</div>
						<div className="header-deatil-v2">
							<div className="left-area">
								<Label className="text"><em>{props.cube}</em></Label>
								{ (props.time !== "" && props.time !== undefined)&&
									<Label className="text"><em>{props.time}</em></Label>
								}
								{ (props.state !== "" && props.state !== undefined)&&
									<Label className={classNames("text",
										{"is-learn":(props.state === "학습전")},
										{"is-learning":(props.state === "학습중")},
										{"is-learned":(props.state === "학습완료")},
										{"is-learned" : (props.state === "불참")},
										{"is-learned" : (props.state === "미이수")}
									)}>
										<em>{props.state}</em>
									</Label>
								}
							</div>
						</div>
					</div>
					<div className="right-area">
						<div className="header-link">
							{props.children}
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
								<Button onClick={()=> handleOpenNote()} className="btn-link">
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
						{popup && <AddPlayListPopup/>}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CubeDetailHeader02;