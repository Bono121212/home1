import React from "react";
import { Button } from "semantic-ui-react";
import CubeDetailSec from "../../../_Components/CubeDetailSec";

const WebEmbedContainer = (props) => {
	return (
		<CubeDetailSec className="cube-sec">
			{/* Case 단독큐브 제목 있음 */}
			{ props.title &&
				<>
					<div className="detail-sec-head type-cube-info">
						<h2 className="detail-sec-title">웹 3.0, 커뮤니티 크리에이터의 시대가 온다.</h2>
						<div className="detail-sec-info">
							<span className="ui label text">Webpage</span>
							<span className="ui label text">1h 40m</span>
							{/* <span className="ui label text primary">학습중</span> */}
							{/* <span className="ui label text done">학습완료</span> */}
						</div>
					</div>
					<div className="detail-sec-body">
						<p className="learning-desc">* 우측상단의 학습완료 버튼을 누르셔야 학습이 이수처리가 됩니다.</p>
						<div className="embed-wrap">
							<div className="embedded iframe-area s1024">
								<iframe src="https://www.skacademy.com/lsa/cont_root/dt_card/16.asp?p=FB7BDHy0o3b+421UwNZecCnpOK41mxDPh5BQYoIdDfTQTxO0IkakT3+rUboJX4mJ+36S2Pv5mzOU2DOkC5QE1A==" title="temp" width="100%" height="100%"/>
							</div>
							{/* <div className="embed-page">
								<Button icon className="pureup-off"><span className="blind">prev</span></Button>
								<Button className="dot on"><span className="blind">page</span></Button>
								<Button className="dot"><span className="blind">page</span></Button>
								<Button className="dot"><span className="blind">page</span></Button>
								<Button className="dot"><span className="blind">page</span></Button>
								<Button className="dot"><span className="blind">page</span></Button>
								<Button icon className="puredown-off on"><span className="blind">next</span></Button>
							</div> */}
						</div>
					</div>
				</>
			}
			{/* Case 유형큐브 제목 없음 */}
			{ !props.title &&
				<>
					<p className="learning-desc">* 우측상단의 학습완료 버튼을 누르셔야 학습이 이수처리가 됩니다.</p>
					<div className="embed-wrap">
						<div className="embedded iframe-area s1024">
							<iframe src="https://www.skacademy.com/lsa/cont_root/dt_card/16.asp?p=FB7BDHy0o3b+421UwNZecCnpOK41mxDPh5BQYoIdDfTQTxO0IkakT3+rUboJX4mJ+36S2Pv5mzOU2DOkC5QE1A==" title="temp" width="100%" height="100%"/>
						</div>
						<div className="embed-page">
							<Button icon className="pureup-off"><span className="blind">prev</span></Button>
							<Button className="dot on"><span className="blind">page</span></Button>
							<Button className="dot"><span className="blind">page</span></Button>
							<Button className="dot"><span className="blind">page</span></Button>
							<Button className="dot"><span className="blind">page</span></Button>
							<Button className="dot"><span className="blind">page</span></Button>
							<Button icon className="puredown-off on"><span className="blind">next</span></Button>
						</div>
					</div>
				</>
			}
		</CubeDetailSec>
	);
};
export default WebEmbedContainer;
